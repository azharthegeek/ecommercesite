import React from 'react';

import Menu from '../component/Menu';
import Slider from '../component/Slider';
import Category from '../component/Category';
import Card from '../component/Card';
import Paginations from '../component/Paginations';
import Footer from '../component/Footer';

const Main=()=>{
    return(
        <>
        <Menu />
        <Slider />
        <Category />
        <Card />
        <Paginations />
        <Footer />
        </>
    )
}

export default Main;