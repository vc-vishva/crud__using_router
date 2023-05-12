const burgerRouter = require("express").Router();

// pizzaRouter.get("/nonVeg", (req, res) => {
//   res.send(req.query.name);
// });

burgerRouter.get("/:id", (req, res) => {
  res.send(req.params.id);
});

module.exports = burgerRouter;
