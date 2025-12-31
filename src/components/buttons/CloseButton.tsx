import RoundButton from "./RoundButton.tsx";
import {Close} from "grommet-icons";

interface CloseButtonProps {
    onClick: () => void;
}

export default function CloseButton({onClick}: CloseButtonProps) {
    return (
        <RoundButton onClick={onClick} I={Close}/>
    )
}