import chalk from "chalk";

/**
 *
 * @param {System} system The system object for show it information
 */
function showInfo(system) {
  console.log();
  console.log(
    chalk.bold.blue(`
      JS SYSTEM MONITOR
  `),
  );

  console.table({
    Machine: system.info.machine,
    Arch: system.info.arch,
    Platform: system.info.platform,
    "OS Version": system.info.versionOs,
    Release: system.info.release,
    Hostname: system.info.hostname,
    Username: system.info.userName,

    CPUs: system.info.cpus,
    "RAM Memory": `${system.info.ramMemory} GB`,
    "Free RAM Memory": `${system.info.freeRamMemory} GB`,
    "Date and Time": `${system.info.allDateAndTime}`,
  });

  console.log();
}

export default showInfo;
