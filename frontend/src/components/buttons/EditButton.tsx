import {Edit} from "grommet-icons";
import RoundButton from "./RoundButton.tsx";

interface EditButtonProps {
    onClick: () => void;
}

export default function EditButton({onClick}: EditButtonProps) {
    return (
        <RoundButton onClick={onClick} I={Edit}/>
    )
}