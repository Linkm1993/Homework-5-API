
let home = $(".home");
let currentTime = moment()
let submitButton = $(".btn")
let momentlength = ["1","2","3","4", "5", "6", "7", "8", "9", "10", "11", "12"]
let length = momentlength.length



    for (i = 0; i <= localStorage.length-1; i++)    
    {     
        key = sessionStorage.key(i);    
        val = sessionStorage.getItem(key);     
    }   
  





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





function storeLocal() {
  let grabATTR = $(".txt").attr("ident");
  let val = $(".txt").val()
  localStorage.setItem(grabATTR, JSON.stringify(val))
  //let x = formValue
      //if (x == "") {
      //alert("Name must be filled out");
      //return false;
    //}
    
  }
  






console.log(currentTime)
console.log(currentTime._locale._months)
console.log(currentTime._locale._weekdays)
console.log(momentlength)

console.log()

