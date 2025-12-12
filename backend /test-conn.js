// backend/test-conn.js
import prisma from './prismaClient.js'; // or ./prismaClient if using .ts with ts-node

async function main() {
  try {
    const any = await prisma.user.findMany({ take: 1 });
    console.log('Connection OK — sample users:', any);
  } catch (e) {
    console.error('Connection FAILED:', e.message || e);
  } finally {
    await prisma.$disconnect();
  }
}

main();
