import chalk from 'chalk';

export function displaySummary(workshops) {
  const total = workshops.length;
  const completos = workshops.filter((w) => w.status === 'Completo').length;
  const disponibles = total - completos;
  const cuposTotales = workshops.reduce(
    (acc, w) => acc + (w.availableSeats ?? (w.seats - w.registered)),
    0,
  );

  console.log(chalk.bold.underline('\nResumen del evento'));
  console.log(`Talleres procesados: ${chalk.cyan(total)}`);
  console.log(`Talleres completos: ${chalk.red(completos)}`);
  console.log(`Talleres disponibles: ${chalk.green(disponibles)}`);
  console.log(`Cupos disponibles: ${chalk.yellow(cuposTotales)}\n`);
}