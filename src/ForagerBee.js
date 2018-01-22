var ForagerBee = function() {
	Bee.call(this);
	this.age = 10;
	this.job = "find pollen";
	this.color = this.color;
	this.food = this.food;
	this.canFly = true;
	this.treasureChest = [];
};

ForagerBee.prototype = Object.create(Grub.prototype);

ForagerBee.prototype.forage = function(treasure){
	this.treasureChest.push(treasure);
}

ForagerBee.prototype.constructor = ForagerBee;