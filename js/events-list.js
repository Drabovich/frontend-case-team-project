const $ = document.querySelector.bind(document),
$$ = document.querySelectorAll.bind(document),
eventList = $('.events-list__list'),
pagesList = $('.events-list__numbers-list');
let evensArray = [],
cardsCounter = 1,
prevCards = 0;


$('[name="event-search"]').addEventListener("keyup", function(){
	if(event.code == 'Enter') search();
});
$('.events-list__filter').addEventListener("change", chooseOptionChange, {"passive": true});
$('main').addEventListener("click", chooseOptionClick, {"passive": true});
function chooseOptionChange(){
	if(event.target.closest('#pages')) renderCardsQuantity();
	if(event.target.closest('#event')) chooseCardsCategory();
	if(event.target.closest('#sort')||
		event.target.closest('#hi-low')) sortCardsArray();
	if(event.target.closest('#search')) search();
}
function chooseOptionClick(){
	if(event.target.closest('.change-page')) changeCardsQuantity();
	if(event.target.closest('.search')) search();
}


function search(){
	evensArray = [];
	let searchValue = $('[name="event-search"]').value.toLowerCase();
	events.forEach((item) => {
		if(item.theme.toLowerCase().includes(searchValue)) evensArray.push(item);
		if(searchValue !== ''){
			if(item.day.toLowerCase().includes(searchValue)) evensArray.push(item);
			if(item.month.toLowerCase().includes(searchValue)) evensArray.push(item);
		}
	});
	sortCardsArray();
}
chooseCardsCategory();
function chooseCardsCategory(){
	evensArray = [];
	let searchValue = $('#event').value.toLowerCase();
	events.forEach((item) => {
		if(item.category.toLowerCase().includes(searchValue)) {
			evensArray.push(item);
		} else if(searchValue == 'all') evensArray.push(item);
	});
	sortCardsArray();
}

function sortCardsArray(){
	let sortBy = $('#sort').value,
	sortHiLow = $('#hi-low').value;
	function sortArr(arr, func){
		for(let i = 0; i < arr.length; i++){
			for(let j = 0; j < arr.length-1; j++){
				if(func(arr[j], arr[j+1])){
					let temp = arr[j];
					arr[j] = arr[j+1];
					arr[j+1] = temp;
				}
			}
		}
		return arr;
	}
	sortArr(evensArray, function(a, b){
		if(sortHiLow == 'ascending') {
		sort = a[sortBy] > b[sortBy];
		} else if(sortHiLow == 'descending'){sort = a[sortBy] < b[sortBy]}
		return sort;
	});
	renderCardsQuantity();
	return cardsCounter = 1, prevCards = 0;
}
function changeCardsQuantity(){
	cardsCounter++;
	renderCardsOne();
}

function renderCardsQuantity(){
	renderCardsOne();
	return cardsCounter = 1, prevCards = 0;
}
function renderCardsOne(){
	let step = +$('#pages').value,
	cards = cardsCounter * step;
	if(cards >= evensArray.length) {
		cards = evensArray.length;
		$('.change-page').classList.add('hidden');
	} else $('.change-page').classList.remove('hidden');
	renderCards(cards);
}

function renderCards(cards){
	eventList.innerHTML = '';
	for(let i = 0; i < cards; i++){
		eventCard(evensArray[i]);
	}
	pages();
	return prevCards = prevCards + cards;
}

function pages(){
	let pages = Math.ceil(evensArray.length/$('#pages').value);
	pagesList.innerHTML = '';
	renderButtons(pages);
}

function renderButtons(pages){
	for(let i = 0; i < pages; i++){
	pagesList.insertAdjacentHTML(
		'beforeend',
		`<span class="events-list__number">${i+1}</span>`);
	}
	pagesActive();
}
function pagesActive(){
	$$('.events-list__number')[cardsCounter-1].
	classList.add('events-list__number_active');
}
function eventCard(obj){
	eventList.insertAdjacentHTML(
		'beforeend',
		`<article id="${obj.id}" class="events-list__event event">
         <time class="event__date"">
             <span class="event__day">${obj.day}</span>
             <span>
                 <b class="event__month">${obj.month}</b>
                 <span class="event__duration">${obj.time}</span>
             </span>
         </time>
         <div class="event__about">
             <h3 class="event__title">${obj.theme}</h3>
             <div class="event__category"><span>Onine </span>${obj.category}</div>
         </div>
         <a href="#" class="event__btn btn_1">View more</a>
     </article>`
		);
}