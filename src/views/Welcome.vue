<template>
    <div class="welcome container">
        <p>Welcome</p>
        <div v-if="showLogin">
          <h2>Login</h2>
          <Login @login="enterChat"/>
          <p>No account yet? <span @click="showLogin = false">Signup</span> instead.</p>
        </div>
        <div v-else>
          <h2>Register</h2>
          <Signup @register="enterChat" />
          <p>Already registered? <span @click="showLogin = true">Login</span> instead.</p>
        </div>
    </div>
</template>

<script>
import Signup from '@/components/Signup.vue'
import Login from '@/components/Login.vue'
import { ref } from '@vue/reactivity'
import { useRouter } from 'vue-router'

export default {
    components: { Signup, Login },
    setup() {
      const showLogin = ref(true)
      const router = useRouter()

      const enterChat = () => {
        router.push({ name: 'Chatroom' })
      }

      return { showLogin, enterChat }
    }
}
</script>

<style>
 .welcome {
     text-align: center;
     padding: 20px 0;
 }
 
 /* form styles */
  .welcome form {
    width: 300px;
    margin: 20px auto;
  }
  .welcome label {
    display: block;
    margin: 20px 0 10px;
  }
  .welcome input {
    box-sizing: border-box;  
    width: 100%;
    padding: 10px;
    border-radius: 20px;
    border: 1px solid #eee;
    outline: none;
    color: #999;
    margin: 10px auto;
  }
  .welcome span{
    font-weight: bold;
    text-decoration: underline;
    cursor: pointer;
  }
  .welcome button {
    margin: 20px auto;
  }
</style>