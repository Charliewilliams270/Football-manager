function chooseLeague(league) {
  localStorage.setItem("selectedLeague", league);
  alert("You selected " + league + "! (Next step: load game.html here)");
}
