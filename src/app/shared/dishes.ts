import { Allergy } from './allergy';

export class Dishes {
	constructor(
		public id: number,
		public name: string,
		public description: string,
		public photoUrl: string,
		public allergens?: Allergy[],
		public allergic?: {
			susceptibleTo: number,
			susceptible: boolean
		}
	) {}	
}