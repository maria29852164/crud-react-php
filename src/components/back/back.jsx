import React from 'react';

export const Back = ({page,setPage}) => {
    return  (
        <div>
            <button onClick={()=>setPage(page-1)} > next page : {page-1}</button>
        </div>

    )
};