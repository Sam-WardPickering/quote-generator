// add button

document.getElementById('quotebttn').addEventListener('click', newQuote);

// add styling to text

document.getElementById("quoteDisplay").style.fontStyle = "italic";



// store quotes in an array

let quoteLog = ["Waste no more time arguing what a good man should be. Be One. ~ Marcus Aurelius", 
"Don't explain your philosophy. Embody it. ~ Epictetus", 
"You have power over your mind, not outside events. Realize this, and you will find strength. ~ Marcus Aurelius",
"The happiness of your life depends upon the quality of your thoughts. ~ Marcus Aurelius",
"Luck is what happens when preparation meets opportunity. ~ Seneca",
"It never ceases to amaze me: we all love ourselves more than other people, but care more about their opinion than our own. ~ Marcus Aurelius",
"The best revenge is not to be like your enemy. ~ Marcus Aurelius",
"You could leave life right now. Let that determine what you do and say and think. ~ Marcus Aurelius",
"Be tolerant with others and strict with yourself. ~ Marcus Aurelius",
"We are more often frightened than hurt; and we suffer more in imagination than in reality. ~ Seneca",
"No person has the power to have everything they want, but it is in their power not to want what they don't have, and to cheerfully put to good use what they do have. ~ Seneca",
"I judge you unfortunate because you have never lived through misfortune. You have passed through life without an opponent \- no one can ever know what you are capable of, not even you. ~ Seneca",
"How does it help.. to make troubles heavier by bemoaning them? ~ Seneca",
"How long are you going to wait before you demand the best for yourself? ~ Epictetus",
"First say to yourself what you would be; and then do what you have to do. ~ Epictetus",
"Don't explain your philosophy. Embody it. ~ Epictetus",
"When we are no longer able to change a situation, we are challenged to change ourselves. ~ Viktor Frankl",
"One does not become enlightened by imagining figures of light, but by making the darkness conscious. ~ Carl Jung",
"I am not what happened to me, I am what I choose to become. ~ Carl Jung",
"Your visions will become clear only when you can look into your own heart. Who looks outside, dreams; who looks inside, awakes. ~ Carl Jung",
"Until you make the unconscious conscious, it will direct your life and you will call it fate. ~ Carl Jung",
"What you resist, persists. ~ Carl Jung",
"No tree, it is said, can grow to heaven unless its roots reach down to hell. ~ Carl Jung",
"If one does not understand a person, one tends to regard him as a fool. ~ Carl Jung",
"We meet ourselves time and again in a thousand disguises on the path of life. ~ Carl Jung",
"You have your way. I have my way. As for the right way, the correct way, and the only way, it does not exist. ~ Friedrich Nietzsche",
"All things are subject to interpretation. Whichever interpretation prevails at a given time is a function of power and not truth. ~ Friedrich Nietzsche",
"There will always be rocks in the road ahead of us. They will be stumbling blocks or stepping stones; it all depends on how you use them. ~ Friedrich Nietzsche"]

// click function

function newQuote() {

    let randomNumber = Math.floor(Math.random() * quoteLog.length);
    document.getElementById('quoteDisplay').innerHTML = quoteLog[randomNumber];
}

//document.getElementById('quotebttn').addEventListener('click', playClickSound);

function playClickSound() {

    var audio = new Audio('sfx/click.wav');
    audio.play();

}