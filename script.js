// Variable & Conditionals
// Example: Check voting eligibility based on age
function checkAge() {
    let age = document.getElementById("userAge").value; // Variable to store input
    let result = "";

if (age >= 18) {
    result = "✅ You are eligible to vote!";
    } else if (age > 0) {
    result = "⚠️ You are too young to vote.";
    } else {
    result = "❌ Please enter a valid age.";
    }

    document.getElementById("ageResult").textContent = result;
};

// A function to calculate the total price
function calculateTotal(prices) {
    let total = 0;
for (let price of prices) {
    total += price;
}
    return total;
}

// Using the function when button is clicked
function calculateTotalOnClick() {
    let items = [200, 150, 350]; // Example prices
    let total = calculateTotal(items);
    document.getElementById("calcResult").textContent = `Total: $${total}`;
};

// Countdown using a loop
function countdown() {
    let countdownList = document.getElementById("countdownList");
    countdownList.innerHTML = ""; // Clear list before adding new items

for (let i = 5; i >= 1; i--) {
    let li = document.createElement("li");
    li.textContent = i;
    countdownList.appendChild(li);
}

let j = 0;
while (j < 3) {
    console.log("While loop iteration:", j);
    j++;
}
};

// DOM Manipulation
// Example: Toggle highlight class
function toggleHighlight() {
document.getElementById("toggleText").classList.toggle("highlight");// refers to the highlight class in style.css
};
