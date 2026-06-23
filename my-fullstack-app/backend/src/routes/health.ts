import { Router } from 'express';
import { HealthController } from '../controllers/healthController';

const router = Router();
const healthController = new HealthController();

export function setupHealthRoutes(app: Router) {
    app.use('/health', router);
    router.get('/', healthController.checkHealth.bind(healthController));
}