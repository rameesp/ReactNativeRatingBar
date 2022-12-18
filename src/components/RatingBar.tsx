import React from 'react';
import RatingBarView from './RatingBarView';
import useRatingBarViewController from './RatingViewController';

interface IRatingBarProps {
  onRatingChanged(noOfStar: number): void;
}

const RatingBar: React.FC<IRatingBarProps> = ({onRatingChanged}) => {
  const {ratedIndex, setRatedIndex} = useRatingBarViewController({
    onRatingChanged,
  });
  return (
    <RatingBarView ratedIndex={ratedIndex} setRatedIndex={setRatedIndex} />
  );
};

export default RatingBar;
