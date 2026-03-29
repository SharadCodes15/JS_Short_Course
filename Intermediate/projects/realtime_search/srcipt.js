// Note -> I accidently deleted this files so i took it from gemini . 
// this was my code although that was given for debugging

const users = [
    "Alice Johnson",
    "Bob Smith",
    "Charlie Davis",
    "Diana Prince",
    "Edward Norton",
    "Fiona Gallagher"
];

const inp = document.querySelector("#searchInput");
const ul = document.querySelector('#userList');

/**
 * Renders the list of users to the UI
 * @param {Array} arr - The array of names to display
 */
function showUsers(arr) {
    // Clear the list before every render
    ul.innerHTML = "";

    // Check if the array is empty using .length
    if (arr.length === 0) {
        let li = document.createElement("li");
        li.classList.add("no-result");
        li.textContent = "No user found";
        ul.appendChild(li);
    } else {
        // Create an LI for each matching user
        arr.forEach((name) => {
            let li = document.createElement("li");
            li.classList.add("user-item");
            li.textContent = name;
            ul.appendChild(li);
        });
    }
}

// Event listener for real-time typing
inp.addEventListener("input", function() {
    const searchTerm = inp.value.toLowerCase().trim();

    const filteredUsers = users.filter((user) => {
        return user.toLowerCase().startsWith(searchTerm);
    });

    showUsers(filteredUsers);
});

// Initial call to populate the list when the page loads
showUsers(users);