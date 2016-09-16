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

var army = [];

const beeArmy = {size: 20}
