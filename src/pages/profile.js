import { useSelector } from 'react-redux';

const Profile = () => {
  const rockets = useSelector((state) => state.rocket.rockets.filter((rocket) => rocket.reserved));

  return (
    <main className="mainProfile">
      <section className="reservedRocket">
        <h2>My Rockets</h2>
        <ul>
          {rockets.length > 0 ? (
            rockets.map((rocket) => (
              <li key={rocket.id} className="resRocket">
                <h2>{rocket.name}</h2>
                <p>{rocket.description}</p>
              </li>
            ))
          ) : (
            <p>No rockets reserved.</p>
          )}
        </ul>
      </section>
    </main>
  );
};

export default Profile;
