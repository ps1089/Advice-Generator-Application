const advice = document.getElementById('advice');
const advice_id = document.getElementById('advice-id');

const getData = async ()=>
{
  try
  {
    const response = await fetch("https://api.adviceslip.com/advice");
    const advice_obj = await response.json();
    
    advice_id.textContent = advice_obj.slip.id;
    advice.textContent = advice_obj.slip.advice;
  }
  catch (error)
  {
    advice_id.textContent = 0;
    advice.textContent = "Calm down everything will be wonderful";
  }
}; 
getData();
