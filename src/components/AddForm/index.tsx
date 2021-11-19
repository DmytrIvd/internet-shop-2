import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../../redux/itemsSlice";

const FormComponent = () => {

    const dispatch = useDispatch();
    const [title, setTitle] = useState('');
    const [image, setImage] = useState('');
    const [description, setDescription] = useState('');

    const onSubmit = (event: any) => {
        event.preventDefault();

        dispatch(addItem({
            id: new Date().getTime(),
            image: image,
            title: title,
            description: description
        }))
    }

    const onTitleChange = (e: React.FormEvent<HTMLInputElement>): void => {
        setTitle(e.currentTarget.value);
    }

    const onDescriptionChange = (e: React.FormEvent<HTMLTextAreaElement>): void => {
        setDescription(e.currentTarget.value);
    }

    const onImageChange = (e: React.FormEvent<HTMLInputElement>): void => {
        setImage(e.currentTarget.value);
    }


    return <form className="mt-3" onSubmit={onSubmit}>
        <div className="input-group">
            <label className="input-group-text">Title:</label>

            <input name="title" className="form-control" type="text" value={title} onChange={onTitleChange} required />
        </div>
        <div className="input-group mt-2">
            <label className="input-group-text">Description:</label>
            <textarea name="description" className="form-control" value={description} onChange={onDescriptionChange} required></textarea>
        </div>
        <div className="input-group mt-2">
            <label className="input-group-text">Image url:</label>
            {image ? <img height="50px" width="100px" src={image} /> : ''}
            <input name="image" className="form-control" type="text" value={image} onChange={onImageChange} required />
        </div>
        <div className="row mt-2">
            <input type="submit" className="col-6 btn-success" />

            <input type="reset" className="col-6 btn btn-danger" />
        </div>
    </form >
}

export default FormComponent;