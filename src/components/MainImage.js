import React from 'react';

import image from '../assets/images/angel-city-brewery.jpg';

const MainImage = () => {
  return (
    <div className="image-wrapper">
      <div className="ui segment">
        <img className="ui big circular centered image" src={image} alt="Brewery" data-aos="fade-down" />
      </div>
    </div>
  )
}

export default MainImage;
