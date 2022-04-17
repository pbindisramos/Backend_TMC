import express from "express";
import { registrar } from "../controllers/usuarioController.js";

const router = express.Router();

//AUTENTICACION, CONFIRMACION Y REGISTRO

router.post("/", registrar); //Crea un nuevo usuario

export default router;
