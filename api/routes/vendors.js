var express = require('express');
var router = express.Router();
var db = require("../db");

/* get vendors listing. */
router.get('/', function (req, res, next) {
    let sql = `SELECT * FROM Vendor`;
    db.query(sql, function (err, data, fields) {
        if (err) throw err;
        res.json({
            status: 200,
            data,
            message: "Vendor list retrieved successfully"
        })
    })
});

/* get vendor by vendorId. */
router.get('/:vendorId', function (req, res, next) {
    let sql = `SELECT * FROM Vendor WHERE vendorId = ?`;
    db.query(sql, req.params.vendorId, function (err, data, fields) {
        if (err) throw err;
        res.json({
            status: 200,
            data,
            message: "Vendor retrieved successfully"
        })
    })
});

/* get vendors by userId. */
router.get('/:userId', function (req, res, next) {
    let sql = `SELECT * FROM Vendor WHERE userId = ?`;
    db.query(sql, req.params.userId, function (err, data, fields) {
        if (err) throw err;
        res.json({
            status: 200,
            data,
            message: "Vendor retrieved successfully"
        })
    })
});

/* create new vendor. */
router.post('/', function (req, res, next) {
    let sql = `INSERT INTO Vendor(vendorName, email, phoneNumber, userId, type) VALUES (?)`;
    let values = [
        req.body.vendorName,
        req.body.email,
        req.body.phoneNumber,
        req.body.userId,
        req.body.type
    ];
    db.query(sql, [values], function (err, data, fields) {
        if (err) throw err;
        res.json({
            status: 200,
            message: "New vendor added successfully"
        })
    })
});

/* update an existing vendor. */
router.put('/vendorId', function (req, res, next) {
    let sql = `UPDATE Vendor SET vendorName = ?, email = ?, phoneNumber = ?, userId = ?, type = ? WHERE vendorId = ?`;
    let values = [
        req.body.vendorName,
        req.body.email,
        req.body.phoneNumber,
        req.body.userId,
        req.body.type,
        req.params.id
    ];
    db.query(sql, [values], function (err, data, fields) {
        if (err) throw err;
        res.json({
            status: 200,
            message: "Vendor updated successfully"
        })
    })
});

/* delete an existing vendor. */
router.delete('/:vendorId', function (req, res, next) {
    let sql = 'DELETE FROM Vendor WHERE vendorId = ?';
    db.query(sql, req.params.id, function (err, data, fields) {
        if (err) throw err;
        res.json({
            status: 200,
            data,
            message: "Vendor deleted successfully"
        })
    })
});