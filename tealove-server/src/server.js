const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const usersRoutes = require('./routes/users');
const authRoutes = require('./routes/auth');
const teaRoutes = require('./routes/teas');
const meRoutes = require('./routes/me');

const app = express();

app.use(bodyParser.json());
app.use(cors());

app.use('/users', usersRoutes);
app.use('/auth', authRoutes);
app.use('/teas', teaRoutes);
app.use('/me', meRoutes);

const port = process.env.PORT || 3000;

// eslint-disable-next-line no-console
app.listen(port, () => console.log('listening on port', port));
