// src/features/breeds/BreedsList.tsx
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '../../redux/store';
import { fetchBreeds } from './breedsSlice';

const BreedsList: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const breeds = useSelector((state: RootState) => state.breeds.breeds);
  const status = useSelector((state: RootState) => state.breeds.status);
  const error = useSelector((state: RootState) => state.breeds.error);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchBreeds());
    }
  }, [status, dispatch]);

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  if (status === 'failed') {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h1>Breeds List</h1>
      <ul>
        {breeds.map((breed) => (
          <li key={breed.id}>{breed.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default BreedsList;
