let jokeText = document.getElementById("jokeText")
let jokeBtn = document.getElementById("jokeBtn")

let joke = [
    "Why did the ghost go to the party? Because he had no body to dance with!",
    "Why don't skeletons fight each other? They don't have the guts!",
    "What is a ghost's favorite dessert? I scream!",
    "Why did the vampire read the newspaper? He heard it had great circulation!",
    "What do witches put on their hair? Scare spray!",
    "Why are ghosts bad liars? Because you can see right through them!",
    "What room does a ghost avoid? The living room!",
    "Why did the skeleton go to the barbecue? He wanted spare ribs!",
    "What do you call a fat pumpkin? A plumpkin!",
    "Why did the zombie skip school? He felt rotten!",
    "What is a vampire's favorite fruit? A neck-tarine!",
    "Why don't mummies take vacations? They're afraid they'll unwind!",
    "What do ghosts use to wash their hair? Shamboo!",
    "Why was the witch late for school? Her broom broke down!",
    "What do you get when you cross a vampire with a snowman? Frostbite!",
    "What is a monster's favorite game? Hide and shriek!",
    "What do you call a skeleton who tells jokes? A funny bone!",
    "Why did Dracula become a vegetarian? He couldn't stomach the steaks!",
    "What kind of music do mummies listen to? Wrap music!",
    "Why did the vampire get a job at the blood bank? He wanted to make a killing!",
    "What do you call a haunted chicken? A poultry-geist!",
    "Why did the ghost cross the road? To get to the other fright!",
    "What do you call a pumpkin that works out? A jacked-o'-lantern!",
    "Why don't vampires have friends? They're a pain in the neck!",
    "What do witches eat for breakfast? Spell-cakes!",
    "What is a ghost's favorite drink? Ghoul-aid!",
    "Why did the mummy go to therapy? He had too many wrapped-up emotions!",
    "Why did the skeleton go to the party alone? He had nobody to go with!",
    "What do you call a little monster who tells scary stories? A boo-kworm!",
    "Why did the vampire become a comedian? He had a killer sense of humor!",
    "What is a witch's favorite subject in school? Spelling!",
    "What do ghosts eat for dinner? Spook-ghetti!",
    "Why did the pumpkin get promoted? It was outstanding in its field!",
    "What do vampires do when they're bored? They go batty!",
    "Why did the witch bring a ladder? She wanted to reach new heights!",
    "Why was the Halloween party so successful? Everyone had a fang-tastic time!"
]

function myScript(){ 
    let randomNumber = Math.floor(Math.random() * joke.length);
    jokeText.textContent = joke[randomNumber];
}

jokeBtn.addEventListener("click", myScript);

