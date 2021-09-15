const db = app.firestore();
//console.log(db);

// Get Data
const btn1 = document.getElementById('btn1');
btn1.addEventListener('click', clickFn1);
function clickFn1() {
  db.collection('users')
    .get()
    .then((snapshot) => {
      snapshot.docs.forEach((doc) => {
        console.log(doc.data());
      });
    });
}

// Add data
const btn2 = document.getElementById('btn2');
btn2.addEventListener('click', clickFn2);
function clickFn2() {
  data = {
    name: 'Tim',
    age: 25,
    email: 'example@test.com',
  };
  db.collection('users').add(data);
}

// Delete data
const btn3 = document.getElementById('btn3');
btn3.addEventListener('click', clickFn3);
function clickFn3() {
  // Manual Delete
  //id = 'DDF0ieOuvARjSMa44rkA';
  //db.collection('users').doc(id).delete();

  // Query document id from database
  //   db.collection('users')
  //     .get()
  //     .then((snapshot) => {
  //       const docs = snapshot.docs;
  //       docs.forEach((doc) => {
  //         console.log(doc.id);
  //       });
  //     });

  // Delete first document from collections
  db.collection('users')
    .get()
    .then((snapshot) => {
      const docs = snapshot.docs;
      id = docs[0].id;
      db.collection('users').doc(id).delete();
    });
}

// Update data
const btn4 = document.getElementById('btn4');
btn4.addEventListener('click', clickFn4);
function clickFn4() {
  // Update first document in the collection
  db.collection('users')
    .get()
    .then((snapshot) => {
      const docs = snapshot.docs;
      id = docs[0].id;
      db.collection('users').doc(id).update({
        phone: '123454',
      });
    });
}

// Listen to change in database event
db.collection('users').onSnapshot((snapshot) => {
  //console.log(snapshot.docChanges());
  const changes = snapshot.docChanges();
  console.log(changes[0].doc.data());
  console.log(changes[0].doc.id);
  console.log(changes[0].type);
});
