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
        <div className="flex flex-col justify-between bg-white dark:bg-gray-800 shadow p-2 gap-2 rounded-2xl">
            <img
                src={set.imageUrl}
                alt={`Image of ${set.name}`}
                className="aspect-square rounded-lg"/>
            <div className='flex between justify-between items-end'>
                <span><strong>{set.name}</strong></span>
                <HideButton onClick={() => {
                }} isHidden={false}/>
            </div>
        </div>
    )
}