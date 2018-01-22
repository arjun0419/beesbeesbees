var Bee = function(eat) {
	Grub.call(this, this.color);
	this.age = 5;
	this.color = "yellow";
	this.food = this.food;
	this.job = "keep on growing"
};

Bee.prototype = Object.create(Grub.prototype);
Bee.prototype.constructor = Bee;