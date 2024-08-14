import express from 'express';
import {
	createAlumno,
	deleteAlumno,
	getAlumno,
	getAlumnos,
	updateAlumno
} from './alumno.controller.js';

const router = express.Router();

router.post('/alumno', createAlumno);
router.get('/alumno', getAlumnos);
router.get('/alumno/:id', getAlumno);
router.put('/alumno/:id', updateAlumno);
router.delete('/alumno/:id', deleteAlumno);

export default router;
