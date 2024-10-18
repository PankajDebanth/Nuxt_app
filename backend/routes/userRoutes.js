// backend/routes/userRoutes.js
const express = require('express');
const router = express.Router();
const User = require('../models/User');

// GET all users
router.get('/', async (req, res) => {
  try {
    const users = await User.findAll();
    res.json(users);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// POST a new user
router.post('/', async (req, res) => {
  const { name, email } = req.body;
  try {
    const newUser = await User.create({ name, email });
    res.status(201).json(newUser);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// PUT (update) a user
router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const { name, email } = req.body;
  try {
    const user = await User.findByPk(id);
    if (user) {
      user.name = name;
      user.email = email;
      await user.save();
      res.json(user);
    } else {
      res.status(404).send('User not found');
    }
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// DELETE a user
router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const user = await User.findByPk(id);
    if (user) {
      await user.destroy();
      res.send('User deleted');
    } else {
      res.status(404).send('User not found');
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
