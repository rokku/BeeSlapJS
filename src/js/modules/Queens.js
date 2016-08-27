class Queen extends Bee {

	constructor(amount,army) {
		super();
		this.health = 100; // This doesn't change for each new Queen bee
		this.amount = amount;
		this.army = army;
		this.damage = 7;
		this.type = 'queen';
	}

}

var queens = new Queen(3,army);

queens.create();