import supabase from "../config/supabase.js";
import bcrypt from "bcrypt";
import cors from "cors";
import jwt from "jsonwebtoken";

//Cadastro de Usuário
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
        return response.status(500).json({ erro: "Erro:", error });
    }

    response.status(201).json({
        mensagem: "Usuário criado com sucesso!"
    });
};

//Login
const authentication = async (request, response) => {
    //Desestruturação do Objeto (request.body)
    const { email, senha } = request.body;
    

    //Abre a conexão com o supabase
    const { data: user, error } = await supabase.from("users")
    .select("*")
    .eq("email", email)
    .single();

    if(error || !user ){
        return response.status(401).json({
             mensagem: "Credenciais inválidas" });
    }

    //Criptografa a senha e compara com a do banco de dados
    const senhaEnviada = await bcrypt.compare(senha, user.senha);

    if (!senhaEnviada) {
        return response.status(401).json({
             mensagem: "Credenciais inválidas" });
    }

    // Tudo dando certo? Gera o token
    const token = jwt.sign(
        {id:user.id},
        process.env.JWT_SECRET,
        {expiresIn: "1d"}
    );

    // Devolve o token gerado
    response.json({token});
};