import './catalog.css';
import Product from './product';
import DataService from '../services/dataService';
import { useState, useEffect } from 'react';

const Catalog = () => {

    let [products, setProducts] = useState([]);

    const loadCatalog = () => {
        console.log("Data retrieved");
        let service = new DataService();
        let data = service.getCatalog();
        setProducts(data);
    };

    useEffect( () => {
        loadCatalog();
    } );


    return (<div className='catalog'>
                <h1>This is our amazing catalog!</h1>
                <h2>We have {products.length} products!!</h2>
                {products.map(
                    (prod) => (<Product key={prod._id} data={prod}/>)
                    )
                }
            </div>);
}

export default Catalog; 