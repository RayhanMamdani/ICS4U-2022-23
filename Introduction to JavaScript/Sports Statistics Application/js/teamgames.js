//hamburger menu
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
//get games from local storage
let westTeams = (JSON.parse(localStorage.getItem('westT')));
let eastTeams = (JSON.parse(localStorage.getItem('eastT')));
//combine the teams into one array
let teams = westTeams.concat(eastTeams);
//get the specific team base on search params
let params = (new URL(document.location)).searchParams;
let team = teams.filter(team => team.id == params.get('teamID'));
team = team[0];
//sort games by date
team.games = sortGamesByDate(team.games); //function explained in 'pastgames.js'
// console.log(team);

//change document name to the team name
document.querySelector('title').textContent = team.name;
//create a header based on team name
document.querySelector('#teamHeader').textContent = 'Games of the ' + team.name;

//function explained in 'pastgames.js'
function displayGames(team) {
    document.querySelector('#column1').replaceChildren();
    document.querySelector('#column2').replaceChildren();
    document.querySelector('#column3').replaceChildren();
    let count = 0;
    for (const game of team.games) {
        let column;
        let columnNumber = ++count % 3;
        if (columnNumber == 1) {
            column = document.querySelector('#column1');
        } else if (columnNumber == 2) {
            column = document.querySelector('#column2');
        } else {
            column = document.querySelector('#column3');
        }
        let card = document.createElement('div');
        card.classList.add('card');
        card.classList.add('gameCard');
        let teamText = document.createElement('h1');
        teamText.textContent = '' + team.name + '  vs.  ' + game.opponentName;
        let scoreText = document.createElement('h1');
        scoreText.textContent = '' + game.score + ' - ' + game.opponentScore;
        scoreText.classList.add('scoreText')
        let dateText = document.createElement('h1');
        dateText.textContent = dateToString(game.date);
        // scoreText.append('' + compareScoreForDisplay(game));
        card.append(teamText);
        card.append(scoreText);
        card.append(dateText);
        column.append(card);
    }
}

//function explained in 'pastgames.js'
function sortGamesByDate(games) {
    for (let index = 0; index < games.length; index++) {
        let orig = '' + games[index].date;
        let year = orig.substring(0, orig.indexOf('-'));
        let temp = orig.substring(orig.indexOf('-') + 1);
        let month = temp.substring(0, temp.indexOf('-'));
        let day = temp.substring(temp.indexOf('-') + 1);
        let numDate = parseInt(year + month + day);
        games[index].date = numDate;
    }
    games = games.sort((gameA, gameB) => gameB.date - gameA.date);
    return games;
}

//function explained in 'pastgames.js'
function dateToString(orig) {
    orig = '' + orig;
    let year = orig.substring(0, 4);
    let numMonth = orig.substring(4, 6);
    let month;
    if (numMonth == 1)
        month = 'Jan';
    else if (numMonth == 2)
        month = 'Feb';
    else if (numMonth == 3)
        month = 'Mar';
    else if (numMonth == 4)
        month = 'Apr';
    else if (numMonth == 5)
        month = 'May';
    else if (numMonth == 6)
        month = 'Jun';
    else if (numMonth == 7)
        month = 'Jul';
    else if (numMonth == 8)
        month = 'Aug';
    else if (numMonth == 9)
        month = 'Sep';
    else if (numMonth == 10)
        month = 'Oct';
    else if (numMonth == 11)
        month = 'Nov';
    else if (numMonth == 12)
        month = 'Dec';
    let day = orig.substring(6);
    return month + ' ' + day + ', ' + year;
}

//pagination explained in 'pastgames.js'
const GAMES_PER_PAGE = 9;
let numGames = team.games.length;
let numPages = Math.ceil(numGames / GAMES_PER_PAGE);


if (numPages > 1) {
    let pageList = document.querySelector('.pagination-list')
    let page = document.createElement('li');
    let a = document.createElement('a');
    a.textContent = '<<';
    a.classList.add('pagination-link');
    a.setAttribute('onclick', 'onPage("prev")');
    a.appendChild(page);
    pageList.appendChild(a);
    let pageCounter = 0;
    for (let i = 1; i <= numPages; i++) {
        for (let index = 0; index < GAMES_PER_PAGE; index++) {
            try {
                team.games[(i - 1) * GAMES_PER_PAGE + index].pageId = i;
            } catch (error) { }
        }
        let page = document.createElement('li');
        let a = document.createElement('a');
        a.textContent = ++pageCounter;
        a.classList.add('pagination-link');
        if (i == 1)
            a.classList.add('is-current');
        // a.onclick = onPage(a.textContent);
        a.setAttribute('onclick', 'onPage(' + a.textContent + ')');
        a.appendChild(page);
        pageList.appendChild(a);
    }
    page = document.createElement('li');
    a = document.createElement('a');
    a.textContent = '>>';
    a.classList.add('pagination-link');
    a.setAttribute('onclick', 'onPage("next")');
    a.appendChild(page);
    pageList.appendChild(a);
} else {
    for (let i = 0; i < team.games.length; i++) {
        team.games[i].pageId = 1;
    }
}


//set default page to 1
onPage(1);
if(localStorage.getItem('currPage') == null)
    localStorage.setItem('currPage', 1)
//function explained in 'pastgames.js'
function onPage(page) {
    pageNum = localStorage.getItem('currPage');
    if (page == 'prev') {
        if(pageNum > 1)
        
            pageNum--;
    } else if (page == 'next') {
        if(pageNum < numPages)
            pageNum++;
    } else
        pageNum = page;
    localStorage.setItem('currPage', pageNum);
    let pageButtons = (document.querySelectorAll('.pagination-link'))
    for (let index = 1; index < pageButtons.length; index++){
        if (index == pageNum) {
            document.querySelector('.is-current').classList.remove('is-current');
            pageButtons[index].classList.add('is-current');
        }
    }
    let teamsShown = JSON.parse(JSON.stringify(team));
    let gamesShown = [];
    team.games.forEach(element => {
        if (element.pageId == pageNum)
            gamesShown.push(element);
    });
    teamsShown.games = gamesShown;
    displayGames(teamsShown);
}