let currentTime = moment()
let submitButton = $(".btn")
let momentlength = ["1","2","3","4", "5", "6", "7", "8", "9", "10", "11", "12"]
let length = momentlength.length
let val = [];
let test = moment().format("MM/DD/YYYY");


$(submitButton).on("click", function(){
    storeLocal()
})



function storeLocal() {
  let index = $(".txt")
  val = [];
  console.log(index)
  for(i = 0; i < length; i++){
    val.push(index[i].value);
    console.log(val);
    
      }
      window.localStorage.setItem(test, val);
    }
