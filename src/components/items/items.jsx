import React, {useState, useEffect, Fragment} from "react";
import {Item} from "../item/item";
import './items.scss'
import {Next, Paginator} from "../paginator/paginator";
import {Back} from "../back/back";
const handlerItems= (setItems, setTotal,setLoading,setCurrentPage,page=1)=> {
    fetch(`http://localhost:8000/api/v1/items?page=${page}`)
        .then(data => data.json())
        .then(response => {
            setItems(response.results)
            setTotal(response.total);
            setLoading(true)
            setCurrentPage(1);
        })
}


export const Items = ()=> {
    const [items, setItems] = useState([]);
    const [total, setTotal] = useState(5);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    useEffect(() => handlerItems(setItems,setTotal,setLoading,setCurrentPage,currentPage), []);

    return (
        <Fragment>
            <div className='items'>

                {
                    items.map(item => <Item key={item.id} refreshItems={setItems} item={item}/>)

                }


            </div>

                <h3>Current page : {currentPage}</h3>



            <div className='paginator'>


                <Back page={currentPage} handlerItems={setItems} setPage={setCurrentPage}></Back>


                <Next page={currentPage} handlerItems={setItems} setPage={setCurrentPage}></Next>

            </div>
        </Fragment>



    );
}