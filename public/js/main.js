// document.addEventListener('DOMContentLoaded', function() {
//     // // 🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥
//     // // The Firebase SDK is initialized and available here!
//     //
//     // firebase.auth().onAuthStateChanged(user => { });
//     // firebase.database().ref('/path/to/ref').on('value', snapshot => { });
//     // firebase.messaging().requestPermission().then(() => { });
//     // firebase.storage().ref('/path/to/ref').getDownloadURL().then(() => { });
//     //
//     // // 🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥

//     try {
//         let app = firebase.app();
//         let features = ['auth', 'database', 'messaging', 'storage'].filter(feature => typeof app[feature] === 'function');
//         document.getElementById('load').innerHTML = `Firebase SDK loaded with ${features.join(', ')}`;
//     } catch (e) {
//         console.error(e);
//         document.getElementById('load').innerHTML = 'Error loading the Firebase SDK, check the console.';
//     }
// });



//Menu overlay

var indicator = document.querySelector(".carousel-indicators");

function openNav() {
    document.querySelector("#myNav").style.width = "100%";
    indicator.style.visibility = "hidden";
}

function closeNav() {
    document.querySelector("#myNav").style.width = "0%";
    indicator.style.visibility = "visible";

}

//Upcoming Events Cards

$.getJSON("js/games.json", function(json) {

	var template = "";

    $.each(json, function(key, game) {

    var today = new Date();
    var gameDate = new Date(game.date);

	if (today < gameDate) {
    	template += `

		<div class="games">
			<div class="card-row">
			   <div class="card-info--left">
			  		<img id="icon-calendar" src="./img/calendar-icon.png">
			  		<div class="card-day card-text"> ${game.day} </div>
			  	</div>
			  	<div class="card-info--right">
			  		<div class="card-time card-text"> ${game.time} </div>
				</div>
			</div>
			<div class="card-row card-row--middle">
				<div class="card-team"> ${game.team1} </div>
				<div class="card-text"> vs. </div>
				<div class="card-team"> ${game.team2} </div>
			</div>
			<div class="card-row">
				 <div class="card-info--left">
			  		<img id="icon-pin" src="./img/pin-icon.png">
			  		<div class="card-location card-text card-text--small"> ${game.location} </div>
			  	</div>
			  	<div class="card-info--right">
			  		<a class="link--moreinfo" href="http://google.com"> <div class="card-moreinfo card-text--moreinfo"> MORE INFO </div></a>
				</div>
			</div>
		</div>

    	`;

    }

    });
    $(".events").html(template);

});