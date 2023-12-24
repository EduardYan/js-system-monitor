import os from "node:os";

function getInfoSystem() {
  const cpus = os.cpus();
  const arch = os.arch();
  const freemem = os.freemem();
  const hostname = os.hostname();
  const homedir = os.homedir();
  const networkInterfaces = os.networkInterfaces();
  const platform = os.platform();
  const release = os.release();
  const tmpdir = os.tmpdir();
  const totalmem = os.totalmem();
  const typeOs = os.type();
  const userName = os.userInfo().username;
  const versionOs = os.version();
  const machine = os.machine();

  const date = new Date();
  const dateAndTimeCurrent = {
    date: `${date.getFullYear()}/${date.getMonth()}/${date.getDay()}`,
    time: `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`,
  };

  return {
    arch,
    cpus,
    freemem,
    hostname,
    homedir,
    networkInterfaces,
    platform,
    release,
    tmpdir,
    totalmem,
    typeOs,
    userName,
    versionOs,
    machine,
    dateAndTimeCurrent,
  };
}

export default getInfoSystem;
