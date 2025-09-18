import { PrismaClient } from '../src/generated/prisma';

const prisma = new PrismaClient();

async function main() {
  // Create categories
  const categories = await prisma.category.createMany({
    data: [
      { name: 'Salary' },
      { name: 'Freelance' },
      { name: 'Groceries' },
      { name: 'Utilities' },
      { name: 'Entertainment' },
    ],
  });

  // Create a user
  const user = await prisma.user.create({
    data: {
      name: 'Jane Doe',
      email: 'jane@example.com',
    },
  });

  // Get categories for relation
  const allCategories = await prisma.category.findMany();

  // Create transactions
interface TransactionSeedData {
    title: string;
    description: string;
    amount: number;
    date: Date;
    type: 'INCOME' | 'EXPENSE';
    Categoryid: number;
    userId: number;
}

await prisma.transaction.createMany({
    data: [
        {
            title: 'Monthly salary',
            description: 'Main job salary',
            amount: 3500,
            date: new Date('2024-01-01'),
            type: 'INCOME',
            Categoryid: allCategories.find((c: { name: string; id: number }) => c.name === 'Salary')!.id,
            userId: user.id,
        },
        {
            title: 'Web design project',
            description: 'Freelance project for client',
            amount: 500,
            date: new Date('2024-01-19'),
            type: 'INCOME',
            Categoryid: allCategories.find((c: { name: string; id: number }) => c.name === 'Freelance')!.id,
            userId: user.id,
        },
        {
            title: 'Supermarket',
            description: 'Groceries for the week',
            amount: 120,
            date: new Date('2024-01-10'),
            type: 'EXPENSE',
            Categoryid: allCategories.find((c: { name: string; id: number }) => c.name === 'Groceries')!.id,
            userId: user.id,
        },
        {
            title: 'Electricity bill',
            description: 'Monthly utilities',
            amount: 60,
            date: new Date('2024-01-12'),
            type: 'EXPENSE',
            Categoryid: allCategories.find((c: { name: string; id: number }) => c.name === 'Utilities')!.id,
            userId: user.id,
        },
        {
            title: 'Movie night',
            description: 'Cinema with friends',
            amount: 30,
            date: new Date('2024-01-15'),
            type: 'EXPENSE',
            Categoryid: allCategories.find((c: { name: string; id: number }) => c.name === 'Entertainment')!.id,
            userId: user.id,
        },
    ] as TransactionSeedData[],
});

  console.log('Database seeded!');
}

main()
  .catch(e => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });