import { Dishes } from './dishes';

export class Menu {
	constructor(
		public id: number,
		public mealType: string,
		public dishes: Dishes[]
	){}
}