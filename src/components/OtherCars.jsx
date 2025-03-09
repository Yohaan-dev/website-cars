import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const OtherCars = () => {
  const data = [
    {
      "id": 1,
      "image": "/toyota-camry.png",
      "make": "Toyota",
      "model": "Camry",
      "year": 2022,
      "color": "Silver",
      "engine": {
        "type": "Hybrid",
        "displacement": "2.5L",
        "horsepower": 208
      }
    },
    {
      "id": 2,
      "image": "/ford-mustang.jpg",
      "make": "Ford",
      "model": "Mustang",
      "year": 2021,
      "color": "Silver",
      "engine": {
        "type": "Gasoline",
        "displacement": "5.0L",
        "horsepower": 450
      }
    },
    {
      "id": 3,
      "image": "/Tesla_Model_S.jpg",
      "make": "Tesla",
      "model": "Model S",
      "year": 2023,
      "color": "Red",
      "engine": {
        "type": "Electric",
        "horsepower": 670
      }
    },
    {
      "id": 4,
      "image": "/Toyota-Auris.jpeg",
      "make": "Toyota",
      "model": "Auris",
      "year": 2021,
      "color": "black",
      "engine": {
        "type": "Gasoline",
        "displacement": "5.0L",
        "horsepower": 450
      }
    },
    {
      "id": 5,
      "image": "/Model-3.jpg",
      "make": "Tesla",
      "model": "Model 3",
      "year": 2023,
      "color": "red",
      "engine": {
        "type": "Electric",
        "horsepower": 670
      }
    },
    {
      "id": 6,
      "image": "/Lamborghini-Urus-SE-.jpg",
      "make": "Lamborghini",
      "model": "Urus",
      "year": 2023,
      "color": "Blue",
      "engine": {
        "type": "Electric",
        "horsepower": 670
      }
    }
  ]

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1
  };

  return (
    <div className='bg-slate-300'>
      <div className='pt-6 w-3/4 m-auto'>
      <Slider {...settings}>
          {data.map((d) => (
            <div key={d.id}>
          <div className='bg-slate-300 text-black rounded-md h-[450px]'>
            <div className='flex items-center justify-center pt-3 pb-3'>
              <img src={d.image} alt="car-image" className='w-60 h-60 rounded-md' />
            </div>
            <div className='flex flex-col items-center justify-center space-y-1'>
              <p className='pt-4 text-xl font-bold'>{d.make}</p>
              <p className='pt-4 text-xl font-semibold'>{d.model}</p>
              <p className='pt-4 text-lg'>{d.year}</p>
              <p className='pt-4 pb-2'>{d.color}</p>
            </div>
              </div>
              </div>
        ))}
          </Slider>
        </div>
    </div>
  )
}


export default OtherCars