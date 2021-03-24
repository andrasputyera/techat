<template>
    <form @submit.prevent="handleSubmit">
        <input type="email" placeholder="email" v-model="email" required >
        <input type="password" placeholder="password" v-model="password" required >
        <button>Log in</button>
    </form>
</template>

<script>
import { ref } from '@vue/reactivity'

export default {
    setup() {
        const email = ref('')
        const password = ref('')

        const handleSubmit = () => {
            console.log(email.value, password.value)
        }

        return { email, password, handleSubmit }
    }
}
</script>

<style>

</style>