const setWord = [
  "Asopao de Pollo is a popular Do minican a,nd Puerto Rican dish. It’s essentially our version of a Chicken and Rice Soup that infuses all of our favorite flavors.",
  " It’s the dish that keeps on giving because you seriously feed an entire village with just cups of rice!",
  "Middle English paragraf marginal sign marking a paragraph, from Anglo-French parogref, from Medieval Latin paragraphus"
];
const write = document.querySelector("#write");
const msg = document.querySelector(".msg");
const btn = document.querySelector(".btn");
const msg2=document.querySelector(".msg2");
const timer= document.querySelector(".timer");

var start,end;
 

function playgame() {
  let randomNumber = Math.floor(Math.random() * setWord.length);
  msg.innerText = setWord[randomNumber];
  let date=new Date();
  start=date.getTime();
  btn.innerText="Done";
  console.log(`start time =  ${start}`);
  
  
}
  

  function endgame()
  {
    let date=new Date();
    end=date.getTime();
    let totalTime=((end-start)/1000);
    console.log(totalTime);
    let totalstr=write.value;
    var wordCount=wordCounter(totalstr);

   let speed=Math.round((wordCount/totalTime)*60);
   let finalmsg=`Your speed =  ${speed} WPM  `;
   
   finalmsg+= compareWord(msg.innerText,totalstr);
   msg.innerText=finalmsg;

  }
  function compareWord(str1,str2)
  {
    let word1=str1.split(" ");
    let word2=str2.split(" ");
    let count=0;
    word1.forEach(function(item,index)
    {
      if(item == word2[index])
      {
        count++;

      }
    })
    let error=(word1.length-count);
   return (`${count} corrects out of ${word1.length} words and number of errors ${error}`);
   

    

  }

  
 function wordCounter(str)
 {
   let response=str.split(" ").length;
   console.log(response);
   return response;
 }
   
btn.addEventListener("click", function () {
   

console.log(this);
  if (this.innerText == "Start") {
  
    write.disabled=false;
    playgame();
  }
  else if(this.innerText=="Done")
  {
    write.disabled=true;
    btn.innerText="Start";
     endgame();
  }
});


/*

var startTime;
function  startTimer()
{
  timer.innerText=0;
startTime=new.Date();


}

function clock()
{
  timer.innerText= gettimerTime();
}
function gettimerTime(){
  return Math.floor((new Date() - startTime)/1000);
}
*/