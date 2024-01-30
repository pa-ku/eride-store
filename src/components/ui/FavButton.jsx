import React from "react";

import styled from "styled-components";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import useLocalStorage from "use-local-storage";

export default function FavButton({ id }) {
  const [favorites, setFavorites] = useLocalStorage("favorites", []);
  const isFavorite = favorites.includes(id);

  const handleFavorite = () => {
    if (isFavorite === false) {
      setFavorites((prevFavorites) => [...prevFavorites, id]);
    } else {
      setFavorites((prevFavorites) =>
        prevFavorites.filter((favId) => favId !== id)
      );
    }
  };

  return (
    <>
      <FavCtn>
        <FavoriteBtn
          title={isFavorite ? "Eliminar favorito" : "Añadir favorito"}
          className="Favorite"
          onChange={handleFavorite}
          type="checkbox"
          checked={isFavorite}
        />
        {isFavorite === true && <FavIco $animation={isFavorite}></FavIco>}

        <FavoriteBorderIcon></FavoriteBorderIcon>
      </FavCtn>
    </>
  );
}

const FavoriteBtn = styled.input`
  position: absolute;
  right: 0px;

  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  width: 100%;
  height: 100%;
  cursor: pointer;
  z-index: 100;
  &:hover {
    color: #ff2222;
  }

  @media (max-width: 700px) {
    opacity: 1;
    margin: 0em;

    margin-inline: 1em;
  }
`;

const FavCtn = styled.label`
  background-color: rgba(255, 255, 255, 0);
  border: none;
  color: #ff8383;
  cursor: pointer;
  opacity: 1;
  position: absolute;
  transition: 0.2s;
  right: 0px;
  top:0px;
  bottom: 0px;
  right: 0px;
  scale: 1.1;

  z-index: 100;
`;
const FavIco = styled(FavoriteIcon)`
  position: absolute;
  transform: bottom;
  color: #ff5858;
  scale: 0;
  opacity: 0;
  animation: 0.3s ${(props) => (props.$animation ? "favIn" : "favOut")} forwards;
  @keyframes favIn {
    0% {
      scale: 0;
    }
    95% {
      scale: 1.1;
    }
    100% {
      scale: 1;
      opacity: 1;
    }
  }
  @keyframes favOut {
    to {
      scale: 1;
      opacity: 0;
    }
  }
`;
