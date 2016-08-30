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
			health: this.health,
			damage: this.damage
		}
		return soldier;
	}

	fillBattleground() {

		var battleground = document.createElement('ul');
		army.forEach(function ({name,type,health}) {

			battleground.innerHTML += `<li id="${name}">${type}<br/>${health}</li>`

		});

		document.body.appendChild(battleground);

	}

	hit(id,soldier,health) {

		army[soldier].health = army[soldier].health-army[soldier].damage;

		var j = document.getElementById(id);

		if(army[soldier].health <= 0) { 

			army[soldier].health=0; // set its health to zero

			j.innerHTML = `${army[soldier].type}<br/>${army[soldier].health}`
			j.classList.toggle('dead'); // show it as dead (RIP)


			//now remove it from `army` so it stops being counted
			while (army.indexOf(army[soldier].name) !== -1) {
				army.splice(army.indexOf(army[soldier].name), 1);
			}

		}

		else {

			j.innerHTML = `${army[soldier].type}<br/>${army[soldier].health}`;
			

		}
		

	}

	pickABee() {
		var thisKey = Math.floor(Math.random() * army.length);
		return thisKey;
	}

	prepareForBattle() {

	    var weapon = document.getElementById('attack');
	    weapon.addEventListener('click', e => { 

	    	var randomBeeKey = this.pickABee();
	        var randomBee = army[randomBeeKey];

        	if(randomBee.health > 0) {

	        	this.hit(randomBee.name,randomBeeKey,randomBee.health);

	        	var j = document.getElementById(randomBee.name);

	        	j.classList.toggle('hit');

	        	setTimeout(() => {
	        		j.classList.toggle('hit');
	        	}, 500);

        	}

        	else {

        		this.prepareForBattle();

        	}

	    });
	}

}