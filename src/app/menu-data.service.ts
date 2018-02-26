import { InMemoryDbService } from 'angular-in-memory-web-api';

export class MenuDataService implements InMemoryDbService {
	createDb() {
		let menus = [
			{id: 0, name: 'Le Duck Desu', description: "Wood-fired duck with taro & cod milt soup, wilted winter spinach, spruce oil", allergens: ['eggs'], allergic: [{susceptibleTo: '', susceptible: false}]},
			{id: 1, name: 'Amaimono', description: "Botan-ebi, black truffle, brandade / grapefruit and saké", allergens: ['shellfish'], allergic: [{susceptibleTo: '', susceptible: false}]}			
		];
		return { menus };
	}
}