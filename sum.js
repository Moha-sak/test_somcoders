function sum(...values)
{
    let sum = 0;
    for(let i = 0; i<values.length; i++)
    {
        sum +=values[i];
    }
return sum;
}

console.log(sum(3,5,2,5,3,2,5));