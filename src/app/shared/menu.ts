import { Allergy } from './allergy';

export class Menu {
	constructor(
		public id: number,
		public name: string,
		public description: string,
		public allergens?: Allergy[],
		public allergic?: {
			susceptibleTo: number,
			susceptible: string
		},
		public warn?: boolean
	){}
}