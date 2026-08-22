function parseMaxWorkshops(value) {
  const parsed = Number(value);

  if (!Number.isInteger(parsed) || parsed <= 0) {
    return 3;
  }

  return parsed;
}

export const config = {
  appName: process.env.APP_NAME ?? 'TechFest Control Center',
  environment: process.env.APP_ENV ?? 'development',
  eventName: process.env.EVENT_NAME ?? 'TechFest UCB',
  maxWorkshops: parseMaxWorkshops(process.env.MAX_WORKSHOPS),
  studentName: process.env.STUDENT_NAME ?? 'Estudiante sin registrar',
  syncDelay: Number(process.env.SYNC_DELAY ?? 1200),
};