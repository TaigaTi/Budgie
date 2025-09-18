import express from "express";
import { PrismaClient } from "../generated/prisma";

const router = express.Router();
const prisma = new PrismaClient();

router.get("/user/:id/transactions", async (req, res) => {
    const userId = Number(req.params.id);
    try {
        const transactions = await prisma.transaction.findMany({
            where: { userId },
            include: { Category: true },
        });
        res.json(transactions);
    } catch (error) {
        console.error("Error fetching transactions:", error);
        res.status(500).json({ error: "Something went wrong" });
    }
});

export default router;