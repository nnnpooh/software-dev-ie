const db = firebase.firestore();
db.settings({ timestampsInSnapshots: true });

/* db.collection("contacts")
  .get()
  .then((snapshot) => {
    snapshot.docs.forEach((doc) => {
      console.log(doc.data());
    });
  }); */

/* db.collection("contacts").add({
    name: "Nirand",
    age: 40,
    email: "nirand@email.com",
}); */

/* db.collection("contacts")
  .get()
  .then((snapshot) => {
    console.log(snapshot.docs[0].id);
  }); */

/* id = "cFE7QB9qlB5sruQTLalq";
db.collection("contacts").doc(id).delete(); */

/* db.collection("contacts")
  .orderBy("name")
  .onSnapshot((snapshot) => {
    console.log(snapshot.docChanges()[0].type);
    console.log(snapshot.docChanges()[0].doc.data());
  }); */

const app = Vue.createApp({
  data() {
    return {
      contacts: [],
      name: "Nirand Pisutha-Arnond",
      age: "30",
      email: "nirand.p@cmu.ac.th",
    };
  },
  mounted() {
    db.collection("contacts")
      .orderBy("name")
      .onSnapshot((snapshot) => {
        let changes = snapshot.docChanges();
        changes.forEach((change) => {
          //console.log(change.type);
          //console.log(change.doc.data());
          if (change.type === "added") {
            let a = change.doc.data();
            a.id = change.doc.id;
            this.contacts.push(a);
          } else if (change.type === "removed") {
            this.contacts = this.contacts.filter((el) => {
              return el.id !== change.doc.id ? true : false;
            });
          }
        });
      });

    /*  db.collection("contacts")
      .orderBy("name")
      .get()
      .then((snapshot) => {
        snapshot.docs.forEach((doc) => {
          let a = doc.data();
          a.id = doc.id;
          this.contacts.push(a);
        });
      }); */
  },
  methods: {
    addContact() {
      db.collection("contacts").add({
        name: this.name,
        age: this.age,
        email: this.email,
      });
    },
    deleteContact(id) {
      db.collection("contacts").doc(id).delete();
    },
  },
});

app.mount("#App");
