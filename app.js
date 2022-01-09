const express = require('express');
const cors = require('cors');
const router = require('./router');
const authRouter = require('./router/auth');

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

app.use('/', router);
app.use('/auth', authRouter);

app.listen(3001, () => {
    console.log('Listening on 3001');
});
