import React, { MouseEventHandler, useState } from "react";
import './App.css';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { loadMembersAsync, selectItemsIds, selectStatus } from '../redux/itemsSlice';
import Item from './Item';
import AddForm from "./AddForm";

const App = () => {
  const dispatch = useAppDispatch();
  const itemsIds = useAppSelector(selectItemsIds);
  const status = useAppSelector(selectStatus);

  //console.log(itemsIds);

  return (
    <div className="container-fluid">
      <button className="btn btn-primary" onClick={() => dispatch(loadMembersAsync())}>
        {status === 'loading' ? 'Loading' : "Load data"}
      </button>
      <h1>Main window</h1>
      <AddForm />
      <div className="container-fluid">
        <div className="row">

          {itemsIds.map((id) => {
            return <Item key={id} id={id}></Item>
          })}

        </div>
      </div>
    </div>
  );
}

export default App;
