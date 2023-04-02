import type {Router} from "express";

export default (router: Router): void => {
  router.get('/healthz', (req, res) => {
    res.send('Service is running');
  });
}
