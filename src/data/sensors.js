import firebase from 'firebase';

export class Sensors {
    
    initializateDatabase(){
        const firebaseConfig = {
            apiKey: "AIzaSyBpgq6Pj4vGbKqF_HxMQhw44yD-nLXOJro",
            authDomain: "aipim-climate-tracker.firebaseapp.com",
            databaseURL: "https://aipim-climate-tracker-default-rtdb.firebaseio.com/",
            storageBucket: "aipim-climate-tracker.appspot.com",
        }

        if (!firebase.apps.length) {
            firebase.initializeApp(firebaseConfig);
         }else {
            firebase.app(); 
         }
         
    }

    getRealtimeDatabase(){
        this.initializateDatabase()

        var database = firebase.database().ref();


        return  database;
    }
    
}