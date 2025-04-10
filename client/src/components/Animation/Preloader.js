import React, { useEffect , useState } from 'react';
import {preLoaderAnim} from '../Animation';
 import './Preloader.css';
 import preloaderImg1 from './preloaderImg1.jpg';
 import preloaderImg2 from './preloaderImg2.png';
 import preloaderImg3 from './preloaderImg3.png';

const Preloader = () => {
  useEffect(() => {
    preLoaderAnim();
  }, []);
  return (

   <div className='preloader'>
    <div className='texts-container'>
    <span><img className='preloaderImg1'src={preloaderImg1} alt='Preloader'/></span>
    <span><img className='preloaderImg2'src={preloaderImg2} alt='Preloader'/></span>
    <span><img className='preloderImg3'src={preloaderImg3} alt='Preloader'/></span>
    </div>
    </div>

    
  )
}

export default Preloader