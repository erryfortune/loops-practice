// Write a for loop that logs 0-15
for (let i = 0; i <=15; i++){
    console.log(i)
}
    

console.log('----------------')


// Write a for loop that counts from 15-0
for (let i = 15; i >= 0; i--){
    console.log(i)
}


console.log('----------------')


// Make variable laps = 0; write a for loop that logs (“that’s another lap!”) 
// and adds 1 to the laps variable. AFTER the loop, log laps
laps = 0
for (let laps = 0; laps < 10; laps++) {
    console.log("that's another lap")
    
}
laps = 1
for (let laps = 1; laps < 12; laps++) {
    console.log("you ran 11 laps")
}


console.log('----------------')


// Make variable age. Make a loop from 0-100. In every loop check if i == age, 
// if so log something, else say “age doesn’t match”.
let varAge = 21
for (let i = 0; i <= 100; i++) {
if (varAge==i) {
    console.log("The user is 21 years old.")
} else {
    console.log("age doesn't match")
}
    
}
console.log('----------------')

// Write a loop that logs all even numbers from 0-700
for(i=0; i<= 700; i+=2){
    console.log(i);
    
}


console.log('----------------')


// Write a loop that logs all odd numbers from 0-700.
for(i=0; i<= 700; i++){
    if (i % 2 !=0) {
        console.log(i)
    }   
    
}

console.log('----------------')


// Write a loop with some “if else” statements. 
// The loop should start at 1900 and go to 1949 and log when things were invented. 
// For example when i = 1902 the code should log “it is 1902 - the teddy bear is invented

const inventionDates = [{keyYear: 1900, keyInvention: 'Zeppelin'}, {keyYear: 1902, keyInvention: 'Teddy bear'}, {keyYear: 1910, keyInvention: 'Talking motion picture'}, {keyYear: 1913, keyInvention: 'Bra'}, {keyYear: 1918, keyInvention: 'Fortune cookie'}, {keyYear: 1923, keyInvention: 'Traffic signal'}, {keyYear: 1935, keyInvention: 'Radar'}, {keyYear: 1938, keyInvention: 'Ballpoint pen'}, {keyYear: 1943, keyInvention: 'Slinky'}]; 

for (year=1900;year<1950;year++) { 
    for (i=0;i<inventionDates.length;i++) { 
        if (inventionDates[i].keyYear == year) { 
            console.log ('It is ' + year + ' the ' + inventionDates[i].keyInvention + ' has been invented.')
        }
    }
}