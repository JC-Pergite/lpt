import { Allergy } from './allergy';

export class Reservation {
	constructor(
		public name: string,
		public party: number,
		public date: string,
		public time: string,
		public allergies?: Allergy[]
	){}
}