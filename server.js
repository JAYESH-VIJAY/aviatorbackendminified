// main.js
import prisma from "./prisma/prisma.js";

const main = async () => {
  try {
    await prisma.crashedplane.create();
    await prisma.refer.create();
    // banksettings
  } catch (err) {
    //console.log(err.message);
  } finally {
    await prisma.$disconnect();
  }
};

main();
