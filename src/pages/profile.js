import { useSelector } from 'react-redux';

const Profile = () => {
  const rockets = useSelector((state) => state.rocket.rockets.filter((rocket) => rocket.reserved));
  const missions = useSelector((state) => state.mission.missions.filter((mis) => mis.joined));
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
      <section className="missionJoined">
        <h2>My Missions</h2>
        <ul>
          {missions.length > 0 ? (
            missions.map((mission) => (
              <li key={mission.id} className="misJoined">
                <h2>{mission.mission_name}</h2>
                <p>{mission.description}</p>
              </li>
            ))
          ) : (
            <p>No Mission Joined.</p>
          )}
        </ul>
      </section>
    </main>
  );
};

export default Profile;
