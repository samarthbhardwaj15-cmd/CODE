const express = require('express');
const dotenv = require('dotenv');
dotenv.config();
const router = express.Router();
const { body, validationResult } = require('express-validator');

router.get('/test', (req, res) => {
    res.send('user Test route');
})

router.post('/register',
    body('email').trim().isEmail().isLength({ min: 1}),
    body('password').trim().isLength({ min: 6 }),
    body('username').trim().isLength({ min: 3 }),
    (req, res) => {

        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.send(400).json({
                errors: errors.array(),
                message: 'Invalid data'
            });
        }
        res.send('errors')

        console.log(errors);
        res.send(errors);

        console.log(req.body)
        res.send('User registered');
    })
module.exports = router;
