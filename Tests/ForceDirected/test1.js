var labelType, useGradients, nativeTextSupport, animate;

(function() {
  var ua = navigator.userAgent,
      iStuff = ua.match(/iPhone/i) || ua.match(/iPad/i),
      typeOfCanvas = typeof HTMLCanvasElement,
      nativeCanvasSupport = (typeOfCanvas == 'object' || typeOfCanvas == 'function'),
      textSupport = nativeCanvasSupport 
        && (typeof document.createElement('canvas').getContext('2d').fillText == 'function');
  //I'm setting this based on the fact that ExCanvas provides text support for IE
  //and that as of today iPhone/iPad current text support is lame
  labelType = (!nativeCanvasSupport || (textSupport && !iStuff))? 'Native' : 'HTML';
  nativeTextSupport = labelType == 'Native';
  useGradients = nativeCanvasSupport;
  animate = !(iStuff || !nativeCanvasSupport);
})();

var Log = {
  elem: false,
  write: function(text){
    if (!this.elem) 
      this.elem = document.getElementById('log');
    this.elem.innerHTML = text;
    this.elem.style.left = (500 - this.elem.offsetWidth / 2) + 'px';
  }
};


function init(){
  // init data
  var json = [
      {
        "adjacencies": [ 
            {
              "nodeTo": "A$AP Rocky",
              "nodeFrom": "Drake",
              "data": {
                "$color": "#557EAA"
              }
            }, {
              "nodeTo": "Kendrick Lamar",
              "nodeFrom": "Drake",
              "data": {
                "$color": "#909291"
              }
            }, {
              "nodeTo": "2 Chainz",
              "nodeFrom": "Drake",
              "data": {
                "$color": "#909291"
              }
            }, {
              "nodeTo": "Lil Wayne",
              "nodeFrom": "Drake",
              "data": {
                "$color": "#909291"
              }
            }
        ],  
        "data": {  
          "$color": "#83548B",  
          "$type": "circle",  
          "$dim": 10  
        },  
        "id": "Drake",  
        "name": "Drake" 
      }, {
        "adjacencies": [ 
            {
              "nodeTo": "Drake",
              "nodeFrom": "Lil Wayne",
              "data": {
                "$color": "#557EAA"
              }
            }, {
              "nodeTo": "Future",
              "nodeFrom": "Lil Wayne",
              "data": {
                "$color": "#909291"
              }
            }, {
              "nodeTo": "Will.I.Am",
              "nodeFrom": "Lil Wayne",
              "data": {
                "$color": "#909291"
              }
            }, {
              "nodeTo": "Waka Flocka Flame",
              "nodeFrom": "Lil Wayne",
              "data": {
                "$color": "#909291"
              }
            }, {
              "nodeTo": "Rick Ross",
              "nodeFrom": "Lil Wayne",
              "data": {
                "$color": "#909291"
              }
            }
        ],  
        "data": {  
          "$color": "#83548B",  
          "$type": "circle",  
          "$dim": 10  
        },  
        "id": "Lil Wayne",  
        "name": "Lil Wayne" 
      }, {
        "adjacencies": [ 
            {
              "nodeTo": "2 Chainz",
              "nodeFrom": "Kanye West",
              "data": {
                "$color": "#557EAA"
              }
            }, {
              "nodeTo": "Pusha T",
              "nodeFrom": "Kanye West",
              "data": {
                "$color": "#909291"
              }
            }, {
              "nodeTo": "Big Sean",
              "nodeFrom": "Kanye West",
              "data": {
                "$color": "#909291"
              }
            }, {
              "nodeTo": "Jay-Z",
              "nodeFrom": "Kanye West",
              "data": {
                "$color": "#909291"
              }
            }, {
              "nodeTo": "Chief Keef",
              "nodeFrom": "Kanye West",
              "data": {
                "$color": "#909291"
              }
            }
        ],  
        "data": {  
          "$color": "#83548B",  
          "$type": "circle",  
          "$dim": 10  
        },  
        "id": "Kanye West",  
        "name": "Kanye West" 
      }, {
        "adjacencies": [ 
            {
              "nodeTo": "Kanye West",
              "nodeFrom": "Big Sean",
              "data": {
                "$color": "#557EAA"
              }
            }, {
              "nodeTo": "2 Chainz",
              "nodeFrom": "Big Sean",
              "data": {
                "$color": "#909291"
              }
            }, {
              "nodeTo": "Pusha T",
              "nodeFrom": "Big Sean",
              "data": {
                "$color": "#909291"
              }
            }, {
              "nodeTo": "Nicki Minaj",
              "nodeFrom": "Big Sean",
              "data": {
                "$color": "#909291"
              }
            }, {
              "nodeTo": "Young Jeezy",
              "nodeFrom": "Big Sean",
              "data": {
                "$color": "#909291"
              }
            }
        ],  
        "data": {  
          "$color": "#83548B",  
          "$type": "circle",  
          "$dim": 10  
        },  
        "id": "Big Sean",  
        "name": "Big Sean" 
      }, {
        "adjacencies": [ 
            {
              "nodeTo": "Kanye West",
              "nodeFrom": "Jay-Z",
              "data": {
                "$color": "#557EAA"
              }
            }, {
              "nodeTo": "Big Sean",
              "nodeFrom": "Jay-Z",
              "data": {
                "$color": "#909291"
              }
            }, {
              "nodeTo": "Nicki Minaj",
              "nodeFrom": "Jay-Z",
              "data": {
                "$color": "#909291"
              }
            }, {
              "nodeTo": "Rick Ross",
              "nodeFrom": "Jay-Z",
              "data": {
                "$color": "#909291"
              }
            }, {
              "nodeTo": "Pusha T",
              "nodeFrom": "Jay-Z",
              "data": {
                "$color": "#909291"
              }
            }
        ],  
        "data": {  
          "$color": "#83548B",  
          "$type": "circle",  
          "$dim": 10  
        },  
        "id": "Jay-Z",  
        "name": "Jay-Z" 
      }, {
        "adjacencies": [ 
            {
              "nodeTo": "A$AP Rocky",
              "nodeFrom": "Kendrick Lamar",
              "data": {
                "$color": "#557EAA"
              }
            }, {
              "nodeTo": "Drake",
              "nodeFrom": "Kendrick Lamar",
              "data": {
                "$color": "#909291"
              }
            }, {
              "nodeTo": "2 Chainz",
              "nodeFrom": "Kendrick Lamar",
              "data": {
                "$color": "#909291"
              }
            }, {
              "nodeTo": "Ab Soul",
              "nodeFrom": "Kendrick Lamar",
              "data": {
                "$color": "#909291"
              }
            }, {
              "nodeTo": "Schoolboy Q",
              "nodeFrom": "Kendrick Lamar",
              "data": {
                "$color": "#909291"
              }
            }
        ],  
        "data": {  
          "$color": "#83548B",  
          "$type": "circle",  
          "$dim": 10  
        },  
        "id": "Kendrick Lamar",  
        "name": "Kendrick Lamar" 
      }, {
        "adjacencies": [ 
            {
              "nodeTo": "Big K.R.I.T",
              "nodeFrom": "A$AP Rocky",
              "data": {
                "$color": "#557EAA"
              }
            }, {
              "nodeTo": "Drake",
              "nodeFrom": "A$AP Rocky",
              "data": {
                "$color": "#909291"
              }
            }, {
              "nodeTo": "2 Chainz",
              "nodeFrom": "A$AP Rocky",
              "data": {
                "$color": "#909291"
              }
            }, {
              "nodeTo": "Kendrick Lamar",
              "nodeFrom": "A$AP Rocky",
              "data": {
                "$color": "#909291"
              }
            }, {
              "nodeTo": "Danny Brown",
              "nodeFrom": "A$AP Rocky",
              "data": {
                "$color": "#909291"
              }
            }
        ],  
        "data": {  
          "$color": "#83548B",  
          "$type": "circle",  
          "$dim": 10  
        },  
        "id": "A$AP Rocky",  
        "name": "A$AP Rocky" 
      }, {
        "adjacencies": [ 
            {
              "nodeTo": "50 Cent",
              "nodeFrom": "Eminem",
              "data": {
                "$color": "#557EAA"
              }
            }, {
              "nodeTo": "Lil Wayne",
              "nodeFrom": "Eminem",
              "data": {
                "$color": "#909291"
              }
            }, {
              "nodeTo": "Kanye West",
              "nodeFrom": "Eminem",
              "data": {
                "$color": "#909291"
              }
            }, {
              "nodeTo": "Slaughterhouse",
              "nodeFrom": "Eminem",
              "data": {
                "$color": "#909291"
              }
            }, {
              "nodeTo": "Yelawolf",
              "nodeFrom": "Eminem",
              "data": {
                "$color": "#909291"
              }
            }
        ],  
        "data": {  
          "$color": "#83548B",  
          "$type": "circle",  
          "$dim": 10  
        },  
        "id": "Eminem",  
        "name": "Eminem" 
      }, {
        "adjacencies": [ 
            {
              "nodeTo": "Kanye West",
              "nodeFrom": "Lupe Fiasco",
              "data": {
                "$color": "#557EAA"
              }
            }, {
              "nodeTo": "Pharrell",
              "nodeFrom": "Lupe Fiasco",
              "data": {
                "$color": "#909291"
              }
            }, {
              "nodeTo": "Black Thought",
              "nodeFrom": "Lupe Fiasco",
              "data": {
                "$color": "#909291"
              }
            }, {
              "nodeTo": "Papoose",
              "nodeFrom": "Lupe Fiasco",
              "data": {
                "$color": "#909291"
              }
            }, {
              "nodeTo": "Styles P",
              "nodeFrom": "Lupe Fiasco",
              "data": {
                "$color": "#909291"
              }
            }
        ],  
        "data": {  
          "$color": "#83548B",  
          "$type": "circle",  
          "$dim": 10  
        },  
        "id": "Lupe Fiasco",  
        "name": "Lupe Fiasco" 
      }, {
        "adjacencies": [ 
            {
              "nodeTo": "A$AP Rocky",
              "nodeFrom": "Big K.R.I.T",
              "data": {
                "$color": "#557EAA"
              }
            }, {
              "nodeTo": "Joey Bada$$",
              "nodeFrom": "Big K.R.I.T",
              "data": {
                "$color": "#909291"
              }
            }, {
              "nodeTo": "J. Cole",
              "nodeFrom": "Big K.R.I.T",
              "data": {
                "$color": "#909291"
              }
            }, {
              "nodeTo": "Kendrick Lamar",
              "nodeFrom": "Big K.R.I.T",
              "data": {
                "$color": "#909291"
              }
            }, {
              "nodeTo": "Yelawolf",
              "nodeFrom": "Big K.R.I.T",
              "data": {
                "$color": "#909291"
              }
            }
        ],  
        "data": {  
          "$color": "#83548B",  
          "$type": "circle",  
          "$dim": 10  
        },  
        "id": "Big K.R.I.T",  
        "name": "Big K.R.I.T" 
      }, {
        "adjacencies": [ 
            {
              "nodeTo": "Rick Ross",
              "nodeFrom": "Nas",
              "data": {
                "$color": "#557EAA"
              }
            }, {
              "nodeTo": "Jay-Z",
              "nodeFrom": "Nas",
              "data": {
                "$color": "#909291"
              }
            }, {
              "nodeTo": "Drake",
              "nodeFrom": "Nas",
              "data": {
                "$color": "#909291"
              }
            }, {
              "nodeTo": "Snoop Dogg",
              "nodeFrom": "Nas",
              "data": {
                "$color": "#909291"
              }
            }, {
              "nodeTo": "Busta Rhymes",
              "nodeFrom": "Nas",
              "data": {
                "$color": "#909291"
              }
            }
        ],  
        "data": {  
          "$color": "#83548B",  
          "$type": "circle",  
          "$dim": 10  
        },  
        "id": "Nas",  
        "name": "Nas" 
      }, {
        "adjacencies": [ 
            {
              "nodeTo": "Black Spade",
              "nodeFrom": "Blu",
              "data": {
                "$color": "#557EAA"
              }
            }, {
              "nodeTo": "Exile",
              "nodeFrom": "Blu",
              "data": {
                "$color": "#909291"
              }
            }, {
              "nodeTo": "Jimetta Rose",
              "nodeFrom": "Blu",
              "data": {
                "$color": "#909291"
              }
            }, {
              "nodeTo": "M.E.D",
              "nodeFrom": "Blu",
              "data": {
                "$color": "#909291"
              }
            }, {
              "nodeTo": "Pac Div",
              "nodeFrom": "Blu",
              "data": {
                "$color": "#909291"
              }
            }
        ],  
        "data": {  
          "$color": "#83548B",  
          "$type": "circle",  
          "$dim": 10  
        },  
        "id": "Blu",  
        "name": "Blu" 
      }, {
        "adjacencies": [ 
            {
              "nodeTo": "Earl Sweatshirt",
              "nodeFrom": "Tyler the Creator",
              "data": {
                "$color": "#557EAA"
              }
            }, {
              "nodeTo": "Frank Ocean",
              "nodeFrom": "Tyler the Creator",
              "data": {
                "$color": "#909291"
              }
            }, {
              "nodeTo": "Domo Genesis",
              "nodeFrom": "Tyler the Creator",
              "data": {
                "$color": "#909291"
              }
            }, {
              "nodeTo": "Anwar Carrots",
              "nodeFrom": "Tyler the Creator",
              "data": {
                "$color": "#909291"
              }
            }, {
              "nodeTo": "Chef Tha Rapper",
              "nodeFrom": "Tyler the Creator",
              "data": {
                "$color": "#909291"
              }
            }
        ],  
        "data": {  
          "$color": "#83548B",  
          "$type": "circle",  
          "$dim": 10  
        },  
        "id": "Tyler the Creator",  
        "name": "Tyler the Creator" 
      }, {
        "adjacencies": [ 
            {
              "nodeTo": "David Guetta",
              "nodeFrom": "Ludacris",
              "data": {
                "$color": "#557EAA"
              }
            }, {
              "nodeTo": "Usher",
              "nodeFrom": "Ludacris",
              "data": {
                "$color": "#909291"
              }
            }, {
              "nodeTo": "Kelly Rowland",
              "nodeFrom": "Ludacris",
              "data": {
                "$color": "#909291"
              }
            }, {
              "nodeTo": "Future",
              "nodeFrom": "Ludacris",
              "data": {
                "$color": "#909291"
              }
            }, {
              "nodeTo": "T.I.",
              "nodeFrom": "Ludacris",
              "data": {
                "$color": "#909291"
              }
            }
        ],  
        "data": {  
          "$color": "#83548B",  
          "$type": "circle",  
          "$dim": 10  
        },  
        "id": "Ludacris",  
        "name": "Ludacris" 
      }, {
        "adjacencies": [ 
            {
              "nodeTo": "Frank Ocean",
              "nodeFrom": "Big Boi",
              "data": {
                "$color": "#557EAA"
              }
            }, {
              "nodeTo": "Andre 3000",
              "nodeFrom": "Big Boi",
              "data": {
                "$color": "#909291"
              }
            }, {
              "nodeTo": "Killer Mike",
              "nodeFrom": "Big Boi",
              "data": {
                "$color": "#909291"
              }
            }, {
              "nodeTo": "Twista",
              "nodeFrom": "Big Boi",
              "data": {
                "$color": "#909291"
              }
            }, {
              "nodeTo": "Kelly Rowland",
              "nodeFrom": "Big Boi",
              "data": {
                "$color": "#909291"
              }
            }
        ],  
        "data": {  
          "$color": "#83548B",  
          "$type": "circle",  
          "$dim": 10  
        },  
        "id": "Big Boi",  
        "name": "Big Boi" 
      }, {
        "adjacencies": [ 
            {
              "nodeTo": "Faith Evans",
              "nodeFrom": "Notorious B.I.G",
              "data": {
                "$color": "#557EAA"
              }
            }, {
              "nodeTo": "Game",
              "nodeFrom": "Notorious B.I.G",
              "data": {
                "$color": "#909291"
              }
            }, {
              "nodeTo": "M.O.P.",
              "nodeFrom": "Notorious B.I.G",
              "data": {
                "$color": "#909291"
              }
            }, {
              "nodeTo": "Lil Kim",
              "nodeFrom": "Notorious B.I.G",
              "data": {
                "$color": "#909291"
              }
            }, {
              "nodeTo": "Mobb Deep",
              "nodeFrom": "Notorious B.I.G",
              "data": {
                "$color": "#909291"
              }
            }
        ],  
        "data": {  
          "$color": "#83548B",  
          "$type": "circle",  
          "$dim": 10  
        },  
        "id": "Notorious B.I.G",  
        "name": "Notorious B.I.G" 
      }, {
        "adjacencies": [ 
            {
              "nodeTo": "Outlawz",
              "nodeFrom": "Tupac",
              "data": {
                "$color": "#557EAA"
              }
            }, {
              "nodeTo": "Dr. Dre",
              "nodeFrom": "Tupac",
              "data": {
                "$color": "#909291"
              }
            }, {
              "nodeTo": "Troutman",
              "nodeFrom": "Tupac",
              "data": {
                "$color": "#909291"
              }
            }, {
              "nodeTo": "Notorious B.I.G",
              "nodeFrom": "Tupac",
              "data": {
                "$color": "#909291"
              }
            }, {
              "nodeTo": "Crooked I",
              "nodeFrom": "Tupac",
              "data": {
                "$color": "#909291"
              }
            }
        ],  
        "data": {  
          "$color": "#83548B",  
          "$type": "circle",  
          "$dim": 10  
        },  
        "id": "Tupac",  
        "name": "Tupac" 
      }, {
        "adjacencies": [ 
            {
              "nodeTo": "King Chip",
              "nodeFrom": "Kid Cudi",
              "data": {
                "$color": "#557EAA"
              }
            }, {
              "nodeTo": "2 Chainz",
              "nodeFrom": "Kid Cudi",
              "data": {
                "$color": "#909291"
              }
            }, {
              "nodeTo": "Common",
              "nodeFrom": "Kid Cudi",
              "data": {
                "$color": "#909291"
              }
            }, {
              "nodeTo": "CyHi Da Prynce",
              "nodeFrom": "Kid Cudi",
              "data": {
                "$color": "#909291"
              }
            }, {
              "nodeTo": "Raekwon",
              "nodeFrom": "Kid Cudi",
              "data": {
                "$color": "#909291"
              }
            }
        ],  
        "data": {  
          "$color": "#83548B",  
          "$type": "circle",  
          "$dim": 10  
        },  
        "id": "Kid Cudi",  
        "name": "Kid Cudi" 
      }, {
        "adjacencies": [ 
            {
              "nodeTo": "Macklemore",
              "nodeFrom": "Schoolboy Q",
              "data": {
                "$color": "#557EAA"
              }
            }, {
              "nodeTo": "A$AP Rocky",
              "nodeFrom": "Schoolboy Q",
              "data": {
                "$color": "#909291"
              }
            }, {
              "nodeTo": "Kendrick Lamar",
              "nodeFrom": "Schoolboy Q",
              "data": {
                "$color": "#909291"
              }
            }, {
              "nodeTo": "Ab Soul",
              "nodeFrom": "Schoolboy Q",
              "data": {
                "$color": "#909291"
              }
            }, {
              "nodeTo": "Black Hippy",
              "nodeFrom": "Schoolboy Q",
              "data": {
                "$color": "#909291"
              }
            }
        ],  
        "data": {  
          "$color": "#83548B",  
          "$type": "circle",  
          "$dim": 10  
        },  
        "id": "Schoolboy Q",  
        "name": "Schoolboy Q" 
      }, {
        "adjacencies": [ 
            {
              "nodeTo": "2 Chainz",
              "nodeFrom": "Young Jeezy",
              "data": {
                "$color": "#557EAA"
              }
            }, {
              "nodeTo": "T.I.",
              "nodeFrom": "Young Jeezy",
              "data": {
                "$color": "#909291"
              }
            }, {
              "nodeTo": "Big Sean",
              "nodeFrom": "Young Jeezy",
              "data": {
                "$color": "#909291"
              }
            }, {
              "nodeTo": "Snoop Dogg",
              "nodeFrom": "Young Jeezy",
              "data": {
                "$color": "#909291"
              }
            }, {
              "nodeTo": "Kendrick Lamar",
              "nodeFrom": "Young Jeezy",
              "data": {
                "$color": "#909291"
              }
            }
        ],  
        "data": {  
          "$color": "#83548B",  
          "$type": "circle",  
          "$dim": 10  
        },  
        "id": "Young Jeezy",  
        "name": "Young Jeezy" 
      }, {
        "adjacencies": [ 
            {
              "nodeTo": "Jean Grae",
              "nodeFrom": "Immortal Technique",
              "data": {
                "$color": "#557EAA"
              }
            }, {
              "nodeTo": "Eminem",
              "nodeFrom": "Immortal Technique",
              "data": {
                "$color": "#909291"
              }
            }, {
              "nodeTo": "Jadakiss",
              "nodeFrom": "Immortal Technique",
              "data": {
                "$color": "#909291"
              }
            }, {
              "nodeTo": "Yasiin Bey",
              "nodeFrom": "Immortal Technique",
              "data": {
                "$color": "#909291"
              }
            }, {
              "nodeTo": "Poison Pen",
              "nodeFrom": "Immortal Technique",
              "data": {
                "$color": "#909291"
              }
            }
        ],  
        "data": {  
          "$color": "#83548B",  
          "$type": "circle",  
          "$dim": 10  
        },  
        "id": "Immortal Technique",  
        "name": "Immortal Technique" 
      }, {
        "adjacencies": [ 
            {
              "nodeTo": "The Weeknd",
              "nodeFrom": "Wiz Khalifa",
              "data": {
                "$color": "#557EAA"
              }
            }, {
              "nodeTo": "50 Cent",
              "nodeFrom": "Wiz Khalifa",
              "data": {
                "$color": "#909291"
              }
            }, {
              "nodeTo": "Mally Mall",
              "nodeFrom": "Wiz Khalifa",
              "data": {
                "$color": "#909291"
              }
            }, {
              "nodeTo": "Drake",
              "nodeFrom": "Wiz Khalifa",
              "data": {
                "$color": "#909291"
              }
            }, {
              "nodeTo": "Chris Brown",
              "nodeFrom": "Wiz Khalifa",
              "data": {
                "$color": "#909291"
              }
            }
        ],  
        "data": {  
          "$color": "#83548B",  
          "$type": "circle",  
          "$dim": 10  
        },  
        "id": "Wiz Khalifa",  
        "name": "Wiz Khalifa" 
      }, {
        "adjacencies": [ 
            {
              "nodeTo": "Juicy J",
              "nodeFrom": "Mac Miller",
              "data": {
                "$color": "#557EAA"
              }
            }, {
              "nodeTo": "Casey Veggies",
              "nodeFrom": "Mac Miller",
              "data": {
                "$color": "#909291"
              }
            }, {
              "nodeTo": "Joey Bada$$",
              "nodeFrom": "Mac Miller",
              "data": {
                "$color": "#909291"
              }
            }, {
              "nodeTo": "Iman Omari",
              "nodeFrom": "Mac Miller",
              "data": {
                "$color": "#909291"
              }
            }, {
              "nodeTo": "Kendrick Lamar",
              "nodeFrom": "Mac Miller",
              "data": {
                "$color": "#909291"
              }
            }
        ],  
        "data": {  
          "$color": "#83548B",  
          "$type": "circle",  
          "$dim": 10  
        },  
        "id": "Mac Miller",  
        "name": "Mac Miller" 
      }, {
        "adjacencies": [ 
            {
              "nodeTo": "Rick Ross",
              "nodeFrom": "Curren$y",
              "data": {
                "$color": "#557EAA"
              }
            }, {
              "nodeTo": "Wiz Khalifa",
              "nodeFrom": "Curren$y",
              "data": {
                "$color": "#909291"
              }
            }, {
              "nodeTo": "Juicy J",
              "nodeFrom": "Curren$y",
              "data": {
                "$color": "#909291"
              }
            }, {
              "nodeTo": "Big K.R.I.T",
              "nodeFrom": "Curren$y",
              "data": {
                "$color": "#909291"
              }
            }, {
              "nodeTo": "Lloyd",
              "nodeFrom": "Curren$y",
              "data": {
                "$color": "#909291"
              }
            }
        ],  
        "data": {  
          "$color": "#83548B",  
          "$type": "circle",  
          "$dim": 10  
        },  
        "id": "Curren$y",  
        "name": "Curren$y" 
      }, {
        "adjacencies": [ 
            {
              "nodeTo": "2 Chainz",
              "nodeFrom": "Trinidad James",
              "data": {
                "$color": "#557EAA"
              }
            }, {
              "nodeTo": "Young Jeezy",
              "nodeFrom": "Trinidad James",
              "data": {
                "$color": "#909291"
              }
            }, {
              "nodeTo": "T.I.",
              "nodeFrom": "Trinidad James",
              "data": {
                "$color": "#909291"
              }
            }, {
              "nodeTo": "Reija Lee",
              "nodeFrom": "Trinidad James",
              "data": {
                "$color": "#909291"
              }
            }, {
              "nodeTo": "Forte Bowie",
              "nodeFrom": "Trinidad James",
              "data": {
                "$color": "#909291"
              }
            }
        ],  
        "data": {  
          "$color": "#83548B",  
          "$type": "circle",  
          "$dim": 10  
        },  
        "id": "Trinidad James",  
        "name": "Trinidad James" 
      }, {
        "adjacencies": [ 
            {
              "nodeTo": "Action Bronson",
              "nodeFrom": "Joey Bada$$",
              "data": {
                "$color": "#557EAA"
              }
            }, {
              "nodeTo": "Big K.R.I.T",
              "nodeFrom": "Joey Bada$$",
              "data": {
                "$color": "#909291"
              }
            }, {
              "nodeTo": "Danny Brown",
              "nodeFrom": "Joey Bada$$",
              "data": {
                "$color": "#909291"
              }
            }, {
              "nodeTo": "Capital STEEZ",
              "nodeFrom": "Joey Bada$$",
              "data": {
                "$color": "#909291"
              }
            }, {
              "nodeTo": "CJ Fly",
              "nodeFrom": "Joey Bada$$",
              "data": {
                "$color": "#909291"
              }
            }
        ],  
        "data": {  
          "$color": "#83548B",  
          "$type": "circle",  
          "$dim": 10  
        },  
        "id": "Joey Bada$$",  
        "name": "Joey Bada$$" 
      }, {
        "adjacencies": [ 
            {
              "nodeTo": "Action Bronson",
              "nodeFrom": "Danny Brown",
              "data": {
                "$color": "#557EAA"
              }
            }, {
              "nodeTo": "Big K.R.I.T",
              "nodeFrom": "Danny Brown",
              "data": {
                "$color": "#909291"
              }
            }, {
              "nodeTo": "Joey Bada$$",
              "nodeFrom": "Danny Brown",
              "data": {
                "$color": "#909291"
              }
            }, {
              "nodeTo": "Jhane Aiko",
              "nodeFrom": "Danny Brown",
              "data": {
                "$color": "#909291"
              }
            }, {
              "nodeTo": "Future",
              "nodeFrom": "Danny Brown",
              "data": {
                "$color": "#909291"
              }
            }
        ],  
        "data": {  
          "$color": "#83548B",  
          "$type": "circle",  
          "$dim": 10  
        },  
        "id": "Danny Brown",  
        "name": "Danny Brown" 
      }, {
        "adjacencies": [ 
            {
              "nodeTo": "Action Bronson",
              "nodeFrom": "Yelawolf",
              "data": {
                "$color": "#557EAA"
              }
            }, {
              "nodeTo": "Big K.R.I.T",
              "nodeFrom": "Yelawolf",
              "data": {
                "$color": "#909291"
              }
            }, {
              "nodeTo": "A$AP Rocky",
              "nodeFrom": "Yelawolf",
              "data": {
                "$color": "#909291"
              }
            }, {
              "nodeTo": "Joey Bada$$",
              "nodeFrom": "Yelawolf",
              "data": {
                "$color": "#909291"
              }
            }, {
              "nodeTo": "Danny Brown",
              "nodeFrom": "Yelawolf",
              "data": {
                "$color": "#909291"
              }
            }
        ],  
        "data": {  
          "$color": "#83548B",  
          "$type": "circle",  
          "$dim": 10  
        },  
        "id": "Yelawolf",  
        "name": "Yelawolf" 
      }, {
        "adjacencies": [ 
            {
              "nodeTo": "Diddy",
              "nodeFrom": "Machine Gun Kelly",
              "data": {
                "$color": "#557EAA"
              }
            }, {
              "nodeTo": "Los",
              "nodeFrom": "Machine Gun Kelly",
              "data": {
                "$color": "#909291"
              }
            }, {
              "nodeTo": "Red Cafe",
              "nodeFrom": "Machine Gun Kelly",
              "data": {
                "$color": "#909291"
              }
            }, {
              "nodeTo": "Waka Flocka Flame",
              "nodeFrom": "Machine Gun Kelly",
              "data": {
                "$color": "#909291"
              }
            }, {
              "nodeTo": "Ester Dean",
              "nodeFrom": "Machine Gun Kelly",
              "data": {
                "$color": "#909291"
              }
            }
        ],  
        "data": {  
          "$color": "#83548B",  
          "$type": "circle",  
          "$dim": 10  
        },  
        "id": "Machine Gun Kelly",  
        "name": "Machine Gun Kelly" 
      }
      
    ];












  // end
  // init ForceDirected
  var fd = new $jit.ForceDirected({
    //id of the visualization container
    injectInto: 'infovis',
    //Enable zooming and panning
    //by scrolling and DnD
    Navigation: {
      enable: true,
      //Enable panning events only if we're dragging the empty
      //canvas (and not a node).
      panning: 'avoid nodes',
      zooming: 10 //zoom speed. higher is more sensible
    },
    // Change node and edge styles such as
    // color and width.
    // These properties are also set per node
    // with dollar prefixed data-properties in the
    // JSON structure.
    Node: {
      overridable: true
    },
    Edge: {
      overridable: true,
      color: '#23A4FF',
      lineWidth: 0.4
    },
    //Native canvas text styling
    Label: {
      type: labelType, //Native or HTML
      size: 10,
      style: 'bold'
    },
    //Add Tips
    Tips: {
      enable: true,
      onShow: function(tip, node) {
        //count connections
        var count = 0;
        node.eachAdjacency(function() { count++; });
        //display node info in tooltip
        tip.innerHTML = "<div class=\"tip-title\">" + node.name + "</div>"
          + "<div class=\"tip-text\"><b>connections:</b> " + count + "</div>";
      }
    },
    // Add node events
    Events: {
      enable: true,
      type: 'Native',
      //Change cursor style when hovering a node
      onMouseEnter: function() {
        fd.canvas.getElement().style.cursor = 'move';
      },
      onMouseLeave: function() {
        fd.canvas.getElement().style.cursor = '';
      },
      //Update node positions when dragged
      onDragMove: function(node, eventInfo, e) {
          var pos = eventInfo.getPos();
          node.pos.setc(pos.x, pos.y);
          fd.plot();
      },
      //Implement the same handler for touchscreens
      onTouchMove: function(node, eventInfo, e) {
        $jit.util.event.stop(e); //stop default touchmove event
        this.onDragMove(node, eventInfo, e);
      },
      //Add also a click handler to nodes
      onClick: function(node) {
        if(!node) return;
        // Build the right column relations list.
        // This is done by traversing the clicked node connections.
        var html = "<h4>" + node.name + "</h4><b> connections:</b><ul><li>",
            list = [];
        node.eachAdjacency(function(adj){
          list.push(adj.nodeTo.name);
        });
        //append connections information
        $jit.id('inner-details').innerHTML = html + list.join("</li><li>") + "</li></ul>";
      }
    },
    //Number of iterations for the FD algorithm
    iterations: 200,
    //Edge length
    levelDistance: 130,
    // Add text to the labels. This method is only triggered
    // on label creation and only for DOM labels (not native canvas ones).
    onCreateLabel: function(domElement, node){
      domElement.innerHTML = node.name;
      var style = domElement.style;
      style.fontSize = "0.8em";
      style.color = "#ddd";
            // for black text - #000000
    },
    // Change node styles when DOM labels are placed
    // or moved.
    onPlaceLabel: function(domElement, node){
      var style = domElement.style;
      var left = parseInt(style.left);
      var top = parseInt(style.top);
      var w = domElement.offsetWidth;
      style.left = (left - w / 2) + 'px';
      style.top = (top + 10) + 'px';
      style.display = '';
    }
  });
  // load JSON data.
  fd.loadJSON(json);
  // compute positions incrementally and animate.
  fd.computeIncremental({
    iter: 40,
    property: 'end',
    onStep: function(perc){
      Log.write(perc + '% loaded...');
    },
    onComplete: function(){
      Log.write('done');
      fd.animate({
        modes: ['linear'],
        transition: $jit.Trans.Elastic.easeOut,
        duration: 2500
      });
    }
  });
  // end
}
