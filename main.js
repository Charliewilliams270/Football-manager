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
    "Stevenage", "Wigan Athletic", "Wycombe Wanderers", "Portsmouth"
  ],
  league2: [
    "Accrington Stanley", "AFC Wimbledon", "Barrow", "Bradford City",
    "Colchester United", "Crawley Town", "Crewe Alexandra", "Doncaster Rovers",
    "Forest Green Rovers", "Gillingham", "Grimsby Town", "Harrogate Town",
    "Milton Keynes Dons", "Morecambe", "Newport County", "Notts County",
    "Salford City", "Stockport County", "Sutton United", "Swindon Town",
    "Tranmere Rovers", "Walsall", "Wrexham", "Yeovil Town"
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
