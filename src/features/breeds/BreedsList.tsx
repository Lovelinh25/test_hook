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

  console.log(breeds);

  return (
    <div>
      <h1>Breeds List</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {breeds.map((breed) => (
            <tr key={breed.id}>
              <td>{breed.id}</td>
              <td>{breed.attributes.name}</td>
              <td>{breed.attributes.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BreedsList;
