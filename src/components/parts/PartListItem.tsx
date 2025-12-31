import EditButton from "../buttons/EditButton.tsx";
import DeleteButton from "../buttons/DeleteButton.tsx";
import HideButton from "../buttons/HideButton.tsx";
import {useState} from "react";

export interface Part {
    id: string;
    name: string;
    imageUrl: string;
    color?: {
        id: number;
        name: string;
    }
}

interface PartListItemProps {
    part: Part;
}

export default function PartListItem({part}: PartListItemProps) {
    const [isHidden, setIsHidden] = useState(false)
    
    return (
        <div className="flex flex-col bg-white dark:bg-gray-800 shadow p-2">
            <div className='grid gap-2 grid-cols-[2fr_5fr_auto]'>
                <img
                    src={part.imageUrl}
                    alt={`Image of ${part.name}`}
                    className={`aspect-square w-full ${part.color ? '' : 'rainbow-image'}`}/>
                <div className='flex flex-col'>
                    <span><strong>{part.name}</strong> <EditButton onClick={() => {
                    }}/></span>
                    <span>Colour: {part.color ? part.color.name : 'Any'} <EditButton onClick={() => {
                    }}/></span>
                </div>
                <div className="flex flex-col font-mono">
                    <button>
                        <HideButton onClick={() => {
                            setIsHidden(!isHidden);
                        }} isHidden={isHidden}/>
                    </button>
                    <button>
                        <DeleteButton onClick={() => {
                        }}/>
                    </button>
                </div>
            </div>
        </div>
    )
}