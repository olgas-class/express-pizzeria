const handleError = (err, req, res, next) => {
  // situazione di errore
  res.statusCode = 500;
  res.json({
    error: true,
    message: "Errore interno del server"
  });
}

module.exports = handleError;