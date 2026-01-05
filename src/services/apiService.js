
/*TEAMS*/

export async function getTeams() {
  const res = await fetch('/data/teams.json');
  return res.json();
}

export async function getTeamById(id) {
  const data = await getTeams();
  return data.teams.find(t => t.id === id);
}

export async function getTeamByCategory(category) {
  const data = await getTeams();
  return data.teams.filter(t => t.category === category);
}

export async function getTotalTeams() {
  const data = await getTeams();
  return data.total ? data.total : 0;
}


/*RESULTS*/

export async function getResults() {
  const res = await fetch('/data/results.json');
  return res.json();
}

export async function getLastResults() {
  const { results } = await getResults();

  const resultsName = await Promise.all(
    results.map(async r => {
      const team = await getTeamById(r.team);
      return {
        ...r,
        team: {
          id: r.team,
          name: team.name
        } 
      }
    })
  )

  return resultsName || [];
}