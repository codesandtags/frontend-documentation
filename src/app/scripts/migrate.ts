import { connectDB } from "../lib/mongodb";
import { Resource } from "../models/Resource";
import { resources } from "../data/resources";

async function migrate() {
  await connectDB();

  try {
    await Resource.deleteMany({}); // Clear existing data
    await Resource.insertMany(resources);
    console.log("Data migration successful");
  } catch (error) {
    console.error("Migration failed:", error);
  }
  process.exit();
}

migrate();
