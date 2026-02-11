export  function formatDate(){
const currentDate=new Date();

const option={
    weekday:'short',
    month:'short',
    day:'numeric',
    hour:'2-digit',
    minute:'2-digit'
}

return currentDate.toLocaleString('en-Us',option);
}

export  function formatShortDate(timeStamp){
const currentDate=new Date(timeStamp*1000);

const option={
     month:'short',
    day:'numeric',
    hour:'2-digit',
  
}

return currentDate.toLocaleString('en-Us',option);
}