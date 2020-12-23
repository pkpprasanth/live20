const express = require('express');
const router = express.Router();
const { Contest } = require("../models/Contest");

router.post("/register", (req, res) => {

    const contest = new Contest(req.body);

    contest.save((err, doc) => {
        if (err) return res.json({ success: false, err });
        return res.status(200).json({
            success: true
        });
    });
});

module.exports = router;