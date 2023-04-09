const enDdate = "10 April 2023 9:14 AM"
//this is end date 

document.getElementById("end-date").innerText = enDdate;
//here we changed the value from the html which we had given during creating the space for displaying last date if need go to title tag
const inputs = document.querySelectorAll('input')
//selected the inputs 
function clock(){
    const end = new Date(enDdate)
    const now = new Date()
    const diff = (end - now)/1000;
    console.log(diff);
    inputs[1].value = Math.floor(diff/3600/24);
    inputs[2].value = Math.floor((diff/3600) % 24);
    inputs[3].value = Math.floor((diff/60) % 60);
    inputs[4].value = Math.floor(diff) % 60;
}
//made a logical function for the remaing time and specified it to the selected previous input calling variable
clock()
//Compulsory should call the function to later make it continous call to work
setInterval(
    () => {
        clock()
    },
    1000
)
//this is the the set interval made to call a function again and agin for 1000millisecond means everysecond for a continous logical working  
