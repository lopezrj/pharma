const createError = require('http-errors');
const express = require("express")
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var stylus = require('stylus');

const graphqlHttp = require("express-graphql")

const graphqlSchema = require("./graphql/schema/schema")
const graphqlResolvers = require("./graphql/resolvers/rootQuery")

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var farmacosRouter = require('./routes/farmacos');
const initDB = require('./database');

initDB()

const app = express()

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(stylus.middleware(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'public')));
// create alias for bootstrap
app.use("/bootstrap", express.static(path.join(__dirname, '/node_modules/bootstrap/dist')));
app.use("/bootstrap-icons", express.static(path.join(__dirname, '/node_modules/bootstrap-icons')));


app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/farmacos', farmacosRouter);

app.use(
  "/graphql",
  graphqlHttp({
    schema: graphqlSchema,
    rootValue: graphqlResolvers,
    graphiql: true,
  })
)


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;


