import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "@/lib/Mongodb";
// import Portfolio from "@/models/portfolio";
import {portfolio} from "@/models/portfolio"

// GET single product by ID
export async function GET(req: NextRequest, {
  params,
}: {
  params: Promise<{ id: string }>
}) {
  try {
    const {id} = await params;
    await connectDB();
    const product = await portfolio.findById(id);

    if (!product) {
      return NextResponse.json({ success: false, message: 'Product not found' }, { status: 404 });
    }

    return NextResponse.json({ success: true, data: product });
  } catch (error) {
    console.error("GET product error:", error);
    return NextResponse.json({ success: false, message: 'Failed to fetch product' }, { status: 500 });
  }
}