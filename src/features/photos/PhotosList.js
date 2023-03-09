import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchPhotos } from './photosSlice';
import { Link } from 'react-router-dom';

export const PhotosList = () => {
  const dispatch = useDispatch();
  const photos = useSelector((state) => state.photos.photos);
  const status = useSelector((state) => state.photos.status);
  const error = useSelector((state) => state.photos.error);
  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchPhotos());
    }
  }, [dispatch, status]);
  let content;
  if (status === 'loading') {
    content = <div className="loader">Loading...</div>;
  } else if (status === 'succeeded') {
    content = (
      <ul>
        {photos.slice(0, 20).map((photo) => (
          <li key={photo.id}>
            <Link to={`/photos/${photo.id}`}>{photo.title}</Link>
          </li>
        ))}
      </ul>
    );
  } else if (status === 'failed') {
    content = <div>{error}</div>;
  }
  return <div>{content}</div>;
};