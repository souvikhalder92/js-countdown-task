let countdown;
let remainderMinutes;
let remainderSeconds;
let secondsCount = 0;
const timerDisplay = document.querySelector('.display__time-left');
const endTime = document.querySelector('.display__end-time');
const totalTime = document.querySelector('.display_total');
const buttons = document.querySelectorAll('[data-time]');
const buttonStart = document.querySelector('.display__button-start');
const buttonReset = document.querySelector('.display__button-reset');
const buttonPause = document.querySelector('.display__button-pause');
let endsSeconds = 0;
let newPause = false;
let resetnew = false;
let newStart = false;
let secondLeft;
let display;
let hour;
let jk;
let count;
let sd = 0;
let minutes;





function timer(seconds){
	clearInterval(countdown);
	

	//const now = Date.now();
	//const then = now + secondsCount*1000;
	//console.log({now,then});
	 //displayTimeLeft();
	//displayEndTime(then);

countdown =	 setInterval(() =>
	{
	if(secondsCount >= endsSeconds)
	{
		return;
	}
	else if(newStart == true )
	{
		newPause = false;
		resetnew = false;
		newStart = false;

	}
	else if(newPause == true  )
	{ 
		return;
	}
	else if( resetnew == true)
	{
		secondsCount = 1;
		secondLeft = endsSeconds - secondsCount;
	  displayTimeLeft(secondLeft)
	}
	else{
		secondsCount ++;
	  secondLeft = endsSeconds - secondsCount;
	  displayTimeLeft(secondLeft);
	  
}



},1000);


    

}

function displayTimeLeft(seconds)
{
   //clearInterval(countdown);
	 remainderMinutes = Math.floor(seconds / 60);
   remainderSeconds = seconds % 60;
     display = `${remainderMinutes}:${remainderSeconds < 10 ? '0' : '' }${remainderSeconds}`;
  document.title = display;
  timerDisplay.textContent = display;

  
 //console.log(seconds);
}
function displayEndTime()
{
	const sa = Math.floor(endsSeconds/60);
  const end = new Date();
 
   minutes = end.getMinutes() + sa;
 if(minutes > 60){
    hour = end.getHours() + 1;
   }
   else
   {
   	hour = end.getHours();
   }
   const adjustedHour = hour > 12 ? hour - 12 : hour;
  const adjustedminutes = minutes > 60 ? minutes - 60 : minutes;
  endTime.textContent = `Be Back At ${adjustedHour}:${adjustedminutes < 10 ? '0' : ''}${adjustedminutes}`;


}


function startTimer() {
  const seconds = parseInt(this.dataset.time);
  secondsCount = 0;
  timer();
  displayTimeLeft(seconds);
  endsSeconds = seconds +1;
  displayEndTime();
   	sd += seconds;
   const ds = Math.floor(sd / 60);
   totalTime.textContent = `Today : ${ds} min`;
   //console.log(ds);
   const kl = ds - 60;
   console.log(kl);
   const fg = parseInt((ds/1000)*10);
   console.log(fg);
   if(ds > 60 )
   {
  
   	totalTime.textContent = `Today : ${fg == 0 && kl > 60 ?  '1' : fg } : ${ds > 60  ? ds % 100 :   kl} min`;

   	
   	}
   
   

   buttonStart.classList.remove('hidden');	
	buttonPause.classList.remove('hidden');
	buttonReset.classList.remove('hidden');
	
   

}



buttons.forEach(button => button.addEventListener('click', startTimer));
document.customForm.addEventListener('submit', function(e) {
  e.preventDefault();
  const mins = this.minutes.value;
  //console.log(mins);
  endsSeconds = mins*60;
  secondsCount = 0;
  endsSeconds ++;
  //console.log(sd);
  newPause = false;
	resetnew = false;
	newStart = false;
	buttonStart.classList.remove('hidden');	
	buttonPause.classList.remove('hidden');
	buttonReset.classList.remove('hidden');
	  sd += endsSeconds;
  const s = Math.floor(sd / 60);
  totalTime.textContent = `Today : ${s} min`;
  const lk = s - 60;
   //console.log(kl);
   const fo = parseInt((s/1000)*10);
   //console.log(fg);
   if(s > 60 )
   {
  
   	totalTime.textContent = `Today : ${fo == 0 ? '1' : fo} : ${s >= 60 ? s % 100 : lk} min`;
   }

	timer();
 //this.reset();
 displayEndTime();
  
	  
});
 const addItems = document.querySelector('.add-items');
  const itemsList = document.querySelector('.taskes');
  const items =JSON.parse(localStorage.getItem('items')) || [];

  function addItem(e)
  {
    e.preventDefault();
    //console.log('hello');
    const text=(this.querySelector('[name=ite]')).value;
    const item ={
      text,
      done: false
    };
    console.log(item);
    items.push(item);
    populateList(items,itemsList)
    localStorage.setItem('items',JSON.stringify(items));
    this.reset();
    localStorage.clear(items);
    
    
}


  function populateList(taskes=[],taskesList)
  {
    taskesList.innerHTML = taskes.map((task,i)=>{
      return `
       <li>
       <input type="checkbox" data-index=${i} id="ite${i}" ${task.done ? 'checked':''}/>
       <label for="ite${i}">${task.text}</label>
       </li>
      `

    }).join('');
    localStorage.setItem('items',JSON.stringify(items));

  }

  function toggleDone(e)
  {
   if(!e.target.matches('input')) return;
   //console.log(e.target);
   const el=e.target;
   const index=el.dataset.index;
   items[index].done=!items[index].done;
  localStorage.setItem('items',JSON.stringify(items));
  populateList(items,itemsList);
  }
  

  addItems.addEventListener('submit',addItem);
  itemsList.addEventListener('click',toggleDone);
  populateList(items,itemsList);
  
  




buttonPause.addEventListener('click', function(){
	newPause = true;


});
buttonStart.addEventListener('click', function(){
 newStart = true;
});

buttonReset.addEventListener('click', function(){
	
 resetnew = true;
     	
});







