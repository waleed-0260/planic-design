"use client";
import React, { useState, useEffect } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import "react-quill/dist/quill.snow.css";
import TagsInput from 'react-tagsinput'
import 'react-tagsinput/react-tagsinput.css'
interface FormData {
  heading: string;
  category: string[];
  tagline: string;
  // tags: string;
  description: string;
  solution: string,
  value: string,
  masterFloorImage: FileList;
  panelFloorImage: FileList;
  challenge: string;
  mapImage: FileList;
  renderingImage: FileList;
  additionalImage: FileList;
  clientName: string;
  date: string;
  location: string;
  role: string;
}

const PortfolioForm = () => {
    const [tags, setTags] = useState<string[]>([]);
      const [inputValue, setInputValue] = useState("");
  const[disable, setDisabled] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm<FormData>();

    // Keep tags synced with react-hook-form
useEffect(() => {
  setValue("category", inputValue.split(",").map(tag => tag.trim()).filter(tag => tag));
}, [inputValue, setValue]);

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    setDisabled(true);
    const formData = new FormData();
    // Append text fields
    formData.append("heading", data.heading);
    data.category.forEach((tag) => formData.append("category[]", tag));
    formData.append("tagline", data.tagline);
    // formData.append("tags", data.tags);
    formData.append("description", data.description);
    formData.append("challenge", data.challenge);
    formData.append("solution", data.solution);
    formData.append("value", data.value);
    formData.append("clientName", data.clientName);
    formData.append("date", data.date);
    formData.append("location", data.location);
    formData.append("role", data.role);

    // Append file fields
    formData.append("masterFloorImage", data.masterFloorImage[0]);
    if (data.panelFloorImage) formData.append("panelFloorImage", data.panelFloorImage[0]);
    if (data.mapImage) formData.append("mapImage", data.mapImage[0]);
    if (data.renderingImage) formData.append("renderingImage", data.renderingImage[0]);
    if (data.additionalImage) formData.append("additionalImage", data.additionalImage[0]);

    try {
      const response = await fetch("/api/portfolo", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error(`Failed to submit: ${response.statusText}`);
      }

      const result = await response.json();
      console.log("Success:", result);
      alert("Portfolio added successfully!");
      reset(); // Reset the form after successful submission
    } catch (error) {
      console.error("Error:", error);
      alert("Failed to add portfolio. Please try again.");
      setDisabled(false)
    } finally {
      setDisabled(false)
    }
  };

  return (
    <div className="w-[75%] absolute right-0 p-5">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {/* Text fields */}
        <div>
          <label className="block font-medium">Heading *</label>
          <input
            type="text"
            {...register("heading", { required: true })}
            className="w-full border rounded px-3 py-2"
          />
          {errors.heading && <p className="text-red-500">Heading is required.</p>}
        </div>

        <div>
          <label className="block font-medium">Category *</label>
          <input
    type="text"
    value={inputValue}
    onChange={(e) => setInputValue(e.target.value)} // ✅ allow commas
    onBlur={() => {
      const finalTags = inputValue
        .split(",")
        .map((tag) => tag.trim())
        .filter((tag) => tag);
      setTags(finalTags);
    }}
    placeholder="Type tags separated by commas"
    className="w-full border rounded px-3 py-2"
  />
  {errors.category && <p className="text-red-500">Category is required.</p>}
        </div>

        <div>
          <label className="block font-medium">Tagline *</label>
          <input
            type="text"
            {...register("tagline", { required: true })}
            className="w-full border rounded px-3 py-2"
          />
          {errors.tagline && <p className="text-red-500">Tagline is required.</p>}
        </div>

        {/* <div>
          <label className="block font-medium">Tags</label>
          <input
            type="text"
            {...register("tags")}
            placeholder="Enter comma-separated tags"
            className="w-full border rounded px-3 py-2"
          />
        </div> */}

        <div>
          <label className="block font-medium">Description *</label>
          <textarea
            {...register("description", { required: true })}
            className="w-full border rounded px-3 py-2"
          ></textarea>
          {errors.description && <p className="text-red-500">Description is required.</p>}
        </div>

        <div>
          <label className="block font-medium">Challenge</label>
          <textarea
            {...register("challenge")}
            className="w-full border rounded px-3 py-2"
          ></textarea>
        </div>
        <div>
          <label className="block font-medium">Solution</label>
          <textarea
            {...register("solution")}
            className="w-full border rounded px-3 py-2"
          ></textarea>
        </div>
        <div>
          <label className="block font-medium">Value</label>
          <textarea
            {...register("value")}
            className="w-full border rounded px-3 py-2"
          ></textarea>
        </div>

        <div>
          <label className="block font-medium">Client Name *</label>
          <input
            type="text"
            {...register("clientName", { required: true })}
            className="w-full border rounded px-3 py-2"
          />
          {errors.clientName && <p className="text-red-500">Client Name is required.</p>}
        </div>

        <div>
          <label className="block font-medium">Date *</label>
          <input
            type="date"
            {...register("date")}
            className="w-full border rounded px-3 py-2"
          />
          {/* {errors.date && <p className="text-red-500">Date is required.</p>} */}
        </div>

        <div>
          <label className="block font-medium">Location *</label>
          <input
            type="text"
            {...register("location", { required: true })}
            className="w-full border rounded px-3 py-2"
          />
          {errors.location && <p className="text-red-500">Location is required.</p>}
        </div>

        <div>
          <label className="block font-medium">Role</label>
          <input
            type="text"
            {...register("role")}
            className="w-full border rounded px-3 py-2"
          />
        </div>

        {/* File upload fields */}
        {[ 
          { name: "masterFloorImage", label: "Master Floor Image" },
          { name: "panelFloorImage", label: "Panel Floor Image" },
          { name: "mapImage", label: "Map Image" },
          { name: "renderingImage", label: "Rendering Image" },
          { name: "additionalImage", label: "Additional Image" },
        ].map(({ name, label }) => (
          <div key={name}>
            <label className="block font-medium">{label}</label>
            <input
              type="file"
              {...register(name as keyof FormData, name === "masterFloorImage" ? { required: true } : {})}
              className="w-full"
              accept="image/*"
            />
            {errors[name as keyof FormData] && (
              <p className="text-red-500">{label} is required.</p>
            )}
          </div>
        ))}

        <button
          type="submit"
          className="px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          disabled={disable}
        >
          {disable ? "Submitting..." : "Submit"}
        </button>
      </form>
    </div>
  );
};

export default PortfolioForm;
