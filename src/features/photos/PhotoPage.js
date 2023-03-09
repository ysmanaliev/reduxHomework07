import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Link } from "react-router-dom";

export const PhotoPage = () => {
  const { photoId } = useParams();
  const photo = useSelector((state) =>
    state.photos.photos.find((photo) => photo.id === parseInt(photoId))
  );
  return (
    <div>
      <Link to='/'>Go to Home </Link>
      <h2>{photo?.title}</h2>
      {photo && <img src={photo.url} alt={photo.title} />}
    </div>
  );
};