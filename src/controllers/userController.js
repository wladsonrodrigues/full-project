import supabase from "../config/supabase.js";
import bcrypt from "bcrypt";
import e from "cors";
import jwt from "jsonwebtoken";

const registerUser = async (request, response) => {
    //Desestruturação do Objeto (request.body)
    const { nome, email, senha} = request.body;

    //Cria um hash pra senha informada
    const passwordHash = await bcrypt.hash(senha, 10);

    //Abre a conexão com o supabase
    const { data, error } = await supabase.from("users").insert([
        {
            nome,
            email,
            senha: passwordHash
        }
    ]);

    if (error) {
        return response.status(500).json({ error: "Usuário já cadastrado" });
    }
};