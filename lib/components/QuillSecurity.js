import React, { useRef, useEffect, useCallback } from 'react';
import Quill from 'quill';
import { confirmAlert } from 'react-confirm-alert';
import store from '../services/store';
import {
  cacheModes,
  themes,
  defaultInterval,
  defaultUuid,
  defaultAutoRecover,
  defaultToolbar,
} from '../services/settings';

import 'react-confirm-alert/src/react-confirm-alert.css';
import 'quill/dist/quill.snow.css';
import 'quill/dist/quill.bubble.css';
import '../assets/style.css';

export default function QuillSecurity(props) {

  const intervalIndex = useRef(0);
  const textChange = useRef(false);
  const theme = useRef(props.theme || themes.SNOW);
  const toolbar = useRef(props.toolbar || defaultToolbar);

  const value = useRef(props.value || null);
  const onChange = useRef(props.onChange || null);

  const quill = useRef();
  const cache = useRef({
    uuid: props.cache?.uuid ?? defaultUuid,
    mode: props.cache?.mode ?? cacheModes.NO_CACHE,
    interval: Math.max(
      0, 
      parseInt(
        isNaN(props.cache?.interval) ? defaultInterval : props.cache?.interval,
        10
      )
    ),
    autoRecover: props.cache?.autoRecover ?? defaultAutoRecover,
    get: async () => {
      return store.get(cache.current.uuid);
    },
    set: async () => {
      await store.set(cache.current.uuid, {
        mode: cache.current.mode,
        contents: quill.current.getContents(),
      });
    },
    del: async () => {
      await store.del(cache.current.uuid);
    },
    clear: async () => {
      await store.clear();
    },
    getMode: async () => {
      const cached = await store.get(cache.current.uuid);
      return cached.mode;
    },
    getContents: async () => {
      const cached = await store.get(cache.current.uuid);
      return cached.contents;
    },
  });
  const quillSetup = useRef(props.quillSetup);
  const quillReady = useRef(props.quillReady);

  const recoverCache = async cached => {
    if (!cached?.mode) {
      return false;
    }
    if (!cached.contents?.ops || cached.contents.ops.length === 0) {
      return false;
    }
    if (!cached.contents.ops[0]?.insert?.trim()) {
      return false;
    }
    const storagecacheLevel = Number(sessionStorage.getItem(`quillCacheMode-${cache.current.uuid}`));
    if (cached.mode === cacheModes.ALWAYS_KEEP_CACHE) {
      return true;
    }
    if (cached.mode === cacheModes.REFRESH_CLEAR_CACHE) {
      return true;
    }
    if (cached.mode === cacheModes.CLOSE_CLEAR_CACHE) {
      if (storagecacheLevel === cacheModes.CLOSE_CLEAR_CACHE) {
        return true;
      } else {
        await cache.current.del();
        return false;
      }
    }
    return false;
  };

  const startCache = () => {
    if (cache.current.mode > cacheModes.NO_CACHE && cache.current.interval > 0) {
      intervalIndex.current = setInterval(async () => {
        if (textChange.current) {
          textChange.current = false;
          await cache.current.set();
        }
      }, cache.current.interval * 1000);
    }
  };

  const clearCache = async e => {
    e.preventDefault();
    if (cache.current.mode < cacheModes.CLOSE_CLEAR_CACHE) {
      await cache.current.del();
    }
  };

  const initialize = useCallback(async () => {
    if (!Boolean(quill.current)) {
      if ('function' === typeof quillSetup.current) {
        quillSetup.current(Quill);
      }
      quill.current = new Quill(`#quill-editor-${cache.current.uuid}`, {
        modules: {
          toolbar: toolbar.current,
        },
        theme: theme.current,
      });
      if (Boolean(value.current)) {
        quill.current.setContents(value.current);
      }
      quill.current.on('text-change', async () => {
        textChange.current = true;
        if ('function' === typeof onChange.current) {
          const contents = quill.current.getContents();
          onChange.current(contents);
        }
        if (cache.current.interval === 0) {
          await cache.current.set();
        }
      });
      if ('function' === typeof quillReady.current) {
        const quillToolbar = quill.current.getModule('toolbar');
        quillReady.current(quill.current, cache.current, quillToolbar);
      }
      const cached = await cache.current.get();
      if (await recoverCache(cached)) {
        if (cache.current.autoRecover) {
          quill.current.setContents(cached.contents);
          startCache();
        } else {
          confirmAlert({
            message: 'Are you sure to recover editor contents?',
            buttons: [
              {
                label: 'Yes',
                onClick: () => {
                  quill.current.setContents(cached.contents);
                  startCache();
                }
              },
              {
                label: 'No, clear it!',
                onClick: async () => {
                  await cache.current.del();
                  startCache();
                }
              }
            ],
            closeOnClickOutside: false,
            overlayClassName: 'react-quill-security-confirm',
          });
        }
      } else {
        startCache();
      }
      sessionStorage.setItem(`quillCacheMode-${cache.current.uuid}`, cache.current.mode);
    }
  }, []);

  useEffect(() => {
    initialize();
    window.addEventListener('beforeunload', clearCache);
    return () => {
      clearInterval(intervalIndex.current);
      window.removeEventListener('beforeunload', clearCache);
    };
  }, [initialize]);

  return  <div id={`quill-editor-${cache.current.uuid}`}></div>;
}
