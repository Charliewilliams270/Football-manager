// Full 2024/25 English leagues
const leagues = {
  premier: [
    "Arsenal", "Aston Villa", "Bournemouth", "Brentford", "Brighton",
    "Chelsea", "Crystal Palace", "Everton", "Fulham", "Ipswich Town",
    "Leicester City", "Liverpool", "Manchester City", "Manchester United",
    "Newcastle United", "Nottingham Forest", "Southampton",
    "Tottenham Hotspur", "West Ham United", "Wolverhampton Wanderers"
  ],
  championship: [
    "Blackburn Rovers", "Bristol City", "Cardiff City", "Coventry City",
    "Derby County", "Hull City", "Leeds United", "Luton Town",
    "Middlesbrough", "Millwall", "Norwich City", "Oxford United",
    "Plymouth Argyle", "Portsmouth", "Preston North End", "Queens Park Rangers",
    "Sheffield United", "Sheffield Wednesday", "Stoke City", "Sunderland",
    "Swansea City", "Watford", "West Bromwich Albion", "Huddersfield Town"
  ],
  league1: [
    "Barnsley", "Birmingham City", "Blackpool", "Bolton Wanderers",
    "Burton Albion", "Cambridge United", "Carlisle United", "Charlton Athletic",
    "Cheltenham Town", "Exeter City", "Fleetwood Town", "Leyton Orient",
    "Lincoln City", "Mansfield Town", "Northampton Town", "Peterborough United",
    "Port Vale", "Reading", "Rotherham United", "Shrewsbury Town",
    "Stevenage", "Wigan Athletic", "Wycombe Wanderers"
  ],
  league2: [
    "Accrington Stanley", "AFC Wimbledon", "Barrow", "Bradford City",
    "Colchester United", "Crawley Town", "Crewe Alexandra", "Doncaster Rovers",
    "Forest Green Rovers", "Gillingham", "Grimsby Town", "Harrogate Town",
    "Milton Keynes Dons", "Morecambe", "Newport County", "Notts County",
    "Salford City", "Stockport County", "Sutton United", "Swindon Town",
    "Tranmere Rovers", "Walsall", "Wrexham"
  ]
};

// Example team colours (add more later)
const teamColors = {
  "Arsenal": "#EF0107",
  "Chelsea": "#034694",
  "Liverpool": "#C8102E",
  "Manchester City": "#6CABDD",
  "Manchester United": "#DA291C",
  "Tottenham Hotspur": "#132257",
  "Everton": "#003399",
  "West Ham United": "#7A263A",
  "Newcastle United": "#241F20",
  "Leeds United": "#FFCD00",
  "Wrexham": "#c8102e"
};

// ----- League selection -----
function chooseLeague(league) {
  localStorage.setItem("selectedLeague", league);
  window.location.href = "teams.html";
}

// ----- Team selection -----
function chooseTeam(team) {
  localStorage.setItem("selectedTeam", team);
  window.location.href = "dashboard.html";
}

// ----- On page load -----
window.onload = function () {
  const leagueKey = localStorage.getItem("selectedLeague");
  const teamKey = localStorage.getItem("selectedTeam");

  // On teams.html
if (document.getElementById("team-list") && leagueKey) {
  document.getElementById("league-title").innerText = formatLeagueName(leagueKey);

  const container = document.getElementById("team-list");
  leagues[leagueKey].forEach(team => {
    const btn = document.createElement("button");
    btn.textContent = team;
    btn.className = "team-btn";
    btn.onclick = () => chooseTeam(team);
    container.appendChild(btn);
  });
}


  // On dashboard.html
  if (document.getElementById("team-name") && teamKey) {
    document.getElementById("team-name").innerText = teamKey;
    document.getElementById("welcome").innerText = "Welcome, manager of " + teamKey + "!";

    // Apply team colour
    const body = document.getElementById("dashboard");
    body.style.background = teamColors[teamKey] || "#333";
    body.style.color = "white";
  }
};

// Format league names
function formatLeagueName(key) {
  switch (key) {
    case "premier": return "Premier League";
    case "championship": return "Championship";
    case "league1": return "League One";
    case "league2": return "League Two";
    default: return "Unknown League";
  }
}
