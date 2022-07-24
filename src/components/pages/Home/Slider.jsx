import React, { useEffect, useState } from "react";
import Carousel from "react-bootstrap/Carousel";

import { BASE_URL } from "../../constants/api";
function Slider() {
  const [Images, SetImages] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const url = BASE_URL;

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await fetch("https://www.breakingbadapi.com/api/characters?limit=10&offset=10");

        const results = await response.json();
        console.log(results);
        SetImages(results);
      } catch (err) {
        console.log(err);
        setError(err.toString());
      } finally {
        setLoading(false);
      }
    };
    fetchImages();
  }, []);

  if (loading) {
    return <h3>Loading.....</h3>;
  }

  if (error) {
    return <h3>An error occured</h3>;
  }

  return (
    <>
      <Carousel>
        {Images.map((Slider) => {
          return (
            <Carousel.Item key={Slider.char_id}>
              <img className="d-block w-100" src={Slider.img} alt="First slide" />
              <Carousel.Caption>
                <h3>Favorite characters</h3>
              </Carousel.Caption>
            </Carousel.Item>
          );
        })}
      </Carousel>
    </>
  );
}

export default Slider;
