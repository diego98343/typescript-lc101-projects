
import { SpaceLocation } from './SpaceLocation';


let spacecraftName:	string=	'Determination';
let speedMph:number	=17500;
let kilometersToMars:number=	225000000;
let kilometersToTheMoon:number =384400;
let milesPerKilometer:number =	0.621;
let milesToMars:number= kilometersToMars*milesPerKilometer;
let hoursToMars: number= milesToMars/ speedMph;
let daysToMars: number= hoursToMars/24;

console.log(`${spacecraftName} would take ${daysToMars} days to get to Mars.`);

function getDaysToLocation (kilometersAway:number):number{
 let milesAway:number=kilometersAway*milesPerKilometer;
 let hoursToLocation:number= milesAway/ speedMph;
 return hoursToLocation/ 24;
}

console.log(`${spacecraftName} would take ${getDaysToLocation(20)} days to get to Mars.`);




class Spacecraft{

    milesPerKilometer: number= 0.621;
    name: string;
    speedMph: number;

    constructor(name: string, speedMph: number){
        this.name= name;
        this.speedMph= speedMph;
    }

    getDaysToLocation (kilometersAway:number):number{
        let milesAway:number=kilometersAway*this.milesPerKilometer;
        let hoursToLocation:number= milesAway/ this.speedMph;
        return hoursToLocation/ 24;
    }

     printDaysToLocation(location: SpaceLocation){
       console.log(`${this.name} would take    ${this.getDaysToLocation(location.kilometersAway)} days to get to ${location.name}.`);


       
     }
}



let spaceShuttle = new Spacecraft('Determination', 17500);


  
  console.log(`${spaceShuttle.getDaysToLocation (20000)} ${spaceShuttle.name} `);


console.log(`${spaceShuttle.printDaysToLocation(new SpaceLocation('Mars', kilometersToMars))} ${spaceShuttle.printDaysToLocation(new SpaceLocation('the Moon', kilometersToTheMoon))} `);
