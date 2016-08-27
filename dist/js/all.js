(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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

},{}]},{},[1])


//# sourceMappingURL=map/all.js.map
