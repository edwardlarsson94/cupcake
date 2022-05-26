import { useEffect, useState } from "react";
import CardsCakes from "../cards/CardsCakes";
import {get} from 'axios';

const Cupcake = ()=>{
    const [cake,setCake] = useState([]);
    useEffect(()=>{
        // Usando fetch
        // fetch(`${process.env.REACT_APP_API_URL}cupcakes`)
        // .then(response => response.json()).catch((error)=>window.alert(`Error a ocurrido ${error}`))
        // .then(data => {
        //     data?.length>0 ? setCake(data) : window.alert('Un error 404 a ocurrido');
        // }).catch((error)=>window.alert(`Error a ocurrido ${error}`));
        
        // Usando Axios
        get(`${process.env.REACT_APP_API_URL}cupcakes`)
        .then(res => {
            const data = res.data;
            data?.length>0 ? setCake(data) : window.alert('Un error 404 a ocurrido');
        }).catch((error)=>window.alert(`Error a ocurrido ${error}`));
    },[]);
    return <>
        <div className="ed-grid main-section l-big-section">
                <main className="span-l-3 main-main">
                    <div className="ed-grid m-grid-2 lg-grid-4 gap-2 l-block row-gap">
                    {   cake?.length ? cake.map(({id,taste,colour,description,price,img})=>{
                        return <CardsCakes  key={id} 
                                            taste={taste} 
                                            colour={colour} 
                                            description={description} 
                                            price={price} 
                                            img={img}/>
                        }) : <p>Cargando...</p>
                    }
                    </div>
                </main>
        </div>
    </>

}

export default Cupcake;