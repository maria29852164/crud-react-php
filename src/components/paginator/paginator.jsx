import React,{useState} from 'react';
import {Back} from "../back/back";


const getItemsBypPage=(page,handlerItems,setPage)=>{
    fetch(`http://localhost:8000/api/v1/items?page=${page}`)
        .then(data => data.json())
        .then(response => {
            setPage(page+1)
            handlerItems(response.results)

        })
}
export const Next = ({page,handlerItems,setPage}) => {
    return  (

        <button onClick={()=>getItemsBypPage(page,handlerItems,setPage)} > next page : {page+1}</button>
    )
};

