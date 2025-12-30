import {Add} from "grommet-icons";
import PartList from "./PartList.tsx";


export default function Parts() {
    return (
        <div className='flex flex-col gap-4'>
            <h2>Parts</h2>

            <PartList/>

            <button className='text-green-500'>Add part <Add/></button>
        </div>
    );
}
