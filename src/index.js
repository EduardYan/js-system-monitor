/**
 * This is the principal file for
 * execute the SYSTEM MONITOR.
 */

import System from './class/System.js'
import showInfo from './functions/showInfo.js'
import getFormatedInfo from './functions/getFormatedInfo.js'

function init () {
  const mySystem = new System(getFormatedInfo())
  showInfo(mySystem)
}

init()
