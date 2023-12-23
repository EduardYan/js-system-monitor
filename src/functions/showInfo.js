import chalk from 'chalk'

/**
 *
 * @param {System} system The system object for show it information
 */
function showInfo (system) {
  console.log()
  console.log(
    chalk.bold.blue(`
      SYSTEM INFORMATION PROGRAM
  `)
  )

  console.log(`
      ${chalk.bold.green('MACHINE - ')}${chalk.yellow(system.info.machine)}
      ${chalk.bold.green('ARCH - ')}${chalk.yellow(system.info.arch)}
      ${chalk.bold.green('PLATFORM - ')} ${chalk.yellow(system.info.platform)}
      ${chalk.bold.green('SYSTEM VERSION - ')} ${chalk.yellow(
    system.info.versionOs
  )}
      ${chalk.bold.green('RELEASE - ')} ${chalk.yellow(system.info.release)}
      ${chalk.blue('----------------------------------------')}
      ${chalk.bold.green('HOSTNAME - ')} ${chalk.yellow(system.info.hostname)}
      ${chalk.bold.green('USERNAME ACTUALLY - ')} ${chalk.yellow(
    system.info.userName
  )}
      ${chalk.bold.green('DATE AND TIME - ')} ${chalk.yellow(
    system.info.allDateAndTime
  )}chalk.
 
      ${chalk.blue('----------------------------------------')}
      ${chalk.bold.green('CPUS - ')} ${chalk.yellow(
    system.info.cpus.nucles
  )} ${chalk.red(system.info.cpus.name)} ${chalk.magenta(
    system.info.cpus.speed
  )}
      ${chalk.bold.green('TOTAL RAM MEMORY - ')} ${chalk.yellow(
    system.info.ramMemory
  )} ${chalk.yellow('MEGABYTES')}
      ${chalk.bold.green('FREE RAM MEMORY - ')} ${chalk.yellow(
    system.info.freeRamMemory
  )} ${chalk.yellow('MEGABYTES')}
    `)

  console.log()
}

export default showInfo
