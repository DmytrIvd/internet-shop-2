import { useDispatch } from "react-redux";
import { useAppSelector } from "../../redux/hooks";
import { constainBascetItem, selectItem, addInBascet, deleteFromBascet } from "../../redux/itemsSlice";

const Item = (props: { id: number }) => {
    const dispatch = useDispatch();
    const item = useAppSelector(selectItem(props.id));
    const contains = useAppSelector(constainBascetItem(props.id));
    const buttonElement = contains ?
        <button onClick={() => dispatch(deleteFromBascet(props.id))} className="w-100 btn btn-secondary">Added to bascet</button> :
        <button onClick={() => dispatch(addInBascet(props.id))} className="w-100 btn btn-primary">Add to bascet</button>


    return (<div className="col-3 p-2">
        <h4>{item.title}</h4>
        <img width="200px" height="200px" src={item.image} />
        <h5>{item.description}</h5>
        {buttonElement}
    </div>)
}



export default Item;