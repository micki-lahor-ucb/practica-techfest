import dotenv from 'dotenv';
dotenv.config();

// Validamos centralizadamente MAX_WORKSHOPS
const rawMaxWorkshops = Number(process.env.MAX_WORKSHOPS);
const validMaxWorkshops = Number.isInteger(rawMaxWorkshops) && rawMaxWorkshops > 0 
    ? rawMaxWorkshops 
    : 3;

export const config = {
  appName: process.env.APP_NAME ?? 'TechFest Control Center',
  environment: process.env.APP_ENV ?? 'development',
  eventName: process.env.EVENT_NAME ?? 'TechFest UCB',
  maxWorkshops: validMaxWorkshops, 
  studentName: process.env.STUDENT_NAME ?? 'Estudiante UCB',
  syncDelay: Number(process.env.SYNC_DELAY ?? 2000), 
};