<template>
    <main>
        <section>
            <p>{{getData}}</p>

        </section>
    </main>
</template>

<script>
export default{
    name: 'game',
    computed: {
        getData() {
            return this.$store.getters.getData;
        }
    }
}

</script>

<style>

</style>
