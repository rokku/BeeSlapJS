class Worker extends Bee {

	constructor(amount,army) {
		super();
		this.health = 75; // This doesn't change for each new Queen bee
		this.amount = amount;
		this.army = army;
		this.type = 'worker';
	}


}

var workers = new Worker(7,army);

workers.create();