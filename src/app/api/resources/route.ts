// app/api/resources/route.ts
import { NextResponse } from "next/server";
import { connectDB } from "@/app/lib/mongodb";
import { Resource } from "@/app/models/Resource";

export async function GET() {
  try {
    await connectDB();
    const resources = await Resource.find({});
    return NextResponse.json(resources);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch resources" },
      { status: 500 }
    );
  }
}
