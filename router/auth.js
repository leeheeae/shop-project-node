const express = require('express');
const bcrypt = require('bcrypt');
const router = express.Router();

const db = require('../config/db');

router.get('/', async (req, res) => {
    const [rows, fields] = await db.execute(`SELECT * FROM user`);
    res.send(rows);
    res.end();
});

//회원가입
router.post('/signup', async (req, res) => {
    let { username, password, nickname } = req.body;

    bcrypt.hash(password, 10, async (error, hashedPassword) => {
        if (error) {
            console.error(error);
            return res.status(500).json({
                error,
            });
        }

        password = hashedPassword;

        const query =
            'INSERT INTO `user` (`username`, `password`, `nickname`) VALUES (?, ?, ?)';

        await db.execute(query, [username, password, nickname]);

        res.send({
            username,
            password,
            nickname,
        });
    });
});

module.exports = router;
