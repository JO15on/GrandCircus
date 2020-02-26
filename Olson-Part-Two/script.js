var eventType= prompt("Is the event casual, semi-formal, or formal?");
var tempInput= prompt ("What is the temperature outside");
var result;
var tempFahr = parseInt(tempInput);

console.log(tempFahr);

  if (eventType === "casual" && tempFahr<54) {
    result= 'Since it is less than 54 degrees and you are going to a casual event, you should wear something comfy and a coat';
    } 
    else if (eventType === "casual" && 54<tempFahr<70) {
      result='Since it is between 54 and 70 degrees and you are going to a casual event, you should wear something comfy and a jacket';
    } 
    else if (eventType === "casual" && tempFahr>70) {
      result='Since it is more than 70 degrees and you are going to a casual event, you should wear something comfy without a jacket';
      } 
      else if (eventType === "semi-formal" && tempFahr<54) {
        result='Since it is less than 54 degrees and you are going to a semi-formal event, you should wear a polo and a coat';
      } 
      else if (eventType === "semi-formal" && 54<tempFahr<70) {
        result='Since it is between 54 and 70 degrees and you are going to a semi-formal event, you should wear a polo and a jacket';
      } 
      else if (eventType === "semi-formal" && tempFahr>70) {
        result='Since it is more than 70 degrees and you are going to a semi-formal event, you should wear a polo without a jacket';
        } 
        else if (eventType === "formal" && tempFahr<54) {
          result='Since it is less than 54 degrees and you are going to a formal event, you should wear a suit and a coat';
        } 
        else if (eventType === "formal" && 54<tempFahr<70) {
          result='Since it is between 54 and 70 degrees and you are going to a formal event, you should wear a suit and a jacket';
        } 
        else if (eventType === "formal" && tempFahr>70) {
          result='Since it is more than 70 degrees and you are going to a formal event, you should wear a suit without a jacket';
          } else  {
            result="wrong input"
          }
          
            console.log(result);
  