import { useAppSelector } from "../../redux/hooks";
import { selectBascetItems } from "../../redux/itemsSlice";
import Item from "../Item";

const Bascet = () => {
    const itemsIds = useAppSelector(selectBascetItems);
    return <div className="container-fluid">
        {itemsIds.map(i => {
            return <Item id={i} key={i}></Item>
        })}
    </div>
}

export default Bascet;