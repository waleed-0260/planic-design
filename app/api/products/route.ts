import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "@/lib/MongoDb";
import { Product } from "@/models/Products";

export async function GET(req: NextRequest) {
  try {
    await connectDB();
    const products = await Product.find(); // or with filters
    return NextResponse.json({ success: true, data: products });
  } catch (error) {
    console.error("Products fetch error:", error);
    return NextResponse.json({ success: false, message: "Failed to fetch products" }, { status: 500 });
  }
}