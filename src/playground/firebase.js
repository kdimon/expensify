import * as firebase from 'firebase';

const config = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
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