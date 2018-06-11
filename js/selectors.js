// declare your functions here...
function paragraphSelector(){
  return $('p');
}

function lastImageSelector(){
  return $('img:last');
}

function ninjaBabySelector(){
  return $('#baby-ninja');
}

function divSelector(){
  return $('.pics');
}

function firstListItem(){
<<<<<<< HEAD
  return $('ul img:first-child').get(0)// the get function get's the first index from the listed items with those of ID "pic-list";
=======
  return $('ul #pic-list:first-child');
>>>>>>> bbf1ace6bf2a88a2ce5bac575a26eac4df9d2be8
}