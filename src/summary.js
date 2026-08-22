import chalk from 'chalk';

export function printSummary(workshops) {
  const total = workshops.length;
  const completed = workshops.filter(w => w.status === 'Completo').length;
  const available = workshops.filter(w => w.status === 'Disponible').length;
  const totalAvailableSeats = workshops.reduce((acc, w) => acc + (w.seats - w.registered), 0);

  console.log(chalk.bold('\nResumen del evento'));
  console.log(`Talleres procesados: ${chalk.cyan(total)}`);
  console.log(`Talleres completos: ${chalk.red(completed)}`);
  console.log(`Talleres disponibles: ${chalk.green(available)}`);
  console.log(`Cupos disponibles: ${chalk.yellow(totalAvailableSeats)}`);
}