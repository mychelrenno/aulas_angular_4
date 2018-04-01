import { Animal } from "../aula07-classes/Animal";
import { Dao } from "./dao";
import { Cavalo } from "../aula07-classes/Cavalo";


let dao: Dao<Animal> = new Dao<Animal>();

let animal: Animal = new Animal('Rex');
let cavalo: Cavalo = new Cavalo('GOHorse');

dao.insert(animal);