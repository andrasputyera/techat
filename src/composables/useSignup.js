import { ref } from "@vue/reactivity"
import { projectAuth } from "@/firebase/config"

const error = ref(null)

const signup = async (displayName, email, password) => {
    error.value = null

    try {
      const response = await projectAuth.createUserWithEmailAndPassword(email, password)
      // If the registration fails
      if (!response) {
        throw new Error('Could not complete the registration')
      }
      // username inside firebase is labeled as displayName
      await response.user.updateProfile({ displayName })

      return response

    } catch(err) {
        console.log(err.message)
        error.value = err.message
    }
}

// We don't need to declare the error and signup function inside the useSignup function
const useSignup = () => { 
    // We need to return the error and signup function from above here
    return { error, signup }
}

export default useSignup
