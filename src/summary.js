import chalk from 'chalk';

export function printEventSummary(items) {
  const total = items.length;
  const completeCount = items.filter((w) => w.status === 'Completo').length;
  const availableCount = items.filter((w) => w.status !== 'Completo').length;
  const totalAvailableSeats = items.reduce(
    (sum, w) => sum + w.availableSeats,
    0,
  );

  console.log(chalk.bold('\nResumen del evento'));
  console.log(`Talleres procesados: ${chalk.cyan(total)}`);
  console.log(`Talleres completos: ${chalk.red(completeCount)}`);
  console.log(`Talleres disponibles: ${chalk.green(availableCount)}`);
  console.log(`Cupos disponibles: ${chalk.yellow(totalAvailableSeats)}`);
}