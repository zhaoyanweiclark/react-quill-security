import { createStore, get as getData, set as setData, del as delData, clear as clearData } from 'idb-keyval';

const objectStore = createStore('react-quill-security-db', 'react-quill-security-store');

const store = {
  get: key => getData(key, objectStore),
  set: (key, value) => setData(key, value, objectStore),
  del: key => delData(key, objectStore),
  clear: () => clearData(objectStore),
};

export default store;
