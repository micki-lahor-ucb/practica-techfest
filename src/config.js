export const config = {
  appName: process.env.APP_NAME ?? 'TechFest Control Center',
  environment: process.env.APP_ENV ?? 'development',
  eventName: process.env.EVENT_NAME ?? 'TechFest UCB',
  maxWorkshops: Number(process.env.MAX_WORKSHOPS ?? 3),
  studentName: process.env.STUDENT_NAME ?? 'Estudiante Anónimo',
  syncDelay: parseInt(process.env.SYNC_DELAY, 10) || 1000
};