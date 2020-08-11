const url_parse = (path = window.location.search) => {
  const PAGE_REF = path.substring(1);
  const DECODE_REF = decodeURIComponent(PAGE_REF);
  
  const REF_DICT = {};
  const REF_LIST = DECODE_REF.split('&');

  for (let index = 0, len = REF_LIST.length; index < len; index++) {
    const [KEY, VALUE] = REF_LIST[index].split('=');
    let new_list = [];

    if(REF_DICT.hasOwnProperty(KEY)) {
      new_list = REF_DICT[KEY]
    }

    new_list.push(VALUE);
    REF_DICT[KEY] = new_list;
  }

  const get = (key) => {
    if (!key) return false 
    return REF_DICT.hasOwnProperty(key) ? REF_DICT[key][0] : false; 
  }

  const getAll = (key) => {
    if (!key) return [];
    return REF_DICT.hasOwnProperty(key) ? REF_DICT[key] : [];
  }

  const getAllKeys = () => REF_DICT;

  const getURL = () => PAGE_REF;

  return {
    get,
    getAll,
    getAllKeys,
    getURL
  }
}

module.exports = url_parse
