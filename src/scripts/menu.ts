import { MenuInterface, displayMenuListType } from '../types/menuTypes';

const menuList = document.querySelector('#menu-list');

// export const menu: MenuInterface = {
// 	breakfast: ['Base', 'Egg Toast', 'Pancakes'],
// 	drinks: ['Choco Smoothie', 'Mango Shake', 'Strawberry Milkshake'],
// 	lunch: ['Burger', 'Chicken', 'Spaghetti'],
// 	sides: ['Chicken Tenders', 'Fish and Chips', 'Fries'],
// };

export const menu: any = {
	breakfast: [
		{
			name: 'Base',
			image: 'assets/breakfast-base.jpg',
			description: 'lorem',
		},
		{
			name: 'Egg Toast',
			image: 'assets/breakfast-egg_toast.jpg',
			description: 'lorem',
		},
		{
			name: 'Pancakes',
			image: 'assets/breakfast-pancakes.jpg',
			description: 'lorem',
		},
	],
	drinks: [
		{
			name: 'Choco Smoothie',
			image: 'assets/drinks-choco_smoothie.jpg',
			description: 'lorem',
		},
		{
			name: 'Mango Shake',
			image: 'assets/drinks-mango-shake.jpg',
			description: 'lorem',
		},
		{
			name: 'Strawberry Milkshake',
			image: 'assets/drinks-strawberry_milkshake.jpg',
			description: 'lorem',
		},
	],
	lunch: [
		{
			name: 'Burger',
			image: 'assets/meal-burger.jpg',
			description: 'lorem',
		},
		{
			name: 'Chicken',
			image: 'assets/meal-chicken.jpg',
			description: 'lorem',
		},
		{
			name: 'Spaghetti',
			image: 'assets/meal-spaghetti.jpg',
			description: 'lorem',
		},
	],
	sides: [
		{
			name: 'Chicken Tenders',
			image: 'assets/sides-chicken_tenders.jpg',
			description: 'lorem',
		},
		{
			name: 'Fish and Chips',
			image: 'assets/sides-fish_and_chips.jpg',
			description: 'lorem',
		},
		{ name: 'Fries', image: 'assets/sides-fries.jpg', description: 'lorem' },
	],
};

export function createMenu(title: string, image: string, description: string) {
	if (menuList) {
		const menuContainer = document.createElement('div');
		menuList.appendChild(menuContainer);

		const imageContainer = document.createElement('div');
		const imageElement = document.createElement('img');
		imageElement.src = image;
		// imageElement.classList.add('w-[100px]');

		const newWidth = 150;
		const newHeight =
			(imageElement.naturalHeight / imageElement.naturalWidth) * newWidth;

		imageElement.width = newWidth;
		imageElement.height = newHeight;
		menuContainer.appendChild(imageElement);

		const detailsContainer = document.createElement('div');
		menuContainer.appendChild(detailsContainer);

		const heading = document.createElement('h1');
		const titleNode = document.createTextNode(title);
		heading.appendChild(titleNode);
		detailsContainer.appendChild(heading);

		const paragraph = document.createElement('p');
		const paragraphNode = document.createTextNode(description);
		paragraph.appendChild(paragraphNode);
		detailsContainer.appendChild(paragraph);
	}
}

// export function createMenu(title: string, image: string, description: string) {
// 	if (menuList) {
// 		const menuContainer = document.createElement('div');
// 		menuList.appendChild(menuContainer);

// 		const imageElement = document.createElement('img');
// 		imageElement.src = image;
// 		imageElement.width = 200;
// 		imageElement.height = 150;
// 		menuContainer.appendChild(imageElement);

// 		const detailsContainer = document.createElement('div');
// 		menuContainer.appendChild(detailsContainer);

// 		const heading = document.createElement('h1');
// 		const titleNode = document.createTextNode(title);
// 		heading.appendChild(titleNode);
// 		detailsContainer.appendChild(heading);

// 		const paragraph = document.createElement('p');
// 		const paragraphNode = document.createTextNode(description);
// 		paragraph.appendChild(paragraphNode);
// 		detailsContainer.appendChild(paragraph);
// 	}
// }

export function displayMenuList(selectedMenu: displayMenuListType = 'All') {
	if (!menuList) return;

	menuList.innerHTML = '';

	const renderItems =
		selectedMenu !== 'All' ? menu[selectedMenu] : Object.values(menu).flat();

	renderItems.forEach((item: any) => {
		createMenu(item.name, item.image, item.description);
	});

	// if (selectedMenu !== 'All') {
	// 	const renderMenu = menu[selectedMenu];
	// 	const items = renderMenu.map((item: any) => {
	// 		console.log(item.image);
	// 		createMenu(item.name, item.image, item.description);
	// 	});
	// } else {
	// 	Object.entries(menu).forEach(([_category, items]) => {
	// 		(items as any[]).forEach((item) => {
	// 			createMenu(item.name, item.image, item.description);
	// 		});
	// 	});
	// }
}
