"use client"
import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
interface FormData {
  heading: string;
  tagline: string;
  tags: string;
  solution: string;
  challenge: string;
  description: string;
  solutionImage: FileList;
  challengeImage: FileList;
  descriptionImage: FileList;
}

const PortfolioForm = () => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm<FormData>();

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    const formData = new FormData();
    formData.append('heading', data.heading);
    formData.append('tagline', data.tagline);
    formData.append('tags', data.tags);
    formData.append('solution', data.solution);
    formData.append('challenge', data.challenge);
    formData.append('description', data.description);
  
    // Images
    formData.append('solutionImage', data.solutionImage[0]);
    formData.append('challengeImage', data.challengeImage[0]);
    formData.append('descriptionImage', data.descriptionImage[0]);
  
    try {
      const response = await fetch('https://dominobackend.vercel.app/add-portfolio', {
        method: 'POST',
        body: formData,
      });
  
      if (!response.ok) {
        throw new Error(`Failed to submit: ${response.statusText}`);
      }
  
      const result = await response.json();
      console.log('Success:', result);
      alert('Portfolio added successfully!');
      reset(); // Reset the form after successful submission
    } catch (error) {
      // console.error('Error:', error);
      alert('Failed to add portfolio. Please try again.');
    }
  };

  return (
    <div className='w-[80%] absolute right-0 p-5'>

    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div>
        <label className="block font-medium">Heading</label>
        <input
          type="text"
          {...register('heading', { required: true })}
          className="w-full border rounded px-3 py-2"
        />
        {errors.heading && <p className="text-red-500">Heading is required.</p>}
      </div>

      <div>
        <label className="block font-medium">Tagline</label>
        <input
          type="text"
          {...register('tagline', { required: true })}
          className="w-full border rounded px-3 py-2"
        />
        {errors.tagline && <p className="text-red-500">Tagline is required.</p>}
      </div>

      <div>
        <label className="block font-medium">Tags</label>
        <input
          type="text"
          {...register('tags', { required: true })}
          placeholder="Enter comma-separated tags"
          className="w-full border rounded px-3 py-2"
        />
        {errors.tags && <p className="text-red-500">Tags are required.</p>}
      </div>

      <div>
        <label className="block font-medium">Solution</label>
        <textarea
          {...register('solution', { required: true })}
          className="w-full border rounded px-3 py-2"
        ></textarea>
        {errors.solution && <p className="text-red-500">Solution is required.</p>}
      </div>

      <div>
        <label className="block font-medium">Challenge</label>
        <textarea
          {...register('challenge', { required: true })}
          className="w-full border rounded px-3 py-2"
        ></textarea>
        {errors.challenge && <p className="text-red-500">Challenge is required.</p>}
      </div>

      <div>
        <label className="block font-medium">Description</label>
        <textarea
          {...register('description', { required: true })}
          className="w-full border rounded px-3 py-2"
        ></textarea>
        {errors.description && <p className="text-red-500">Description is required.</p>}
      </div>

      {/* File Uploads */}
      <div>
        <label className="block font-medium">Solution Image</label>
        <input
          type="file"
          {...register('solutionImage', { required: true })}
          className="w-full"
          accept="image/*"
        />
        {errors.solutionImage && <p className="text-red-500">Solution image is required.</p>}
      </div>

      <div>
        <label className="block font-medium">Challenge Image</label>
        <input
          type="file"
          {...register('challengeImage', { required: true })}
          className="w-full"
          accept="image/*"
        />
        {errors.challengeImage && <p className="text-red-500">Challenge image is required.</p>}
      </div>

      <div>
        <label className="block font-medium">Description Image</label>
        <input
          type="file"
          {...register('descriptionImage', { required: true })}
          className="w-full"
          accept="image/*"
        />
        {errors.descriptionImage && <p className="text-red-500">Description image is required.</p>}
      </div>

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
