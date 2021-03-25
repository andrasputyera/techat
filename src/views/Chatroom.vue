<template>
    <div class="container">
        <Navbar />
        <NewChatForm />
    </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import NewChatForm from '@/components/NewChatForm.vue'
import getUser from '@/composables/getUser'
import { watch } from '@vue/runtime-core'
import { useRouter } from 'vue-router'

export default {
    components: { Navbar, NewChatForm },
    setup() {
        const { user } = getUser()
        const router = useRouter()

        // If the value of user is null
        watch(user, () => {
            if (!user.value ) {
                router.push({ name: 'Welcome' })
            }
        })


    
    

    }
}
</script>

<style>

</style>