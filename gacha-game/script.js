// const {
//   commonSummonPool,
//   rareSummonPool,
//   legendarySummonPool,
// } = require("./data.js");

// Define an array of possible rewards with associated percentages
const rewards = [
  { name: "Common Item", chance: 94 },
  { name: "Rare Item", chance: 5 },
  // { name: "Epic Item", chance: 15 },
  { name: "Legendary Item", chance: 1 },
];

// Define a pool of common items
const commonSummonPool = [
  "🍅",
  "🍆",
  "🌽",
  "🥗",
  "🍄",
  "🥑",
  "🥒",
  "🥬",
  "🥦",
  "🥔",
  "🧄",
  "🧅",
  "🥕",
];

// Define a pool of rare items
const rareSummonPool = [
  "🥝",
  "🍇",
  "🍈",
  "🍉",
  "🍊",
  "🍍",
  "🥭",
  "🍎",
  "🍐",
  "🍑",
  "🍓",
  "🍒",
  "🍌",
  "🍋",
];

// Define a pool of legendary items
const legendarySummonPool = [
  "🍦",
  "🍧",
  "🧁",
  "🍫",
  "🍬",
  "🍭",
  "🍡",
  "🍮",
  "🍰",
  "🍪",
  "🍩",
];

// Initialize the total currency spent
let totalCurrencySpent = 0;

// Function to simulate pulling from the gacha
function pullFromGacha() {
  // Generate a random number between 0 and 100
  const randomNumber = Math.random() * 100;

  // Initialize variables to keep track of the selected reward and cumulative chance
  let selectedReward = null;
  let cumulativeChance = 0;

  // Iterate through the rewards to determine the selected reward based on chances
  for (const reward of rewards) {
    cumulativeChance += reward.chance;
    if (randomNumber < cumulativeChance) {
      selectedReward = reward.name;
      break;
    }
  }

  return selectedReward;
}

// Function to simulate pulling a single item and add 3 to totalCurrencySpent
function pullOnce() {
  // Increase the total currency spent by 3
  totalCurrencySpent += 3;

  // Display the total currency spent on the screen
  const currencySpentElement = document.getElementById("currencySpent");
  currencySpentElement.textContent = `Currency Spent: ${totalCurrencySpent}`;

  const pulledItem = pullFromGacha();

  // Display the result on the screen
  const resultElement = document.getElementById("result");

  if (pulledItem === "Common Item") {
    // If the pulled item is a "Common Item," display one of the items from the commonSummonPool
    const randomCommonItem =
      commonSummonPool[Math.floor(Math.random() * commonSummonPool.length)];
    // Apply the CSS class for common items to add a light gray border
    resultElement.innerHTML = `You obtained: <span class="common-item">${randomCommonItem}</span>`;
  } else if (pulledItem === "Rare Item") {
    // If the pulled item is a "Rare Item," display one of the items from the rareSummonPool
    const randomRareItem =
      rareSummonPool[Math.floor(Math.random() * rareSummonPool.length)];
    // Apply the CSS class for rare items to add a light blue border
    resultElement.innerHTML = `You obtained: <span class="rare-item">${randomRareItem}</span>`;
  } else if (pulledItem === "Legendary Item") {
    // If the pulled item is a "Legendary Item," display one of the items from the legendarySummonPool
    const randomLegendaryItem =
      legendarySummonPool[
        Math.floor(Math.random() * legendarySummonPool.length)
      ];
    // Apply the CSS class for legendary items to add a gold border
    resultElement.innerHTML = `You obtained: <span class="legendary-item">${randomLegendaryItem}</span>`;
  } else {
    // For other rarities, display the rarity name
    resultElement.textContent = `You obtained: ${pulledItem}`;
  }
}

// Function to simulate pulling 10 items
function pullTenTimes() {
  // Initialize an array to store the results of 10 pulls
  const results = [];

  for (let i = 0; i < 10; i++) {
    const pulledItem = pullFromGacha();
    results.push(pulledItem);
  }

  // Increase the total currency spent by 30 (10 pulls * 3 currency per pull)
  totalCurrencySpent += 30;

  // Display the total currency spent on the screen
  const currencySpentElement = document.getElementById("currencySpent");
  currencySpentElement.textContent = `Currency Spent: ${totalCurrencySpent}`;

  // Display the results on the screen
  const resultElement = document.getElementById("result");
  resultElement.innerHTML = "You obtained:<br>";

  for (const item of results) {
    if (item === "Common Item") {
      // If the item is a "Common Item," display one of the items from the commonSummonPool
      const randomCommonItem =
        commonSummonPool[Math.floor(Math.random() * commonSummonPool.length)];
      resultElement.innerHTML += `<span class="common-item">${randomCommonItem}</span> `;
    } else if (item === "Rare Item") {
      // If the item is a "Rare Item," display one of the items from the rareSummonPool
      const randomRareItem =
        rareSummonPool[Math.floor(Math.random() * rareSummonPool.length)];
      resultElement.innerHTML += `<span class="rare-item">${randomRareItem}</span> `;
    } else if (item === "Legendary Item") {
      // If the item is a "Legendary Item," display one of the items from the legendarySummonPool
      const randomLegendaryItem =
        legendarySummonPool[
          Math.floor(Math.random() * legendarySummonPool.length)
        ];
      resultElement.innerHTML += `<span class="legendary-item">${randomLegendaryItem}</span> `;
    } else {
      // For other rarities, display the rarity name
      resultElement.textContent += `${item} `;
    }
  }
}

// Attach click event listeners to the gacha button and pull ten button
const gachaButton = document.getElementById("gachaButton");
gachaButton.addEventListener("click", pullOnce);

const pullTenButton = document.getElementById("pullTenButton");
pullTenButton.addEventListener("click", pullTenTimes);
