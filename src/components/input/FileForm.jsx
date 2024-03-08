/** @format */

import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { apiUploadImages } from "~/apis/beyond";
import { GoTrash } from "react-icons/go";
import { AiOutlineLoading } from "react-icons/ai";
import { twMerge } from "tailwind-merge";
const FileForm = ({ label, id, errors, validate, multiple, getImages }) => {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { register, watch } = useForm();
  const handleUploadImage = async (files) => {
    let promises = [];
    let formData = new FormData();
    setIsLoading(true);
    for (let file of files) {
      formData.append("file", file);
      formData.append(
        "upload_preset",
        import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET
      );
      promises.push(apiUploadImages(formData));
    }

    const response = await Promise.all(promises);
    console.log("res", response);
    if (response && response.length > 0) {
      const imagesFormat = response.map((res) => ({
        id: res.data.asset_id,
        path: res.data.secure_url,
      }));

      setImages(imagesFormat);
    }
    setIsLoading(false);
  };
  useEffect(() => {
    if (watch(id) && watch(id) instanceof FileList && watch(id).length > 0) {
      handleUploadImage(watch(id));
    }
  }, [watch(id)]);

  useEffect(() => {
    if (images && images.length >= 0) getImages(images);
  }, [images]);

  const handleDeleteImage = (id) => {
    setImages((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <>
      <span className="block mb-[6px] text-sm font-medium text-gray-900 ">
        {label}
      </span>
      <div className="flex gap-2 select-none">
        <label
          htmlFor={id}
          className="border border-dashed w-[100px] h-[100px] flex items-center justify-center border-[#d9d9d9] hover:border-blue-500 transition-all delay-100 bg-gray-50 rounded-lg"
        >
          <div
            className={twMerge(
              `flex justify-center items-center flex-col gap-1 font-medium text-main-800 ${
                isLoading && "text-main-400"
              }`
            )}
          >
            {isLoading ? (
              <span className="animate-spin">
                <AiOutlineLoading />
              </span>
            ) : (
              <svg
                viewBox="64 64 896 896"
                focusable="false"
                data-icon="plus"
                width="1em"
                height="1em"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M482 152h60q8 0 8 8v704q0 8-8 8h-60q-8 0-8-8V160q0-8 8-8z"></path>
                <path d="M192 474h672q8 0 8 8v60q0 8-8 8H160q-8 0-8-8v-60q0-8 8-8z"></path>
              </svg>
            )}

            <span>Upload</span>
          </div>
          <input
            {...register(id, validate)}
            id={id}
            type="file"
            className="hidden"
            multiple={multiple}
            disabled={isLoading}
          />
        </label>
        {images && images.length > 0 && (
          <div className="flex items-center gap-2">
            {images.map((img) => (
              <div
                key={img?.id}
                className="w-[100px] relative h-[100px] rounded-lg p-2 border border-gray-400 group cursor-pointer"
              >
                <div
                  onClick={() => handleDeleteImage(img.id)}
                  className="invisible text-gray-200 text-[14px] flex items-center justify-center absolute inset-0 rounded-lg m-2 bg-overlay group-hover:visible"
                >
                  <GoTrash />
                </div>
                <img
                  src={img.path}
                  className="w-full h-full object-cover rounded-md"
                />
              </div>
            ))}
          </div>
        )}
      </div>
      {errors[id] && (
        <small className="text-[12px] text-error italic  ">
          {errors[id]?.message}
        </small>
      )}
    </>
  );
};

export default FileForm;
