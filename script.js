// Player data
const players = [
  {
      name: "OPgamerv12",
      playtime: "188 hours, 2 minutes",
      playerKills: 44,
      distanceTravelled: "869,261 blocks",
      blocksBroken: "66,904 blocks"
  },
  {
      name: "Evilner89013",
      playtime: "316 hours",
      playerKills: 31,
      distanceTravelled: "3,080,651 blocks",
      blocksBroken: "113,516 blocks"
  },
  {
      name: "opplay",
      playtime: "96 hours, 40 minutes",
      playerKills: 235,
      distanceTravelled: "662,649 blocks",
      blocksBroken: "10,623 blocks"
  },
  {
      name: "omar",
      playtime: "11 hours, 35 minutes",
      playerKills: 64,
      distanceTravelled: "31,432 blocks",
      blocksBroken: "114 blocks"
  }
];

// Get the popup, buttons, and player elements
const popup = document.getElementById('player-info-popup');
const closePopupBtn = document.getElementById('close-popup'); // Close button on the top (X)
const exitPopupBtn = document.getElementById('exit-popup'); // Close button inside the popup
const playerNamePopup = document.getElementById('player-name'); // Element to display player name
const playerDetailsPopup = document.getElementById('player-info'); // Element to display player details

// Function to open the player info popup with specific player data
function openPlayerInfo(player) {
  // Set the player details in the popup
  playerNamePopup.textContent = player.name;
  playerDetailsPopup.innerHTML = `
      <li><strong>Playtime:</strong> ${player.playtime}</li>
      <li><strong>Player Kills:</strong> ${player.playerKills}</li>
      <li><strong>Distance Travelled:</strong> ${player.distanceTravelled}</li>
      <li><strong>Blocks Broken:</strong> ${player.blocksBroken}</li>
  `;

  // Show the popup
  popup.style.display = 'flex';
  popup.style.opacity = '1';
  popup.style.pointerEvents = 'auto';
}

// Close the popup when the close button (X) is clicked
closePopupBtn.addEventListener('click', function() {
  popup.style.display = 'none';
  popup.style.opacity = '0';
  popup.style.pointerEvents = 'none';
});

// Close the popup when the "exit" button is clicked
exitPopupBtn.addEventListener('click', function() {
  popup.style.display = 'none';
  popup.style.opacity = '0';
  popup.style.pointerEvents = 'none';
});

// Add event listeners to player elements
document.querySelectorAll('.player').forEach((playerElement, index) => {
  playerElement.addEventListener('click', function() {
      openPlayerInfo(players[index]); // Open the popup with the clicked player's info
  });
});
