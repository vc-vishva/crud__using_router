const pastaRouter = require("express").Router();

// pastaRouter.get("/nonVeg", (req, res) => {
//   res.send(req.query.name);
// });

pastaRouter.get("/:id", (req, res) => {
  res.send(req.params.id);
});

module.exports = pastaRouter;
