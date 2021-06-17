const express = require('express');
// eslint-disable-next-line new-cap
const router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
  res.send('Hello World from TNB List User Service');
});

module.exports = router;
