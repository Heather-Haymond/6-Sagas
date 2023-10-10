const express = require('express');

const app = express();

let PORT = process.env.PORT || 5000;

if (process.env.NODE_ENV === 'test') {
  PORT = 5001;
}

const zooRouter = require('./routes/zoo.router.js');

app.use(express.json());
app.use(express.static('build'));

app.use('/zoo', zooRouter);

module.exports = app.listen(PORT, function () {
    console.log('Listening on port: ', PORT);
});
