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
			
			var index = army.indexOf(army[soldier]);

			beeArmy.size = beeArmy.size - 1; // Reduce the size of the army by 1 (cos dead bee)

			j.innerHTML = `${army[soldier].type}<br/>${army[soldier].health}`
			j.classList.toggle('dead'); // show it as dead (RIP)


			//now remove it from `army` so it stops being counted
			if (index > -1) {
			    army.splice(index, 1);
			}

			if(beeArmy.size === 0) {
				alert('Game over!');
			}

		}

		else {

			j.innerHTML = `${army[soldier].type}<br/>${army[soldier].health}`;
			

		}
		

	}

	pickABee() {
		var thisKey = Math.floor(Math.random() * beeArmy.size);
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