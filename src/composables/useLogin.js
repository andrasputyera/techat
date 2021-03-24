import { ref } from "@vue/reactivity"
import { projectAuth } from "@/firebase/config"

const error = ref(null)

const login = async (email, password) => {
    error.value = null

    try {
        const response = await projectAuth.signInWithEmailAndPassword(email, password)
        console.log(response)
        return response
  
      } catch(err) {
          console.log(err.message)
          error.value = 'Incorrect login credentials'
      }

}

const useLogin = () => {
    return { error, login }
}

export default useLogin