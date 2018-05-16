let assert = require('assert');

module.exports = class Card
{
	constructor(first_name, last_name, cardnr, verification_value)
	{     
       this.first_name = first_name;
       this.last_name = last_name;
       this.cardnr = cardnr;
       this.verification_value = verification_value;
	}
}


    