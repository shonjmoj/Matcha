import { ChangeEvent } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { addPicture } from "../../redux/profilePictures";
import { RootState } from "../../redux/store";
import supabase from "../../utils/supabase";
import crypto from "crypto";
const UploadPicture = () => {
  const dispatch = useDispatch();

  const handleUploadPicture = async (e: ChangeEvent<HTMLInputElement>) => {
    let file;
    if (e.target.files) file = e.target.files[0];

    const { data, error } = await supabase.storage
      .from("images")
      .upload("public/" + crypto.randomBytes(4).toString("hex"), file as File);
    if (data) dispatch(addPicture(data.Key));
    else console.log(error);
  };
  return (
    <div className="flex items-center justify-center h-48 gap-2 border-2 border-dashed rounded-md md:h-60">
      <input
        type="file"
        className="hidden opacity-70"
        accept="image/*"
        onChange={handleUploadPicture}
        id="file"
      />
      <label htmlFor="file" className="cursor-pointer">
        Add a photo
      </label>
      <AiOutlinePlus size={25} />
    </div>
  );
};
export default UploadPicture;
