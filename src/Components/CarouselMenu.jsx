import React from "react";
import cl2 from "../images/carousel2.jpeg"
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";


function DarkVariantExample() {
  return (
    <Carousel data-bs-theme="dark" className="bg-gray-900 rounded-3xl grayscale hover:drop-shadow-[0_0_10px_white] hover:grayscale-0 hover:transition duration-200">
      <Carousel.Item>
        <img
          className="d-block h-96 w-full object-cover rounded-lg shadow-lg"
          src="https://cache.careers360.mobi/media/article_images/2022/4/20/How-to-make-portfolio-for-design-admission.jpg"
          alt="First slide"
        />
        <Carousel.Caption className="absolute bottom-0 left-0 right-0 text-white p-6 rounded-b-lg">
          <h5 className="text-4xl text-black font-bold font-serif">Portfolio</h5>
          <p className="text-3xl font-medium text-black font-cavet">A Website to describe myself</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block h-96 w-screen object-cover rounded-lg shadow-lg"
          src={cl2}
          alt="First slide"
        />
        <Carousel.Caption className="absolute bottom-0 left-0 right-0 text-white p-6 rounded-b-lg">
          <h5 className="text-4xl  font-bold font-serif drop-shadow-[0_0_15px_white]">PG LIFE</h5>
          <p className="text-3xl font-medium font-cavet">Online PG Finder</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block h-96 w-full object-cover rounded-lg shadow-lg"
          src="https://t4.ftcdn.net/jpg/09/88/83/89/360_F_988838967_oK0cjqKTMPD5O16oT7iCcHlpg00iFOJi.jpg"
          alt="First slide"
        />
        <Carousel.Caption className="absolute bottom-0 left-0 right-0 text-white p-6 rounded-b-lg">
          <h5 className="text-4xl font-bold font-serif  drop-shadow-[0_0_15px_white]">Airline Management System</h5>
          <p className="text-3xl font-medium font-cavet">A port for the Management of Airline and Passenger maintenance</p>
        </Carousel.Caption>
      </Carousel.Item>
      
    </Carousel>
  );
}

export default DarkVariantExample;
