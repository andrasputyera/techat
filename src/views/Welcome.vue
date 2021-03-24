<template>
    <div class="welcome container">
        <p>Welcome</p>
        <!-- <Signup /> -->
        <Login />
    </div>
</template>

<script>
import Signup from '@/components/Signup.vue'
import Login from '@/components/Login.vue'

export default {
    components: { Signup, Login }
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
</style>