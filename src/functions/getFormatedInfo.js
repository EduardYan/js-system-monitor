import getInfo from "./getInfo.js";
import validate from "./validate.js";

function getFormatedInfo() {
  const allInfo = getInfo();

  // formatting the object to show
  return {
    machine: allInfo.machine,
    arch: allInfo.arch,
    platform: validate(allInfo.platform),
    versionOs: allInfo.versionOs,
    release: allInfo.release,
    hostname: allInfo.hostname,
    cpus: `${allInfo.cpus.length} ${allInfo.cpus[0].model} ${allInfo.cpus[1].speed}`,
    ramMemory: (allInfo.totalmem / 1024 ** 3).toFixed(2),

    freeRamMemory: (allInfo.freemem / 1024 ** 3).toFixed(2),
    userName: allInfo.userName,
    allDateAndTime: `${allInfo.dateAndTimeCurrent.date}   ${allInfo.dateAndTimeCurrent.time}`,
  };
}

export default getFormatedInfo;
