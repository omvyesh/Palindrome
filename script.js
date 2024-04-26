const text = document.getElementById("text-input");
const checkButton = document.getElementById("check-btn");

const result = document.getElementById("result")
checkButton.addEventListener("click", execution);


function execution() {
  const inputValue = text.value;

  if (inputValue.trim() === "") {
    alert("Please input a value");
    return;
  }

  else if (inputValue.length === 1) {
    result.textContent = `${inputValue} is a palindrome`;
  }
  else {
    const regex = /[^a-zA-Z0-9]/g;

    const cleanString = inputValue.replace(regex, '').toLowerCase();
   
    if (checkPalindrome(cleanString)) {
      result.textContent = `${inputValue} is a palindrome `;
    }
    else{
            result.textContent = `${inputValue} is not a palindrome `;

    }
  }
}

function checkPalindrome(cleanString) {

let start =0;
let end = cleanString.length-1;
while(start < end){
 if(cleanString[start]!==cleanString[end]){
  return false;}
  start+=1;
  end-=1;
}
  return true;


}  

