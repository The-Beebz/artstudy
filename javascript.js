  var amount =[ 
    '5',
    '10',
    '15',
	'20',
];

function gesture() {
  let amount =[ 
    '4 5-minute',
    '10 2-minute',
    '20 1-minute',
	'40 30-second'
];
  var type =[
	'female',
    'male',
    'animal'
];
  var randomAmount = Math.floor(Math.random() * (amount.length));;
  var randomType = Math.floor(Math.random() * (type.length));
  return `<strong>Draw ${amount[randomAmount]} ${type[randomType]} gestures<strong>`;

}
	
function proportion() {
  var ratio =[
	'1:2',
    '1:3',
    '1:4',
	'1:5',
	'1:6',
	'1:7',
	'1:8',
];
  var randomRatio = Math.floor(Math.random() * (ratio.length));;
return `<strong>Draw someone with a ${ratio[randomRatio]} head to body ratio </strong>`;
}

function anatomy() {
  var part =[
	'heads',
	'eyes',
	'noses',
	'ears',
	'lips',
	'torsos',
	'arms',
	'hands',
	'legs',
	'feet',
];
  var randomAmount = Math.floor(Math.random() * (amount.length));;
  var randomPart = Math.floor(Math.random() * (part.length));
  return `<strong>Draw ${amount[randomAmount]} ${part[randomPart]}</strong>`;

}

function newGesture() {
	document.getElementById('studyDisplay').innerHTML = gesture();
}
	
function newProportion() {
	var randomNumber = Math.floor(Math.random() * (proportion.length));
	document.getElementById('studyDisplay').innerHTML = proportion();
}

function newAnatomy() {
	document.getElementById('studyDisplay').innerHTML = anatomy();
	
} 
