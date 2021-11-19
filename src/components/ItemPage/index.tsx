import { useParams } from "react-router"
import Item from "../Item";

const ItemView = () => {
    const params = useParams();
    if (params.itemId) {
        return <Item id={+params.itemId} />
    }

    return <p>No item</p>
}

export default ItemView;