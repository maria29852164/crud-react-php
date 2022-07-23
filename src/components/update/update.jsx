import React ,{useState,useEffect} from 'react';
import '../store/store.scss';
import {useForm} from "react-hook-form";

const onSubmit= (data)=> {
    console.log('data'+data.id);
    const requestOptions = {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    };
    fetch(`http://localhost:8000/api/v1/update/item/${data.id}`,requestOptions).then(data=>data.json())
        .then(response=> {
            console.log(response)

        })
}
export const Update = (props) => {
    const {register,errors, handleSubmit} = useForm();
    const [item, setItem] = useState([]);
    const {id} = props.match.params;
    useEffect(() => {

        return () => {
            fetch(`http://localhost:8000/api/v1/item/${id}`)
                .then(data => {
                    setItem(item)


                })
        };
    }, [id]);



    return (

        <div className='form-card'>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="input-group">
                    <label htmlFor="title">Title</label>
                    <input {...register('title')}  type="text" name='title'  placeholder='ingresar el titulo de la tarea'/>

                </div>
                <div className="input-group">
                    <label htmlFor="price">Precio</label>
                    <input  {...register('price')}  type="number" name='price' min='1'  placeholder='ingresar el precio de la tarea'/>

                </div>
                <input type="hidden" {...register('id',{value:id})}/>
                }
                <div className="input-group">
                    <label htmlFor="description">description</label>
                    <input type="text"  {...register('description')}  name='description' placeholder='ingresar el description de la tarea'/>

                </div>
                <div className="input-group">
                    <label htmlFor="image">image</label>
                    <input  {...register('image')}  type="text" name='image'/>

                </div>
                <div className="input-group">
                    <button type='submit'>Create</button>
                </div>

            </form>
        </div>

    );
};