export function wait(milliseconds) {
  return new Promise((resolve) => {
    setTimeout(resolve, milliseconds);
  });
}

export async function synchronizeRegistrations(items, delay) {
  await wait(delay);

  return items.map((workshop) => ({
    ...workshop,
    availableSeats: workshop.seats - workshop.registered,
  }));
}