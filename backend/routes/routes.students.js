import { Router } from "express";
import { getData } from "../controller/student.js";

const router = Router();

router.route("/").get(getData);

  
  export default router;