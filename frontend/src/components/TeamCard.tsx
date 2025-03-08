interface TeamProps {
  team: {
    school: string;
    name: string;
    city: string;
    state: string;
  };
}

const TeamCard: React.FC<TeamProps> = ({ team }) => {
  return (
    <div style={{
      border: "1px solid #ddd",
      padding: "15px",
      margin: "10px",
      borderRadius: "10px",
      boxShadow: "2px 2px 10px rgba(0,0,0,0.1)",
      textAlign: "center",
      width: "250px"
    }}>
      <h2>{team.school}</h2>
      <h3>Nickname: {team.name}</h3>
      <p>Location: {team.city}, {team.state}</p>
    </div>
  );
};

export default TeamCard;
