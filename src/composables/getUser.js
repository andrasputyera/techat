import { ref } from "@vue/reactivity"
import { projectAuth } from "@/firebase/config"

const user = ref(projectAuth.currentUser)

// _user is the object we get back every time there is an authentication change
// When logged out, _user will be null
projectAuth.onAuthStateChanged(_user => {
    console.log('User state change. Current user is: ', _user )
    user.value = _user
})

const getUser = () => {
    return { user }
}

export default getUser