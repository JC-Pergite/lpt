import { InMemoryDbService } from 'angular-in-memory-web-api';

export class MenuDataService implements InMemoryDbService {
	createDb() {
		let menus = [
			{id: 0, mealType: 'lunch', dishes: [{id: 0, name: 'Le Duck Desu', description: "Wood-fired duck with taro & cod milt soup, wilted winter spinach, spruce oil", photoUrl: "https://pocket-concierge.jp/blog_en/wp-content/uploads/2016/10/%E3%83%AC%E3%83%95%E3%82%A7%E3%83%AB-1.jpg", allergens: ['eggs'], allergic: [{susceptibleTo: '', susceptible: false}] }]},
			{id: 1, mealType: 'dinner', dishes: [ { id: 0, name: 'Amaimono', description: "Botan-ebi, black truffle, brandade / grapefruit and saké", photoUrl: "https://www.tokyoweekender.com/wp-content/uploads/2010/10/DSC_0142.jpg", allergens: ['shellfish'], allergic: [{susceptibleTo: '', susceptible: false}]}]}			
		];
		return { menus };
	}
}