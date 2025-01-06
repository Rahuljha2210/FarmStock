let inventory = { legs: 60, wings: 60, flesh: 30 };
const WEIGHT = { legs: 250, wings: 250, flesh: 1000 };

document.getElementById("orderForm").addEventListener("submit", (event) => {
  event.preventDefault();

  const getValue = (id) => parseInt(document.getElementById(id).value) || 0;
  const [legs, wings, flesh] = ["legs", "wings", "flesh"].map(getValue);

  const output = document.getElementById("output");
  const errorDiv = document.getElementById("error");

  if (legs > inventory.legs || wings > inventory.wings || flesh > inventory.flesh) {
    errorDiv.style.display = "block";
    document.getElementById("errorMessage").textContent = 
      "Error: Our inventory contains 30 chickens. Not enough inventory to fulfill the order.";
    output.style.display = "none";
    return;
  }

  errorDiv.style.display = "none";
  const totalWeight = (legs * WEIGHT.legs + wings * WEIGHT.wings + flesh * WEIGHT.flesh) / 1000;
  const chickensUsed = Math.max(Math.ceil(legs / 2), Math.ceil(wings / 2), Math.ceil(flesh));
  const chickenRemains = 30 - chickensUsed ;

  inventory.legs -= legs;
  inventory.wings -= wings;
  inventory.flesh -= flesh;

  Object.entries({
    orderWeight: `Your order weight: ${totalWeight} kg`,
    chickensUsed: `Total Chickens Needed: ${chickensUsed}`,
    remainingInventory: `Remaining Inventory: ${inventory.legs} legs, ${inventory.wings} wings, ${inventory.flesh} flesh portions`,
    remainingChickens: `Total Chickens Remains: ${chickenRemains}`
  }).forEach(([id, text]) => (document.getElementById(id).textContent = text));

  output.style.display = "block";
});
