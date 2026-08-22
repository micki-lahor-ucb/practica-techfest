import chalk from 'chalk';

export function printEventSummary(workshops) {
  const totalWorkshops = workshops.length;
  
  // Talleres completos (cupos disponibles == 0 o registrados >= asientos)
  const fullWorkshops = workshops.filter(
    (w) => w.availableSeats === 0 || w.registered >= w.seats
  ).length;

  // Talleres con cupos disponibles
  const availableWorkshops = workshops.filter(
    (w) => w.availableSeats > 0
  ).length;

  // Total de cupos disponibles sumando todos los talleres
  const totalAvailableSeats = workshops.reduce(
    (sum, w) => sum + (w.availableSeats || 0),
    0
  );

  console.log(chalk.bold.cyan('\nResumen del evento'));
  console.log(chalk.gray('----------------------------------------'));
  console.log(`Talleres procesados: ${chalk.yellow(totalWorkshops)}`);
  console.log(`Talleres completos: ${chalk.red(fullWorkshops)}`);
  console.log(`Talleres disponibles: ${chalk.green(availableWorkshops)}`);
  console.log(`Cupos disponibles: ${chalk.bold.green(totalAvailableSeats)}\n`);
}