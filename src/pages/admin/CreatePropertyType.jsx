/** @format */

import React from "react";
import { useForm } from "react-hook-form";
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
    formState: { errors },
  } = useForm();
  const handleCreatePropertyType = (data) => {
    console.log("data", data);
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
          id={"property-name"}
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
          id={"image-property"}
          label={"Image"}
          errors={errors}
          validate={{ required: "Need Fill This Field!" }}
          multiple={true}
          getImages={(images) => setValue("images", images)}
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
