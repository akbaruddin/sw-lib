/**
 * Add Class
 * @param {Object} element - DOM Element
 * @param {String} name - class name
 */
const addClass = (element, name) => {
  if (!hasClass(element, name)) {
    element.className += " " + name;
  }
}

/**
 * Remove Class
 * @param {Object} element - DOM Element
 * @param {String} name - class name
 */
const removeClass = (element, name) => {
  element.className = element.className.replace(new RegExp('(\\s|^)' + name + '(\\s|$)'), '')
}

/**
 * Has Class
 * @param {Object} element - DOM Element
 * @param {String} name - class name
 * @return {Boolean} return true or false
 */
const hasClass = (element, name) => {
  var arr = element.className.split(" ");
  return arr.indexOf(name) == -1 ? false : true;
}

/**
 * toggle Class
 * @param {Object} element - DOM Element
 * @param {String} name - class name
 */
function toggleClass(element, name) {
  if(hasClass(element, name)) {
    removeClass(element, name)
  } else {
    addClass(element, name)
  }
}

module.exports = {
  addClass,
  removeClass,
  hasClass,
  toggleClass
};
