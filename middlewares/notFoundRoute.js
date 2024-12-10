const notFoundRoute = (req, res, next) => {
  res.statusCode = 404;
  res.json({
    error: true,
    message: "Pagina non trovata"
  })
}

module.exports = notFoundRoute;