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

export {firebase, database as default};




// database.ref('expenses').on('child_removed', snapshot => {
//     console.log(snapshot.key, snapshot.val());
// });
//
// database.ref('expenses').on('child_changed', snapshot => {
//     console.log(snapshot.key, snapshot.val());
// });
//
// database.ref('expenses').on('child_added', snapshot => {
//     console.log(snapshot.key, snapshot.val());
// });

// database.ref('expenses')
//     .once('value')
//     .then(snapshot => {
//         const expenses = [];
//
//         snapshot.forEach(childSnapshot => {
//             expenses.push({
//                 id: childSnapshot.key,
//                 ...childSnapshot.val()
//             });
//         });
//
//         console.log(expenses);
//     });

// database.ref('expenses').on('value', snapshot => {
//     const expenses = [];
//
//     snapshot.forEach(childSnapshot => {
//         expenses.push({
//             id: childSnapshot.key,
//             ...childSnapshot.val()
//         });
//     });
//
//     console.log(expenses);
// });

// database.ref('expenses').push({
//     description: 'Credit Card',
//     note: '',
//     amount: 4500,
//     createdAt: -54465168
// });





// database.ref('notes/-L-LJc4Lv9A_0ggLHePE').remove();

// database.ref('notes').push({
//     title: 'Course Topics',
//     body: 'React Native, Angular, Python'
// });

// database.ref().on('value', snapshot => {
//     const val = snapshot.val();
//     const message = `${val.name} is a ${val.job.title} at ${val.job.company}.`;
//     console.log(message);
// });
//
// database.ref().update({
//     name: 'Mike'
// });

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