import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { cancelReserve, getData, reserve } from '../redux/rocket/rocketSlice';

const Rocket = () => {
  const { rockets, isRocketLoading } = useSelector((state) => state.rocket);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!rockets.length) {
      dispatch(getData());
    }
  }, [dispatch, rockets]);

  if (isRocketLoading) {
    return <p>loading...</p>;
  }

  return (
    <main className="mainContainer">
      {rockets.length > 0 ? (
        rockets.map((rocket) => (
          <div key={rocket.id} className="rocketContainer">
            <div className="rocketImg">
              <img src={rocket.flickr_images[0]} alt={rocket.rocket_name} />
            </div>
            <div className="rocketInfo">
              <h2>{rocket.name}</h2>
              <p>
                {rocket.reserved && (
                  <span className="rocket-badge">Reserved</span>
                )}
                {rocket.description}
              </p>

              {rocket.reserved && (
                <button
                  type="button"
                  onClick={() => dispatch(cancelReserve(rocket.id))}
                  className="btnCancel"
                >
                  cancel Reservation
                </button>
              )}
              {!rocket.reserved && (
                <button
                  type="button"
                  onClick={() => dispatch(reserve(rocket.id))}
                  className="btnReserve"
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
