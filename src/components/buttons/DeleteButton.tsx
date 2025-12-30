import RoundButton from "./RoundButton.tsx";
import {Trash} from "grommet-icons";

interface DeleteButtonProps {
    onClick: () => void;
}

export default function DeleteButton({onClick}: DeleteButtonProps) {
    return (
        <RoundButton onClick={onClick} I={Trash}/>
    )
}