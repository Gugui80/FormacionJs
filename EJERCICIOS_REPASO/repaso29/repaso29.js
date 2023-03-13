function Person (name,age) {
    this.name = name; 
    this.age = age; 
}

var family = new Array (); 
family[0] = new Person('Alice', 40); 
family[1] = new Person('Bob', 42); 
family[2] = new Person('Michelle', 8); 
family[3] = new Person('Timmy', 6); 

console.log('My family:'); 

         
//1) Añadir un método al construtor de persona que muestre POR CONSOLA los objetos del array (tanto el nombre como la edad)