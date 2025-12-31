import SetList from "./SetList.tsx";
import RoundButton from "../buttons/RoundButton.tsx";
import {View} from "grommet-icons";


export default function Sets() {
    return (
        <div className='flex flex-col gap-4'>
            <h2>Sets</h2>

            <SetList/>

            <div>
                <RoundButton onClick={() => {
                }} text='Show ignored sets' I={View}/>
            </div>
        </div>
    );
}
