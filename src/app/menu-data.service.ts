import { InMemoryDbService } from 'angular-in-memory-web-api';

export class MenuDataService implements InMemoryDbService {
	createDb() {
		let menus = [
			{id: 0, mealType: 'lunch', dishes: [
													{id: 0, name: 'Amaimono Crevette', description: "Botan-ebi, black truffle, brandade / grapefruit and saké", photoUrl: "https://i.pinimg.com/736x/95/74/4e/95744e81812f3a3fb7251f0d38493c4e--langoustine-truffles-recipe.jpg", allergens: ['shellfish'], allergic: [{susceptibleTo: [], susceptible: false}]},
													{id: 1, name: 'Rendevouz', description: "Nodoguro & Japanese green olive tartar, charlock blossom, olive oil", photoUrl: "https://media-cdn.tripadvisor.com/media/photo-s/0e/39/87/fc/mackerel-with-tartar.jpg", allergens: ['fish'], allergic: [{susceptibleTo: [], susceptible: false}] },
													{id: 2, name: 'Cochon Chausson', description: "Pork pastry served with brocolini, apricot compote, and coarse grain mustard", photoUrl: "https://www.bbcgoodfood.com/sites/default/files/styles/recipe/public/recipe/recipe-image/2016/11/pork-wellington.jpg?itok=6zMopvsI", allergens: ['gluten', 'treenuts', 'eggs', 'milk'], allergic: [{susceptibleTo: [], susceptible: false}] },
													{id: 3, name: 'Fikkusido Pointo', description: "Tokyo turnip slow-cooked for four hours, parsley, Basque ham and brioche", photoUrl: "https://ronomnom.files.wordpress.com/2014/07/img_5527.jpg", allergens: ['gluten', 'eggs', 'milk'], allergic: [{susceptibleTo: [], susceptible: false}] },
													{id: 4, name: 'Cognac et Prawn', description: "Jumbo blue prawns, grilled polenta, cognac reduction", photoUrl: "http://static.foodrhythms.net/images/recipes/original/bd193119f8498b276327eace3046b756.jpg", allergens: ['shellfish'], allergic: [{susceptibleTo: [], susceptible: false}] },
													{id: 5, name: 'Scallops au Grenade', description: "Scallops, mussel puree and pomegranate beurre blanc sauce, spring onion", photoUrl: "https://coleycooks.com/wp-content/uploads/2014/12/IMG_15981.jpg", allergens: ['shellfish', 'milk'], allergic: [{susceptibleTo: [], susceptible: false}] }
											   ]
			},
			{id: 1, mealType: 'dinner', dishes: [ 
													{id: 0, name: 'Le Canard Desu', description: "Wood-fired duck with taro & cod milt soup, wilted winter spinach, spruce oil", photoUrl: "https://imagesvc.timeincapp.com/v3/mm/image?url=http%3A%2F%2Fcdn-image.foodandwine.com%2Fsites%2Fdefault%2Ffiles%2Fstyles%2Fmedium_2x%2Fpublic%2Fpan-roasted-duck-breasts-with-onions-and-crisp-pancetta-xl-r-20003.jpg%3Fitok%3DHzWDmZ9B&w=700&q=85", allergens: ['soy', 'fish'], allergic: [{susceptibleTo: [], susceptible: false}] },
													{id: 1, name: 'Heritage', description: "Tiny chawan-mushi, shibaebi shrimp, Japanese radish, avocado, freshly grated wasabi", photoUrl: "http://www.uniqlo.com/ph/lifetools/recipe/images/jamie/recipe/recipe_02.jpg", allergens: ['shellfish'], allergic: [{susceptibleTo: [], susceptible: false}] },
													{id: 2, name: 'Une Cod Noir', description: "Black cod, saikyo marinade, and miso with homemade hajikame", photoUrl: "http://www.be-gusto.be/wp-content/uploads/2014/08/14821365190_557e30bf64_z.jpg", allergens: ['fish', 'soy'], allergic: [{susceptibleTo: [], susceptible: false}] },
													{id: 3, name: 'Homard Yaki', description: "Fire roasted lobster with shiso-ponzu butter", photoUrl: "https://images.r.cruisecritic.com/features/2016/04/wte-luxury-dining-hero.jpg", allergens: ['shellfish', 'milk'], allergic: [{susceptibleTo: [], susceptible: false}] },
													{id: 4, name: 'Kinoko Kamameshi', description: "Japanese rice hotpot with wild mushrooms and shaved truffle", photoUrl: "https://pbs.twimg.com/media/CMsWDzUVAAAS1H1.jpg", allergens: ['eggs'], allergic: [{susceptibleTo: [], susceptible: false}] },
													{id: 5, name: 'Côtelette d’Agneau', description: "Matcha infused grilled lamb cutlets", photoUrl: "https://gbc-cdn-public-media.azureedge.net/img53736.768x512.jpg", allergens: [''], allergic: [{susceptibleTo: [], susceptible: false}] }
												]
			}			
		];
		return { menus };
	}
}