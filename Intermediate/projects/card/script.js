//  Full Generated code for analysis because it was deleted

let cards = [
    { id: 1, title: "Card One" },
    { id: 2, title: "Card Two" },
    { id: 3, title: "Card Three" }
];

const display = document.querySelector("#cardDisplay");

function renderCards() {
    display.innerHTML = "";
    
    cards.forEach((card) => {
        const cardEl = document.createElement("div");
        cardEl.className = "card";
        cardEl.innerHTML = `
            <div class="card-info">
                <h3>${card.title}</h3>
                <small>ID: ${card.id}</small>
            </div>
        `;
        display.appendChild(cardEl);
    });
}

// Cyclic Move Up: First becomes Last
function moveUp() {
    if (cards.length < 2) return;
    const firstCard = cards.shift(); // Remove from top
    cards.push(firstCard);           // Add to bottom
    renderCards();
}

// Cyclic Move Down: Last becomes First
function moveDown() {
    if (cards.length < 2) return;
    const lastCard = cards.pop();    // Remove from bottom
    cards.unshift(lastCard);         // Add to top
    renderCards();
}

function addCard() {
    const newId = cards.length > 0 ? Math.max(...cards.map(c => c.id)) + 1 : 1;
    cards.push({ id: newId, title: `Card ${newId}` });
    renderCards();
}

// Initial Render
renderCards();