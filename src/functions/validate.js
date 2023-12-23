/**
 * This module have functions for
 * validate some information to show
 */

/**
 *
 * @param {string} value The value of os module for validate
 * @returns Return a string "Windows", "GNU/Linux" or "Mac OS"
 */
function validateTypeSystem (value) {
  // validating the value for return the type system
  if (value === 'win32') {
    return 'Windows'
  } else if (value === 'linux') {
    return 'GNU/Linux'
  } else if (value === 'darwin') {
    return 'Mac OS'
  } else {
    return 'Other type of system'
  }
}

export default validateTypeSystem
