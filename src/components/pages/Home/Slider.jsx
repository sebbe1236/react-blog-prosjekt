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
        const response = await fetch(url);

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
            <Carousel.Item key={Slider.id}>
              <img
                className="d-block w-100"
                src={Slider._embedded["wp:featuredmedia"]["0"].source_url}
                alt="First slide"
              />
              <Carousel.Caption>
                <h3>Some of my adventures!</h3>
              </Carousel.Caption>
            </Carousel.Item>
          );
        })}
      </Carousel>
    </>
  );
}

export default Slider;
