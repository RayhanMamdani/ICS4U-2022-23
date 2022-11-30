// Hamburger menu
document.addEventListener('DOMContentLoaded', () => {

  // Get all "navbar-burger" elements
  const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

  // Add a click event on each of them
  $navbarBurgers.forEach( el => {
    el.addEventListener('click', () => {

      // Get the target from the "data-target" attribute
      const target = el.dataset.target;
      const $target = document.getElementById(target);

      // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
      el.classList.toggle('is-active');
      $target.classList.toggle('is-active');

    });
  });

});

//When button is clicked to add game, added to local storage
function addGame() {
    //Get inputs from form
    let team1 = document.querySelector('#team1');
    let team2 = document.querySelector('#team2');
    let score1 = document.querySelector('#score1');
    let score2 = document.querySelector('#score2');
    let date = document.querySelector('#date');
    let danger = document.querySelector('#alertBox')
    danger.style.display = 'none';
    danger.replaceChildren();

    let alertText = document.createElement('p');

    //Array used in displaying games on pastgames so that games are not duplicated from opponent's array
    let arrFilter;
    if (localStorage.getItem('dateRange') == null)
        arrFilter = [
  {
    "score": "103",
    "opponentName": "Boston Celtics",
    "opponentScore": "108",
    "date": "2022-11-29",
    "name": "Atlanta Hawks"
  },
  {
    "score": "109",
    "opponentName": "Washington Wizards",
    "opponentScore": "101",
    "date": "2022-11-23",
    "name": "Atlanta Hawks"
  },
  {
    "score": "109",
    "opponentName": "Charlotte Hornets",
    "opponentScore": "83",
    "date": "2022-11-26",
    "name": "Atlanta Hawks"
  },
  {
    "score": "90",
    "opponentName": "Orlando Magic",
    "opponentScore": "106",
    "date": "2022-11-19",
    "name": "Atlanta Hawks"
  },
  {
    "score": "96",
    "opponentName": "Brooklyn Nets",
    "opponentScore": "100",
    "date": "2022-11-25",
    "name": "Boston Celtics"
  },
  {
    "score": "97",
    "opponentName": "New York Knicks",
    "opponentScore": "99",
    "date": "2022-11-20",
    "name": "Boston Celtics"
  },
  {
    "score": "104",
    "opponentName": "Detroit Pistons",
    "opponentScore": "106",
    "date": "2022-11-22",
    "name": "Boston Celtics"
  },
  {
    "score": "110",
    "opponentName": "Indiana Pacers",
    "opponentScore": "103",
    "date": "2022-11-28",
    "name": "Boston Celtics"
  },
  {
    "score": "110",
    "opponentName": "Miami Heat",
    "opponentScore": "123",
    "date": "2022-11-29",
    "name": "Milwaukee Bucks"
  },
  {
    "score": "105",
    "opponentName": "Washington Wizards",
    "opponentScore": "104",
    "date": "2022-11-29",
    "name": "Milwaukee Bucks"
  },
  {
    "score": "107",
    "opponentName": "Washington Wizards",
    "opponentScore": "102",
    "date": "2022-11-20",
    "name": "Brooklyn Nets"
  },
  {
    "score": "107",
    "opponentName": "Indiana Pacers",
    "opponentScore": "115",
    "date": "2022-11-03",
    "name": "Brooklyn Nets"
  },
  {
    "score": "119",
    "opponentName": "Toronto Raptors",
    "opponentScore": "104",
    "date": "2022-11-08",
    "name": "Chicago Bulls"
  },
  {
    "score": "109",
    "opponentName": "Phoenix Suns",
    "opponentScore": "103",
    "date": "2022-11-29",
    "name": "Dallas Mavericks"
  },
  {
    "score": "109",
    "opponentName": "Los Angeles Clippers",
    "opponentScore": "110",
    "date": "2022-11-23",
    "name": "Dallas Mavericks"
  },
  {
    "score": "104",
    "opponentName": "Los Angeles Clippers",
    "opponentScore": "99",
    "date": "2022-11-21",
    "name": "Sacramento Kings"
  },
  {
    "score": "102",
    "opponentName": "Portland Trail Blazers",
    "opponentScore": "99",
    "date": "2022-11-20",
    "name": "Sacramento Kings"
  },
  {
    "score": "95",
    "opponentName": "Utah Jazz",
    "opponentScore": "97",
    "date": "2022-11-12",
    "name": "Sacramento Kings"
  },
  {
    "score": "94",
    "opponentName": "Utah Jazz",
    "opponentScore": "96",
    "date": "2022-11-12",
    "name": "Portland Trail Blazers"
  },
  {
    "score": "94",
    "opponentName": "Utah Jazz",
    "opponentScore": "96",
    "date": "2022-11-17",
    "name": "Oklahoma City Thunder"
  },
  {
    "score": "94",
    "opponentName": "San Antonio Spurs",
    "opponentScore": "96",
    "date": "2022-11-17",
    "name": "Houston Rockets"
  },
  {
    "score": "109",
    "opponentName": "Memphis Grizzlies",
    "opponentScore": "107",
    "date": "2022-11-30",
    "name": "Denver Nuggets"
  },
  {
    "score": "109",
    "opponentName": "Los Angeles Lakers",
    "opponentScore": "106",
    "date": "2022-11-22",
    "name": "Denver Nuggets"
  },
  {
    "score": "109",
    "opponentName": "Los Angeles Lakers",
    "opponentScore": "106",
    "date": "2022-11-22",
    "name": "Denver Nuggets"
  },
  {
    "score": "92",
    "opponentName": "New Orleans Pelicans",
    "opponentScore": "106",
    "date": "2022-11-11",
    "name": "Denver Nuggets"
  },
  {
    "score": "92",
    "opponentName": "Minnesota Timberwolves",
    "opponentScore": "107",
    "date": "2022-11-09",
    "name": "Denver Nuggets"
  },
  {
    "score": "102",
    "opponentName": "Phoenix Suns",
    "opponentScore": "107",
    "date": "2022-11-15",
    "name": "Denver Nuggets"
  },
  {
    "score": "117",
    "opponentName": "San Antonio Spurs",
    "opponentScore": "107",
    "date": "2022-11-17",
    "name": "Denver Nuggets"
  },
  {
    "score": "105",
    "opponentName": "Minnesota Timberwolves",
    "opponentScore": "110",
    "date": "2022-11-18",
    "name": "Golden State Warriors"
  },
  {
    "score": "103",
    "opponentName": "New Orleans Pelicans",
    "opponentScore": "95",
    "date": "2022-11-20",
    "name": "Golden State Warriors"
  },
  {
    "score": "103",
    "opponentName": "Memphis Grizzlies",
    "opponentScore": "102",
    "date": "2022-11-27",
    "name": "Golden State Warriors"
  },
  {
    "score": "109",
    "opponentName": "Memphis Grizzlies",
    "opponentScore": "102",
    "date": "2022-11-10",
    "name": "Minnesota Timberwolves"
  },
  {
    "score": "110",
    "opponentName": "Oklahoma City Thunder",
    "opponentScore": "109",
    "date": "2022-11-20",
    "name": "Denver Nuggets"
  },
  {
    "score": "112",
    "opponentName": "Houston Rockets",
    "opponentScore": "104",
    "date": "2022-11-08",
    "name": "Denver Nuggets"
  },
  {
    "score": "97",
    "opponentName": "San Antonio Spurs",
    "opponentScore": "104",
    "date": "2022-11-14",
    "name": "Denver Nuggets"
  },
  {
    "score": "104",
    "opponentName": "Portland Trail Blazers",
    "opponentScore": "100",
    "date": "2022-11-28",
    "name": "Denver Nuggets"
  },
  {
    "score": "97",
    "opponentName": "Utah Jazz",
    "opponentScore": "87",
    "date": "2022-11-27",
    "name": "Denver Nuggets"
  },
  {
    "score": "96",
    "opponentName": "Utah Jazz",
    "opponentScore": "93",
    "date": "2022-11-25",
    "name": "Denver Nuggets"
  },
  {
    "score": "100",
    "opponentName": "Atlanta Hawks",
    "opponentScore": "96",
    "date": "2022-11-29",
    "name": "Boston Celtics"
  },
  {
    "score": "103",
    "opponentName": "Philadelphia 76ers",
    "opponentScore": "91",
    "date": "2022-11-13",
    "name": "Boston Celtics"
  },
  {
    "score": "103",
    "opponentName": "Cleveland Cavaliers",
    "opponentScore": "109",
    "date": "2022-11-17",
    "name": "Boston Celtics"
  },
  {
    "score": "103",
    "opponentName": "Charlotte Hornets",
    "opponentScore": "109",
    "date": "2022-11-09",
    "name": "Boston Celtics"
  },
  {
    "score": "117",
    "opponentName": "Indiana Pacers",
    "opponentScore": "109",
    "date": "2022-11-09",
    "name": "Boston Celtics"
  },
  {
    "score": "87",
    "opponentName": "Brooklyn Nets",
    "opponentScore": "91",
    "date": "2022-11-25",
    "name": "Boston Celtics"
  }
        ];
    else    
        arrFilter = JSON.parse(localStorage.getItem('dateRange'));
    
    //gets teams from local storage
    let westTeams = (JSON.parse(localStorage.getItem('westT')));
    let eastTeams = (JSON.parse(localStorage.getItem('eastT')));

    //validation for teams and numbers
    if (team1.value === '' || team2.value === '') {
        alertText.textContent = '*You must select teams in the league';
        alertText.style.color = 'red';
        danger.style.display = 'inline-block';
        danger.appendChild(alertText);
        return;
    } else if (team1.value === team2.value) {
        alertText.textContent = '*You must select different teams';
        alertText.style.color = 'red';
        danger.style.display = 'inline-block';
        danger.appendChild(alertText);
        return;
    } else if (score1.value < 0 || score2.value < 0) {
        alertText.textContent = '*You must input scores of 0 or higher';
        alertText.style.color = 'red';
        danger.style.display = 'inline-block';
        danger.appendChild(alertText);
        return;
    } else if (score1.value == score2.value) {
        alertText.textContent = '*The teams could not have tied';
        alertText.style.color = 'red';
        danger.style.display = 'inline-block';
        danger.appendChild(alertText);
        return;
    } else if (date.value == '') {
        alertText.textContent = '*You must select the date';
        alertText.style.color = 'red';
        danger.style.display = 'inline-block';
        danger.appendChild(alertText);
        return;
    }

    //validation to see if both teams are an actual team in league
    let notTeam1 = true;
    let notTeam2 = true;

    //game object is stored so we only push if information inputted has been validated
    let mainGame;
    let mainGameId;
    let oppGame;
    let oppGameId;

    //checks which team to add the game to (added to both teams)
    for (let i = 0; i < westTeams.length; i++) {
        if (westTeams[i].name === team1.value) {
            mainGame = {
                score: score1.value,
                opponentName: team2.value,
                opponentScore: score2.value,
                date: date.value
            };
            notTeam1 = false;
            mainGameId = i;
        }
        else if (westTeams[i].name == team2.value) {
            oppGame = {
                score: score2.value,
                opponentName: team1.value,
                opponentScore: score1.value,
                date: date.value
            };
            notTeam2 = false;
            oppGameId = i;
        }
    }
    for (let i = 0; i < eastTeams.length; i++) {
        if (eastTeams[i].name === team1.value) {
            mainGame = {
                score: score1.value,
                opponentName: team2.value,
                opponentScore: score2.value,
                date: date.value
            };
            notTeam1 = false;
            mainGameId = i + 15;
        }
        else if (eastTeams[i].name == team2.value) {
            oppGame = {
                score: score2.value,
                opponentName: team1.value,
                opponentScore: score1.value,
                date: date.value
            };
            notTeam2 = false;
            oppGameId = i + 15;
        }
    }

    //validates if teams are in the league
    if (notTeam1 && notTeam2) {
        alertText.textContent = '*Team 1 and Team 2 are not in this league';
        alertText.style.color = 'red';
        danger.style.display = 'inline-block';
        danger.appendChild(alertText);
        return;
    } else if (notTeam1) {
        alertText.textContent = '*Team 1 is not in this league';
        alertText.style.color = 'red';
        danger.style.display = 'inline-block';
        danger.appendChild(alertText);
        return;
    } else if (notTeam2) {
        alertText.textContent = '*Team 2 is not in this league';
        alertText.style.color = 'red';
        danger.style.display = 'inline-block';
        danger.appendChild(alertText);
        return;
    }

    //to know which array to add to using index for team and opponent
    let mainInEast = false;
    //tallies stats for each team based on score in the game
    if (mainGameId < 15) {
        westTeams[mainGameId].games.push(mainGame);
        if (parseInt(mainGame.score) > parseInt(mainGame.opponentScore))
            westTeams[mainGameId].won++;
        else
            westTeams[mainGameId].lost++;
    } else {
        mainInEast = true;
        mainGameId -= 15;
        eastTeams[mainGameId].games.push(mainGame);
        if (parseInt(mainGame.score) > parseInt(mainGame.opponentScore))
            eastTeams[mainGameId].won++;
        else
            eastTeams[mainGameId].lost++;
    }
    if (oppGameId < 15) {
        westTeams[oppGameId].games.push(oppGame);
        if (parseInt(oppGame.score) > parseInt(oppGame.opponentScore))
            westTeams[oppGameId].won++;
        else
            westTeams[oppGameId].lost++;
    } else {
        oppGameId -= 15
        eastTeams[oppGameId].games.push(oppGame);
        if (parseInt(oppGame.score) > parseInt(oppGame.opponentScore))
            eastTeams[oppGameId].won++;
        else
            eastTeams[oppGameId].lost++;
    }

    //pushes the game for one of the teams to an array for displaying games so that duplication is avoided
    if (mainInEast)
        mainGame.name = eastTeams[mainGameId].name;
    else
        mainGame.name = westTeams[mainGameId].name;
    arrFilter.push(mainGame);
    
	alertText.textContent = 'Success! Game added';
    alertText.style.color = 'green';
    danger.style.display = 'inline-block';
    danger.appendChild(alertText);

    //pushes modified arrays to localstorage
    localStorage.setItem('westT', JSON.stringify(westTeams));
    localStorage.setItem('eastT', JSON.stringify(eastTeams));
    localStorage.setItem('dateRange', JSON.stringify(arrFilter));
}