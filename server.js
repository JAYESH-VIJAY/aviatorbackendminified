// main.js
import prisma from "./prisma/prisma.js";

const main = async () => {
  try {
     await prisma.crashedplane.create();
     await prisma.refer.create();
    await prisma.aviatoradmin.create({
      data: { username: "admin", password: "admin@123" },
    });
    // banksettings
  } catch (err) {
    //console.log(err.message);
  } finally {
    await prisma.$disconnect();
  }
};

main();
