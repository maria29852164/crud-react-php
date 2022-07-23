import React,{useRef} from 'react';
import './item.scss'
import edit from '../../assets/images/edit.png'
import deleteAction from '../../assets/images/delete.png'


const deleteItem = (id,refreshItems)=>{
    fetch(`http://localhost:8000/api/v1/delete/item/${id}`, {
        method:'DELETE'
    }).then(data=> data.json())
        .then(
            (deleteItem)=>{

                fetch(`http://localhost:8000/api/v1/items`).then(data=>data.json())
                    .then(response => refreshItems(response.results) )
            }
        );

}
export const Item = (props) => {
    const {id,title,description,image} = props.item;
    const {refreshItems} = props
    const ref = useRef(null);

    return (
        <div className='card'>
            <div className="card-title">
               <h3>{title}</h3>
            </div>

            <div className="card-body">
                <img ref={ref} src={image} alt=''  />
            </div>
            <div className="info">

                <p>{description}</p>
                <div className="actions">
                    <button>
                        <img src={edit}  alt=""/>
                    </button>
                    <button onClick={() => deleteItem(id,refreshItems)}>
                        <img src={deleteAction}   alt=""/>
                    </button>
                </div>


            </div>

        </div>
    );
};
