import chalk from 'chalk';

export function renderSummary(workshops) {
    const total = workshops.length;
    const completos = workshops.filter((w) => w.availableSeats === 0).length;
    const disponibles = workshops.filter((w) => w.availableSeats > 0).length;
    const totalCupos = workshops.reduce((acc, w) => acc + w.availableSeats, 0);

    console.log(chalk.bold('\nResumen del evento'));
    console.log(`Talleres procesados: ${chalk.blue(total)}`);
    console.log(`Talleres completos: ${chalk.red(completos)}`);
    console.log(`Talleres disponibles: ${chalk.green(disponibles)}`);
    console.log(`Cupos disponibles: ${chalk.yellow(totalCupos)}\n`);
}