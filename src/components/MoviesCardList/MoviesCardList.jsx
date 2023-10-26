import { useLocation } from "react-router-dom";
import "./MoviesCardList.css";
import MoviesCard from "../MoviesCard/MoviesCard";
import movieOne from "../../images/movieOne.png";
import movieTwo from "../../images/movieTwo.png";
import movieThree from "../../images/movieThree.png";
import movieFour from "../../images/movieFour.png";
import movieFive from "../../images/movieFive.png";
import movieSix from "../../images/movieSix.png";
import movieSeven from "../../images/movieSeven.png";
import movieEight from "../../images/movieEight.png";
import movieNine from "../../images/movieNine.png";

export default function MoviesCardList() {
  const location = useLocation();
  return (
    <>
      {location.pathname === "/movies" && (
        <section className="movies" aria-label="список фильмов">
          <ul className="movies__card-list">
            <MoviesCard
              image={movieOne}
              name="33 слова о дизайне"
              time="1ч17м"
              isSave={true}
            />
            <MoviesCard
              image={movieTwo}
              name="Киноальманах «100 лет дизайна»"
              time="1ч17м"
              isSave={true}
            />
            <MoviesCard
              image={movieThree}
              name="В погоне за Бенкси"
              time="1ч17м"
              isSave={false}
            />
            <MoviesCard
              image={movieFour}
              name="Баския: Взрыв реальности"
              time="1ч17м"
              isSave={false}
            />
            <MoviesCard
              image={movieFive}
              name="Бег это свобода"
              time="1ч17м"
              isSave={false}
            />
            <MoviesCard
              image={movieSix}
              name="Книготорговцы"
              time="1ч17м"
              isSave={false}
            />
            <MoviesCard
              image={movieSeven}
              name="Когда я думаю о Германии ночью"
              time="1ч17м"
              isSave={false}
            />
            <MoviesCard
              image={movieEight}
              name="Gimme Danger: История Игги и The Stooges"
              time="1ч17м"
              isSave={false}
            />
            <MoviesCard
              image={movieNine}
              name="Дженис: Маленькая девочка грустит"
              time="1ч17м"
              isSave={false}
            />
          </ul>
          <button className="movies__button" type="button">
            Ещё
          </button>
        </section>
      )}

      {location.pathname === "/saved-movies" && (
        <section className="movies" aria-label="сохраненные фильмы">
          <ul className="movies__card-list">
            <MoviesCard
              image={movieOne}
              name="33 слова о дизайне"
              time="1ч17м"
              isSave={true}
            />
            <MoviesCard
              image={movieTwo}
              name="Киноальманах «100 лет дизайна»"
              time="1ч17м"
              isSave={true}
            />
          </ul>
        </section>
      )}
    </>
  );
}
