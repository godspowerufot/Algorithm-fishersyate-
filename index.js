var submitButton = document.getElementById("submit");

const handleClick = () => {
  //get all the div class by ID
  let col1 = document.getElementById("col1");
  let col2 = document.getElementById("col2");
  let col3 = document.getElementById("col3");
  let col4 = document.getElementById("col4");
  let col5 = document.getElementById("col5");
  let col6 = document.getElementById("col6");
  let col7 = document.getElementById("col7");
  let col8 = document.getElementById("col8");
  let col9 = document.getElementById("col9");
  let col10 = document.getElementById("col10");
 //create an array of length 10 
  let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
//this is used to measure execution time before starting
  console.time("executionTime");
//function 
  shuffle(numbers); // Shuffle the array

  col1.innerHTML = numbers[0];
  col2.innerHTML = numbers[1];
  col3.innerHTML = numbers[2];
  col4.innerHTML = numbers[3];
  col5.innerHTML = numbers[4];
  col6.innerHTML = numbers[5];
  col7.innerHTML = numbers[6];
  col8.innerHTML = numbers[7];
  col9.innerHTML = numbers[8];
  col10.innerHTML = numbers[9];

  console.log(numbers);
  console.timeEnd("executionTime");
};

// Fisher-Yates shuffle algorithm
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}
console.time(shuffle);

submitButton.addEventListener("click", handleClick);
