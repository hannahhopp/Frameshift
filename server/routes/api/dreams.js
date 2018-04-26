const router = require('express').Router();
const { Dream } = require('../../db');
module.exports = router;

router.get('/', async (req, res, next) => {
  try {
    const dreams = await Dream.findAll();
    res.json(dreams);
  } catch (err) {
    next(err);
  }
});

router.get('/:id', async (req, res, next) => {
  try {
    const dream = await Dream.findById(req.params.id);
    if (!dream) {
      const err = new Error('Dream not found.');
      err.status = 404;
      next(err);
    } else {
      res.json(dream);
    }
  } catch (err) {
    next(err);
  }
});

router.post('/', async (req, res, next) => {
  try {
    const dream = await Dream.create(req.body);
    res.json(dream);
  } catch (err) {
    next(err);
  }
});

router.put('/:id', async (req, res, next) => {
  try {
    const dream = await Dream.findById(req.params.id);
    const updatedDream = await dream.update(req.body);
    res.json(updatedDream);
  } catch (err) {
    next(err);
  }
});

router.delete('/:id', async (req, res, next) => {
  try {
    await Dream.findById(req.params.id)
      .then(dream => {
        dream.destroy();
      })
      .then(() => {
        res.statusMessage = 'No Content';
        res.sendStatus(204);
      });
  } catch (err) {
    next(err);
  }
})
