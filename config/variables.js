module.exports = {
  db: process.env.MONGODB_URI || 'mongodb://localhost/contractor',
  port: process.env.PORT || 3030,
  secret: process.env.SECRET || 'ishallhaveafishyonalittledishyishallhaveafishywhentheboatcomesin'
}
