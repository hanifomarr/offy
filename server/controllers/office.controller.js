import prisma from "../lib/prisma.js";

export const getOffices = async (req, res) => {
  try {
    const offices = await prisma.office.findMany();
    res.status(200).json(offices);
  } catch (error) {
    res.status(500).json({ message: "Not Okay" });
  }
};
export const getOfficeDetails = async (req, res) => {
  const { id } = req.params;
  try {
    const officeDetails = await prisma.office.findUnique({
      where: { id },
      include: {
        officeDetail: true,
        user: {
          select: {
            username: true,
            avatar: true,
          },
        },
      },
    });
    res.status(200).json(officeDetails);
  } catch (error) {
    res.status(500).json({ message: "Not Okay" });
  }
};
export const addOffice = async (req, res) => {
  const body = req.body;
  const tokenUserId = req.userId;
  try {
    const newOffice = await prisma.office.create({
      data: {
        ...body.officeData,
        userId: tokenUserId,
        officeDetail: {
          create: body.officeDetail,
        },
      },
    });
    res.status(200).json(newOffice);
  } catch (error) {
    console.log("🚀 ~ addOffice ~ error:", error);
    res.status(500).json({ message: "Not Okay" });
  }
};
export const updateOffice = (req, res) => {
  try {
    res.status(200).json({ message: "okay " });
  } catch (error) {
    res.status(500).json({ message: "Not Okay" });
  }
};
export const deleteOffice = async (req, res) => {
  const { id } = req.params;
  const tokenUserId = req.userId;
  try {
    const office = await prisma.office.findUnique({ where: { id } });

    if (office.userId !== tokenUserId)
      return res.status(403).json({ message: "Not Authorize" });

    await prisma.office.delete({
      where: { id },
    });
    res.status(200).json({ message: "Office has been deleted" });
  } catch (error) {
    res.status(500).json({ message: "Not Okay" });
  }
};
