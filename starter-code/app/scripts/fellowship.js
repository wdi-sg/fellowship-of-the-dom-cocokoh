console.log("Linked.");

// Dramatis Personae
var hobbits = [
  'Frodo Baggins',
  'Samwise \'Sam\' Gamgee',
  'Meriadoc \'Merry\' Brandybuck',
  'Peregrin \'Pippin\' Took'
];

var buddies = [
  'Gandalf the Grey',
  'Legolas',
  'Gimli',
  'Strider',
  'Boromir'
];

var lands = ['The Shire', 'Rivendell', 'Mordor'];
var body = document.querySelector('body');


// Part 1


function makeMiddleEarth() {
  // create a section tag with an id of middle-earth
  // add each land as an article tag
  // inside each article tag include an h1 with the name of the land
  // append middle-earth to your document body
var middleEarth = document.createElement('section')
middleEarth.id = 'middle-earth'
lands.forEach(function(land) {
  var landArticle = document.createElement('article')
  var landTitle = document.createElement('h1')
  landTitle.textContent = land
  landArticle.appendChild(landTitle)
  middleEarth.appendChild(landArticle)
})
body.appendChild(middleEarth)

}


makeMiddleEarth();


// Part 2

function makeHobbits() {
  // display an unordered list of hobbits in the shire (which is the second article tag on the page)
  // give each hobbit a class of hobbit
  var hobbitList = document.createElement('ul')
  hobbits.forEach(function(hobbit) {
    var hobbitNames = document.createElement('li')
    hobbitNames.className = 'hobbit'
    hobbitNames.textContent = hobbit
    hobbitList.appendChild(hobbitNames)
  })
var shire = document.querySelector('article:first-child')
shire.appendChild(hobbitList)
// console.log(shire)
}
makeHobbits()

// Part 3

function keepItSecretKeepItSafe() {
  // create a div with an id of 'the-ring'
  // give the div a class of 'magic-imbued-jewelry'
  // add an event listener so that when a user clicks on the ring, the nazgulScreech function (provided) is invoked
  // add the ring as a child of Frodo
  var theRing = document.createElement('div')
  theRing.id = 'the-ring'
  theRing.className = 'magic-imbued-jewelry'
  // console.log(theRing)
  theRing.addEventListener('click', nazgulScreech)
  var frodo = document.querySelectorAll('li')[0]
  frodo.appendChild(theRing)
}
keepItSecretKeepItSafe()

// Part 4


function makeBuddies() {
  // create an aside tag
  // attach an unordered list of the 'buddies' in the aside
  // insert your aside as a child element of rivendell
  var asides = document.createElement('aside')
  var buddyList = document.createElement('ul')
  buddies.forEach(function(buddy) {
    var buddyName = document.createElement('li')
    buddyName.textContent = buddy
    buddyList.appendChild(buddyName)
  })
  asides.appendChild(buddyList)
  var rivendell = document.querySelectorAll('h1')[1]
  rivendell.appendChild(asides)
}

makeBuddies()
// Part 5


function beautifulStranger() {
  // change the 'Strider' textnode to 'Aragorn'
var strider = document.querySelectorAll('li')[7]
strider.textContent = 'Aragorn'
}
beautifulStranger()

// Part 6

function leaveTheShire() {
  // assemble the hobbits and move them to Rivendell
var shireHobbit = document.querySelectorAll('ul')[0]
// console.log(shireHobbit)
var theShire=body.querySelectorAll('article')[0]
var remove = theShire.removeChild(shireHobbit)
var rivendell = document.querySelectorAll('h1')[1]
rivendell.appendChild(remove)
}
leaveTheShire()

// Part 7


function forgeTheFellowShip() {
  // create a new div called 'the-fellowship' within rivendell
  // add each hobbit and buddy one at a time to 'the-fellowship'
  // after each character is added make an alert that they have joined your party
  var rivendell = document.querySelectorAll('h1')[1]
  var thefellowship = document.createElement('div')
  thefellowship.id = 'the-fellowship'
  rivendell.appendChild(thefellowship)
  // var theRivendell=document.querySelectorAll('h1')[1]
  var hobbit = document.querySelectorAll('ul')[1]
  thefellowship.appendChild(hobbit)
  var buddy = document.querySelectorAll('ul')[0]
  thefellowship.appendChild(buddy)
  var members = document.querySelectorAll('li')
  for (var i = 0; i<members.length; i++) {
    // alert(members[i].textContent + ' ' + 'joined')
  }
}
forgeTheFellowShip()


// Part 8


function theBalrog() {
  // change the 'Gandalf' textNode to 'Gandalf the White'
  // apply style to the element
  // make the background 'white', add a grey border
  var theFellowship = document.getElementById('the-fellowship')
  var gandalf = document.querySelectorAll('li')[4]
  // console.log(gandalf)
  gandalf.textContent = 'Gandalf the White'
  gandalf.style.background = 'white'
  gandalf.style.border = '10px solid grey'


}
theBalrog()


// Part 9

function hornOfGondor() {
  // pop up an alert that the horn of gondor has been blown
  // Boromir's been killed by the Uruk-hai!
  // put a linethrough on boromir's name
  // Remove Boromir from the Fellowship
// alert('horn of gondor has been blown')
// alert('boromir\'s been killed by the uruk-hai')
var boromir = document.querySelectorAll('li')[8]
boromir.style.textDecoration = 'line-through'
var parent = document.querySelectorAll('ul')[1]
var remove = parent.removeChild(boromir)

}
hornOfGondor()

// Part 10

function itsDangerousToGoAlone(){
  // take Frodo and Sam out of the fellowship and move them to Mordor
  // add a div with an id of 'mount-doom' to Mordor
  var frodo = document.querySelectorAll('li')[0]
  var sam = document.querySelectorAll('li')[1]
  var mordo = document.querySelectorAll('h1')[2]
  mordo.appendChild(frodo)
  mordo.appendChild(sam)
  var mount = document.createElement('div')
  mount.id = 'mount-doom'
  mordo.appendChild(mount)
}
itsDangerousToGoAlone()


// Part 11

function weWantsIt() {
  // Create a div with an id of 'gollum' and add it to Mordor
  // Remove the ring from Frodo and give it to Gollum
  // Move Gollum into Mount Doom
var gollums = document.createElement('div')
gollums.id = 'gollum'
var mordor = document.querySelectorAll('h1')[2]
mordor.appendChild(gollums)
var ring = document.getElementById('the-ring')
gollums.appendChild(ring)
var mount = document.getElementById('mount-doom')
mount.appendChild(gollums)
}
weWantsIt()

// Part 12

function thereAndBackAgain() {
  // remove Gollum and the Ring from the document
  // remove all the baddies from the document
  // Move all the hobbits back to the shire
var gollum = document.getElementById('gollum')
var parent = document.getElementById('mount-doom')
var remove = parent.removeChild(gollum)
var buddies = document.querySelectorAll('ul')[1]
var parent1 = document.getElementById('the-fellowship')
var remove2 = parent1.removeChild(buddies)
var shire = body.querySelectorAll('article')[0]
var hobbits = document.querySelectorAll('ul')[0]
console.log(hobbits)
var frodo = document.querySelectorAll('li')[3]
var sam = document.querySelectorAll('li')[2]
shire.appendChild(hobbits)
shire.appendChild(frodo)
shire.appendChild(sam)

}
thereAndBackAgain()
