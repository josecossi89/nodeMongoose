const handleHttpError = (res, message = "Algo suscedio", code = 403) => {
  res.status(code);
  res.send({ error: message });
};

module.exports = { handleHttpError };
