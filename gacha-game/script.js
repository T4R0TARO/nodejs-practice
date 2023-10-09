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
// Initialize an empty history object to store the counts of different items
const history = {
  "Common Item": 0,
  "Rare Item": 0,
  "Legendary Item": 0,
};

// Function to simulate pulling from the gacha and update the history
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

  // Update the history with the pulled item
  history[selectedReward]++;

  return selectedReward;
}

let isHistoryVisible = false;

// Function to toggle the display of history
function toggleHistory() {
  const historyElement = document.getElementById("history");

  if (isHistoryVisible) {
    historyElement.style.display = "none";
    isHistoryVisible = false;
  } else {
    historyElement.style.display = "block";
    displayHistory();
    isHistoryVisible = true;
  }
}

function displayHistory() {
  const historyElement = document.getElementById("history");
  historyElement.innerHTML = "Pulled Items History:<br><br>";

  for (const item in history) {
    let itemColor = "black"; // Default color

    if (item === "Common Item") {
      itemColor = "gray"; // Change font color to gray for "Common Item"
    } else if (item === "Rare Item") {
      itemColor = "lightblue"; // Change font color to gray for "Common Item"
    } else if (item === "Legendary Item") {
      itemColor = "gold"; // Change font color to gray for "Common Item"
    }

    historyElement.innerHTML += `<span style="color: ${itemColor}; margin: 3rem;">${item}: ${history[item]}</span> `;
  }
}

// Attach click event listener to the "Show History" button
const showHistoryButton = document.getElementById("showHistoryButton");
showHistoryButton.addEventListener("click", toggleHistory);

// Function to simulate pulling a single item and add 3 to totalCurrencySpent
// function pullOnce() {
//   // Increase the total currency spent by 3
//   totalCurrencySpent += 3;

//   // Display the total currency spent on the screen
//   const currencySpentElement = document.getElementById("currencySpent");
//   currencySpentElement.textContent = `Currency Spent: ${totalCurrencySpent}`;

//   const pulledItem = pullFromGacha();

//   // Display the result on the screen
//   const resultElement = document.getElementById("result");

//   if (pulledItem === "Common Item") {
//     // If the pulled item is a "Common Item," display one of the items from the commonSummonPool
//     const randomCommonItem =
//       commonSummonPool[Math.floor(Math.random() * commonSummonPool.length)];
//     // Apply the CSS class for common items to add a light gray border
//     resultElement.innerHTML = `You obtained: <span class="common-item">${randomCommonItem}</span>`;
//   } else if (pulledItem === "Rare Item") {
//     // If the pulled item is a "Rare Item," display one of the items from the rareSummonPool
//     const randomRareItem =
//       rareSummonPool[Math.floor(Math.random() * rareSummonPool.length)];
//     // Apply the CSS class for rare items to add a light blue border
//     resultElement.innerHTML = `You obtained: <span class="rare-item">${randomRareItem}</span>`;
//   } else if (pulledItem === "Legendary Item") {
//     // If the pulled item is a "Legendary Item," display one of the items from the legendarySummonPool
//     const randomLegendaryItem =
//       legendarySummonPool[
//         Math.floor(Math.random() * legendarySummonPool.length)
//       ];
//     // Apply the CSS class for legendary items to add a gold border
//     resultElement.innerHTML = `You obtained: <span class="legendary-item">${randomLegendaryItem}</span>`;
//   } else {
//     // For other rarities, display the rarity name
//     resultElement.textContent = `You obtained: ${pulledItem}`;
//   }

//   // Display the updated history
//   displayHistory();
// }

// Function to simulate pulling 10 items
// function pullTenTimes() {
//   // Initialize an array to store the results of 10 pulls
//   const results = [];

//   for (let i = 0; i < 10; i++) {
//     const pulledItem = pullFromGacha();
//     results.push(pulledItem);
//   }

//   // Increase the total currency spent by 30 (10 pulls * 3 currency per pull)
//   totalCurrencySpent += 30;

//   // Display the total currency spent on the screen
//   const currencySpentElement = document.getElementById("currencySpent");
//   currencySpentElement.textContent = `Currency Spent: ${totalCurrencySpent}`;

//   // Display the results on the screen
//   const resultElement = document.getElementById("result");
//   resultElement.innerHTML = "You obtained:<br>";

//   for (const item of results) {
//     if (item === "Common Item") {
//       // If the item is a "Common Item," display one of the items from the commonSummonPool
//       const randomCommonItem =
//         commonSummonPool[Math.floor(Math.random() * commonSummonPool.length)];
//       resultElement.innerHTML += `<span class="common-item">${randomCommonItem}</span> `;
//     } else if (item === "Rare Item") {
//       // If the item is a "Rare Item," display one of the items from the rareSummonPool
//       const randomRareItem =
//         rareSummonPool[Math.floor(Math.random() * rareSummonPool.length)];
//       resultElement.innerHTML += `<span class="rare-item">${randomRareItem}</span> `;
//     } else if (item === "Legendary Item") {
//       // If the item is a "Legendary Item," display one of the items from the legendarySummonPool
//       const randomLegendaryItem =
//         legendarySummonPool[
//           Math.floor(Math.random() * legendarySummonPool.length)
//         ];
//       resultElement.innerHTML += `<span class="legendary-item">${randomLegendaryItem}</span> `;
//     } else {
//       // For other rarities, display the rarity name
//       resultElement.textContent += `${item} `;
//     }
//   }
//   // Display the updated history
//   displayHistory();
// }

// * NEW
// Function to simulate pulling a single item and add 3 to totalCurrencySpent with a 5-second delay
function pullOnceWithDelay() {
  // Disable the buttons during the 5-second delay
  gachaButton.disabled = true;
  pullTenButton.disabled = true;

  // Show the loading image during the delay
  const loadingElement = document.getElementById("loading");
  loadingElement.style.display = "block";

  // Increase the total currency spent by 3
  totalCurrencySpent += 3;

  // Display the total currency spent on the screen
  const currencySpentElement = document.getElementById("currencySpent");
  currencySpentElement.textContent = `Currency Spent: ${totalCurrencySpent}`;

  setTimeout(() => {
    // Hide the loading image when the delay ends
    loadingElement.style.display = "none";

    // Simulate pulling after the 5-second delay
    const pulledItem = pullFromGacha();

    // Display the result on the screen
    const resultElement = document.getElementById("result");

    if (pulledItem === "Common Item") {
      // If the pulled item is a "Common Item," display one of the items from the commonSummonPool
      const randomCommonItem =
        commonSummonPool[Math.floor(Math.random() * commonSummonPool.length)];
      resultElement.innerHTML = `You obtained: <span class="common-item">${randomCommonItem}</span>`;
    } else if (pulledItem === "Rare Item") {
      // If the pulled item is a "Rare Item," display one of the items from the rareSummonPool
      const randomRareItem =
        rareSummonPool[Math.floor(Math.random() * rareSummonPool.length)];
      resultElement.innerHTML = `You obtained: <span class="rare-item">${randomRareItem}</span>`;
    } else if (pulledItem === "Legendary Item") {
      // If the pulled item is a "Legendary Item," display one of the items from the legendarySummonPool
      const randomLegendaryItem =
        legendarySummonPool[
          Math.floor(Math.random() * legendarySummonPool.length)
        ];
      resultElement.innerHTML = `You obtained: <span class="legendary-item">${randomLegendaryItem}</span>`;
    } else {
      // For other rarities, display the rarity name
      resultElement.textContent = `You obtained: ${pulledItem}`;
    }

    // Re-enable the buttons after the delay
    gachaButton.disabled = false;
    pullTenButton.disabled = false;

    // Display the updated history
    displayHistory();
  }, 5000); // 5-second delay
}

// Function to simulate pulling 10 items with a delay
function pullTenTimesWithDelay() {
  // Disable the buttons during the 5-second delay
  gachaButton.disabled = true;
  pullTenButton.disabled = true;

  // Show the loading image during the delay
  const loadingElement = document.getElementById("loading");
  loadingElement.style.display = "block";

  setTimeout(() => {
    // Hide the loading image when the delay ends
    loadingElement.style.display = "none";

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

    // Re-enable the buttons after the delay
    gachaButton.disabled = false;
    pullTenButton.disabled = false;

    // Display the updated history
    displayHistory();
  }, 5000); // 5-second delay
}

// * /NEW
// Attach click event listeners to the gacha button and pull ten button
const gachaButton = document.getElementById("gachaButton");
// gachaButton.addEventListener("click", pullOnce);
gachaButton.addEventListener("click", pullOnceWithDelay);

const pullTenButton = document.getElementById("pullTenButton");
// pullTenButton.addEventListener("click", pullTenTimes);
pullTenButton.addEventListener("click", pullTenTimesWithDelay);
