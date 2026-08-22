import 'dotenv/config';
import chalk from 'chalk';

import { config } from './config.js';
import { workshops } from './data.js';
import { printWorkshopReport } from './report.js';
import { synchronizeRegistrations } from './services.js';

console.log(chalk.bold.cyan(`\n${config.appName}`));
console.log(chalk.gray('----------------------------------------'));
console.log(`Evento: ${chalk.yellow(config.eventName)}`);
console.log(`Entorno: ${chalk.yellow(config.environment)}`);
console.log(`Límite de talleres configurado: ${chalk.yellow(config.maxWorkshops)}`);

console.log(chalk.bold('\nTalleres registrados'));
printWorkshopReport(workshops.slice(0, config.maxWorkshops));

console.log(chalk.bold('\nSincronizando inscripciones...'));

const synchronized = await synchronizeRegistrations(workshops);

console.log(chalk.green('✓ Sincronización completada.'));
console.log(
  chalk.gray(
    `Talleres procesados: ${synchronized.length}. Los datos fueron simulados para la práctica.`,
  ),
);
