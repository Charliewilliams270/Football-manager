
// Simple team data
const leagues = {
  premier: [
    "Arsenal", "Aston Villa", "Chelsea", "Liverpool", "Manchester City",
    "Manchester United", "Newcastle United", "Tottenham Hotspur",
    "West Ham United", "Everton"
  ],
  championship: [
    "Leeds United", "Southampton", "West Brom", "Norwich City",
    "Sunderland", "Hull City", "Cardiff City", "Birmingham City",
    "Blackburn Rovers", "Stoke City"
  ],
  league1: [
    "Derby County", "Portsmouth", "Barnsley", "Charlton Athletic",
    "Wigan Athletic", "Bolton Wanderers", "Oxford United", "Peterborough",
    "Lincoln City", "Blackpool"
  ],
  league2: [
    "Stockport County", "Wrexham", "Mansfield Town", "Crewe Alexandra",
    "Bradford City", "Gillingham", "Colchester United", "Tranmere Rovers",
    "Doncaster Rovers", "Newport County"
  ]
};

// Called when choosing a league
function chooseLeague(league) {
  localStorage.setItem("selectedLeague", league);
  window.location.href = "teams.html";
}

// When teams.html loads
window.onload = function () {
  const leagueKey = localStorage.getItem("selectedLeague");
  if (!leagueKey) return;

  if (document.getElementById("league-title")) {
    // Title
    document.getElementById("league-title").innerText = formatLeagueName(leagueKey);

    // Teams
    const list = document.getElementById("team-list");
    leagues[leagueKey].forEach(team => {
      const li = document.createElement("li");
      li.textContent = team;
      list.appendChild(li);
    });
  }
};

function formatLeagueName(key) {
  switch (key) {
    case "premier": return "Premier League";
    case "championship": return "Championship";
    case "league1": return "League One";
    case "league2": return "League Two";
    default: return "Unknown League";
  }
}
