export const config = {
  appName: process.env.APP_NAME ?? 'TechFest Control Center',
  environment: process.env.APP_ENV ?? 'development',
  eventName: process.env.EVENT_NAME ?? 'TechFest UCB',
  maxWorkshops: Number(process.env.MAX_WORKSHOPS ?? 3),
  studentName: process.env.STUDENT_NAME ?? 'Sin definir',
  syncDelayMs: Number(process.env.SYNC_DELAY_MS ?? 1200),
};

if (config.maxWorkshops <= 0 || Number.isNaN(config.maxWorkshops)) {
  throw new Error('MAX_WORKSHOPS debe ser un número mayor a 0');
}
if (config.syncDelayMs < 0 || Number.isNaN(config.syncDelayMs)) {
  throw new Error('SYNC_DELAY_MS debe ser un número mayor o igual a 0');
}