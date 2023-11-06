interface EggLayer {
    layEggs(): void;
}

interface Flyer {
    fly(height: number): void;
}

interface Swimmer {
    swim(depth: number): void;
}

// alias de tipos
interface BirdLike extends EggLayer, Flyer {
    species: string;
}

interface FishLike extends EggLayer, Swimmer{
    species: string
}

class Bird implements BirdLike {

    constructor(public species: string){

    }

    layEggs(): void {
        console.log('Poniendo huevos de aves.');
    }

    fly(height: number): void {
        console.log(`Volando a la altura de ${height} metros`);
    }
}

class Fish implements FishLike {

    constructor(public species: string){

    }

    layEggs(): void {
        console.log('Poniendo huevos de pescado.');
    }

    swim(depth: number):void{
        console.log(`Nadando a una profundidad de ${depth} metros`);
    };
}

function getRandomAnimal(): Bird | Fish {
    const animals = [
        new Bird('puffin'),
        new Bird('kittiwake'),
        new Fish('sea robin'),
        new Fish('leafy seadragon')
    ];

    return animals[Math.floor(Math.random() * animals.length)];


}


function interrogateAnimal(animal = getRandomAnimal()){
    if(animal instanceof Fish)
        animal.swim(10);
    else if(animal instanceof Bird)
        animal.fly(10);

    return animal.species;
}

console.log('[Ejercicio 4.4]', `Tenemos un ${interrogateAnimal()} en nuestras manos!`);
