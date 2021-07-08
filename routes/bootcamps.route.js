import express from "express";
import * as method from "../controllers/bootcamps.controller.js";

const router = express.Router();

router.route("/radius/:zipcode/:distance").get(method.getBootcampsByRadius);
router.route("/").get(method.getBootcamps).post(method.createBootcamp);
router
  .route("/:id")
  .get(method.getBootcamp)
  .put(method.updateBootcamp)
  .delete(method.deleteBootcamp);

export default router;
