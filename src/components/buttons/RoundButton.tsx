import {type Icon} from "grommet-icons";

interface RoundButtonProps {
    onClick: () => void;
    text?: string;
    I?: Icon
}

export default function RoundButton({onClick, text, I}: RoundButtonProps) {
    return (
        <button
            onClick={onClick}
            className='inline-flex justify-between items-center bg-gray-200 hover:bg-gray-400 rounded-full gap-2 p-1'>
            {text}
            {I && <I size='small'/>}
        </button>
    )
}