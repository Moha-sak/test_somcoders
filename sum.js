//this is sum function that we do a sum with array
function sum(...values)
{
    let sum = 0;
    for(let i = 0; i<values.length; i++)
    {
        sum +=values[i];
    }
return "Total is: "+sum;
}

console.log(sum(3,5,2,5,3,2,5));