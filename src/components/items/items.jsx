import React,{useState,useEffect} from "react";
import {Item} from "../item/item";
import './items.scss'
const handlerItems= (setItems,page=1)=> {
    fetch(`http://localhost:8000/api/v1/items?page=${page}`)
        .then(data => data.json())
        .then(items => setItems(items))
}

export const Items = ()=> {
    const [items, setItems] = useState([]);
    useEffect(() => handlerItems(setItems), []);

    return (

        <div className='items'>
            {                console.log(items)
            }
            {
             items.map(item => <Item key={item.id} refreshItems={setItems} item={item}/>)

            }

        </div>
    );
}