import Table from 'cli-table3';
import chalk from 'chalk';

export function printWorkshopReport(items) {
  const table = new Table({
    head: ['Código', 'Taller', 'Cupos', 'Inscritos', 'Estado'],
    colWidths: [10, 28, 8, 10, 14],
  });

  for (const workshop of items) {
    const status =
      workshop.status === 'Completo'
        ? chalk.red(workshop.status)
        : chalk.green(workshop.status);

    table.push([
      workshop.code,
      workshop.name,
      workshop.seats,
      workshop.registered,
      status,
    ]);
  }

  console.log(table.toString());
}
