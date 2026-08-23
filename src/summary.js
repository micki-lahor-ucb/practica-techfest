import chalk from 'chalk';

export function printEventSummary(items) {
  const totalSeats = items.reduce((acc, w) => acc + w.seats, 0);
  const totalRegistered = items.reduce((acc, w) => acc + w.registered, 0);
  const full = items.filter((w) => w.status === 'Completo').length;

  console.log(chalk.bold('\nResumen del evento'));
  console.log(`Talleres totales: ${items.length}`);
  console.log(`Cupos totales: ${totalSeats}`);
  console.log(`Inscritos totales: ${totalRegistered}`);
  console.log(`Talleres completos: ${full}`);
}