<template>
    <form @submit.prevent="handleSubmit">
        <input type="text" placeholder="username" v-model="displayName" required >
        <input type="email" placeholder="email" v-model="email" required >
        <input type="password" placeholder="password" v-model="password" required >
        <div class="error">{{ error }}</div>
        <button>Register</button>
    </form>
</template>

<script>
import { ref } from '@vue/reactivity'
import useSignup from '@/composables/useSignup'

export default {
    setup(props, context) {
        const displayName = ref('')
        const email = ref('')
        const password = ref('')

        const { error, signup } = useSignup()

        const handleSubmit = async () => {
            await signup (displayName.value, email.value, password.value)
            if(!error.value) {
                context.emit('register') 
            }
        }

        return { displayName, email, password, error, handleSubmit }
    }
}
</script>

<style>

</style>