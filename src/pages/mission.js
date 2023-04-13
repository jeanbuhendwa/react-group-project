import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchMissions,
  joinMission,
  leaveMission,
} from '../redux/missions/missionsReducer';
const Mission = () => {
  const { missions, isMissionLoading } = useSelector((state) => state.mission);
  const dispatch = useDispatch();
  useEffect(() => {
    if (isMissionLoading) {
      dispatch(fetchMissions());
    }
  }, [dispatch, isMissionLoading]);
  if (isMissionLoading) {
    return <p>loading...</p>;
  }
  return (
    <main className="missionContainer">
      <table className="missions-table">
        <tr>
          <th>Mission</th>
          <th>Description</th>
          <th>Status</th>
          <th> </th>
        </tr>
        {missions.map((mission) => (
          <tr key={mission.mission_id}>
            <td className="mission-name">{mission.mission_name}</td>
            <td className="mission-description">{mission.description}</td>
            <td className="member-status-cell">
              <span className={mission.joined ? 'active-badge' : 'notActive'}>
                {mission.joined ? 'Active Member' : 'NOT A MEMBER'}
              </span>
            </td>
            <td className="btn-allover">
              {!mission.joined && (
                <button
                  type="button"
                  onClick={() => dispatch(joinMission(mission.mission_id))}
                  className="joinBtn"
                >
                  Join mission
                </button>
              )}
              {mission.joined && (
                <button
                  type="button"
                  onClick={() => dispatch(leaveMission(mission.mission_id))}
                  className="leaveBtn"
                >
                  Leave mission
                </button>
              )}
            </td>
          </tr>
        ))}
      </table>
    </main>
  );
};
export default Mission;
