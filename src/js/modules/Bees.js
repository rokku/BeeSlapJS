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
		var i;
		var battleground = document.createElement('ul');
		army.forEach(function ({name,type,health}) {

			battleground.innerHTML += `<li id="${name}">${type}<br/>${health}</li>`

		});

		document.body.appendChild(battleground);
	}

	hit(id,soldier,health) {

		army[soldier].health = army[soldier].health-army[soldier].damage;

		var j = document.getElementById(id);
		j.innerHTML = `${army[soldier].type}<br/>${army[soldier].health}`

	}

	prepareForBattle() {
	    var weapon = document.getElementById('attack');
	    weapon.addEventListener('click', e => { 

	    	var randomBeeKey = Math.floor(Math.random() * army.length);
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