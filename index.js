 
 let selectedColors = ['red', 'blue'];
 selectedColors[2] = 'green',
 console.log(selectedColors.length);

 // This is my first javascript code!
 console.log('2dayapp');
 let name = 'Talabi';
 console.log(name);

 // rules of naming your variables
 //use the let keyword to declear a variable
 // cannot be a reserved keyword such as if else
 // They shold be meaningful
 // they cannot statet with a number
 // they cannot contain sapce or hyphen(-). thry should be written as firstNmae
 //they are case sensitive
 // best way to declear two varaibles is
 let firstName ='Mosh';
 let lastName ='Samuel';
 console.log(lastName);


let person = {
    name: 'Talabi',
    age: 30
};


//Dot Notation
person.name = 'samuel';

//Bracket Notation
console.log(person.name)

// performing task
function greet(name, lastName) {
    console.log('Hello ' + name+' '+lastName);
}

greet('Talabi' , 'Samuel');

//calculating value
function square(number) {
    return number * number;
}
console.log(square(2));