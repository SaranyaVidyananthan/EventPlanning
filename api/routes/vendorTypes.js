var express = require('express');
var router = express.Router();
var db = require("../db");

// get decorators list
router.get('/decorators', function (req, res, next) {
    let sql = `SELECT * FROM vendors WHERE type = decorator`;
    db.query(sql, function (err, data, fields) {
        if (err) throw err;
        res.json({
            status: 200,
            data,
            message: "Decorator list retrieved successfully"
        })
    })
});

// get event planners list
router.get('/eventPlanners', function (req, res, next) {
    let sql = `SELECT * FROM vendors WHERE type = eventPlanner`;
    db.query(sql, function (err, data, fields) {
        if (err) throw err;
        res.json({
            status: 200,
            data,
            message: "Event planner list retrieved successfully"
        })
    })
});

// get photographers list
router.get('/photographers', function (req, res, next) {
    let sql = `SELECT * FROM vendors WHERE type = photographer`;
    db.query(sql, function (err, data, fields) {
        if (err) throw err;
        res.json({
            status: 200,
            data,
            message: "Photographer list retrieved successfully"
        })
    })
});

// get videographers list
router.get('/videographers', function (req, res, next) {
    let sql = `SELECT * FROM vendors WHERE type = videographer`;
    db.query(sql, function (err, data, fields) {
        if (err) throw err;
        res.json({
            status: 200,
            data,
            message: "Videographer list retrieved successfully"
        })
    })
});

// get makeup artists list
router.get('/makeupArtists', function (req, res, next) {
    let sql = `SELECT * FROM vendors WHERE type = makeupArtist`;
    db.query(sql, function (err, data, fields) {
        if (err) throw err;
        res.json({
            status: 200,
            data,
            message: "Makeup artist list retrieved successfully"
        })
    })
});

// get hair stylists list
router.get('/hairStylists', function (req, res, next) {
    let sql = `SELECT * FROM vendors WHERE type = hairStylist`;
    db.query(sql, function (err, data, fields) {
        if (err) throw err;
        res.json({
            status: 200,
            data,
            message: "Hair stylist list retrieved successfully"
        })
    })
});

// get venues list
router.get('/venues', function (req, res, next) {
    let sql = `SELECT * FROM vendors WHERE type = venue`;
    db.query(sql, function (err, data, fields) {
        if (err) throw err;
        res.json({
            status: 200,
            data,
            message: "Venue list retrieved successfully"
        })
    })
});

// get MCs list
router.get('/mcs', function (req, res, next) {
    let sql = `SELECT * FROM vendors WHERE type = mc`;
    db.query(sql, function (err, data, fields) {
        if (err) throw err;
        res.json({
            status: 200,
            data,
            message: "MC list retrieved successfully"
        })
    })
});

// get caterer list
router.get('/caterers', function (req, res, next) {
    let sql = `SELECT * FROM vendors WHERE type = caterer`;
    db.query(sql, function (err, data, fields) {
        if (err) throw err;
        res.json({
            status: 200,
            data,
            message: "Caterer list retrieved successfully"
        })
    })
});

// get florists list
router.get('/florists', function (req, res, next) {
    let sql = `SELECT * FROM vendors WHERE type = florist`;
    db.query(sql, function (err, data, fields) {
        if (err) throw err;
        res.json({
            status: 200,
            data,
            message: "Florist list retrieved successfully"
        })
    })
});

// get bands list
router.get('/bands', function (req, res, next) {
    let sql = `SELECT * FROM vendors WHERE type = band`;
    db.query(sql, function (err, data, fields) {
        if (err) throw err;
        res.json({
            status: 200,
            data,
            message: "Band list retrieved successfully"
        })
    })
});

// get DJs list
router.get('/djs', function (req, res, next) {
    let sql = `SELECT * FROM vendors WHERE type = dj`;
    db.query(sql, function (err, data, fields) {
        if (err) throw err;
        res.json({
            status: 200,
            data,
            message: "DJ list retrieved successfully"
        })
    })
});

// get dress designers list
router.get('/dressDesigners', function (req, res, next) {
    let sql = `SELECT * FROM vendors WHERE type = dressDesigner`;
    db.query(sql, function (err, data, fields) {
        if (err) throw err;
        res.json({
            status: 200,
            data,
            message: "Dress designer list retrieved successfully"
        })
    })
});