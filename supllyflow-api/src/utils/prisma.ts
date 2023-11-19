import { PrismaClient } from '@prisma/client';
import { readReplicas } from "@prisma/extension-read-replicas"

const prisma = new PrismaClient()

export default prisma;
