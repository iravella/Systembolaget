class Login {

constructor() {
	this.constructerContinued();
}

constructerContinued () {

    if (!localStorage.LoggedIn) {
        console.log("creating logginbuttons");
        this.LoggedInFalse();
    }

    if (localStorage.LoggedIn == "true") {
        this.FetchingUserHistory();
        this.LoggedInTrue();
        
    }
}


    LoggedInFalse () {
        console.log("inne i Logged in false");
           $('#navbarResponsive').append(

            '<div class="wrapLogin">'+
                '<div class="loginItem1">'+
                    '<form>'+
                        '<input placeholder="login" class="login">' +
                            
                        '</input>'+
                    '</form>'+
                '</div>'+

                '<div class="loginItem2">'+
                    '<form>'+
                        '<input placeholder="password" class="password" type="password">' +
                            
                        '</input>'+
                    '</form>'+
                '</div>'+

                '<div class="loginItem3">'+
                        "Login"+
                '</div>'+
            '</div>'
        );

        $('.loginItem3').on('click', function () {
                let templogindetails = { login: $('.login').val(), password: $('.password').val()/1 }
                $('.login').val("");
                $('.password').val("");
                myApp.login.checkIfSuccesfullLoggedin(templogindetails)
        }); 
    }


    checkIfSuccesfullLoggedin(templogindetails) {
        console.log("inne i check succesful");

                    (async ()=>{
                        let logindetails = await require('./json/logindetails.json');
                    
                        for (let x of logindetails) {
                            if (x.login == templogindetails.login && x.password == templogindetails.password) {
                                localStorage.LoggedIn = true
                                localStorage.accountnumber = x.accountnumber
                                console.log("Login succesful rerunning constructor");
                                myApp.login.constructerContinued();
                                location.reload();
                             }
                         }

                           if (!localStorage.LoggedIn) {
                            await alert("Wrong login or password")
                                return;
                           }

                    })();
    }



    LoggedInTrue() {
        

        if ($('.wrapLogin').length == 0) {
            $('#navbarResponsive').append('<div class="wrapLogin">' + '</div>')
        }   

                $('.loginItem1').remove();
                $('.loginItem2').remove();
                $('.loginItem3').remove();
                $('.wrapLogin').append(
                    '<div class="loggedIn">'+
                    //    "Logged in as: " + myApp.users[0].fullName+         //setting the text in the await sync function to be bale to use localstroage data?
                    '</div>'+

                    '<div class="loginItem3">'+
                            "Logout"+
                    '</div>'
                )

                $('.loggedIn').text(localStorage.namn)

                $('.loginItem3').on('click', function () {                  //CLicking on logout

                    $('.wrapLogin').remove();
                    myApp.users = []
                    localStorage.removeItem('users')
                    localStorage.removeItem('LoggedIn')
                    localStorage.removeItem('namn')
                    localStorage.removeItem('accountnumber')
                    myApp.login.constructerContinued ();
                    location.reload();
                });
      }

      FetchingUserHistory() {  

      
                 (async ()=>{
                		//	let activeuser = await require('./json/usersaccounts.json');

                            let activeuser = await JSON._load('../../json/usersaccounts.json')

                			for (let y of activeuser) {
                				if(y.accountnumber == localStorage.accountnumber) {
                				    console.log("_________");
                				
                                        localStorage.namn = y.fullName
                                        $('.loggedIn').text(localStorage.namn) 
                					    let fullName = y.fullName
                						let dateOfBirth = y.dateOfBirth
               							let addressStreet = y.addressStreet
                						let addressZipCode = y.addressZipCode
               							let addressCity = y.addressCity
                						let accountnumber = y.accountnumber
                                        let tempCart = [];
                                        let tempThingsToBuy = y.shoppingCart.thingsToBuy
           

                                   //     for (let i = 0; i < y.shoppingCart.thingsToBuy.length; i++) {
                                   //          tempCart.push( y.shoppingCart.thingsToBuy[0] )
                                                    
                                   //     }
                                        
                						let active = new Person(fullName, dateOfBirth, addressStreet, addressZipCode, addressCity, accountnumber)
                						myApp.users = []
                                        active.shoppingCart.thingsToBuy = [];
                                        active.shoppingCart.thingsToBuy = tempThingsToBuy
                      

                                  //      for (let i = 0; i < tempCart.length; i++) {
                                  //                 active.shoppingCart.add(tempCart[i])
                                  //      }

                                        myApp.users.push(active)                            //?
                						localStorage.users = JSON.stringify(active)

                				}
                			}
                })();

      
    }

}