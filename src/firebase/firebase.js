import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyBxIzReT-u4IeJhy4quE_WhB4bjcW2YP2c",
    authDomain: "expensify-7fc29.firebaseapp.com",
    databaseURL: "https://expensify-7fc29.firebaseio.com",
    projectId: "expensify-7fc29",
    storageBucket: "expensify-7fc29.appspot.com",
    messagingSenderId: "574685234631"
};

firebase.initializeApp(config);

const database = firebase.database();

database.ref().on('value', snapshot => {
    const val = snapshot.val();
    const message = `${val.name} is a ${val.job.title} at ${val.job.company}.`;
    console.log(message);
});

database.ref().update({
    name: 'Mike'
});

// database.ref('location/city')
//     .once('value')
//     .then(snapshot => {
//         const val = snapshot.val();
//
//         console.log(val);
//     })
//     .catch(e => {
//         console.log('Error fetching data', e);
//     });

// database.ref().set({
//     name: 'Dmitriy Kulik',
//     age: 32,
//     stressLevel: 6,
//     job: {
//         title: 'Frontend developer',
//         company: 'Google'
//     },
//     location:{
//         city: 'Kiev',
//         country: 'Ukraine'
//     }
// }).then(() => {
//     console.log('Data is saved!');
// }).catch(e => {
//     console.log('This failed.', e);
// });

// database.ref().update({
//     stressLevel: 9,
//     'job/company': 'Amazon',
//     'location/city': 'Seattle'
// });

// database.ref()
//     .remove()
//     .then(() => {
//         console.log('Data was removed');
//     })
//     .catch(e => {
//         console.log('Data wasn\'t removed. ', e);
//     });