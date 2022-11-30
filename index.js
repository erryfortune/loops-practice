const inventionDates = [{keyYear: 1900, keyInvention: 'Zeppelin'}, {keyYear: 1902, keyInvention: 'Teddy bear'}, {keyYear: 1910, keyInvention: 'Talking motion picture'}, {keyYear: 1913, keyInvention: 'Bra'}, {keyYear: 1918, keyInvention: 'Fortune cookie'}, {keyYear: 1923, keyInvention: 'Traffic signal'}, {keyYear: 1935, keyInvention: 'Radar'}, {keyYear: 1938, keyInvention: 'Ballpoint pen'}, {keyYear: 1943, keyInvention: 'Slinky'}]; //{key: value} objects in array

for (year=1900;year<1950;year++) { //iterates through the years
    for (i=0;i<inventionDates.length;i++) { //iterates through array
        if (inventionDates[i].keyYear == year) { //checks if current array index's key == the current year
            console.log ('It is ' + year + ' the ' + inventionDates[i].keyInvention + ' has been invented.') // if true the year and corresponding invention are logged
        }
    }
}