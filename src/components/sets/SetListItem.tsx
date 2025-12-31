import HideButton from "../buttons/HideButton.tsx";

export interface Set {
    id: string;
    name: string;
    imageUrl: string;
}

interface SetListItemProps {
    set: Set
}

export default function SetListItem({set}: SetListItemProps) {
    return (
        <div className="flex flex-col bg-white dark:bg-gray-800 shadow p-2 gap-2">
                <img
                    src={set.imageUrl}
                    alt={`Image of ${set.name}`}
                    className="aspect-square"/>
                <div className='flex flex-col'>
                    <span><strong>{set.name}</strong> <HideButton onClick={() => {
                    }} isHidden={false}/></span>
                </div>
        </div>
    )
}