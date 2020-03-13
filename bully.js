(function () {


let easy = [
    {"insult": "Nobody likes you", "comeback": "Actually my friends and family would disagree with you"},
    {"insult": "You're such a crybaby", "comeback": "I don't think so"},
    {"insult": "You're ugly", "comeback": "Well, I think you are beautiful"},
    {"insult": "You should lose some weight", "comeback": "Weight is only temporary, but stupid is forever"},
    {"insult": "Geez, you can't take a joke", "comeback": "I only accept good jokes"},
    {"insult": "You suck", "comeback": "Meh, whatever"},
    {"insult": "What are you looking at, stupid?", "comeback": "Apparently I'm looking at Einstein"},
    {"insult": "You're dumb", "comeback": "You must be struggling. Can I help you with this class?"}
]

let medium = [
    {"insult": "What are you looking at, stupid?", "comeback": "Oh. Excuse me. You're blocking my view."},
    {"insult": "This place isn't for people like you", "comeback": "This is definitely the place for people like us"},
    {"insult": "You're too bossy", "comeback": "Thank you. When I'm the boss, maybe I'll even let you work for me one day."},
    {"insult": "What do you know? You're just a girl", "comeback": "The things I know would make your head spin"},
    {"insult": "You're good at this for a girl", "comeback": "No. I'm good at this period."}
]

let hard = [
    {"insult": "No one even notices you", "comeback": "That's inappropriate.  Are you okay?"},
    {"insult": "You will never succeed", "comeback": "I will.  And so will you."},
    {"insult": "Why don't you let the boys talk.", 
        "comeback": "I will when they have something useful to say"},
    {"insult": "Actually, that's not how it's done/This is how you should do it", 
        "comeback": "I don't think that's right. Let's ask someone who knows more."},
    {"insult": "You won't date me? You're too ugly anyway", 
        "comeback":"Definitely not. I'm dodging a bullet by not dating you."},
    {"insult": "You'd be pretty if you smiled more", "comeback": "I'd be happier if I never see you again"}
]

let work = [
    {"insult": "Can I talk to someone who knows more about X?", "comeback": "Yes. That would be me. I can help you with that."},
    {"insult": "We got a memo this morning. Did you understand all of it?", 
        "comeback": "I understood. Is there a certain part you wanted to discuss?"},
    {"insult": "Do you think you can handle this yourself?", 
        "comeback": "I'm prepared for this project. I want to make sure we're on the same page. Do you want to discuss any specific expectations?"},
    {"insult": "You're pretty slow at X", "comeback": "I'm making sure I'm thorough. (Optional: Do you have any tips for me from when you worked on this?"},
    {"insult": "I can't believe she wore that to work", "comeback": "You can't believe what? Can you explain what you mean by that?"},
    {"insult": "I can't believe you screwed that up.", "comeback": "That's inappropriate. Don't speak to me like that."}
]

let insultsOver18 = [
    {"insult": "No one wants you anyways, so just let me have my way with you",
        "comback": "Don't ever talk to me again"}
]

let insult = "";
let comeback = "";
let randNum = 0;


document.addEventListener('DOMContentLoaded', e => {
    setupEvents();
});

function setupEvents(){
    document.body.addEventListener('click', e => {
        console.log(`body: ${e.target.value} was clicked`);
    },true);   

    document.getElementById('startBtn').addEventListener('click', e => {
        showDiv();
    });  
    
    document.getElementById('comebackBtn').addEventListener('click', e => {
        showComeback();
    });

    document.getElementById('nextBtn').addEventListener('click', e => {
        showNext();
    });
}


function getRandomInt(max) {
    randNum = Math.floor(Math.random() * Math.floor(max));
    return randNum;
}

function showDiv() {
    document.getElementById("quiz").style.display = "block";
    updateInsult();
    document.getElementById("insult").textContent = insult;
    document.getElementById("startBtn").classList.add('hide');
    document.getElementById("promptClick").classList.add('hide');
}


function showComeback() {
    document.getElementById("comeback").textContent = comeback;
    document.getElementById("comebackBtn").classList.add('hide');
    document.getElementById("nextBtn").classList.remove('hide');
}

function showNext() {
    document.getElementById("comeback").textContent = "";
    updateInsult();
    document.getElementById("insult").textContent = insult;
    document.getElementById("comebackBtn").classList.remove('hide');
    document.getElementById("nextBtn").classList.add('hide');
    incrementPoints();
    updateDifficulty();
}

function updateInsult() {
    arr = updateDifficulty();
    insult = arr[0];
    comeback = arr[1];
    console.log(insult);
    console.log(comeback);
}

function updateDifficulty() {
    if ((parseInt(document.getElementById("pointsNum").textContent, 10)) >= 5 && (parseInt(document.getElementById("pointsNum").textContent, 10)) <= 10) {
        difficultyInsults = medium[getRandomInt(medium.length)].insult;
        difficultyComebacks = medium[randNum].comeback;
        document.getElementById("diffLevel").textContent = "Medium";
    } else if ((parseInt(document.getElementById("pointsNum").textContent, 10)) >= 11) {
        difficultyInsults = hard[getRandomInt(hard.length)].insult;
        difficultyComebacks = hard[randNum].comeback;
        document.getElementById("diffLevel").textContent = "Hard";
    } else {
        difficultyInsults = easy[getRandomInt(easy.length)].insult;
        difficultyComebacks = easy[randNum].comeback;
        document.getElementById("diffLevel").textContent = "Easy";
    }
    return [difficultyInsults, difficultyComebacks];
}

function incrementPoints() {
    var value = parseInt(document.getElementById("pointsNum").textContent, 10);
    value = isNaN(value) ? 0 : value;
    value++;
    document.getElementById('pointsNum').textContent = value;
}

})();

