let assert = require('assert');

module.exports = class Card
{
	constructor(card_type, first_name, last_name, cardnr, verification_value, month, year, email)
	{
       this.card_type = card_type;
       this.first_name = first_name;
       this.last_name = last_name;
       this.cardnr = cardnr;
       this.verification_value = verification_value;
       this.month = month;
       this.year = year;
       this.email = email;
	}
}


    