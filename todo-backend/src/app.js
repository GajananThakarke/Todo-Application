const express = require('express');
const passport = require('passport');
const session = require('express-session');
const todoRoutes = require('./routes/todos');
require('./auth/googleAuth');

const app = express();

app.use(express.json());
app.use(session({ secret: 'secret', resave: false, saveUninitialized: false }));
app.use(passport.initialize());
app.use(passport.session());

app.use('/todos', todoRoutes);

app.get('/auth/google',
  passport.authenticate('google', { scope: ['profile'] })
);

app.get('/auth/google/callback',
  passport.authenticate('google', { failureRedirect: '/' }),
  (req, res) => {
    res.redirect('/');
  }
);

module.exports = app;
