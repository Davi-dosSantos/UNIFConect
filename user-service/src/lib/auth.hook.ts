import { FastifyRequest, FastifyReply } from 'fastify';
import jwt from 'jsonwebtoken'; // Importamos a biblioteca base diretamente

export async function authenticate(request: FastifyRequest, reply: FastifyReply) {
  try {
    // Passo 1: Extrair o cabeçalho de autorização
    const authHeader = request.headers.authorization;

    if (!authHeader) {
      // Se não houver cabeçalho, lançamos um erro.
      throw new Error('Cabeçalho de autorização ausente');
    }

    // Passo 2: Extrair apenas o token, removendo o "Bearer "
    const token = authHeader.split(' ')[1];

    if (!token) {
      throw new Error('Token mal formatado. O formato esperado é: Bearer <token>');
    }

    // Passo 3: Obter o segredo do ambiente
    const secret = process.env.JWT_SECRET;

    if (!secret) {
      throw new Error('JWT_SECRET não está configurado no servidor');
    }

    // LOG FINAL PARA TER 100% DE CERTEZA
    console.log(`[UserService Hook] Verificando token com o segredo: [${secret}]`);

    // Passo 4: VERIFICAÇÃO MANUAL USANDO A BIBLIOTECA 'jsonwebtoken'
    const decodedPayload = jwt.verify(token, secret);

    // Passo 5: (Opcional, mas boa prática) Anexar o payload decodificado ao request
    // para que as rotas possam usá-lo.
    request.user = decodedPayload;

  } catch (err) {
    // Se qualquer um dos passos acima falhar, o erro será capturado aqui.
    // Vamos logar o erro REAL e detalhado.
    console.error("### ERRO NA VERIFICAÇÃO MANUAL DO JWT ###", err);

    // E enviar uma resposta clara para o cliente.
    reply.status(401).send({ message: 'Token inválido ou expirado', error: (err as Error).message });
  }
}