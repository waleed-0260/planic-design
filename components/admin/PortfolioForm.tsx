"use client";
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import "react-quill/dist/quill.snow.css";

interface FormData {
  heading: string;
  tagline: string;
  tags: string;
  description: string;
  masterFloorImage: FileList;
  panelFloorImage: FileList;
  challenge: string;
  mapImage: FileList;
  renderingImage: FileList;
  additionalImage: FileList;
  solution: string;
  solutionImage: FileList;
}

const PortfolioForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    const formData = new FormData();

    // Append text fields
    formData.append("heading", data.heading);
    formData.append("tagline", data.tagline);
    formData.append("tags", data.tags);
    formData.append("description", data.description);
    formData.append("challenge", data.challenge);
    formData.append("solution", data.solution);

    // Append file fields
    formData.append("masterFloorImage", data.masterFloorImage[0]);
    formData.append("panelFloorImage", data.panelFloorImage[0]);
    formData.append("mapImage", data.mapImage[0]);
    formData.append("renderingImage", data.renderingImage[0]);
    formData.append("additionalImage", data.additionalImage[0]);
    formData.append("solutionImage", data.solutionImage[0]);

    try {
      const response = await fetch("https://dominobackend.vercel.app/add-portfolio", {
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
    }
  };

  return (
    <div className="w-[80%] absolute right-0 p-5">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {/* Text fields */}
        <div>
          <label className="block font-medium">Heading</label>
          <input
            type="text"
            {...register("heading", { required: true })}
            className="w-full border rounded px-3 py-2"
          />
          {errors.heading && <p className="text-red-500">Heading is required.</p>}
        </div>

        <div>
          <label className="block font-medium">Tagline</label>
          <input
            type="text"
            {...register("tagline", { required: true })}
            className="w-full border rounded px-3 py-2"
          />
          {errors.tagline && <p className="text-red-500">Tagline is required.</p>}
        </div>

        <div>
          <label className="block font-medium">Tags</label>
          <input
            type="text"
            {...register("tags", { required: true })}
            placeholder="Enter comma-separated tags"
            className="w-full border rounded px-3 py-2"
          />
          {errors.tags && <p className="text-red-500">Tags are required.</p>}
        </div>

        <div>
          <label className="block font-medium">Description</label>
          <textarea
            {...register("description", { required: true })}
            className="w-full border rounded px-3 py-2"
          ></textarea>
          {errors.description && <p className="text-red-500">Description is required.</p>}
        </div>

        <div>
          <label className="block font-medium">Challenge</label>
          <textarea
            {...register("challenge", { required: true })}
            className="w-full border rounded px-3 py-2"
          ></textarea>
          {errors.challenge && <p className="text-red-500">Challenge is required.</p>}
        </div>

        <div>
          <label className="block font-medium">Solution</label>
          <textarea
            {...register("solution", { required: true })}
            className="w-full border rounded px-3 py-2"
          ></textarea>
          {errors.solution && <p className="text-red-500">Solution is required.</p>}
        </div>

        {/* File upload fields */}
        {[
          { name: "masterFloorImage", label: "Master Floor Image" },
          { name: "panelFloorImage", label: "Panel Floor Image" },
          { name: "mapImage", label: "Map Image" },
          { name: "renderingImage", label: "Rendering Image" },
          { name: "additionalImage", label: "Additional Image" },
          { name: "solutionImage", label: "Solution Image" },
        ].map(({ name, label }) => (
          <div key={name}>
            <label className="block font-medium">{label}</label>
            <input
              type="file"
              {...register(name as keyof FormData, { required: true })}
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
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default PortfolioForm;
