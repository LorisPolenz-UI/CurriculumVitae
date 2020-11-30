var firebaseConfig = {
    apiKey: "AIzaSyC9OycPRUBfP6B4brqjnS7vV6nTNSs4I0g",
    authDomain: "projektbewerbungsc.firebaseapp.com",
    databaseURL: "https://projektbewerbungsc.firebaseio.com",
    storageBucket: "projektbewerbungsc.appspot.com"
};
firebase.initializeApp(firebaseConfig);

// Get a reference to the storage service, which is used to create references in your storage bucket
var storage = firebase.storage();

// Create a reference from a Google Cloud Storage URI
var gsReference = storage.refFromURL('gs://projektbewerbungsc.appspot.com/');


// Create a reference under which you want to list
var listRef = gsReference.child('/');


const queryString = window.location.search.replace('?', '');

// Find all the prefixes and items.
listRef.listAll()
    .then(function (res) {
        for (var i = 0; i < res._delegate.items.length; i++) {
            var out = res._delegate.items[i]._location.path_;
            if(out == queryString) {
                console.log("The file you have searched for does exist!")
            }   
        }
    })
    .catch(function (error) {
        console.error(error);
    });


    //TODO: Make file available to download

