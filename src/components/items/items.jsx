import React,{useState,useEffect} from "react";
import {Item} from "../item/item";
import './items.scss'
const handlerItems= (setItems, setTotal,page=1)=> {
    fetch(`http://localhost:8000/api/v1/items?page=${page}`)
        .then(data => data.json())
        .then(response => {
            setItems(response.results)
            setTotal(response.total);
        })
}

export const Items = ()=> {
    const [items, setItems] = useState([]);
    const [total, setTotal] = useState(5);
    useEffect(() => handlerItems(setItems,setTotal), []);

    return (

        <div className='items'>
            {                console.log(total)
            }
            {
             items.map(item => <Item key={item.id} refreshItems={setItems} item={item}/>)

            }

        </div>
    );
}