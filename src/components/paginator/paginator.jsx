import React,{useState} from 'react';
import {Back} from "../back/back";

export const Next = ({page,setPage}) => {
    return  (
        <button onClick={()=>setPage(page+1)} > next page : {page+1}</button>
    )
};

