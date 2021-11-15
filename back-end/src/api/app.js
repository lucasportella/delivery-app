const express = require('express');
const cors = require('cors');
const { registerRoute, loginRoute, custumerRoute, productRoute } = require('../routes/index');
const { uniqueConstraintError } = require('../middlewares/errorMiddleware');

const app = express();
app.use(express.json());
app.use(cors());

app.post('/register', registerRoute);
app.use('/login', loginRoute);
app.use('/custumer', custumerRoute);
app.use('/products', productRoute);

app.use(uniqueConstraintError);

module.exports = app;
