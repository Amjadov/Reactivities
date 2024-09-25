export interface Duck {
    name: string;
    numlegs: number;
    makeSound: (sound: string) => void;
}
const Duck1: Duck = {
    name: "Donald",
    numlegs: 2,
    makeSound: (sound: string) => console.log(sound)
};
const Duck2: Duck = {
            name: "Daffy",
            numlegs: 2,
            makeSound: (sound: string) => console.log(sound)
};
Duck1.makeSound("Quack");
Duck2.makeSound("Sound ");

export const Ducks = [Duck1, Duck2];