const stored = {
  set: function(params, value) {
    if ("localStorage" in window) {
      localStorage.setItem(params, value);
    } else if ("sessionStorage" in window) {
      sessionStorage.setItem(params, value);
    } else {
      window[params] = value;
    }
  },

  get: function(params) {
    if ("localStorage" in window) {
      return localStorage.getItem(params);
    } else if ("sessionStorage" in window) {
      return sessionStorage.getItem(params);
    } else {
      return window[params];
    }
  }
}

module.exports = stored;
