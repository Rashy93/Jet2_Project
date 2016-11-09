module.exports = {
  db: process.env.MONGODB_URI || 'mongodb://localhost/timesheets',
  port: process.env.PORT || 3030,
  secret: process.env.SECRET || 'ishallhaveafishyonalittledishyishallhaveafishywhentheboatcomesin'
}
