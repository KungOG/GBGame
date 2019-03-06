import firebase from 'firebase';	

var config = {	
   apiKey: "AIzaSyBf9MzDQKRSB5a19G6q_hIpuu60ziK44w4",	
   authDomain: "vue-quiz-game.firebaseapp.com",	
   databaseURL: "https://vue-quiz-game.firebaseio.com",	
   projectId: "vue-quiz-game",	
   storageBucket: "vue-quiz-game.appspot.com",	
   messagingSenderId: "998075908332"	
};	

const fb = firebase.initializeApp(config);	
const db = firebase.database();	

export {db, fb}