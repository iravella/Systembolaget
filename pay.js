$(document).ready(function() {
	console.log("ready");


	let first = false;
	let last = false;
	let cardn = false;
	let cvcn= false;


	$("#pay").click(function(){
		 let fName = $("#firstName").val();
		 let lName = $("#lastName").val();
		 let cNumber = $("#cardNumber").val();
		 let verNumber = $("#verificationNumber").val();


	 if(!isNaN(fName)|| fName === ""){
			$("#Fwarning").remove("#Fwarning");
	 		$(".firstNm").append("<p id='Fwarning'> Ditt namn innehåller ej giltiga krusiduller</p>");
	 		first = false;
		} else {
			$("#Fwarning").remove("#Fwarning");
			first = true;
			
		}

	 if(!isNaN(lName)|| lName === ""){
			$("#Lwarning").remove("#Lwarning");
	 		$(".lastNm").append("<p id='Lwarning'> Ditt Efternamn innehåller ej giltiga krusiduller</p>");
	 		last = false;
		} else {
			$("#Lwarning").remove("#Lwarning");
			last = true;
		}

	  if(isNaN(cNumber)|| cNumber === "" || cNumber.length != 16){
			$("#Cardwarning").remove("#Cardwarning");
	 		$(".cardNb").append("<p id='Cardwarning'> Var vänlig att kolla på ditt kort en gång till måste vara 16 nummer</p>");
	 		cardn = false;
		} else {
			$("#Cardwarning").remove("#Cardwarning");
			cardn = true;
		}

	  if(isNaN(verNumber)|| verNumber === "" || verNumber.length != 3){
			$("#verwarning").remove("#verwarning");
	 		$(".cvc").append("<p id='verwarning'> Kolla på baksidan av ditt kort på Cvc måste vara 3 nummer</p>");
	 		cvcn = false;
		} else {
			$("#verwarning").remove("#verwarning");
			cvcn = true;
		}


		if(first == true && last == true && cardn == true && cvcn == true){
		 alert("Tack för att du handla hos oss! Din order är påväg.");
		 // to remove all items
		 //ShoppingCart.removeAllItems();
		 //document.location.href = "https://www.youtube.com/watch?v=lXMskKTw3Bc";
		 ShopCart.RemoveAll(); 
		 document.location.href = "http://localhost:3000/index.html";
		}
	});


 });
 















// module.exports =class Pay{
// 	constructor(){
// 		this.payment();
// 	}
// 	payment(){
// 		$(document).ready(function(){
// 			$("#pay").click(function(){
//  				alert("Thank you for your order!");
// 			});
// 		});
// 	}
// }	









	// $(".firstNm").append("<p id='warning'> Your name is wrong try to retype</p>")