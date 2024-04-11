export default Ship {
	constructor (length){
		this.#length = length;
		this.#hits = 0;
	}
	
	get length(){
		return this.#length;
	}

	hit (){
		if (this.isSunk()) return;
		this.#hits++
		return this.#hits;
	}

	isSunk() {
		if (this.length === this.#hits) return true;
		else return false;
	}
	
}
