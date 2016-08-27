class Drone extends Bee {

	constructor(amount,army) {
		super();
		this.health = 50; // This doesn't change for each new Queen bee
		this.amount = amount;
		this.army = army;
		this.type = 'drone';
	}


}

var drones = new Drone(10,army);

drones.create();