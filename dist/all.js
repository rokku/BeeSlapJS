'use strict';

/* BeeSlapJS

Army
Combat
Score

We have 3 types of bees. Queens, workers and drones.

Queens have 100 health.  An attack on them causes 7 damage.
Workers have 75 health. An attack on them causes 12 damage.
Drones have 50 health. An attack on them causes 15 damage.

If all the queens die, then any remaining bees are automatically killed.

We have to be able to roll an attack, have it pick a random bee, cause the
appropriate amount of damage, and show which bee was damaged (and its new health).

*/

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var army = [];

var Bee = function () {
	function Bee() {
		_classCallCheck(this, Bee);
	}

	_createClass(Bee, [{
		key: 'create',
		value: function create() {
			for (var i = 0; i <= this.amount - 1; i++) {
				this.army.push(this.BuildSoldier(i));
			}
			return this.army;
		}
	}, {
		key: 'BuildSoldier',
		value: function BuildSoldier(i) {
			var soldier = {
				name: '' + this.type + i,
				type: this.type,
				health: this.health
			};
			return soldier;
		}
	}, {
		key: 'fillBattleground',
		value: function fillBattleground() {
			var i;
			var battleground = document.createElement('ul');
			army.forEach(function (_ref) {
				var name = _ref.name;
				var type = _ref.type;
				var health = _ref.health;


				battleground.innerHTML += '<li id="' + name + '">' + type + '<br/>' + health + '</li>';
			});

			document.body.appendChild(battleground);
		}
	}]);

	return Bee;
}();

var Drone = function (_Bee) {
	_inherits(Drone, _Bee);

	function Drone(amount, army) {
		_classCallCheck(this, Drone);

		var _this = _possibleConstructorReturn(this, (Drone.__proto__ || Object.getPrototypeOf(Drone)).call(this));

		_this.health = 50; // This doesn't change for each new Queen bee
		_this.amount = amount;
		_this.army = army;
		_this.type = 'drone';
		return _this;
	}

	return Drone;
}(Bee);

var drones = new Drone(10, army);

drones.create();

var Queen = function (_Bee2) {
	_inherits(Queen, _Bee2);

	function Queen(amount, army) {
		_classCallCheck(this, Queen);

		var _this2 = _possibleConstructorReturn(this, (Queen.__proto__ || Object.getPrototypeOf(Queen)).call(this));

		_this2.health = 100; // This doesn't change for each new Queen bee
		_this2.amount = amount;
		_this2.army = army;
		_this2.type = 'queen';
		return _this2;
	}

	return Queen;
}(Bee);

var queens = new Queen(3, army);

queens.create();

var Worker = function (_Bee3) {
	_inherits(Worker, _Bee3);

	function Worker(amount, army) {
		_classCallCheck(this, Worker);

		var _this3 = _possibleConstructorReturn(this, (Worker.__proto__ || Object.getPrototypeOf(Worker)).call(this));

		_this3.health = 75; // This doesn't change for each new Queen bee
		_this3.amount = amount;
		_this3.army = army;
		_this3.type = 'worker';
		return _this3;
	}

	return Worker;
}(Bee);

var workers = new Worker(7, army);

workers.create();