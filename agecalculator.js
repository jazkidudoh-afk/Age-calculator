const inputDay = document.getElementById("day")
const inputMonth = document.getElementById("month")
const inputYear = document.getElementById("year")

// Dash dash the text we will manipulate to display our results
const yrelement = document.getElementById("years")
const mthelement = document.getElementById("months")
const dayselement = document.getElementById("days")

const button = document.getElementById("btn")
const refreshbtn = document.getElementById("refresh")
const resultText = document.getElementById("result")
const timetxt = document.getElementById("timertext")


const monthdays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]

inputYear.addEventListener("input", () => {
    if (inputYear.value.length > 4){
        inputYear.value = inputYear.value.slice(0,4)
    }
if (inputYear.value.length===4) {
        inputYear.blur()
    }
})


inputDay.addEventListener("input", () =>{
    if (inputDay.value > 31){
        inputDay.value = 31
    } 
    if (inputDay.value < 1){
        inputDay.value = ""
    }

    if (inputDay.value.length === 2) {
        inputMonth.focus()
    }

} )


inputMonth.addEventListener("input", () =>{
    if (inputMonth.value > 12){
        inputMonth.value = 12
    } 
    if (inputMonth.value < 1){
        inputMonth.value = ""
    }

    if (inputMonth.value.length === 2) {
        inputYear.focus()
    }

} )


button.addEventListener("click", function(){
    console.log("button clicked");

const today = new Date()


const currentYear = today.getFullYear()
if ((currentYear %  4 === 0 && currentYear % 100 !==0)) {
    monthdays[1] = 29
}


      const currentMonth = today.getMonth() + 1
   const currentDay = today.getDate()




   // GET THE INPUT VALUES FIRST 
   const day = Number(inputDay.value)
   const mth = Number(inputMonth.value)
   const yrr = Number(inputYear.value)
   console.log(yrr, typeof yrr);



   if (inputDay.value === "" || inputMonth.value==="" || inputYear.value === "") {
    resultText.textContent = "Please fill in all fields"
    resultText.style.color = "red"
  timetxt.style.display = "none"

   yrelement.textContent = "--"
   dayselement.textContent = "--"
    mthelement.textContent = "--"
     return;
}


  if (inputYear.value.length !==4 ){
     resultText.textContent = "Year Must be 4 digits"
     resultText.style.color = "red"
     timetxt.style.display = "none"

     yrelement.textContent = "--"
      dayselement.textContent = "--"
    mthelement.textContent = "--"
    return;
}
   const birthdate = new Date ( yrr, mth - 1, day)
   if(birthdate.getFullYear()!== yrr || birthdate.getMonth ()!==(mth-1) || birthdate.getDate()!==day){
    resultText.textContent = "Enter a valid date"
    timetxt.style.display = "none"
    resultText.style.color = "red"

    yrelement.textContent = "--"
   dayselement.textContent = "--"
    mthelement.textContent = "--"

           return
   }
      


  if (isNaN(yrr) || yrr < 1900 || yrr > currentYear){

    resultText.textContent = "Enter Valid Year"
    resultText.style.color = "red"
  timetxt.style.display = "none"

   yrelement.textContent = "--"
   dayselement.textContent = "--"
    mthelement.textContent = "--"
     return;

  }

        // GET TODAYS DATE

  // console.log(today.getFullYear());
   // CALCULATE AGE 



   let ageYear = currentYear - yrr
   let ageMonth = currentMonth -mth
   let ageDay = currentDay - day
 console.log(ageYear, ageMonth, ageDay);
   
// and the current year is 03 05 2026
 // we will have for eg the birthday is 20 10 2000 
// we will have -17 -5 26

// as we cannot have - in days and month cause this is a wrong way to express it and more over the person is not 26 yet so we do this

// first we have to fix the day so we borrow 1 from months and month becomes -6 remember -5 is > than - 6, 
// so we have + 30 -17  = 13 we don fix the day like that and now month still get minus so we must tackle am same thing since we still dey may we never reach october so we cannot leave the mins so we borrow 1 from year and year now becomes 25 one year = 12 months ba. so we do
 //  + 12 -6 = 6 (remember this 12 na one year way we borrow)

 // so we have 13days 6 months and 25years thats the current date of birth of this person as of may 3 2020 

 // FIXING THE NEGATIVE NUMBERS
   if (ageDay < 0 ){
    ageMonth--
    ageDay += monthdays[(currentMonth - 2 + 12) % 12]
   }

   if (ageMonth < 0){
    ageYear--
    ageMonth += 12
}

timetxt.style.display = "block"
timetxt.textContent = `You Have spent ${ageYear} Years On Earth How Is Your Ride So Far`
timetxt.style.fontSize ="15px"
timetxt.style.color = "green"
//timetxt.style.textTransform = "uppercase"



// What happens here is that after you minus the current day from the input year and it is less than 0 borrow 1 thats (30days) from month and minus the value you have from current day and input day minus it from the 30 days thats 1 month you borrow for eg you had less than 4 collect one month from month then do -4 + 30 =

   //console.log(ageYear, ageMonth, ageDay);
   
   
yrelement.textContent=ageYear
 mthelement.textContent=ageMonth
 dayselement.textContent=ageDay

 
 
let remainingMonth = mth - currentMonth;
 let remainingDays = day - currentDay;
 if (remainingDays < 0){
    remainingMonth -=1 ;
    remainingDays += monthdays[(currentMonth - 2 + 12 ) %12 ]
 }



 if (remainingMonth < 0){
    remainingMonth +=12
 }
 console.log(remainingMonth , remainingDays);


 if (remainingMonth === 0 && remainingDays === 0){
    resultText.textContent = "Happy Birthday To You"
 } 
 else if (remainingMonth === 0){
    resultText.textContent = `Your Next Birthday Is In ${remainingDays} Days`
 }
 else if (remainingDays === 0 ){
  resultText.textContent =  `Your Next Birthday Is In Exactly ${remainingMonth} Months`
 }
else {
    resultText.textContent = `Your Birthday Is In ${remainingMonth} Months and ${remainingDays} Days`
    
}
resultText.style.color = "#854dff"
})

refreshbtn.addEventListener("click", function (){
    inputDay.value="";
    inputMonth.value="";
    inputYear.value="";
    yrelement.textContent = "-- "
    mthelement.textContent = "-- "
    dayselement.textContent ="-- "
    resultText.textContent = "How Long Have You Spent On Earth"
    resultText.style.color = "black"

   // timetxt.textContent=""
    timetxt.style.display = "none"

})


 document.addEventListener("keydown", (event) => {
   if  (event.key === "Enter") {
     button.click()
     console.log("Emma is a fantastic designer");
     
    }
 })










 

//     // Diffrent method of printing out arrays
//  let arr = ["jan", "feb", "march", "april", "may", "june", "july", "august", "september", "october", "november", "december"]
//   // printing a particular one
//  console.log(arr[8]);
// // printing all at once
//  console.log(arr.join ("\n"));
// // loop method
// for (let i = 0; i < arr.length; i++) {
//      console.log(arr[i]);

//  }

// // loop method with index

//  for (let i = 0; i < arr.length; i++) {
//      console.log(i, arr[i]);
    
    
//  }

//  //map area in row mode

//   let newarr = arr.map((value , index ) =>{
//     return index + "-" + value
    
    
//   })
//     console.log(newarr);


// // same as loop 

//      arr.forEach((value, index) => {
//      console.log( index , value);
    
//  })




 