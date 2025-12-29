import {useState} from 'react';

interface Set {
    id: string;
    name: string;
    partsOwned: number;
    partsTotal: number;
}

export default function Sets() {
    const [showIgnored, setShowIgnored] = useState(false);
    const [sets, setSets] = useState<Set[]>([
        {
            id: '1',
            name: 'Brandenburg Gate',
            partsOwned: 2,
            partsTotal: 2,
        },
    ]);

    return (
        <>
            <h2>Sets</h2>

            <table>
                <thead>
                <tr>
                    <th>Image</th>
                    <th>Name</th>
                    <th>Parts Matched</th>
                </tr>
                </thead>
                <tbody>
                {sets.map((set) => (
                    <tr key={set.id}>
                        <td>
                            <div></div>
                        </td>
                        <td>{set.name}</td>
                        <td>
                            {set.partsOwned}/{set.partsTotal}
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>

            <button onClick={() => setShowIgnored(!showIgnored)}>
                Show ignored sets
            </button>
        </>
    );
}
