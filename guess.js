function checkLeapYear(number)
 {
    for(var i=1;i<=10;i++)
    {
        if(number==i)
        {
            console.log('Its a correct guess');
            break;
        }
    }

    if(i>10)
    console.log("Bad Guess!")

    
}



const number = prompt('Enter a number:');

checkLeapYear(number);
