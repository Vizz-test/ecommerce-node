const apiAuth = (req, res, next) => {
  if (req.headers.authorization === "shani") {
    next();
  } else {
    res.status(500).json({ error: "Unauthorized access" });
  }
};

export default apiAuth;
