import { Router, Request, Response } from 'express'

const router = Router()

router.get('/mensajes', (req: Request, res: Response) => {
	res.send({
		OK: true,
		mensaje: 'Todo está OK /GET',
		queries: req.query
	})
})

router.post('/mensajes', (req: Request, res: Response) => {
	res.send({
		ok: true,
		mensaje: 'Todo está OK /POST',
		body: req.body,
		test: 'corrió'
	})
})

export default router;