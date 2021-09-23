import React from 'react';
import { Link } from "react-router-dom";
import Old1 from '../images/old1.jpg';
import Old2 from '../images/old2.jpg';
import Sport1 from '../images/sport1.jpg';
import Sport2 from '../images/sport2.jpg';
import Sport3 from '../images/sport3.jpg';
import Sport4 from '../images/sport4.jpg';



const Navegacion = () => {
  return (
    <div className="container mt-3 padre">
        <Link to='../old1' className='links'>
            <figure>
            <img src={Old1} alt="" className="tamaño-img" />
            <figcaption>Old1</figcaption>
            </figure>  
        </Link>

        <Link to='../old2' className='links'>
            <figure>
            <img src={Old2} alt="" className="tamaño-img" />
            <figcaption>Old2</figcaption>
            </figure>  
        </Link>

        <Link to='../sport1' className='links'>
            <figure>
            <img src={Sport1} alt="" className="tamaño-img" />
            <figcaption>Sport1</figcaption>
            </figure>  
        </Link>

        <Link to='../sport2' className='links'>
            <figure>
            <img src={Sport2} alt="" className="tamaño-img" />
            <figcaption>Sport2</figcaption>
            </figure>  
        </Link>

        <Link to='../sport3' className='links'>
            <figure>
            <img src={Sport3} alt="" className="tamaño-img" />
            <figcaption>Sport3</figcaption>
            </figure>  
        </Link>

        <Link to='../sport4' className='links'>
            <figure>
            <img src={Sport4} alt="" className="tamaño-img" />
            <figcaption>Sport4</figcaption>
            </figure>  
        </Link>
      
    </div>
  );
}

export default Navegacion;
