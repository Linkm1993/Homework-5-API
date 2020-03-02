let home = $(".home");
let currentTime = moment()
let submitButton = $(".btn")
let momentlength = ["1","2","3","4", "5", "6", "7", "8", "9", "10", "11", "12"]
let length = momentlength.length
let val = [];



    // for (i = 0; i <= localStorage.length-1; i++)    
    // {     
    //     key = sessionStorage.key(i);    
    //     val = sessionStorage.getItem(key);     
    // }   
  





for(let i = 0; i < length; i++){
  let forms = $("<form></form>")
  let textArea = $("<textarea class=\"txt\" placeholder=\"Enter Task Here!\"></textarea>")
  let formContainer = $("#forms")

    formContainer.append(forms)
    forms.append(textArea)
    $(".txt").each(function (index) {
      $(this).attr('ident', index+1);
  });
    
}

$(submitButton).on("click", function(){
    storeLocal()
})



let test = moment().format("MM/DD/YYYY");
console.log(test);

function storeLocal() {
  let index = $(".txt")
  val = [];
  console.log(index)
  for(i = 0; i < length; i++){
    let grabATTR = $(".txt").attr("ident");
    val.push(index[i].value);
    localStorage.setItem(grabATTR, val)
    console.log(val);
    
    //let x = formValue
        //if (x == "") {
        //alert("Name must be filled out");
        //return false;
      }
      window.localStorage.setItem(test, val);
    }



















































































































































