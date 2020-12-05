import React from 'react'; 
import{Slide} from 'react-slideshow-image'; 

import './MainSlide.css';
const SlideImage =[
    '../../../../public/images/slide1.jpg',
    '../../../../public/images/slide2.jpg',
    '../../../../public/images/slide3.jpg'
];

const properties ={
    duration: 5000,
    transitionDuration: 500,
    infinite: true,
    indicators: true,
    arrows: true
}

const MainSlide =() =>{
    return(
        <Slide {...properties}>
            <div className='each-slide'>
                <div style={{'backgroundImage': `url(${SlideImage[0]})`}}>
                    <span>
                        Slide 1
                    </span>
                </div>
            </div>
            <div className='each-slide'>
                <div style={{'backgroundImage': `url(${SlideImage[1]})`}}>
                    <span>
                        Slide 1
                    </span>
                </div>
            </div>
            <div className='each-slide'>
                <div style={{'backgroundImage': `url(${SlideImage[2]})`}}>
                    <span>
                        Slide 2
                    </span>
                </div>
            </div>

        </Slide>
    );
};
export default  MainSlide;