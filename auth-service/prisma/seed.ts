import { PrismaClient } from '@prisma/client'
import { hash } from 'bcryptjs'
const prisma = new PrismaClient()

async function main() {
  const password = await hash('123456', 8)
  await prisma.user.createMany({
    data: [
      { id: 'clyb1o1p10000unb3twnuaqga', name: 'Alice Aluna', email: 'alice@unif.com', password, bio: 'Estudante de SI precisando de ajuda em ED2.' },
      { id: 'clyb1o46f0001unb343j7e02z', name: 'Beto Tutor', email: 'beto@unif.com', password, bio: 'Tutor de Cálculo e Física. Aluno do 8º período.' },
      { id: 'clyb1o5tf0002unb3b7y2h5lq', name: 'Carla Tutora', email: 'carla@unif.com', password, bio: 'Monitora de Programação.' },
    ]
  })
}
main().catch(e => {
  console.error(e)
  process.exit(1)
}).finally(async () => await prisma.$disconnect())