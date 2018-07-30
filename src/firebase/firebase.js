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

export { firebase, database as default };

// // child_removed
// database.ref('expenses').on('child_removed', (snapchot) => {
//     console.log(snapchot.key, snapchot.val());
// });

// // child_changed
// database.ref('expenses').on('child_changed', (snapchot) => {
//      console.log(snapchot.key, snapchot.val());
// });

// // child_added
// database.ref('expenses').on('child_added', (snapchot) => {
//      console.log(snapchot.key, snapchot.val());
// });

// // database.ref('expenses')
// //     .once('value')
// //     .then((snapchot) => {
// //        const expenses = [];
// //        snapchot.forEach((childSnapchot) => {
// //            expenses.push({
// //                id: childSnapchot.key,
// //                ...childSnapchot.val()
// //            });
// //        });
// //         console.log(expenses);
// //     });

// // database.ref('expenses').on('value', (snapchot) => {
// //     const expenses = [];

// //     snapchot.forEach((childSnapchot) => {
// //            expenses.push({
// //                id: childSnapchot.key,
// //                ...childSnapchot.val()
// //            });
// //        });
// //         console.log(expenses);
// // });

// database.ref('expenses').push({
//     description: 'Rent',
//     note: '',
//     amount: 109500,
//     createdAt: 4310843854134
// });




// // database.ref('notes/-LIVPgnEfPmdfDstchd').remove();

// //  database.ref('notes').push({
// //     title: 'Silk Full Course',
// //     body: 'Javascript, Reactjs , Nodejs'
// // });


// // database.ref().on('value', (snapchot) => {
// //     const val = snapchot.val();
// //     console.log(`${val.name} is a ${val.job.title} at ${val.job.company}`);
// // })

// // Setup data sub => Quang is a Software Developer at Fusai

// // Change the data and make sure it repirints

// // database.ref('location/city')
// //     .once('value')
// //     .then((snapchot) => {
// //       const val = snapchot.val();
// //       console.log(val);
// //     })
// //     .catch((e) => {
// //         console.log('Error fetching data', e);
// //     })

// // database.ref().set({
// //     name: 'quang nguyen dang',
// //     age: 21,
// //     stressLevel: 1,
// //     job: {
// //         title : 'Software developer',
// //         company: 'CGT'
// //     }, 
// //     location: {
// //         city: 'Hanoi',
// //         country: 'VietNam'
// //     }
// // }).then(() => {
// //     console.log('Data is saved');
// // }).catch((e) => {
// //     console.log('This failed', e);
// // });

// // database.ref().update({
// //    stressLevel: 7, 
// //    'job/company': 'Fusai',
// //    'location/city' : 'Hochiminh'
// // });

// // database.ref()
// //     .remove()
// //     .then(() => {
// //         console.log('Data was removed');
// //     }).catch((e) => {
// //         consoe.log('Did not remove data', e);
// //     });