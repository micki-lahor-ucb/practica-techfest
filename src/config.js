import dotenv from 'dotenv';
dotenv.config();

function getValidMaxWorkshops(value) {
  const parsed = parseInt(value, 10);
  if (!Number.isNaN(parsed) && Number.isInteger(parsed) && parsed > 0) {
    return parsed;
  }
  return 3; // Valor predeterminado de respaldo
}

export const config = {
  appName: process.env.APP_NAME ?? 'TechFest Control Center',
  environment: process.env.APP_ENV ?? 'development',
  eventName: process.env.EVENT_NAME ?? 'TechFest UCB',
  studentName: process.env.STUDENT_NAME ?? 'Estudiante Anónimo',
  syncDelay: Number(process.env.SYNC_DELAY ?? 2000),
  maxWorkshops: getValidMaxWorkshops(process.env.MAX_WORKSHOPS),
};