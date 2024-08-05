import express from 'express';

const app = express();
const port = 3000;

app.use(express.json());

let alumnos = [];
let idActual = 1;

// alumno = {
//  id: 1
// 	nombre: 'ignacio',
// 	apellido: 'Camillucci',
// 	curso: 'javascript',
// };

// CREAR ALUMNO
app.post('/alumno', (req, res) => {
	const nuevoAlumno = {
		id: idActual++,
		nombre: req.body.nombre,
		apellido: req.body.apellido,
		curso: req.body.curso,
	};
	alumnos.push(nuevoAlumno);
	res.status(201).json({
		msg: `Se creo correctamente el alumno con id: ${nuevoAlumno.id} nombre: ${nuevoAlumno.nombre}`,
	});
});

// OBTENER LISTADO DE ALUMNOS
app.get('/alumno', (req, res) => {
	res.json(alumnos);
});

// OBTENER LISTADO DE ALUMNOS
app.get('/alumno/:id', (req, res) => {
	res.json(alumnos);
});

app.listen(port, () => {
	console.log(`App lista en el puerto ${port}`);
});
