import { PrismaClient, TransactionType } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('🌱 Seeding database...');

  // Create some categories
  const food = await prisma.category.create({
    data: { name: 'Food' },
  });

  const rent = await prisma.category.create({
    data: { name: 'Rent' },
  });

  const salary = await prisma.category.create({
    data: { name: 'Salary' },
  });

  // Create some users
  const user1 = await prisma.user.create({
    data: {
      name: 'Alice Johnson',
      email: 'alice@example.com',
    },
  });

  const user2 = await prisma.user.create({
    data: {
      name: 'Bob Smith',
      email: 'bob@example.com',
    },
  });

  // Create some transactions for Alice
  await prisma.transaction.createMany({
    data: [
      {
        title: 'Monthly Salary',
        description: 'Company payment',
        amount: 5000,
        date: new Date(),
        type: TransactionType.INCOME,
        userId: user1.id,
        Categoryid: salary.id, // 👈 match schema
      },
      {
        title: 'Grocery shopping',
        description: 'Bought fruits and veggies',
        amount: 120.5,
        date: new Date(),
        type: TransactionType.EXPENSE,
        userId: user1.id,
        Categoryid: food.id,
      },
    ],
  });

  // Create some transactions for Bob
  await prisma.transaction.createMany({
    data: [
      {
        title: 'Apartment Rent',
        description: 'Monthly rent payment',
        amount: 1200,
        date: new Date(),
        type: TransactionType.EXPENSE,
        userId: user2.id,
        Categoryid: rent.id, // 👈 match schema
      },
    ],
  });

  console.log('✅ Seeding completed!');
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
