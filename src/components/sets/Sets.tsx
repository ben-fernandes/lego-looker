import {useState} from 'react';
import SetList from "./SetList.tsx";


export default function Sets() {
    const [showIgnored, setShowIgnored] = useState(false);

    return (
        <div className='flex flex-col gap-4'>
            <h2>Sets</h2>

            <SetList/>

            <button onClick={() => setShowIgnored(!showIgnored)}>
                Show ignored sets
            </button>
        </div>
    );
}
