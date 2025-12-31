import RoundButton from "./RoundButton.tsx";
import {Hide, View} from "grommet-icons";

interface DeleteButtonProps {
    onClick: () => void;
    isHidden: boolean;
}

export default function HideButton({onClick, isHidden}: DeleteButtonProps) {
    return (
        <RoundButton onClick={onClick} I={isHidden ? Hide : View}/>
    )
}