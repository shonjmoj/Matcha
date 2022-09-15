import { ChangeEventHandler, FC, useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";

const ImageHolder: FC = ({ ...rest }) => {
  const [file, setFile] = useState<File>();

  return (
    <div className="flex items-center justify-center h-48 gap-2 border-2 border-dashed rounded-md md:h-60">
      <input
        type="file"
        className="hidden opacity-70"
        accept="image/*"
        id="file"
        {...rest}
      />
      <label htmlFor="file" className="cursor-pointer">
        Add a photo
      </label>
      <AiOutlinePlus size={25} />
    </div>
  );
};
export default ImageHolder;
