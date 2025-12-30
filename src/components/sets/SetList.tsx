import SetListItem from "./SetListItem.tsx";
import {type Set} from './SetListItem.tsx'

export default function SetList() {
    const sets: Set[] = [
        {
            id: '21011-1',
            name: 'Brandenburg Gate',
            imageUrl: 'https://cdn.rebrickable.com/media/thumbs/sets/21011-1/15846.jpg/1000x800p.jpg?1750517280.7329981'
        },
        {
            id: '21011-1',
            name: 'Brandenburg Gate',
            imageUrl: 'https://cdn.rebrickable.com/media/thumbs/sets/21011-1/15846.jpg/1000x800p.jpg?1750517280.7329981'
        },
        {
            id: '21011-1',
            name: 'Brandenburg Gate',
            imageUrl: 'https://cdn.rebrickable.com/media/thumbs/sets/21011-1/15846.jpg/1000x800p.jpg?1750517280.7329981'
        },
        {
            id: '21011-1',
            name: 'Brandenburg Gate',
            imageUrl: 'https://cdn.rebrickable.com/media/thumbs/sets/21011-1/15846.jpg/1000x800p.jpg?1750517280.7329981'
        },
    ];

    return (
        <div className="grid gap-4 grid-cols-[repeat(auto-fit,minmax(200px,1fr))]">
            {
                sets.map((set) => (
                    <SetListItem key={set.id} set={set} />
                ))
            }
        </div>
    )
}