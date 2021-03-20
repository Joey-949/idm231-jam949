let godDateObj = document.getElementById('godDate');
let showMeObj = document.getElementById('showMe');

let godObj = document.getElementById('god');
let grekObj = document.getElementById('grek');
let soundFxObj = document.getElementById("soundFx");



let capObj = document.getElementById('cap');
let ariObj = document.getElementById('ari');
let scoObj = document.getElementById('sco');
let sagObj = document.getElementById('sag');
let aquObj = document.getElementById('aqu');
let pisObj = document.getElementById('pis');
let tauObj = document.getElementById('tau');
let gemObj = document.getElementById('gem');
let canObj = document.getElementById('can');
let libObj = document.getElementById('lib');
let leoObj = document.getElementById('leo');
let virObj = document.getElementById('vir');


function myHelp() {
    const popup = document.getElementById("myPopup");
    popup.classList.toggle("show");
}



function enterGod() {
    let userBday = godDateObj.value;
    console.log('userBday is ' + userBday);
    let monStr = userBday.substr(5, 2);
    let dayStr = userBday.substr(8, 2);


    let monNum = parseInt(monStr);
    let dayNum = parseInt(dayStr);

    greekDate(monNum, dayNum);
}


function greekDate(whichMonth, whichDayOfMonth) {
    if ((whichMonth == 12 && whichDayOfMonth >= 22) || (whichMonth == 1 && whichDayOfMonth <= 19)) {
        AstroSign = "Cap";
        gotSign = "Hades";
        changeGod(1);
      
    } else if ((whichMonth == 11 && whichDayOfMonth >= 22) || (whichMonth == 12 && whichDayOfMonth <= 21)) {
        AstroSign = "Sag";
        gotSign = "Hermes";
        changeGod(4);
      
    } else if ((whichMonth == 10 && whichDayOfMonth >= 24) || (whichMonth == 11 && whichDayOfMonth <= 21)) {
        AstroSign = "Sco";
        gotSign = "Ares";
        changeGod(3);

    } else if ((whichMonth == 9 && whichDayOfMonth >= 23) || (whichMonth == 10 && whichDayOfMonth <= 23)) {
        AstroSign = "Lib";
        gotSign = "Aphrodite";

        changeGod(10);
    } else if ((whichMonth == 8 && whichDayOfMonth >= 23) || (whichMonth == 9 && whichDayOfMonth <= 22)) {
        AstroSign = "Vir";
        gotSign = "Artemis";
        changeGod(12);
      
    } else if ((whichMonth == 7 && whichDayOfMonth >= 23) || (whichMonth == 8 && whichDayOfMonth <= 22)) {
        AstroSign = "Leo";
        gotSign = "Zeus";

        changeGod(11);
    } else if ((whichMonth == 6 && whichDayOfMonth >= 22) || (whichMonth == 7 && whichDayOfMonth <= 22)) {
        AstroSign = "Can";
        gotSign = "Nyx";
        changeGod(9);
      
    } else if ((whichMonth == 5 && whichDayOfMonth >= 21) || (whichMonth == 6 && whichDayOfMonth <= 21)) {
        AstroSign = "Gem";
        gotSign = "Chaos";
        changeGod(8);
      
    } else if ((whichMonth == 4 && whichDayOfMonth >= 20) || (whichMonth == 5 && whichDayOfMonth <= 20)) {
        AstroSign = "Tau";
        gotSign = "Demeter";
        changeGod(7);
      
    } else if ((whichMonth == 3 && whichDayOfMonth >= 21) || (whichMonth == 4 && whichDayOfMonth <= 19)) {
        AstroSign = "Ari";
        gotSign = "Posideon";
        changeGod(2);
      
    } else if ((whichMonth == 2 && whichDayOfMonth >= 19) || (whichMonth == 3 && whichDayOfMonth <= 20)) {
        AstroSign = "Pis";
        gotSign = "Dionysis";
        changeGod(6);
      
    } else if ((whichMonth == 1 && whichDayOfMonth >= 20) || (whichMonth == 2 && whichDayOfMonth <= 18)) {
        AstroSign = "Aqu";
        gotSign = "Athena";

        changeGod(5);
    }

    // return gotSign + ' - ' + gotZod;

}



capObj.addEventListener('click', function () {

    changeGod(1);
}, false);

ariObj.addEventListener('click', function () {

    changeGod(2);
}, false);
scoObj.addEventListener('click', function () {

    changeGod(3);
}, false);

sagObj.addEventListener('click', function () {

    changeGod(4);
}, false);

aquObj.addEventListener('click', function () {

    changeGod(5);
}, false);

pisObj.addEventListener('click', function () {

    changeGod(6);

}, false);

tauObj.addEventListener('click', function () {

    changeGod(7);
}, false);

gemObj.addEventListener('click', function () {

    changeGod(8);
}, false);

canObj.addEventListener('click', function () {

    changeGod(9);
}, false);

libObj.addEventListener('click', function () {

    changeGod(10);
}, false);

leoObj.addEventListener('click', function () {

    changeGod(11);
}, false);

virObj.addEventListener('click', function () {

    changeGod(12);
}, false);



function changeGod(whichOne) {
    // swap out zodiac image
    // swap out zodiac description with date range
    // play a zodiac sound

    console.log('swap zod info called ' + whichOne);

 if (whichOne == 1) {
      grekObj.src = 'characters/hades.png';
      godObj;
      document.getElementById("who").innerHTML = "HADES";
      document.getElementById("desc").innerHTML = "Since I represent the zodiac of Capricorn, mortals are designated this trife when born between December 22nd to January 19. You should at least know that a Capricorn is a sign that represents time and responsibility, and its representatives are traditional and often very serious by nature. Now stop wasting my time! I have enough Shades to check in as is.";  
      playSomething('sounds/hades.mp3');
    } else if (whichOne == 2) {
      grekObj.src = 'characters/poseidon.png';
      godObj;
      document.getElementById("who").innerHTML = "POSEIDON";
      document.getElementById("desc").innerHTML = "So 'I' represent Aries, huh? Would expect my war mongering nephew of somewhat the same name. Not that I'm complaining, since mortals that are born on Aries from March 21st to April 19th are always marks the beginning of something exsctatic to happen! They are continuously looking for dynamic, speed and competition, always being the first in everything, just like me!";
        playSomething('sounds/poseidon.mp3');
    } else if (whichOne == 3) {
        grekObj.src = 'characters/ares.png';
        godObj;
      document.getElementById("who").innerHTML = "ARES";
      document.getElementById("desc").innerHTML = "As the one who guides mortals to do battle for my enjoyment, I represent the scorpio. Scorpios are born between October 24th to November 21st. They are great leaders, always aware of the situation and also features prominently in resourcefulness. Likewise, I love the spirit of battle, but without any strategy, you've already lost.";
        playSomething('sounds/ares.mp3');
    } else if (whichOne == 4) {
        grekObj.src = 'characters/hermes.png';
        godObj;
      document.getElementById("who").innerHTML = "HERMES";
      document.getElementById("desc").innerHTML = "Oh I'm doing Sagittarius huh? Well I got a tight schedule, so mortals born between November 22nd and December 21st LOVE traveling around the world like me, but doing some slow stuff like philisophy and the meaning of life. Oop! Gotta run, I gotta get some lost souls to the Styx! Ciao!"; 
        playSomething('sounds/hermes.mp3');
    } else if (whichOne == 5) {
        grekObj.src = 'characters/athena.png';
        godObj;
      document.getElementById("who").innerHTML = "ATHENA";
      document.getElementById("desc").innerHTML = "Greetings, I am Athena, and I represent Aquarius. Mortals born between January 20th to Febuary 18th have the Aquarius zodiac. These mortals are deep thinkers and highly intellectual people who love helping others. They are able to see without prejudice, on both sides, which makes them people who can easily solve problems, similar to me, protecting mortals and gods alike."; 
        playSomething('sounds/athena.mp3');
    } else if (whichOne == 6) {
        grekObj.src = 'characters/dionysus.png';
        godObj;
      document.getElementById("who").innerHTML = "DIONYSIS";
      document.getElementById("desc").innerHTML = "Whatss up mortal! Name's Dionysis, call me Zagreus! *snicker* nah I'm just messing with ya. I represent Pisces, Mortals born between Febuary 19th and March 20th only get to be in the cool gods table. Pisces are very friendly (like me), so they often find themselves in a company of very different people. Pisces are selfless, they are always willing to help others, without hoping to get anything back. So I'll be just get back to partying man, hope we get to talk some more, man!"; 
        playSomething('sounds/dionysis.mp3');
    } else if (whichOne == 7) {
        grekObj.src = 'characters/demeter.png';
        godObj;
      document.getElementById("who").innerHTML = "DEMETER";
      document.getElementById("desc").innerHTML = "I am the Goddess Demeter, The ruler of the seasons, where there will soon be a full years winter if any gods get more on my nerves. Oh, Taurus? Right. You mortals that are born between April 20th and May 20th are stereotyped that they  are sign that harvests the fruits of labor. They feel the need to always be surrounded by love and beauty, turned to the material world, hedonism, and physical pleasures. A load of idiocy, I must say."; 
        playSomething('sounds/demeter.mp3');
    } else if (whichOne == 8) {
        grekObj.src = 'characters/chaos.png';
        godObj;
      document.getElementById("who").innerHTML = "CHAOS";
      document.getElementById("desc").innerHTML = "A mortal in my presence? maybe this was fated to be. Since any presence with me has been quicker than the last, What will you wish for? ..... most intriguing. So then, beings that come into exsitance between May 21st and June 21st are given the zodiac of Gemini, which represents in a person two different personalities in one and you will never be sure which one you will face. They are sociable, communicative and ready for fun, with a tendency to suddenly get serious, thoughtful and restless. A little 'Chaotic', don't you think?"; 
        playSomething('sounds/chaos.mp3');
    } else if (whichOne == 9) {
        grekObj.src = 'characters/nyx.png';
        godObj;
      document.getElementById("who").innerHTML = "NYX";
      document.getElementById("desc").innerHTML = "Greetings dear human, I am the goddess of the night, and I represent the zodiac of humans and gods alike that are born between June 22 and July 22 are given the zodiac of Cancer, with traits being Deeply intuitive and sentimental, Cancer can be one of the most challenging zodiac signs to get to know. They are very emotional and sensitive, and care deeply about matters of the family and their home. I have a sense of empathy towards these statements, just from my own actions taken upon this world."; 
        playSomething('sounds/nyx.mp3');
    } else if (whichOne == 10) {
        grekObj.src = 'characters/aphrodite.png';
        godObj;
      document.getElementById("who").innerHTML = "APHRODITE";
      document.getElementById("desc").innerHTML = "Oh aren't you just an ADORABLE human! I'm Aphrodite, Godess of Love, and I represent all the beautiful men and women that are born between the days of September 23 and October 23 of the zodiac of Libra! Isn't that the best way to get appraisal? Well anyway, Libras are peaceful, fair, and they hate being alone, not as much as me! Partnership is very important for them, as their mirror and someone giving them the ability to be the mirror themselves. well I could agree to some, but why would I need someone for a mirror?"; 
        playSomething('sounds/aphrodite.mp3');
    } else if (whichOne == 11) {
        grekObj.src = 'characters/zeus.png';
        godObj;
      document.getElementById("who").innerHTML = "ZEUS";
      document.getElementById("desc").innerHTML = "GREETINGS HUMAN!! It's been forever since a human has come here, before it was Heracles, then Epaphus, then... Well it's a lot of sons to keep count! Anyways, I'm the God of Thunder! I also represent the zodiac for people that are born between July 23 and August 22, the LEO ZODIAC! Leos are People born under the sign of Leo are natural born leaders. They are self-confident, dominant, and able to achieve anything they want to in any area of life they commit to. Just like the undisputed stongest god in all of humanitys records! HAHAHA!";
        playSomething('sounds/zeus.mp3');
    } else if (whichOne == 12) {
        grekObj.src = 'characters/artemis.png';
        godObj;
      document.getElementById("who").innerHTML = "ARTEMIS";
      document.getElementById("desc").innerHTML = "Hey, what's up. I'm Artemis, and I represent the Virgo Zodaic for humans and nymphs birthdays of August 23rd to September 22nd, with Virgos always paying attention to the smallest details and their deep sense of humanity makes them one of the most careful signs of the zodiac. Their methodical approach to life ensures that nothing is left to chance, and although they are often tender, their heart might be closed for the outer world. I always live for the details of the hunt with my woodland nymph friends, but having family is hard."; 
        playSomething('sounds/artemis.mp3');

    } else {
        console.log('error in swapzodinfo');
    }

}

function playSomething(whichSound) {

    console.log('playSomething called' + whichSound);



    soundFxObj.src = whichSound;
    soundFxObj.play();

}