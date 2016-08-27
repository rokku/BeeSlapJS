class Bee {

	create() {
		for (var i = 0; i <= this.amount-1; i++) {
			this.army.push(this.BuildSoldier(i));
		}
		return this.army;
	}	

	BuildSoldier(i) {
		var soldier = {
			name: `${this.type}${i}`,
			type: this.type,
			health: this.health
		}
		return soldier;
	}

	fillBattleground() {
		var i;
		var battleground = document.createElement('ul');
		army.forEach(function ({name,type,health}) {

			battleground.innerHTML += `<li id="${name}">${type}<br/>${health}</li>`

		});

		document.body.appendChild(battleground);
	}

}