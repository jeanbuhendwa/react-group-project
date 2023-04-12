import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { cancelReserve, getData, reserve } from '../redux/rocket/rocketSlice';

const Rocket = () => {
  const { rockets, isRocketLoading } = useSelector((state) => state.rocket);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getData());
  }, [dispatch]);

  if (isRocketLoading) {
    return <p>loading...</p>;
  }

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
              <p>
                {rocket.reserved && (
                  <span className="rocket-badge">Reserved </span>
                )}
                {rocket.description}
              </p>

              {rocket.reserved && (
                <button
                  type="button"
                  onClick={() => dispatch(cancelReserve(rocket.id))}
                >
                  cancel Reservation
                </button>
              )}
              {!rocket.reserved && (
                <button
                  type="button"
                  onClick={() => dispatch(reserve(rocket.id))}
                >
                  Reserve Rocket
                </button>
              )}
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
