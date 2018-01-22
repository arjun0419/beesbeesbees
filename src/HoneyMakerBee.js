var HoneyMakerBee = function() {
	Bee.call(this, this.color);
	this.age = 10;
	this.job = "make honey";
	this.color = this.color;
	this.honeyPot = 0;



};

HoneyMakerBee.prototype = Object.create(Bee.prototype);

HoneyMakerBee.prototype.makeHoney = function(){
	this.honeyPot++;
};

HoneyMakerBee.prototype.giveHoney = function(){
	this.honeyPot--;
};

HoneyMakerBee.prototype.constructor = HoneyMakerBee;