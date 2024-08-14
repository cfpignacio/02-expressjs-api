let alumnos = [];
let idActual = 1;

export const createAlumno = (req, res) => {
	const nuevoAlumno = {
		id: idActual++,
		nombre: req.body.nombre,
		apellido: req.body.apellido,
		curso: req.body.curso
	};

	alumnos.push(nuevoAlumno);

	res.status(201).json({
		msg: `Se creo correctamente el alumno con id: ${nuevoAlumno.id} nombre: ${nuevoAlumno.nombre}`
	});
};

export const getAlumnos = (req, res) => {
	res.json(alumnos);
};

export const getAlumno = (req, res) => {
	try {
		const id = parseInt(req.params.id);

		// valido que el id sea un numero
		if (isNaN(id)) {
			throw new Error('El id no es un entero');
		}

		const alumno = alumnos.find((a) => a.id === id);

		if (!alumno) throw new Error('Alumno no encontrado');

		res.json(alumno);
	} catch (error) {
		res.status(404).json(error.message);
	}
};

export const updateAlumno = (req, res) => {
	try {
		const id = parseInt(req.params.id);

		// valido que el id sea un numero
		if (isNaN(id)) {
			throw new Error('El id no es un entero');
		}

		const alumno = alumnos.find((a) => a.id === id);

		if (!alumno) throw new Error('Alumno no encontrado');

		alumno.nombre = req.body.nombre ?? alumno.nombre;
		alumno.apellido = req.body.apellido ?? alumno.apellido;
		alumno.curso = req.body.curso ?? alumno.curso;

		res.json(alumno);
	} catch (error) {
		res.status(404).json(error.message);
	}
};

export const deleteAlumno = (req, res) => {
	try {
		const id = parseInt(req.params.id);

		// valido que el id sea un numero
		if (isNaN(id)) {
			throw new Error('El id no es un entero');
		}
		const index = alumnos.findIndex((a) => a.id === id);
		if (!index) throw new Error('Alumno no encontrado');

		const borrarAlumno = alumnos.splice(index, 1);

		res.json(borrarAlumno);
	} catch (error) {
		res.status(404).json(error.message);
	}
};
