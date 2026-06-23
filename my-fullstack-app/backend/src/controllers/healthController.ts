class HealthController {
    checkHealth(req, res) {
        res.status(200).json({ status: 'OK' });
    }
}

export default HealthController;