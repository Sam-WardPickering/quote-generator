// add button

document.getElementById('quotebttn').addEventListener('click', newQuote);

// add styling to text

document.getElementById("quoteDisplay").style.fontStyle = "italic";



// store quotes in an array

let quoteLog = ["Waste no more time arguing what a good man should be. Be One.<br><br>~ Marcus Aurelius", 
"Don't explain your philosophy. Embody it.<br><br>~Epictetus", 
"You have power over your mind, not outside events.<br>Realize this, and you will find strength.<br><br>~ Marcus Aurelius",
"The happiness of your life depends upon the quality of your thoughts.<br><br>~ Marcus Aurelius",
"Luck is what happens when preparation meets opportunity.<br><br>~ Seneca",
"It never ceases to amaze me: we all love ourselves more than other people,<br>but care more about their opinion than our own.<br><br>~ Marcus Aurelius",
"The best revenge is not to be like your enemy.<br><br>~ Marcus Aurelius",
"You could leave life right now.<br>Let that determine what you do and say and think.<br><br>~ Marcus Aurelius",
"Be tolerant with others and strict with yourself.<br><br>~ Marcus Aurelius",
"We are more often frightened than hurt;<br>and we suffer more in imagination than in reality.<br><br>~ Seneca",
"No person has the power to have everything they want,<br>but it is in their power not to want what they don't have,<br>and to cheerfully put to good use what they do have.<br><br>~ Seneca",
"I judge you unfortunate because you have never lived through misfortune.<br>You have passed through life without an opponent \- no one can ever know what you are capable of,<br>not even you.<br><br>~ Seneca",
"How does it help.. to make troubles heavier by bemoaning them?<br><br>~ Seneca",
"How long are you going to wait before you demand the best for yourself?<br><br>~ Epictetus",
"First say to yourself what you would be; and then do what you have to do.<br><br>~ Epictetus",
"Don't explain your philosophy. Embody it.<br><br>~ Epictetus",
"When we are no longer able to change a situation,<br>we are challenged to change ourselves.<br><br>~ Viktor Frankl",
"One does not become enlightened by imagining figures of light,<br>but by making the darkness conscious.<br><br>~ Carl Jung",
"I am not what happened to me, I am what I choose to become.<br><br>~ Carl Jung",
"Your visions will become clear only when you can look into your own heart.<br>Who looks outside, dreams; who looks inside, awakes.<br><br>~ Carl Jung",
"Until you make the unconscious conscious,<br>it will direct your life and you will call it fate.<br><br>~ Carl Jung",
"What you resist, persists.<br><br>~ Carl Jung",
"No tree, it is said,<br>can grow to heaven unless its roots reach down to hell.<br><br>~ Carl Jung",
"If one does not understand a person,<br>one tends to regard him as a fool.<br><br>~ Carl Jung",
"We meet ourselves time and again in a thousand disguises on the path of life.<br><br>~ Carl Jung",
"You have your way. I have my way.<br>As for the right way, the correct way, and the only way,<br>it does not exist.<br><br>~ Friedrich Nietzsche",
"All things are subject to interpretation.<br>Whichever interpretation prevails at a given time is a function of power and not truth.<br><br>~ Friedrich Nietzsche",
"There will always be rocks in the road ahead of us.<br>They will be stumbling blocks or stepping stones;<br>it all depends on how you use them.<br><br>~ Friedrich Nietzsche"]

// click function

function newQuote() {

    let randomNumber = Math.floor(Math.random() * quoteLog.length);
    document.getElementById('quoteDisplay').innerHTML = quoteLog[randomNumber];
}

//document.getElementById('quotebttn').addEventListener('click', playClickSound);


// function playClickSound() {

//     var audio = new Audio('sfx/click.wav');
//     audio.play();
//     audio.volume = 0.3;

// }