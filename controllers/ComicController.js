const express = require('express')
const router = express.Router()
const cors = require('cors')
const Comics = require('../models/ComicSchema.js')


//=====>WHAT WE'RE USING 
router.use(cors());
router.use(express.json());


//=====>CREATE ROUTE
router.post('/', (req, res) => {
    Comics.create(req.body, (err, data) => {
        res.json(data)
    })
});


//=====>READ ROUTE
router.get('/', (req, res) => {
    Comics.find({}, (err, data) => {
        res.json(data)
    })
});


//=====>UPDATE ROUTE
router.put('/:id', (req, res) => {
    Comics.findByIdAndUpdate(req.params.id, req.body, {new:true}, (err, data) => {
        res.json(data)
    })
});


//=====>DELETE ROUTE 
router.delete('/:id', (req, res) => {
    Comics.findByIdAndRemove(req.params.id, (err, data) => {
        res.json(data)
    })
});

//=====>Exporting

module.exports = router