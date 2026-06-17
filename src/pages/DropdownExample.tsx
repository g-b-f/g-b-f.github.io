import { DropDown } from "../modules/DropDown";
import { routes_dropdown } from "../modules/Navigation";


export default function DropdownExample(){
    return(
        <DropDown {...routes_dropdown}/>
    )
}