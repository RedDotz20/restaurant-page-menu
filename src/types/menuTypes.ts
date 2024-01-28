type BreakfastItem = 'Base' | 'Egg Toast' | 'Pancakes';
type DrinksItem = 'Choco Smoothie' | 'Mango Shake' | 'Strawberry Milkshake';
type LunchItem = 'Burger' | 'Chicken' | 'Spaghetti';
type SidesItem = 'Chicken Tenders' | 'Fish and Chips' | 'Fries';

// export interface MenuInterface {
// 	breakfast: BreakfastItem[];
// 	drinks: DrinksItem[];
// 	lunch: LunchItem[];
// 	sides: SidesItem[];
// }

interface MenuItem {
	name: string;
	image: string;
	description: string;
}

interface MenuCategory {
	[key: string]: MenuItem[];
}

export interface MenuInterface {
	breakfast: MenuItem[];
	drinks: MenuItem[];
	lunch: MenuItem[];
	sides: MenuItem[];
}

export type displayMenuListType = keyof MenuInterface | 'All';
