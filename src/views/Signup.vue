<template>
    <section class="content">
        <p>Let's create you a new account!</p>
        <input type="text" v-model="username" placeholder="username">
        <br>
        <input type="email" v-model="email" placeholder="email">
        <br>
        <input type="password" v-model="password" placeholder="password">
        <br>
        <button class="buttonsubmit" @click="signUp">Sign Up</button>
        <p>or sign in with google</p>
        <button class="googlebtn" @click="googleLogin">
            <img src="../assets/google-logo.png" alt="Google Logo">
        </button>
        <br>
    </section>
</template>

<script>
import firebase from 'firebase'
import {db, fb} from "../firebase-config";
export default {
    name: 'signup',
    data () {
        return {
            username: '',
            email: '',
            password: ''
        }
    },
    methods: {
        signUp () {
            firebase
                .auth()
                .createUserWithEmailAndPassword(this.email, this.password)
                .then(
                 /*   (user) => {
                        console.log(this.username)

                        this.$router.replace('/');
                        this.$firebaseREfs.allUsers.child(this.uid).set({
                            name: this.username,
                            newPoint: 0,
                            user: this.email
                        })
                    }*/
                    this.$router.replace('/')
                )
        },
        googleLogin () {
            const provider = new firebase.auth.GoogleAuthProvider();

            firebase.auth().signInWithPopup(provider).then((result) => {
                this.$router.replace('/');
            }).catch((err) => {
                alert('Whops, something happend here..' + err.message)
            });

        }     
    }
}
</script>


<style>

</style>
