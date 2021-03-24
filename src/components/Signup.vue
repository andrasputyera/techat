<template>
    <form @submit.prevent="handleSubmit">
        <input type="text" placeholder="username" v-model="username" required >
        <input type="email" placeholder="email" v-model="email" required >
        <input type="password" placeholder="password" v-model="password" required >
        <button>Register</button>
    </form>
</template>

<script>
import { ref } from '@vue/reactivity'

export default {
    setup() {
        const username = ref('')
        const email = ref('')
        const password = ref('')

        const handleSubmit = () => {
            console.log(username.value, email.value, password.value)
        }

        return { username, email, password, handleSubmit }
    }
}
</script>

<style>

</style>