<template>
    <main>
        <Highscorelist />
        <a href="#" class="btn" @click="$router.push('/menu')">Back</a>
    </main>
</template>

<script>
import Highscorelist from "../components/Highscorelist.vue"

export default {
    name: 'Highscore',
    components: {
       Highscorelist
    }
}
</script>

<style>

</style>
