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