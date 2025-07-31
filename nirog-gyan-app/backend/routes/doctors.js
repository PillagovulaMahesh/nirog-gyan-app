const express = require('express');
const router = express.Router();
const doctors = require('../data/doctors.json');

// GET all doctors or filter by name/specialization
router.get('/', (req, res) => {
  const { search } = req.query;

  if (search) {
    const filtered = doctors.filter((doc) =>
      doc.name.toLowerCase().includes(search.toLowerCase()) ||
      doc.specialization.toLowerCase().includes(search.toLowerCase())
    );
    res.json(filtered);
  } else {
    res.json(doctors);
  }
});

// GET doctor by ID
router.get('/:id', (req, res) => {
  const doctorId = parseInt(req.params.id);
  const doctor = doctors.find((doc) => doc.id === doctorId);

  if (doctor) {
    res.json(doctor);
  } else {
    res.status(404).json({ message: 'Doctor not found' });
  }
});

module.exports = router;
