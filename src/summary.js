import chalk from 'chalk';

export function printEventSummary(synchronizedWorkshops) {
  const totalProcessed = synchronizedWorkshops.length;
  
   
  const completeWorkshops = synchronizedWorkshops.filter(
    (w) => w.status === 'Completo'
  ).length;

  const availableWorkshops = synchronizedWorkshops.filter(
    (w) => w.status !== 'Completo'
  ).length;

  const totalAvailableSeats = synchronizedWorkshops.reduce(
    (acc, w) => acc + (w.availableSeats ?? 0),
    0
  );

  console.log(chalk.bold('\nResumen del evento'));
  console.log(`Talleres procesados: ${chalk.yellow(totalProcessed)}`);
  console.log(`Talleres completos: ${chalk.red(completeWorkshops)}`);
  console.log(`Talleres disponibles: ${chalk.green(availableWorkshops)}`);
  console.log(`Cupos disponibles: ${chalk.cyan(totalAvailableSeats)}`);
}