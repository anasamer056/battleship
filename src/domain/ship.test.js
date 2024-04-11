import Ship from './ship.js'

describe("Ship test", ()=>{
	test("Hit function", ()=>{

		const ship = new Ship(1);
		
		ship.hit();
		
		expect(ship.isSunk()).toBe(True)
	})
})
