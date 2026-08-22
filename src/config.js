function parseMaxWorkshops(value) {
  const parsed = parseInt(value, 10);
  if (isNaN(parsed) || parsed <= 0) {
    return 3;
  }
  return parsed;
}

export const config = {
  appName: process.env.APP_NAME ?? 'TechFest Control Center',
  environment: process.env.APP_ENV ?? 'development',
  eventName: process.env.EVENT_NAME ?? 'TechFest UCB',
  maxWorkshops: parseMaxWorkshops(process.env.MAX_WORKSHOPS),
  studentName: process.env.STUDENT_NAME ?? 'Estudiante Anónimo',
  syncDelay: Number(process.env.SYNC_DELAY ?? 1000),
};