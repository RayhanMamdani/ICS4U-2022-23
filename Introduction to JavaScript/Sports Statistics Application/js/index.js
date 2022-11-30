//declared here so it can be accessed from all functions
let westTeams;
let eastTeams;

//hamburger menu from bulma
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

    
// if theres nothing in local storage, set the initial state of the data model
// otherwise get the date model from localstorage
if (localStorage.getItem('westT') != null) {
    westTeams = JSON.parse(localStorage.getItem('westT'));
    eastTeams = JSON.parse(localStorage.getItem('eastT'));
} else {
    westTeams = [
        {
            "name": "Dallas Mavericks",
            "id": 7,
            "won": 1,
            "lost": 1,
            "games": [
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
                }
            ]
        },
        {
            "name": "Denver Nuggets",
            "id": 8,
            "won": 9,
            "lost": 4,
            "games": [
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
                }
            ]
        },
        {
            "name": "Golden State Warriors",
            "id": 10,
            "won": 2,
            "lost": 1,
            "games": [
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
                }
            ]
        },
        {
            "name": "Houston Rockets",
            "id": 11,
            "won": 0,
            "lost": 2,
            "games": [
                {
                    "score": "94",
                    "opponentName": "San Antonio Spurs",
                    "opponentScore": "96",
                    "date": "2022-11-17",
                    "name": "Houston Rockets"
                },
                {
                    "score": "104",
                    "opponentName": "Denver Nuggets",
                    "opponentScore": "112",
                    "date": "2022-11-08"
                }
            ]
        },
        {
            "name": "Los Angeles Clippers",
            "id": 13,
            "won": 1,
            "lost": 1,
            "games": [
                {
                    "score": "110",
                    "opponentName": "Dallas Mavericks",
                    "opponentScore": "109",
                    "date": "2022-11-23"
                },
                {
                    "score": "99",
                    "opponentName": "Sacramento Kings",
                    "opponentScore": "104",
                    "date": "2022-11-21"
                }
            ]
        },
        {
            "name": "Los Angeles Lakers",
            "id": 14,
            "won": 0,
            "lost": 2,
            "games": [
                {
                    "score": "106",
                    "opponentName": "Denver Nuggets",
                    "opponentScore": "109",
                    "date": "2022-11-22"
                },
                {
                    "score": "106",
                    "opponentName": "Denver Nuggets",
                    "opponentScore": "109",
                    "date": "2022-11-22"
                }
            ]
        },
        {
            "name": "Memphis Grizzlies",
            "id": 15,
            "won": 0,
            "lost": 3,
            "games": [
                {
                    "score": "107",
                    "opponentName": "Denver Nuggets",
                    "opponentScore": "109",
                    "date": "2022-11-30"
                },
                {
                    "score": "102",
                    "opponentName": "Golden State Warriors",
                    "opponentScore": "103",
                    "date": "2022-11-27"
                },
                {
                    "score": "102",
                    "opponentName": "Minnesota Timberwolves",
                    "opponentScore": "109",
                    "date": "2022-11-10"
                }
            ]
        },
        {
            "name": "Minnesota Timberwolves",
            "id": 18,
            "won": 3,
            "lost": 0,
            "games": [
                {
                    "score": "107",
                    "opponentName": "Denver Nuggets",
                    "opponentScore": "92",
                    "date": "2022-11-09"
                },
                {
                    "score": "110",
                    "opponentName": "Golden State Warriors",
                    "opponentScore": "105",
                    "date": "2022-11-18"
                },
                {
                    "score": "109",
                    "opponentName": "Memphis Grizzlies",
                    "opponentScore": "102",
                    "date": "2022-11-10",
                    "name": "Minnesota Timberwolves"
                }
            ]
        },
        {
            "name": "New Orleans Pelicans",
            "id": 19,
            "won": 1,
            "lost": 1,
            "games": [
                {
                    "score": "106",
                    "opponentName": "Denver Nuggets",
                    "opponentScore": "92",
                    "date": "2022-11-11"
                },
                {
                    "score": "95",
                    "opponentName": "Golden State Warriors",
                    "opponentScore": "103",
                    "date": "2022-11-20"
                }
            ]
        },
        {
            "name": "Oklahoma City Thunder",
            "id": 21,
            "won": 0,
            "lost": 2,
            "games": [
                {
                    "score": "94",
                    "opponentName": "Utah Jazz",
                    "opponentScore": "96",
                    "date": "2022-11-17",
                    "name": "Oklahoma City Thunder"
                },
                {
                    "score": "109",
                    "opponentName": "Denver Nuggets",
                    "opponentScore": "110",
                    "date": "2022-11-20"
                }
            ]
        },
        {
            "name": "Phoenix Suns",
            "id": 24,
            "won": 1,
            "lost": 1,
            "games": [
                {
                    "score": "103",
                    "opponentName": "Dallas Mavericks",
                    "opponentScore": "109",
                    "date": "2022-11-29"
                },
                {
                    "score": "107",
                    "opponentName": "Denver Nuggets",
                    "opponentScore": "102",
                    "date": "2022-11-15"
                }
            ]
        },
        {
            "name": "Portland Trail Blazers",
            "id": 25,
            "won": 0,
            "lost": 3,
            "games": [
                {
                    "score": "99",
                    "opponentName": "Sacramento Kings",
                    "opponentScore": "102",
                    "date": "2022-11-20"
                },
                {
                    "score": "94",
                    "opponentName": "Utah Jazz",
                    "opponentScore": "96",
                    "date": "2022-11-12",
                    "name": "Portland Trail Blazers"
                },
                {
                    "score": "100",
                    "opponentName": "Denver Nuggets",
                    "opponentScore": "104",
                    "date": "2022-11-28"
                }
            ]
        },
        {
            "name": "Sacramento Kings",
            "id": 26,
            "won": 2,
            "lost": 1,
            "games": [
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
                }
            ]
        },
        {
            "name": "San Antonio Spurs",
            "id": 27,
            "won": 2,
            "lost": 1,
            "games": [
                {
                    "score": "96",
                    "opponentName": "Houston Rockets",
                    "opponentScore": "94",
                    "date": "2022-11-17"
                },
                {
                    "score": "107",
                    "opponentName": "Denver Nuggets",
                    "opponentScore": "117",
                    "date": "2022-11-17"
                },
                {
                    "score": "104",
                    "opponentName": "Denver Nuggets",
                    "opponentScore": "97",
                    "date": "2022-11-14"
                }
            ]
        },
        {
            "name": "Utah Jazz",
            "id": 29,
            "won": 3,
            "lost": 2,
            "games": [
                {
                    "score": "97",
                    "opponentName": "Sacramento Kings",
                    "opponentScore": "95",
                    "date": "2022-11-12"
                },
                {
                    "score": "96",
                    "opponentName": "Portland Trail Blazers",
                    "opponentScore": "94",
                    "date": "2022-11-12"
                },
                {
                    "score": "96",
                    "opponentName": "Oklahoma City Thunder",
                    "opponentScore": "94",
                    "date": "2022-11-17"
                },
                {
                    "score": "87",
                    "opponentName": "Denver Nuggets",
                    "opponentScore": "97",
                    "date": "2022-11-27"
                },
                {
                    "score": "93",
                    "opponentName": "Denver Nuggets",
                    "opponentScore": "96",
                    "date": "2022-11-25"
                }
            ]
        }
    ];
    eastTeams = [
        {
            "name": "Atlanta Hawks",
            "id": 1,
            "won": 2,
            "lost": 3,
            "games": [
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
                    "opponentName": "Boston Celtics",
                    "opponentScore": "100",
                    "date": "2022-11-29"
                }
            ]
        },
        {
            "name": "Boston Celtics",
            "id": 2,
            "won": 5,
            "lost": 6,
            "games": [
                {
                    "score": "108",
                    "opponentName": "Atlanta Hawks",
                    "opponentScore": "103",
                    "date": "2022-11-29"
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
            ]
        },
        {
            "name": "Brooklyn Nets",
            "id": 3,
            "won": 3,
            "lost": 1,
            "games": [
                {
                    "score": "100",
                    "opponentName": "Boston Celtics",
                    "opponentScore": "96",
                    "date": "2022-11-25"
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
                    "score": "91",
                    "opponentName": "Boston Celtics",
                    "opponentScore": "87",
                    "date": "2022-11-25"
                }
            ]
        },
        {
            "name": "Charlotte Hornets",
            "id": 4,
            "won": 1,
            "lost": 1,
            "games": [
                {
                    "score": "83",
                    "opponentName": "Atlanta Hawks",
                    "opponentScore": "109",
                    "date": "2022-11-26"
                },
                {
                    "score": "109",
                    "opponentName": "Boston Celtics",
                    "opponentScore": "103",
                    "date": "2022-11-09"
                }
            ]
        },
        {
            "name": "Chicago Bulls",
            "id": 5,
            "won": 1,
            "lost": 0,
            "games": [
                {
                    "score": "119",
                    "opponentName": "Toronto Raptors",
                    "opponentScore": "104",
                    "date": "2022-11-08",
                    "name": "Chicago Bulls"
                }
            ]
        },
        {
            "name": "Cleveland Cavaliers",
            "id": 6,
            "won": 1,
            "lost": 0,
            "games": [
                {
                    "score": "109",
                    "opponentName": "Boston Celtics",
                    "opponentScore": "103",
                    "date": "2022-11-17"
                }
            ]
        },
        {
            "name": "Detroit Pistons",
            "id": 9,
            "won": 1,
            "lost": 0,
            "games": [
                {
                    "score": "106",
                    "opponentName": "Boston Celtics",
                    "opponentScore": "104",
                    "date": "2022-11-22"
                }
            ]
        },
        {
            "name": "Indiana Pacers",
            "id": 12,
            "won": 1,
            "lost": 2,
            "games": [
                {
                    "score": "103",
                    "opponentName": "Boston Celtics",
                    "opponentScore": "110",
                    "date": "2022-11-28"
                },
                {
                    "score": "115",
                    "opponentName": "Brooklyn Nets",
                    "opponentScore": "107",
                    "date": "2022-11-03"
                },
                {
                    "score": "109",
                    "opponentName": "Boston Celtics",
                    "opponentScore": "117",
                    "date": "2022-11-09"
                }
            ]
        },
        {
            "name": "Miami Heat",
            "id": 16,
            "won": 1,
            "lost": 0,
            "games": [
                {
                    "score": "123",
                    "opponentName": "Milwaukee Bucks",
                    "opponentScore": "110",
                    "date": "2022-11-29"
                }
            ]
        },
        {
            "name": "Milwaukee Bucks",
            "id": 17,
            "won": 1,
            "lost": 1,
            "games": [
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
                }
            ]
        },
        {
            "name": "New York Knicks",
            "id": 20,
            "won": 1,
            "lost": 0,
            "games": [
                {
                    "score": "99",
                    "opponentName": "Boston Celtics",
                    "opponentScore": "97",
                    "date": "2022-11-20"
                }
            ]
        },
        {
            "name": "Orlando Magic",
            "id": 22,
            "won": 1,
            "lost": 0,
            "games": [
                {
                    "score": "106",
                    "opponentName": "Atlanta Hawks",
                    "opponentScore": "90",
                    "date": "2022-11-19"
                }
            ]
        },
        {
            "name": "Philadelphia 76ers",
            "id": 23,
            "won": 0,
            "lost": 1,
            "games": [
                {
                    "score": "91",
                    "opponentName": "Boston Celtics",
                    "opponentScore": "103",
                    "date": "2022-11-13"
                }
            ]
        },
        {
            "name": "Toronto Raptors",
            "id": 28,
            "won": 0,
            "lost": 1,
            "games": [
                {
                    "score": "104",
                    "opponentName": "Chicago Bulls",
                    "opponentScore": "119",
                    "date": "2022-11-08"
                }
            ]
        },
        {
            "name": "Washington Wizards",
            "id": 30,
            "won": 0,
            "lost": 3,
            "games": [
                {
                    "score": "101",
                    "opponentName": "Atlanta Hawks",
                    "opponentScore": "109",
                    "date": "2022-11-23"
                },
                {
                    "score": "104",
                    "opponentName": "Milwaukee Bucks",
                    "opponentScore": "105",
                    "date": "2022-11-29"
                },
                {
                    "score": "102",
                    "opponentName": "Brooklyn Nets",
                    "opponentScore": "107",
                    "date": "2022-11-20"
                }
            ]
        }
    ];
    let arrFilter = [
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
    localStorage.setItem('westT', JSON.stringify(westTeams));
    localStorage.setItem('eastT', JSON.stringify(eastTeams));
    localStorage.setItem('dateRange', JSON.stringify(arrFilter))
}
  
// sort by wins
function sortWins(a, b) {
    return (a.won/a.lost > b.won/b.lost) ? -1 : 1;
}

// get table from html
let westTable = document.querySelector('#westTable');
let eastTable = document.querySelector('#eastTable');
// create two tables
createTable(westTeams, westTable);
createTable(eastTeams, eastTable);
function createTable(teams, table) {
    // reset whats inside 
    table.querySelector('tbody').replaceChildren();
    //used for position
    let count = 0;
    teams.forEach(team => {
        count++;
        let row = document.createElement('tr');
        let position = document.createElement('th');
        position.textContent = count;
        row.append(position);
        let name = document.createElement('td');
        //gets team name from array and appends it to an a tag to make it a link
        name.textContent = team.name;
        name.classList.add('tdName')
        var a = document.createElement('a');
        a.appendChild(name);
        a.title = team.name;
        // search param makes it so we can read the specific id and create a dynamic page based on the number
        a.href = "teamgames.html?teamID=" + team.id;
        row.append(a);
        // gets won and lost and adds to get games played from array
        let played = document.createElement('td');
        played.textContent = team.won + team.lost;
        played.classList.add('tableNumber');
        row.append(played);
        // gets games won from array
        let won = document.createElement('td');
        won.textContent = team.won;
        won.classList.add('tableNumber');
        row.append(won);
        // gets games lost from array
        let lost = document.createElement('td');
        lost.textContent = team.lost;
        lost.classList.add('tableNumber');
        row.append(lost);
        // divides won by played to get percent
        let pct = document.createElement('td');
        if (team.won != 0 || team.lost != 0)
            pct.textContent = (team.won / played.textContent).toFixed(3);
        else //if they havent played a game, percent is '-'
            pct.textContent = "-";
        pct.classList.add('tableNumber');      
        row.append(pct);
        table.querySelector('tbody').append(row);
    })
}
//used to reverse
let nameSorted = false;
let playedSorted = false;
let winSorted = false;
let lostSorted = false;
let pctSorted = false;
function sort(field, conference) {
    //gets the east or west array, depending on parameter
    let teams = (conference == 'west' ? westTeams : eastTeams)
    //duplicates whichever table it is
    let tableTemp = (conference == 'west' ? westTable : eastTable)

    if (field === 'Name') {
        //if it was not sorted already
        if (!nameSorted) {
            teams = teams.sort((teamA, teamB) => { //sorts alphabetically
                return (teamA.name < teamB.name) ? -1 : 1
            });
            //make everything else not sorted since we sorted by name
            nameSorted = true;
            playedSorted = false;
            winSorted = false;
            lostSorted = false;
            pctSorted = false;
        } else {
            //reverse if it was sorted already
            teams = teams.reverse();
        }
    } else if (field == 'Played') {
        if (!playedSorted) {
            // sort numerically
            teams = teams.sort((teamA, teamB) => (teamB.won + teamB.lost) - (teamA.won + teamA.lost));
            nameSorted = false;
            playedSorted = true;
            winSorted = false;
            lostSorted = false;
            pctSorted = false;
        } else {
            teams = teams.sort((teamB, teamA) => (teamB.won + teamB.lost) - (teamA.won + teamA.lost));
            playedSorted = false;
        }
    } else if (field == 'Wins') {
        if (!winSorted) {
            teams = teams.sort((teamA, teamB) => teamB.won - teamA.won);
            nameSorted = false;
            playedSorted = false;
            winSorted = true;
            lostSorted = false;
            pctSorted = false;
        } else {
            teams = teams.sort((teamB, teamA) => teamB.won - teamA.won);
            winSorted = false;
        }
    } else if (field == 'Losses') {
        if (!lostSorted) {
            teams = teams.sort((teamA, teamB) => teamB.lost - teamA.lost);
            nameSorted = false;
            playedSorted = false;
            winSorted = false;
            lostSorted = true;
            pctSorted = false;
        } else {
            teams = teams.sort((teamB, teamA) => teamB.lost - teamA.lost);
            lostSorted = false;
        }
    } else if (field == 'Pct') {
        if (!pctSorted) {
            teams = teams.sort((teamA, teamB) => {
                if (teamB.won + teamB.lost == 0)
                    return -1;
                return (teamB.won / (teamB.won + teamB.lost)) - (teamA.won / (teamA.won + teamA.lost));
            });
            nameSorted = false;
            playedSorted = false;
            winSorted = false;
            lostSorted = false;
            pctSorted = true;
        } else {
            teams = teams.sort((teamB, teamA) => {
                if (teamB.won + teamB.lost == 0)
                    return -1;
                return (teamB.won / (teamB.won + teamB.lost)) - (teamA.won / (teamA.won + teamA.lost));
            });
            pctSorted = false;
        }
    }
    //create the table again after sorted
    createTable(teams, tableTemp);
}