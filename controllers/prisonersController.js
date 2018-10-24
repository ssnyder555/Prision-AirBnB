const mongoose = require('mongoose');
const express  = require('express');
const router   = express.Router();
const Prisoner = require('../models/prisoners');
const Auth     = require('../models/auth');

// Find All Priosners Objects
router.get('/', async (req, res) => {
        try {
          
    const prisonersFound = await Prisoner.find({});
    res.render('./prisoners/index.ejs', {
      prisoners: prisonersFound

    });
  } catch (err) {
    res.send(err);
  }
});



router.post('/prisonerS', (req, res) => {
  console.log(req.body);
  Prisoner.find({
    name: req.body.name
  }, (err, prisonerFound) => {
    res.render('./prisoners/prisonerS.ejs', {
      prisoners: prisonerFound
    });
  });
})

// Render New Form Page
router.get('/new', (req, res) => {
  res.render('./prisoners/new.ejs');
});

// Create New Prisoner From Info Passed From Function Above
router.post('/', async (req, res) => {
  try {

    const prisonerCreated = await Prisoner.create(req.body);
    console.log(prisonerCreated);
    res.redirect('/prisoners');

  } catch (err) {
    res.send(err);
  }
});

// Show Each Page For Prisoner
router.get('/:id', async (req, res) => {
  console.log(req.params.id);
  try {

    const prisonerFound = await Prisoner.findById(req.params.id);
    res.render('./prisoners/show.ejs', {
      prisoner: prisonerFound
    });

  } catch (err) {
    res.send(err);
  }
});

// Delete Prisoner

router.delete('/:id', async (req, res) => {
  try {

    await Prisoner.findByIdAndRemove(req.params.id);
    res.redirect('/prisoners');

  } catch (err) {
    res.send(err);
  }
});

// Render Edit Page

router.get('/:id/edit', async (req, res) => {

  if (req.session.logged === true) {
    try {

      const prisonerFound = await Prisoner.findById(req.params.id);
      res.render('./prisoners/edit.ejs', {
        prisoner: prisonerFound
      })

    } catch (err) {
      res.send(err);
    }
  } else {
    req.session.message = 'You have to be logged in to edit an author';
    res.redirect('/auth/login');
  }
});

// Change Edited Information
router.put('/:id', async (req, res) => {
  console.log(req.params.id, req.body);
  try {

    await Prisoner.findByIdAndUpdate(req.params.id, req.body);
    res.redirect('/prisoners');

  } catch (err) {
    res.send(err);
  }
})



module.exports = router;
