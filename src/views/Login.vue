<template>  
    <section class="content">
        <h3>Login</h3>
        <input type="email" v-model="email" placeholder="Email">
        <br>
        <input type="password" v-model="password" placeholder="Password">
        <br>
        <button class="buttonsubmit" @click="login">Submit</button>
        <p>You don't have an account yet? You can create one</p>
        <router-link to="/signup">here</router-link>
    </section>
</template>

<script>
import firebase from 'firebase'
export default {
    name: 'login',
    data () {
        return {
            email: '',
            password: '',
        }
    },
    methods: {
        login: function () {
            firebase
                .auth()
                .signInWithEmailAndPassword(this.email, this.password)
                .then(
                    user => {
                        this.$router.replace('highscore');
                    },
                    err => {
                        alert('Whops, something wrong happend!' + err.message);
                    }
                );
        }
    }
}
</script>

<style>

</style>
