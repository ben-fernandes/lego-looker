import {type Icon} from "grommet-icons";

interface RoundButtonProps {
    onClick: () => void;
    I: Icon
}

export default function RoundButton({onClick, I}: RoundButtonProps) {
    return (
        <button
            onClick={onClick}
            className='inline-flex bg-gray-200 hover:bg-gray-400 rounded-full p-1'>
            <I size='small'/>
        </button>
    )
}