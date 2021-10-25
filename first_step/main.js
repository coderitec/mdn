const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

let storyText = "It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day.";

let insertX = ['Willy the Goblin', 'Big Daddy', 'Father Christmas'];

let insertY = ['the soup kitchen', 'Disneyland', 'the White House'];

let insertZ = ['spontaneously combusted','melted into a puddle on the sidewalk','turned into a slug and crawled away'];

randomize.addEventListener('click', result);


function result() {

    let newStory = storyText;

    let xItem, yItem, zItem;

    xItem = randomValueFromArray(insertX);

    yItem = randomValueFromArray(insertY);

    zItem = randomValueFromArray(insertZ);

    let x = storyText.indexOf(':insertx');
    let y = storyText.indexOf(':inserty');
    let z = storyText.indexOf(':insertz');
    let xx = storyText.lastIndexOf(':insertx');
    
    newStory = newStory.replace(storyText.slice(x,':insertx:'.length+x), xItem);

    newStory = newStory.replace(storyText.slice(y,':inserty:'.length+y), yItem);
    
    newStory = newStory.replace(storyText.slice(z,':insertz:'.length+z), zItem);

    newStory = newStory.replace(storyText.slice(xx,':insertx:'.length+xx), xItem);

    


  if(customName.value !== '') {
    let name = customName.value;

    newStory = newStory.replace(storyText.slice(storyText.indexOf('Bob'),storyText.indexOf('Bob')+'Bob'.length), name);

  }

  if(document.getElementById("uk").checked) {
    let weight = Math.round(300 / 14) +' stone';
    let temperature =  Math.round((94 - 32) * (5 / 9)) + ' centigrade';

    newStory = newStory.replace(storyText.slice(storyText.indexOf('94 fahrenheit'),storyText.indexOf('94 fahrenheit')+'94 fahrenheit'.length), temperature);

    newStory = newStory.replace(storyText.slice(storyText.indexOf('300 pounds'),storyText.indexOf('300 pounds')+'300 pounds'.length), weight);


  }

  story.textContent =  newStory;
  story.style.visibility = 'visible';
}