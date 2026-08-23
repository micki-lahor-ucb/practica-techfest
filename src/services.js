export function wait(milliseconds) {
  return new Promise((resolve) => {
    setTimeout(resolve, milliseconds);
  });
}

export async function synchronizeRegistrations(items, delayMs) {
  await wait(delayMs);
  return items.map((workshop) => ({
    ...workshop,
    availableSeats: workshop.seats - workshop.registered,
  }));
}
