import { InMemoryDbService } from 'angular-in-memory-web-api';

export class MenuDataService implements InMemoryDbService {
	createDb() {
		let menu = [
		];
		return { menu };
	}
}