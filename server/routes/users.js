const express = require('express');
const router = express.Router();
const { User } = require("../models/user");

const { auth } = require("../middleware/auth");

//=================================
//             User
//=================================

router.get("/auth", auth, (req, res) => {
    res.status(200).json({
        _id: req.user._id,
        isAdmin: req.user.role === 0 ? false : true,
        isAuth: true,
        email: req.user.email,
        name: req.user.name,
        lastname: req.user.lastname,
        role: req.user.role,
        image: req.user.image,
    });
});

router.post("/register", (req, res) => {

    const user = new User(req.body);

    user.save((err, doc) => {
        if (err) return res.json({ success: false, err });
        return res.status(200).json({
            success: true
        });
    });
});

router.post("/login", (req, res) => {
    User.findOne({ email: req.body.email }, (err, user) => {
        if (!user)
            return res.json({
                loginSuccess: false,
                message: "Auth failed, email not found"
            });

        user.comparePassword(req.body.password, (err, isMatch) => {
            if (!isMatch)
                return res.json({ loginSuccess: false, message: "Wrong password" });

            user.generateToken((err, user) => {
                if (err) return res.status(400).send(err);
                res.cookie("w_authExp", user.tokenExp);
                res
                    .cookie("w_auth", user.token)
                    .status(200)
                    .json({
                        loginSuccess: true, userId: user._id
                    });
            });
        });
    });
});

router.post("/reset", (req, res) => {
    let email = req.body.email;
    console.log(email)
    User.findOne({ email: email }, (err, user) => {

        if (!user){
            return res.json({
                success: false,
            });
        }
        else{
            user.password = req.body.password;
            let usr = new User(user)
            usr.save((err, doc) => {
                if (err) return res.json({ success: false, err }); 
                return res.status(200).json({
                    success : true
                });
            });
        }
        });
    });
    // router.put('/:email', (req, res) => {
    //     console.log(req.params.email)
    //     console.log(req.body.password )
        
    //     User.findOneAndUpdate(req.params.email, { $set: {password : req.body.password} }, { new: true }, (err, doc) => {
    //         console.log(doc)
    //         console.log(err)
    //         if (!err) { res.send(doc); }
    //         else { console.log('Error in Employee Update :' + JSON.stringify(err, undefined, 2)); }
    //     });
    // });


router.get("/logout", auth, (req, res) => {
    User.findOneAndUpdate({ _id: req.user._id }, { token: "", tokenExp: "" }, (err, doc) => {
        if (err) return res.json({ success: false, err });
        return res.status(200).send({
            success: true
        });
    });
});

module.exports = router;
