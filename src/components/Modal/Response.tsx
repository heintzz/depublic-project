import { Dispatch, SetStateAction } from "react";
import { AiFillCloseCircle } from "react-icons/ai";

interface ModalResponseProps {
  show: Dispatch<SetStateAction<boolean>>;
  message: string;
  instruction: string;
}

export default function Response(props: ModalResponseProps) {
  const { show, message, instruction } = props;
  const handleClick = () => {
    show(false);
  };

  return (
    <>
      <AiFillCloseCircle
        size="2em"
        onClick={handleClick}
        className="absolute top-3 right-3 cursor-pointer"
      />
      <p className="font-semibold">{message}</p>
      <p>{instruction}</p>
    </>
  );
}
