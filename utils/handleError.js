const handleHttpError = (res, message = "Algo suscedio", code = 403) => {
  res.status(code);
  res.status({ error: message });
};

module.exports = { handleHttpError };
