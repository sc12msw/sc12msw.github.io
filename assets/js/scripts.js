// Fetch the teams data and render it on the page
fetch('/assets/data/teams.json')
    .then(response => response.json())
    .then(data => {
        const container = document.getElementById('teams-container');
        data.teams.forEach(team => {
            const teamDiv = document.createElement('div');
            teamDiv.classList.add('team');
            teamDiv.innerHTML = `
                <h2>${team.name}</h2>
                <p>${team.info}</p>
                <ul class="characters">
                    ${team.characters.map(char => `
                        <li>
                            <img src="${char.avatar}" alt="${char.name} Avatar">
                            <a href="${char.link}" target="_blank">${char.name}</a>
                        </li>
                    `).join('')}
                </ul>
                <div class="dropdown">
                    <button onclick="toggleDropdown(this)">Show Counters</button>
                    <div class="dropdown-content">
                        ${team.counters.map(counter => `
                            <h3>${counter.name}</h3>
                            <p>${counter.info}</p>
                            <ul class="counters">
                                ${counter.characters.map(char => `
                                    <li>
                                        <img src="${char.avatar}" alt="${char.name} Avatar">
                                        <a href="${char.link}" target="_blank">${char.name}</a>
                                    </li>
                                `).join('')}
                            </ul>
                            <div class="video">
                                <a href="${counter.youtube}" target="_blank" class="button">Watch on YouTube</a>
                            </div>
                        `).join('')}
                    </div>
                </div>
            `;
            container.appendChild(teamDiv);
        });
    });

function enableSound() {
    document.getElementById('jawasound').play();
    setInterval(playSound, 300000); // 300000 milliseconds = 5 minutes
    document.getElementById('enable-sound').style.display = 'none'; // Hide the button after enabling sound
}

function playSound() {
    document.getElementById('jawasound').play();
}

// Function to toggle dropdown content
function toggleDropdown(button) {
    const content = button.nextElementSibling;
    content.style.display = content.style.display === 'block' ? 'none' : 'block';
}
