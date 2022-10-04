import { useState, useEffect } from "react";
import { updateScore } from "../../services/updateScore";

const players = [
  {
    name: "Brandon Beauty",
    position: "Centre",
    team: "Muckshows",
    goals: 0,
    assists: 0,
    hits: 0,
    saves: 0,
    updated: 0,
  },
  {
    name: "Jake Kelley",
    position: "Left Wing",
    team: "Muckshows",
    goals: 0,
    assists: 0,
    hits: 0,
    saves: 0,
    updated: 0,
  },
  {
    name: "Doug Reed",
    position: "Defender",
    team: "Muckshows",
    goals: 0,
    assists: 0,
    hits: 0,
    saves: 0,
    updated: 0,
  },
  {
    name: "Alexei Volkov",
    position: "Right Wing",
    team: "Muckshows",
    goals: 0,
    assists: 0,
    hits: 0,
    saves: 0,
    updated: 0,
  },
  {
    name: "C.J. Richards",
    position: "Defender",
    team: "Muckshows",
    goals: 0,
    assists: 0,
    hits: 0,
    saves: 0,
    updated: 0,
  },
  {
    name: "Brent Gauthier",
    position: "Goalie",
    team: "Muckshows",
    goals: 0,
    assists: 0,
    hits: 0,
    saves: 0,
    updated: 0,
  },
  {
    name: "Corey Jackson",
    position: "Defender",
    team: "Bootleggers",
    goals: 0,
    assists: 0,
    hits: 0,
    saves: 0,
    updated: 0,
  },
  {
    name: "Scott Reaves",
    position: "Centre",
    team: "Bootleggers",
    goals: 0,
    assists: 0,
    hits: 0,
    saves: 0,
    updated: 0,
  },
  {
    name: "Austin Lewis",
    position: "Defender",
    team: "Bootleggers",
    goals: 0,
    assists: 0,
    hits: 0,
    saves: 0,
    updated: 0,
  },
  {
    name: "Max Kellogg",
    position: "Goalie",
    team: "Bootleggers",
    goals: 0,
    assists: 0,
    hits: 0,
    saves: 0,
    updated: 0,
  },
  {
    name: "Steven Stix",
    position: "Left Wing",
    team: "Bootleggers",
    goals: 0,
    assists: 0,
    hits: 0,
    saves: 0,
    updated: 0,
  },
  {
    name: "Zach Clifton",
    position: "Right Wing",
    team: "Bootleggers",
    goals: 0,
    assists: 0,
    hits: 0,
    saves: 0,
    updated: 0,
  },
  {
    name: "Joseph Byrne",
    position: "Defender",
    team: "Greenbacks",
    goals: 0,
    assists: 0,
    hits: 0,
    saves: 0,
    updated: 0,
  },
  {
    name: "Dale McDowell",
    position: "Right Wing",
    team: "Greenbacks",
    goals: 0,
    assists: 0,
    hits: 0,
    saves: 0,
    updated: 0,
  },
  {
    name: "Lukas Sundberg",
    position: "Centre",
    team: "Greenbacks",
    goals: 0,
    assists: 0,
    hits: 0,
    saves: 0,
    updated: 0,
  },
  {
    name: "Conrad Simmons",
    position: "Defender",
    team: "Greenbacks",
    goals: 0,
    assists: 0,
    hits: 0,
    saves: 0,
    updated: 0,
  },
  {
    name: "Vladimir Mikhailov",
    position: "Goalie",
    team: "Greenbacks",
    goals: 0,
    assists: 0,
    hits: 0,
    saves: 0,
    updated: 0,
  },
  {
    name: "Callum Clarke",
    position: "Left Wing",
    team: "Greenbacks",
    goals: 0,
    assists: 0,
    hits: 0,
    saves: 0,
    updated: 0,
  },
  {
    name: "Marv Wilson",
    position: "Defender",
    team: "Technicians",
    goals: 0,
    assists: 0,
    hits: 0,
    saves: 0,
    updated: 0,
  },
  {
    name: "Braxton Murray",
    position: "Centre",
    team: "Technicians",
    goals: 0,
    assists: 0,
    hits: 0,
    saves: 0,
    updated: 0,
  },
  {
    name: "Ivan Rasputin",
    position: "Defender",
    team: "Technicians",
    goals: 0,
    assists: 0,
    hits: 0,
    saves: 0,
    updated: 0,
  },
  {
    name: "Andy Adams",
    position: "Left Wing",
    team: "Technicians",
    goals: 0,
    assists: 0,
    hits: 0,
    saves: 0,
    updated: 0,
  },
  {
    name: "Riley Carlson",
    position: "Right Wing",
    team: "Technicians",
    goals: 0,
    assists: 0,
    hits: 0,
    saves: 0,
    updated: 0,
  },
  {
    name: "Logan Ross",
    position: "Goalie",
    team: "Technicians",
    goals: 0,
    assists: 0,
    hits: 0,
    saves: 0,
    updated: 0,
  },
  {
    name: "Seth Kaufmann",
    position: "Defender",
    team: "Gondolas",
    goals: 0,
    assists: 0,
    hits: 0,
    saves: 0,
    updated: 0,
  },
  {
    name: "Jeremy Preston",
    position: "Centre",
    team: "Gondolas",
    goals: 0,
    assists: 0,
    hits: 0,
    saves: 0,
    updated: 0,
  },
  {
    name: "Tanner Keene",
    position: "Right Wing",
    team: "Gondolas",
    goals: 0,
    assists: 0,
    hits: 0,
    saves: 0,
    updated: 0,
  },
  {
    name: "Bob Hickey",
    position: "Defender",
    team: "Gondolas",
    goals: 0,
    assists: 0,
    hits: 0,
    saves: 0,
    updated: 0,
  },
  {
    name: "Jeff O'Shaughnessy",
    position: "Goalie",
    team: "Gondolas",
    goals: 0,
    assists: 0,
    hits: 0,
    saves: 0,
    updated: 0,
  },
  {
    name: "Spencer Jones",
    position: "Left Wing",
    team: "Gondolas",
    goals: 0,
    assists: 0,
    hits: 0,
    saves: 0,
    updated: 0,
  },
  {
    name: "Declan Arbour",
    position: "Defender",
    team: "Chundys",
    goals: 0,
    assists: 0,
    hits: 0,
    saves: 0,
    updated: 0,
  },
  {
    name: "Marcus Dawson",
    position: "Defender",
    team: "Chundys",
    goals: 0,
    assists: 0,
    hits: 0,
    saves: 0,
    updated: 0,
  },
  {
    name: "Jackson Reese",
    position: "Right Wing",
    team: "Chundys",
    goals: 0,
    assists: 0,
    hits: 0,
    saves: 0,
    updated: 0,
  },
  {
    name: "Zeke Calabrese",
    position: "Goalie",
    team: "Chundys",
    goals: 0,
    assists: 0,
    hits: 0,
    saves: 0,
    updated: 0,
  },
  {
    name: "Ricky Reynolds",
    position: "Left Wing",
    team: "Chundys",
    goals: 0,
    assists: 0,
    hits: 0,
    saves: 0,
    updated: 0,
  },
  {
    name: "Wyatt Shields",
    position: "Centre",
    team: "Chundys",
    goals: 0,
    assists: 0,
    hits: 0,
    saves: 0,
    updated: 0,
  },
];

export default function AdminTable({ filters, handlePayouts }) {
  const [selected, setSelected] = useState(players);

  useEffect(() => {
    let newFilter = players.filter((player) => filters.includes(player.team));
    setSelected(newFilter);
  }, [filters]);

  const handleScoreUpdate = async (flag, playerName) => {
    updateScore({
      data: { flag, playerName },
      cbSuccess: ({ data }) => {
        console.log(data);
      },
      cbFailure: (error) => {
        console.log(error);
      },
    });
  };

  return (
    <div className="flex flex-col my-12 mx-auto max-w-7xl px-8">
      <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Name
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Team
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Position
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Stats
                  </th>
                  <th scope="col" className="relative px-6 py-3">
                    <span className="sr-only">Actions</span>
                  </th>
                </tr>
              </thead>
              <tbody>
                {selected.map((player, playerIdx) => (
                  <tr
                    key={player.name}
                    className={playerIdx % 2 === 0 ? "bg-white" : "bg-gray-50"}
                  >
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      {player.name}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {player.team}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {player.position}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      Goals: {player.goals}
                      <br />
                      Assists: {player.assists}
                      <br />
                      Hits: {player.hits}
                      <br />
                      Saves: {player.saves}
                      <br />
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <div className="flex space-x-3">
                        <button
                          className="text-indigo-600 hover:text-indigo-900"
                          onClick={() => handleScoreUpdate("goal", player.name)}
                        >
                          Goal
                        </button>
                        <button
                          className="text-indigo-600 hover:text-indigo-900"
                          onClick={() =>
                            handleScoreUpdate("assist", player.name)
                          }
                        >
                          Assist
                        </button>
                        <button
                          className="text-indigo-600 hover:text-indigo-900"
                          onClick={() => handleScoreUpdate("hit", player.name)}
                        >
                          Hit
                        </button>
                        <button
                          className="text-indigo-600 hover:text-indigo-900"
                          onClick={() => handleScoreUpdate("save", player.name)}
                        >
                          Save
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
