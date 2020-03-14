const express = require('express');
const router = express.Router();

//GET Route
router.get('/', (req, res) => {
  res.status(200).json({ success: true, msg: 'Show all bootcamps' });
});

// GET single bootcamp
router.get('/:id', (req, res) => {
  res
    .status(200)
    .json({ success: true, msg: `Show  single bootcamp ${req.params.id}` });
});

//POST Route

router.post('/', (req, res) => {
  res.status(200).json({ success: true, msg: 'Create new bootcamp ' });
});

//PUT Route

router.put('/:id', (req, res) => {
  res
    .status(200)
    .json({ success: true, msg: `Update bootcamp ${req.params.id}` });
});

//Delete Route

router.delete('/:id', (req, res) => {
  res
    .status(200)
    .json({ success: true, msg: `Delete bootcamp ${req.params.id}` });
});

module.exports = router;
