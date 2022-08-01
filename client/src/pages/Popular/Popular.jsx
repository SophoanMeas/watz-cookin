import { useEffect, useState } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import {Link} from 'react-router-dom'
import {Wave, Wrapper, Card, Gradient} from './Popular.style'
import wave from '../../assets/svg/wave.svg'
export default function Popular() {

  useEffect(() => {
    getPopular();
  }, []);

  const [popular, setPopular] = useState([]);

  const getPopular = async () => {
    const check = localStorage.getItem("popular");

    if (check) {
      setPopular(JSON.parse(check));
    } else {
      const api = await fetch(
        `https://api.spoonacular.com/recipes/random?apiKey=c289239965e7409d875f738e568ecdb1&number=15`
      );
      const data = await api.json();
      
      localStorage.setItem("popular", JSON.stringify(data.recipes));
      // console.log(data);
      setPopular(data.recipes);
    }
  };

  return (
    <>
      <Wrapper>
      <p>Popular Picks</p>
        <Splide
          options={{
            perPage: 5,
            arrows: false,
            pagination: false,
            drag: "free",
            gap: "3rem",
          }}
        >
          {popular.map((recipe) => {
            return (
              <SplideSlide key={recipe.id}>
                <Card>
                <Link to={'/recipe/' + recipe.id}>
                  <p>{recipe.title}</p>
                  <img src={recipe.image} alt={recipe.title} />
                  <Gradient />
                  </Link>
                </Card>
              </SplideSlide>
            );
          })}
        </Splide>
      </Wrapper>
           <Wave src={wave}>
           </Wave>
           </>
  );
}
