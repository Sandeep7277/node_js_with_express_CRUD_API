const express = require("express");
const moviesController = require("./../Controllers/moviesController");

//Call ROUTE HANDLER FUNCTION WITH CHAINING
const router = express.Router(); //middleware

//param middleware
// router.param('id', moviesController.checkId);

router
  .route("/highest-rated")
  .get(moviesController.getHighestRated, moviesController.getAllMovies);

router
  .route("/")
  .get(moviesController.getAllMovies)
  // .post(moviesController.validateBody, moviesController.createMovie)
  .post(moviesController.createMovie);

router
  .route("/:id")
  .get(moviesController.getmovie)
  .patch(moviesController.updateMovie)
  .delete(moviesController.deleteMovie);

module.exports = router;
