const express = require('express');
const app = express();
const zooRouter = require('./routes/zoo.router.js');
let PORT = process.env.PORT || 5001;

if (process.env.NODE_ENV === 'test') {
  PORT = 5002;
}

/** ---------- MIDDLEWARE ---------- **/
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static('build'));

/** ---------- ROUTES ---------- **/
app.use('/api/zoo', zooRouter);

/** ---------- START SERVER ---------- **/
module.exports = app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
