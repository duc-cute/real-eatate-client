/** @format */

import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { apiCreatePropertyType } from "~/apis/propertyType";
import {
  Button,
  FileForm,
  InputForm,
  TextAreaForm,
  TinyEditor,
  Title,
} from "~/components";
import icons from "~/ultils/icons";
const { FiPlusCircle } = icons;
const CreatePropertyType = () => {
  const {
    register,
    reset,
    handleSubmit,
    setValue,
    setError,
    formState: { errors },
    clearErrors,
  } = useForm();
  const handleCreatePropertyType = async (data) => {
    const { images, ...ortherData } = data;
    console.log("image", images);
    if (images && images.length < 1) {
      setError("images", {
        message: "Need Fill This Field",
        type: "required",
      });
    } else {
      console.log("lot");
      const res = await apiCreatePropertyType({
        ...ortherData,
        image: images[0]?.path,
      });
      console.log("res", res);

      if (res.success) toast.success("Create Property Type Is Successfully");
      else toast.error(res.mes);
    }
  };
  const getImages = (images) => {
    clearErrors("images");
    setValue("images", images);
  };
  return (
    <div className="font-main text-main-900 h-full">
      <Title title={"Create New Property Type"}>
        <Button
          handleOnClick={handleSubmit(handleCreatePropertyType)}
          type="submit"
          className={`bg-main-500 items-center`}
        >
          <FiPlusCircle />
          Create
        </Button>
      </Title>
      <form className="px-3 pt-3 flex flex-col gap-3 max-h-body-admin overflow-y-auto ">
        <InputForm
          id={"name"}
          label={"Property Type Name"}
          register={register}
          errors={errors}
          validate={{ required: "This Fill This Field!" }}
        />
        <TextAreaForm
          id={"description"}
          label={"Description"}
          register={register}
          validate={{ required: "Need Fill This Field!" }}
          errors={errors}
        />
        <FileForm
          id={"images"}
          register={register}
          label={"Image"}
          errors={errors}
          validate={{ required: "Need Fill This Field!" }}
          getImages={getImages}
        />
        {/* <TinyEditor
          id={"hihi"}
          label={"Tiny"}
          validate={{ required: "Need Fill This Field" }}
          register={register}
          errors={errors}
          setValue={setValue}
        /> */}
      </form>
    </div>
  );
};

export default CreatePropertyType;
