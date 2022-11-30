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

//declared here to be accessed in multiple functions
let games;
let numPages;


// danger.style.display = 'none';
//gets dates from certain range and displays in cards with pagination
function filter() {
    //gets date filters selected by user
    let startDate = document.querySelector('#startDate');
    let endDate = document.querySelector('#endDate');
    let danger = document.querySelector('#dangerAlert')
    danger.style.display = 'none';
    danger.replaceChildren();

    let alertText = document.createElement('p');
    
    //gets non-duplicated array from localstorage (from addgame)
    games = (JSON.parse(localStorage.getItem('dateRange')));

    //validation
    if (startDate.value == '' || endDate.value == '') {
        alertText.textContent = '*You must select a start and end date';
        alertText.style.color = 'red';
        danger.style.display = 'inline-block';
        danger.appendChild(alertText);
        return;
    } else if (dateToNum(startDate.value) > dateToNum(endDate.value)) {
        alertText.textContent = '*You must input a start date earlier than the end date';
        alertText.style.color = 'red';
        danger.style.display = 'inline-block';
        danger.appendChild(alertText);
        return;
    } else {
        danger.style.display = 'none';
    }

    //sort them in order by default
    games = sortGamesByDate(games);

    //filter out games that are not in the date range
    games = games.filter(games => (parseInt(dateToNum(games.date)) >= parseInt(dateToNum(startDate.value)) && parseInt(dateToNum(games.date)) <= parseInt(dateToNum(endDate.value))))
    // console.log(games);

    const GAMES_PER_PAGE = 9;
    let numGames = games.length;
    //how many pages are there going to be
    numPages = Math.ceil(numGames / GAMES_PER_PAGE);


    //if there is more than one page, start pagination
    if (numPages > 1) {
        //get pagination list from html
        let pageList = document.querySelector('.pagination-list')
        let page = document.createElement('li');
        let a = document.createElement('a');
        // create previous button for pagination
        a.textContent = '<<';
        a.classList.add('pagination-link');
        // when you click it it will go back a page
        a.setAttribute('onclick', 'onPage("prev")');
        a.appendChild(page);
        pageList.appendChild(a);

        // add a number button for each page and tell each game which page it is on
        let pageCounter = 0;
        for (let i = 1; i <= numPages; i++) {
            for (let index = 0; index < GAMES_PER_PAGE; index++) {
                try {
                    //give pageId based on which page it is on to each game
                    games[(i - 1) * GAMES_PER_PAGE + index].pageId = i; //if it fails try, no more games on that page
                } catch (error) { }
            }
            let page = document.createElement('li');
            let a = document.createElement('a');
            a.textContent = ++pageCounter;
            a.classList.add('pagination-link');
            if (i == 1)
                a.classList.add('is-current');
            // on click, it will go to that page
            a.setAttribute('onclick', 'onPage(' + a.textContent + ')');
            a.appendChild(page);
            pageList.appendChild(a);
        }
        page = document.createElement('li');
        a = document.createElement('a');
        // next button
        a.textContent = '>>';
        a.classList.add('pagination-link');
        // on click it will go forward a page
        a.setAttribute('onclick', 'onPage("next")');
        a.appendChild(page);
        pageList.appendChild(a);
    } else if (numPages == 1){ //if there is only one page, everything is on page one
        for (let i = 0; i < games.length; i++) {
            games[i].pageId = 1;
        }
    } else {
        alertText.textContent = 'There are no games within this date range!';
        alertText.style.color = 'black';
        danger.style.display = 'inline-block';
        danger.appendChild(alertText);
        return;
    }

    //start on page 1 if not on a page
    onPage(1);
    if(localStorage.getItem('currPage') == null)
        localStorage.setItem('currPage', 1)    
    
}
function onPage(page) {
    //if we were on a page, perform prev and next on that page
        pageNum = localStorage.getItem('currPage');
        
        if (page == 'prev') {
            if(pageNum > 1) //if there is a page before go back a page
                pageNum--;
        } else if (page == 'next') {
            if(pageNum < numPages) // if there is a page after go forward a page
                pageNum++;
        } else
            pageNum = page; // go to that page
    localStorage.setItem('currPage', pageNum); //update which page we are on
    let pageButtons = (document.querySelectorAll('.pagination-link')) //get all buttons
    for (let index = 1; index < pageButtons.length; index++){
        if (index == pageNum) { //if we are on that page
            document.querySelector('.is-current').classList.remove('is-current'); //remove current from button that it was on
            pageButtons[index].classList.add('is-current'); //give current to new current button
        }
    }
    //create array with all games to be displayed on a page
        let gamesShown = [];
        games.forEach(element => {
            if (element.pageId == pageNum)
                gamesShown.push(element);
        });
    //display the games
        displayGames(gamesShown);
}


    
function displayGames(games) {
    //create three columns for so 3 cards per row
    document.querySelector('#column1').replaceChildren();
    document.querySelector('#column2').replaceChildren();
    document.querySelector('#column3').replaceChildren();
    
    let count = 0;
    for (const game of games) {
        //increment each game so each game goes in new column
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
        //create the card
        card.classList.add('card');
        card.classList.add('gameCard');
        //print the two teams based on key:value in object
        let teamText = document.createElement('h1');
        teamText.textContent = '' + game.name + '  vs.  ' + game.opponentName;
        //print the score based on key:value in object
        let scoreText = document.createElement('h1');
        scoreText.textContent = '' + game.score + ' - ' + game.opponentScore;
        // to style it
        scoreText.classList.add('scoreText')
        //display the date in readable format
        let dateText = document.createElement('h1');
        dateText.textContent = dateToString(game.date);
        card.append(teamText);
        card.append(scoreText);
        card.append(dateText);
        column.append(card);
    }
}

function dateToNum(orig) {
    //ensure it is a string
    orig = '' + orig;
    //substring first part to get year
    let year = orig.substring(0, orig.indexOf('-'));
    // remove year and first dash
    let temp = orig.substring(orig.indexOf('-') + 1);
    //get month from beginning of new string to dash
    let month = temp.substring(0, temp.indexOf('-'));
    //rest is day
    let day = temp.substring(temp.indexOf('-') + 1);
    //int it and return
    return parseInt(year + month + day);
}

function sortGamesByDate(games) {
    //change the dates from strings to nums
    for (let index = 0; index < games.length; index++) {
        let orig = games[index].date;
        let numDate = dateToNum(orig);
        games[index].date = numDate;
    }
    //sorting numerically
    games = games.sort((gameA, gameB) => gameB.date - gameA.date);
    return games;
}

function dateToString(orig) {
    // eg. orig -> '2022-11-23'
    orig = '' + orig;
    // year is first four characters, displayed as original format
    let year = orig.substring(0, 4);
    //the number corresponding to the month is after first dash
    let numMonth = orig.substring(4, 6);
    //get name of month based on numMonth
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
    //day is last two characters
    let day = orig.substring(6);
    //eg. return -> Nov 23, 2022
    return month + ' ' + day + ', ' + year;
}
