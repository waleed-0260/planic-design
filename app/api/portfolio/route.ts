import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "@/lib/Mongodb";
// import cloudinary from "@/lib/cloudinary"; 
import cloudinary from "@/lib/Cloudinary";
// import { Portfolio } from "@/models/portfolio";
import {portfolio} from "@/models/portfolio"

export async function POST(req: NextRequest) {
  try {
    await connectDB();
    const formData = await req.formData();

    // 1. Handle images
    const masterFile = formData.get("masterFloorImage") as File;
    const panelFile = formData.get("panelFloorImage") as File | null;
    const mapFile = formData.get("mapImage") as File | null;
    const renderingFile = formData.get("renderingImage") as File | null;
    const additionalFile = formData.get("additionalImage") as File | null;

    const uploadImage = async (file: File | null, folder: string) => {
      if (!file) return null;

      const arrayBuffer = await file.arrayBuffer();
      const buffer = Buffer.from(arrayBuffer);

      const result = await new Promise<any>((resolve, reject) => {
        const stream = cloudinary.uploader.upload_stream(
          { folder },
          (error:any, result:any) => {
            if (error) reject(error);
            else resolve(result);
          }
        );
        stream.end(buffer);
      });

      return result.secure_url;
    };

    const masterFloorImage = await uploadImage(masterFile, "portfolio");
    const panelFloorImage = await uploadImage(panelFile, "portfolio");
    const mapImage = await uploadImage(mapFile, "portfolio");
    const renderingImage = await uploadImage(renderingFile, "portfolio");
    const additionalImage = await uploadImage(additionalFile, "portfolio");

    if (!masterFloorImage) {
      return NextResponse.json(
        { success: false, message: "Master Floor Image is required." },
        { status: 400 }
      );
    }

    // 2. Parse text fields
    const newPortfolio = await portfolio.create({
      heading: formData.get("heading"),
      category: JSON.parse(formData.get("category") as string || "[]"), // Must be stringified array from client
      tagline: formData.get("tagline"),
      description: formData.get("description"),
      masterFloorImage,
      panelFloorImage,
      mapImage,
      renderingImage,
      additionalImage,
      challenge: formData.get("challenge"),
      solution: formData.get("solution"),
      value: formData.get("value"),
      clientName: formData.get("clientName"),
      location: formData.get("location"),
      date: formData.get("date"),
      role: formData.get("role"),
    });

    return NextResponse.json({ success: true, data: newPortfolio }, { status: 201 });
  } catch (error: any) {
    console.error("Portfolio upload error:", error);
    return NextResponse.json(
      { success: false, message: "Upload failed", error: error.message },
      { status: 500 }
    );
  }
}



export async function GET(req: NextRequest) {
  try {
    await connectDB();
    const products = await portfolio.find({}); // or with filters
    return NextResponse.json({ success: true, data: products });
  } catch (error) {
    console.error("Products fetch error:", error);
    return NextResponse.json({ success: false, message: "Failed to fetch products" }, { status: 500 });
  }
}