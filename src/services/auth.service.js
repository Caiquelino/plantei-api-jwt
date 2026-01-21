import Usuario from "../models/Usuario.js";
import { gerarHash } from "../utils/hash.js";

export const registrarUsuario = async (payload) => {
    const senhaHash = await gerarHash(payload.senha);

    return Usuario.create({
        ...payload,
        senha: senhaHash,
    });
}   

export const autenticarUsuario = async (email, senha) => {
    const usuario = await Usuario.findOne({ where: { email } });
    if (!usuario) throw new Error("Usuário ou senha inválidos");

    const senhaValida = await compararHash(senha, usuario.senha);
    if (!senhaValida) throw new Error("Usuário ou senha inválidos");

    const token = jwt.sign(
        { id: usuario.id, email: usuario.email },
        jwtConfig.secret,
        { expiresIn: jwtConfig.expiresIn }
    );

    return { token, usuario };
};