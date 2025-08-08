import { NextRequest, NextResponse } from "next/server";
// import { connectDB } from "@/lib/Mongodb";
import { connectDB } from "@/lib/MongoDb";
// import cloudinary from "@/lib/cloudinary"; 
import cloudinary from "@/lib/Cloudinary";
// import { Portfolio } from "@/models/portfolio";
import {portfolio} from "@/models/portfolio"

export async function POST(req: NextRequest) {
  try {
    await connectDB();
    const formData = await req.formData();

    // Map of form field name -> schema field name
    const imageFields: { [key: string]: string } = {
      masterFloorImage: "masterFloorImage",
      panelFloorImage: "panelFloorImage",
      mapImage: "mapImage",
      renderingImage: "renderingImage",
      additionalImage: "additionalImage"
    };

    const uploadedImages: Record<string, string | null> = {};

    for (const [fieldName, schemaField] of Object.entries(imageFields)) {
      const file = formData.get(fieldName) as File | null;

      if (file && file.size > 0 && file.type) {
        try {
          const arrayBuffer = await file.arrayBuffer();
          const buffer = Buffer.from(arrayBuffer);

          const uploaded = await new Promise<any>((resolve, reject) => {
            const stream = cloudinary.uploader.upload_stream(
              { folder: "portfolio" },
              (error, result) => {
                if (error) reject(error);
                else resolve(result);
              }
            );
            stream.end(buffer);
          });

          uploadedImages[schemaField] = uploaded.secure_url;
        } catch (uploadError) {
          console.error(`Cloudinary upload error for ${schemaField}:`, uploadError);
          return NextResponse.json(
            { success: false, message: `Image upload failed for ${schemaField}.`, error: uploadError },
            { status: 500 }
          );
        }
      } else {
        uploadedImages[schemaField] = null; // No image uploaded for this field
      }
    }

    if (!uploadedImages.masterFloorImage) {
      return NextResponse.json(
        { success: false, message: "Master Floor Image is required." },
        { status: 400 }
      );
    }

    // Create portfolio
    const newPortfolio = await portfolio.create({
      heading: formData.get("heading"),
      category: JSON.parse(formData.get("category") as string || "[]"),
      tagline: formData.get("tagline"),
      description: formData.get("description"),
      ...uploadedImages, // Spread all uploaded image URLs
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