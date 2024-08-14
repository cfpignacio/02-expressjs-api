import express from 'express';
import alumnosRoutes from './src/alumno/alumno.routes.js';

const app = express();
const port = 3000;

app.use(express.json());

app.use('/api', alumnosRoutes);

app.listen(port, () => {
	console.log(`App lista en el puerto ${port}`);
});
