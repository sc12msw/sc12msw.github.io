 document.addEventListener("DOMContentLoaded", function() {
            fetch('teams.json')
                .then(response => response.json())
                .then(data => {
                    const container = document.getElementById('teams-container');
                    data.teams.forEach(team => {
                        const teamDiv = document.createElement('div');
                        teamDiv.classList.add('team');
                        teamDiv.innerHTML = `
                            <h2>${team.name}</h2>
                            <ul class="characters">
                                ${team.characters.map(char => `
                                    <li><img src="${char.avatar}" alt="${char.name} Avatar">${char.name}</li>
                                `).join('')}
                            </ul>
                            <div class="dropdown">
                                <button onclick="toggleDropdown(this)">Show Counters</button>
                                <div class="dropdown-content">
                                    ${team.counters.map(counter => `
                                        <h3>${counter.name}</h3>
                                        <ul class="counters">
                                            ${counter.characters.map(char => `
                                                <li><img src="${char.avatar}" alt="${char.name} Avatar">${char.name}</li>
                                            `).join('')}
                                        </ul>
                                        <div class="video">
                                            <iframe src="${counter.youtube}" frameborder="0" allowfullscreen></iframe>
                                        </div>
                                    `).join('')}
                                </div>
                            </div>
                        `;
                        container.appendChild(teamDiv);
                    });
                });

            document.getElementById('jawasound').play();
        });

        function toggleDropdown(button) {
            const content = button.nextElementSibling;
            content.style.display = content.style.display === 'block' ? 'none' : 'block';
        }