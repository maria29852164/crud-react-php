import React from 'react';
const getItemsBypPage=(page,handlerItems,setPage)=>{
    fetch(`http://localhost:8000/api/v1/items?page=${page}`)
        .then(data => data.json())
        .then(response => {
            setPage(page-1)
            handlerItems(response.results)

        })
}
export const Back = ({page,handlerItems,setPage}) => {
    return  (
        (page-1 > 0 )?            <button onClick={()=>getItemsBypPage(page,handlerItems,setPage)} > next page : {page-1}</button>
            : null

    )
};