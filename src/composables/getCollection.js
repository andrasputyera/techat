import { ref } from "@vue/reactivity"
import { projectFirestore } from "@/firebase/config"
import { watchEffect } from "@vue/runtime-core"

const getCollection = (collection) => {
    // Need to declare these here because they relate to one specific collection
    const documents = ref(null)
    const error = ref(null)

    let collectionRef = projectFirestore.collection(collection)
      .orderBy('createdAt')

    // Takes a snapshot of the current collention  
    const unsubscribe = collectionRef.onSnapshot((snap) => {
        let results = []
        snap.docs.forEach(doc => {
            
            // We need to add this to get a version of the snap that is located inside the server
            doc.data().createdAt && results.push({ ...doc.data(), id: doc.id })
        })
        // Updates the value of the document with the most recent snapshot
        documents.value = results
        error.value = null

    }, (err) => {
        console.log(err.message)
        documents.value = null
        error.value = 'Could not fetch data'
    })

    // The onInvalidate function runs when the component unmounts (when user logs out)
    watchEffect((onInvalidate) => {
        // Unsubscribe from previous collection when watcher is stopped (component has unmounted)
        onInvalidate(() => unsubscribe())
    })

    return { documents, error }
}

export default getCollection