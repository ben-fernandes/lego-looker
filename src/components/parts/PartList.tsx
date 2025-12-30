import PartListItem, {type Part} from "./PartListItem.tsx";

export default function PartList() {
    const parts: Part[] = [
        {
            id: '1',
            name: 'Brick 2 x 4',
            imageUrl: 'https://cdn.rebrickable.com/media/thumbs/parts/elements/300121.jpg/250x250p.jpg?1704798126.6283755',
        },
        {
            id: '2',
            name: 'Brick 2 x 2',
            imageUrl: 'https://cdn.rebrickable.com/media/thumbs/parts/elements/300321.jpg/85x85p.jpg?1658325827.6957996',
            color: {
                id: 4,
                name: 'Red'
            }
        },
    ];

    return (
        <div className='flex flex-col gap-4'>
            {
                parts.map((part) => (
                    <PartListItem key={part.id} part={part}/>
                ))
            }
        </div>
    )
}