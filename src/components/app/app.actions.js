/**
 * Setting active section of Fullpage.js
 * @param  {String} key - key of the section
 * @return {Object}
 */
const setActiveSection = (key) => {
  return {
    type: 'APP_SET_ACTIVE_SECTION',
    key
  }
}

export { setActiveSection }