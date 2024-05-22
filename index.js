// Code your solutions in this file
// function to return an array of thank you messages for each name
function writeCards(namesArray, eventName) 
{
    let messagesArray = [];
    for (let i = 0; i < namesArray.length; i++) 
    {
      let message = `Thank you, ${namesArray[i]}, for the wonderful ${eventName} gift!`;
      messagesArray.push(message);
    }
    return messagesArray;
}
//function to perfoprm a count down
function countDown(number)
{
  let i = number
  while (i >= 0)
    {
      console.log(i);
      i--;
    }


}
