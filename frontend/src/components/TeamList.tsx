import { useState, useEffect } from "react";
import TeamCard from "./TeamCard";
import teamsData from "../teams.json";

interface Team {
  tid: number;
  school: string;
  name: string; // ✅ Matches JSON field
  city: string;
  state: string;
}

const TeamList: React.FC = () => {
  const [teams, setTeams] = useState<Team[]>([]);

  useEffect(() => {
    if (teamsData && teamsData.teams) {
      setTeams(teamsData.teams); // ✅ Extract `teams` array from JSON
    }
  }, []);

  return (
    <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", padding: "20px" }}>
      {teams.length > 0 ? (
        teams.map((team) => <TeamCard key={team.tid} team={team} />)
      ) : (
        <p>No teams found.</p>
      )}
    </div>
  );
};

export default TeamList;
