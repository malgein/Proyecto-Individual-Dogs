const { Router } = require('express');
const getAllDogs = require('../controllers/getAllDogs')
const getDogById = require('../controllers/getDogById')
const getDogsByName = require('../controllers/getDogsByName')
const createDog = require('../controllers/createDog')
const fetchTemperaments = require('../controllers/fetchTemperaments')
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

router.get('/', (req,res) => {
  res.json({hola: 'mundo'})
})

router.get('/dogs', getAllDogs)
router.post('/dogs', createDog)
router.get('/dogs/name?',getDogsByName)
router.get('/dogs/:idRaza', getDogById)
router.get('/temperaments', fetchTemperaments)


// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);


module.exports = router;
