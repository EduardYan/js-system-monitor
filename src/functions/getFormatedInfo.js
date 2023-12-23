import getInfo from './getInfo.js'
import validate from './validate.js'

function getFormatedInfo () {
  const allInfo = getInfo()

  // formatting the object to show
  const allFormatedInfo = {
    machine: allInfo.machine,
    arch: allInfo.arch,
    platform: validate(allInfo.platform),
    versionOs: allInfo.versionOs,
    release: allInfo.release,
    hostname: allInfo.hostname,
    cpus: {
      nucles: allInfo.cpus.length,
      name: allInfo.cpus[0].model,
      speed: allInfo.cpus[1].speed
    },
    ramMemory: allInfo.totalmem / 1e6,
    freeRamMemory: allInfo.freemem / 1e6,
    userName: allInfo.userName,
    allDateAndTime: `${allInfo.dateAndTimeCurrent.date}   ${allInfo.dateAndTimeCurrent.time}`
  }
  return allFormatedInfo
}

export default getFormatedInfo
