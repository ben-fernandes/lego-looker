import {Add} from "grommet-icons";
import PartList from "./PartList.tsx";
import RoundButton from "../buttons/RoundButton.tsx";


export default function Parts() {
    return (
        <div className='flex flex-col gap-4'>
            <h2>Parts</h2>

            <PartList/>

            <div>
                <RoundButton onClick={() => {
                }} text='Add part' I={Add}/>
            </div>
        </div>
    );
}
