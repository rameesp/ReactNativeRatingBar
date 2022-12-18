/* eslint-disable react-hooks/exhaustive-deps */
import {useEffect, useState} from 'react';

const useRatingBarViewController = ({
  onRatingChanged,
}: {
  onRatingChanged(noOfStars: number): void;
}) => {
  const [ratedIndex, setRatedIndex] = useState(0);
  useEffect(() => {
    onRatingChanged(ratedIndex + 1);
  }, [ratedIndex]);

  return {ratedIndex, setRatedIndex};
};

export default useRatingBarViewController;
