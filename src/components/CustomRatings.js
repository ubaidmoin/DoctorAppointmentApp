import React, {useState} from 'react';
import StarRating from 'react-native-star-rating';

const CustomRatings = ({disabled}) => {
  const [starCount, setStarCount] = useState(5);

  const onStarRatingPress = (rating) => {
    setStarCount(rating);
  };

  return (
    <StarRating
      disabled={disabled}
      fullStar={'star'}
      iconSet={'Entypo'}
      starSize={20}
      maxStars={5}
      rating={starCount}
      selectedStar={(rating) => onStarRatingPress(rating)}
      fullStarColor={'#f4c930'}
    />
  );
};

export default CustomRatings;
