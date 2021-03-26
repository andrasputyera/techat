import { ref } from "@vue/reactivity"
import { projectFirestore } from "@/firebase/config"

const useCollection = (collection) => {
    const error = ref(null)

    // Needs to accept the document as a parameter from the newChatForm (chat)
    const addDoc = async (doc) => {
        error.value = null
        
        try {
            await projectFirestore.collection(collection).add(doc)
        
        } catch(err) {
            console.log(err.message)
            error.value = 'Could not send the message'
        }
    }

    return {error, addDoc }
}

export default useCollection