var RetiredForagerBee = function() {
	ForagerBee.call(this, this.treasureChest);
	this.age = 40;
	this.job = "gamble";
	this.canFly = false;
	this.color = "grey";
	this.treasureChest = this.treasureChest;


};

RetiredForagerBee.prototype = Object.create(Grub.prototype);
RetiredForagerBee..prototype.constructor = RetiredForagerBee;

RetiredForagerBee.prototype.forage = function(){
	return "I am too old, let me play cards instead";
}

RetiredForagerBee.prototype.gamble = function(treasure){
	this.treasureChest.push(treasure);	
}