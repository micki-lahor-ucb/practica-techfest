function validateMaxWorkshops(value) {
  const parsed = parseInt(value, 10);
  if (Number.isInteger(parsed) && parsed > 0) {
    return parsed;
  }
  return 3;
}

export const config = {
  appName: process.env.APP_NAME ?? 'TechFest Control Center',
  environment: process.env.APP_ENV ?? 'development',
  eventName: process.env.EVENT_NAME ?? 'TechFest UCB',
  maxWorkshops: validateMaxWorkshops(process.env.MAX_WORKSHOPS),
  studentName: process.env.STUDENT_NAME ?? 'Jose Romero',
  syncDelay: Number(process.env.SYNC_DELAY) ?? 1900,
};
