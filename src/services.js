export function wait(milliseconds) {
  return new Promise((resolve) => {
    setTimeout(resolve, milliseconds);
  });
}

export async function synchronizeRegistrations(items) {
  await wait(1200);

  return items.map((workshop) => ({
    ...workshop,
    availableSeats: workshop.seats - workshop.registered,
  }));
}
