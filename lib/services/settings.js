export const themes = {
  SNOW:     'snow',
  BUBBLE:   'bubble',
};

export const cacheModes = {
  NO_CACHE:             0,
  REFRESH_CLEAR_CACHE:  1,
  CLOSE_CLEAR_CACHE:    2,
  ALWAYS_KEEP_CACHE:    3,
};

export const defaultUuid = '0'.repeat(32);
export const defaultInterval = 5;
export const defaultAutoRecover = false;
export const defaultToolbar = [
  [{ 'font': [] }],
  ['bold', 'italic', 'underline', 'strike'],
  [{ 'indent': '-1'}, { 'indent': '+1' }, { 'direction': 'rtl' }, { 'align': [] }],
  [{ 'list': 'ordered'}, { 'list': 'bullet' }],
  [{ 'color': [] }, { 'background': [] }],
  [{ 'header': 1 }, { 'header': 2 }],
  [{ 'size': ['small', false, 'large', 'huge'] }, { 'header': [1, 2, 3, 4, 5, 6, false] }],
  ['link', 'image', 'video'],
  ['blockquote', 'code-block'],
  [{ 'script': 'sub'}, { 'script': 'super' }],
  ['clean']
];
