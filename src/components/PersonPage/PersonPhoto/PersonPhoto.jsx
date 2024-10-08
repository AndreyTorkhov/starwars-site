import PropTypes from "prop-types";
import { useDispatch } from "react-redux";

import iconFavorite from "./img/favorite.svg";
import iconFavoriteFill from "./img/favorite-fill.svg";

import { setPersonToFavorite, removePersonFromFavorite } from "@store/actions";

import styles from "./PersonPhoto.module.css";

const PersonPhoto = ({
  personId,
  personPhoto,
  personName,
  personFavorite,
  setPersonFavorite,
}) => {
  const dispatch = useDispatch();

  const dispatchFavoritePeople = () => {
    if (personFavorite) {
      dispatch(removePersonFromFavorite(personId));
      setPersonFavorite(false);
    } else {
      dispatch(
        setPersonToFavorite({
          [personId]: {
            name: personName,
            img: personPhoto,
          },
        })
      );
      setPersonFavorite(true);
    }
  };

  return (
    <>
      <div className={styles.container}>
        <img className={styles.photo} src={personPhoto} alt={personName} />{" "}
        <img
          src={personFavorite ? iconFavoriteFill : iconFavorite}
          onClick={dispatchFavoritePeople}
          className={styles.favorite}
          alt="add to favorite"
        />
      </div>
    </>
  );
};

PersonPhoto.propTypes = {
  personId: PropTypes.string,
  personPhoto: PropTypes.string,
  personName: PropTypes.string,
  personFavorite: PropTypes.bool,
  setPersonFavorite: PropTypes.func,
};

export default PersonPhoto;
