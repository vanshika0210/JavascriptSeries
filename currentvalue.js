const printNumbers={
phrase:'the current value is:',
numbers:[1,2,3,4],
loop()
{
    console.log(this.numbers);
    this.numbers.forEach(function(number){
    console.log(this.phrase,number);
    });
}
}
printNumbers.loop();


