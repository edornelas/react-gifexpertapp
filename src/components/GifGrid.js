import React from 'react';
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';
//import { getGifs } from '../helpers/getGifs';

export const GifGrid = ({ category }) => {
  const { data:images, loading } = useFetchGifs(category);

  /*
  const [images, setImages] = useState([]);
  useEffect(() => {
    getGifs(category).then(setImages);
  }, [category]);

  */
  return (
    <>
      <h3>{category}</h3>

      { loading && <p className="animate__animated animate__flash">Cargando...</p> }

      <div className="card-grid">
        {images.map((img) => (
          <GifGridItem key={img.id} {...img} />
        ))}
      </div>
    </>
  );
};
