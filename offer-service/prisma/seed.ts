import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

async function main() {
  const calculo = await prisma.subject.upsert({ where: { name: 'Cálculo I' }, update: {}, create: { name: 'Cálculo I' } });
  const fisica = await prisma.subject.upsert({ where: { name: 'Física II' }, update: {}, create: { name: 'Física II' } });
  const poo = await prisma.subject.upsert({ where: { name: 'POO' }, update: {}, create: { name: 'POO' } });

  const betoTutorId = 'clyb1o46f0001unb343j7e02z'; // ID do seed do AuthService
  const carlaTutorId = 'clyb1o5tf0002unb3b7y2h5lq';

  await prisma.offer.createMany({
    data: [
      { title: 'Monitoria de Limites e Derivadas', description: 'Ajudo com listas e provas.', price: 25.50, userId: betoTutorId, subjectId: calculo.id },
      { title: 'Aulas de Eletromagnetismo', description: 'Foco em exercícios do Halliday.', price: 30.00, userId: betoTutorId, subjectId: fisica.id },
      { title: 'Tira-dúvidas de Java', description: 'Polimorfismo, Herança e Encapsulamento.', price: 20.00, userId: carlaTutorId, subjectId: poo.id },
    ]
  })
}
main().catch(e => console.error(e)).finally(async () => await prisma.$disconnect())