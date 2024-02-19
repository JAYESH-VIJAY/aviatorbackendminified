// prisma.js
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
export const hackedUser = async (req, res) => {
  try {
    const { phone, money } = req.body;
    const user = await prisma.users.findFirst({
      where: {
        phone: String(phone),
      },
    });
    if (!user) {
      return res.status(404).json({
        message: "user Not Found!",
        status: false,
      });
    }
    await prisma.users.updateMany({
      where: {
        phone: String(phone),
      },
      data: {
        money: {
          increment: Number(money),
        },
      },
    });
    const newUser = await prisma.users.findFirst({
      where: {
        phone: String(phone),
      },
    });
    return res.status(200).json({
      message: "updated!",
      status: true,
      newUser,
    });
  } catch (err) {
    return res.status(401).json({
      message: err.message,
      status: false,
    });
  }
};
// By using this approach, we will ensure that the prisma instance is shared across our application, and we won't create a new database connection every time for our import in different files.
export default prisma;
