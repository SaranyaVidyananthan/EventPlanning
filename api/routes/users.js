var express = require('express');
var router = express.Router();
var db = require("../db");

/* get users listing. */
router.get('/', function (req, res, next) {
  let sql = `SELECT * FROM User`;
  db.query(sql, function (err, data, fields) {
    if (err) throw err;
    res.json({
      status: 200,
      data,
      message: "User list retrieved successfully"
    })
  })
});

/* get user by ID. */
router.get('/:id', function (req, res, next) {
  let sql = `SELECT * FROM User WHERE id = ?`;
  db.query(sql, req.params.id, function (err, data, fields) {
    if (err) throw err;
    res.json({
      status: 200,
      data,
      message: "User retrieved successfully"
    })
  })
});

/* create new user. */
router.post('/:id', function (req, res, next) {
  let sql = `INSERT INTO User(firstName, surName, email, type) VALUES (?)`;
  let values = [
    req.body.firstName,
    req.body.surName,
    req.body.email,
    req.body.type
  ];
  db.query(sql, [values], function (err, data, fields) {
    if (err) throw err;
    res.json({
      status: 200,
      message: "New user added successfully"
    })
  })
});

/* update an existing user. */
router.put('/:id', function (req, res, next) {
  let sql = `UPDATE User SET firstName = ?, surName = ?, email = ?, type = ? WHERE id = ?`;
  let values = [
    req.body.firstName,
    req.body.surName,
    req.body.email,
    req.body.type,
    req.params.id
  ];
  db.query(sql, [values], function (err, data, fields) {
    if (err) throw err;
    res.json({
      status: 200,
      message: "User updated successfully"
    })
  })
});

/* delete an existing user. */
router.delete('/:id', function (req, res, next) {
  let sql = 'DELETE FROM User WHERE id = ?';
  db.query(sql, req.params.id, function (err, data, fields) {
    if (err) throw err;
    res.json({
      status: 200,
      data,
      message: "User deleted successfully"
    })
  })
});

module.exports = router;