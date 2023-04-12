import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getData } from '../redux/rocket/rocketSlice';

const Rocket = () => {
  const { rockets } = useSelector((state) => state.rocket);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getData());
  }, [dispatch]);

  return (
    <main>
      {rockets.length > 0 ? (
        rockets.map((rocket) => (
          <div key={rocket.id}>
            <div>
              <img src={rocket.flickr_images[0]} alt={rocket.rocket_name} />
            </div>
            <div>
              <h2>{rocket.name}</h2>
              <p>{rocket.description}</p>
              <button type="button">Reserve Rocket</button>
            </div>
          </div>
        ))
      ) : (
        <p>No rockets found.</p>
      )}
    </main>
  );
};

export default Rocket;
