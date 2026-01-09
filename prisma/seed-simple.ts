import { PrismaClient } from "@prisma/client";
import { hash } from "bcryptjs";

const prisma = new PrismaClient();

async function main() {
  console.log("Start seeding...");

  // Create Admin User
  const hashedPassword = await hash("admin123", 12);
  
  const admin = await prisma.user.upsert({
    where: { email: "admin@gym.com" },
    update: {},
    create: {
      email: "admin@gym.com",
      name: "Admin User",
      password: hashedPassword,
      role: "ADMIN",
      phone: "+1234567890",
    },
  });

  // Create Regular User
  const userPassword = await hash("user123", 12);
  
  const user = await prisma.user.upsert({
    where: { email: "user@gym.com" },
    update: {},
    create: {
      email: "user@gym.com",
      name: "John Doe",
      password: userPassword,
      role: "USER",
      phone: "+0987654321",
    },
  });

  // Create Membership Plans
  const basicPlan = await prisma.membershipPlan.upsert({
    where: { name: "Basic" },
    update: {},
    create: {
      name: "Basic",
      description: "Perfect for beginners",
      price: 29.99,
      duration: 30,
      features: JSON.stringify([
        "Access to gym equipment",
        "Locker room access",
        "Free fitness assessment",
      ]),
      isPopular: false,
    },
  });

  const standardPlan = await prisma.membershipPlan.upsert({
    where: { name: "Standard" },
    update: {},
    create: {
      name: "Standard",
      description: "Most popular choice",
      price: 59.99,
      duration: 30,
      features: JSON.stringify([
        "All Basic features",
        "Group classes included",
        "1 personal training session",
        "Nutrition consultation",
      ]),
      isPopular: true,
    },
  });

  const premiumPlan = await prisma.membershipPlan.upsert({
    where: { name: "Premium" },
    update: {},
    create: {
      name: "Premium",
      description: "Ultimate fitness experience",
      price: 99.99,
      duration: 30,
      features: JSON.stringify([
        "All Standard features",
        "Unlimited personal training",
        "Custom meal plans",
        "Priority class booking",
        "Sauna & spa access",
      ]),
      isPopular: false,
    },
  });

  console.log("Seeding finished.");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
