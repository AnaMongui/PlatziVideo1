import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { setFavorite, deleteFavorite } from '../actions';
import '../assets/styles/components/CarouselItem.scss';
import playIcon from '../assets/icons/icons8-play-64.png';
import plusIcon from '../assets/icons/icons8-más-64.png';
import removeIcon from '../assets/icons/remove-icon.png';


const CarouselItem = (props) => {
  const { id, cover, title, year, contentRating, duration, isList } = props;
  const handleSetFavorite = () =>{
    props.setFavorite({
      id, cover, title, year, contentRating, duration
      })
  }

  const handleDeleteFavorite = (ItemId) => {
    props.deleteFavorite(ItemId)
  }

  return(
  <div className="carousel-item">
  <img className="carousel-item__img" src={cover} alt={title}  />
  <div className="carousel-item__details">
    <div>
      <Link to={`/player/${id}`}>
      <img 
      className="carousel-item__details--img" 
      src={playIcon} 
      alt="Play Icon"
      />
      </Link>
      
      {isList ?
          <img 
          className="carousel-item__details--img" 
          src={removeIcon} 
          alt="Remove Icon"
          onClick={() => handleDeleteFavorite(id)}
          /> :
          <img 
          className="carousel-item__details--img" 
          src={plusIcon} 
          alt="Plus Icon" 
          onClick={handleSetFavorite}
          />
      }
    </div>
    <p className="carousel-item__details--title">{title}</p>
    <p className="carousel-item__details--subtitle">
      {`${year} ${contentRating} ${duration}`}
    </p>
  </div>
</div>
);
}

const mapDispatchToProps = {
  setFavorite,
  deleteFavorite,
}

export default connect(null, mapDispatchToProps)(CarouselItem);