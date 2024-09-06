<template>
    <header-component/>
    <div class="container">
        <router-view/>
    </div>
</template>

<script>
import HeaderComponent from "@/components/HeaderComponent.vue";
import {mapActions} from "vuex";

export default {
    name: 'App',

    components: {HeaderComponent,},

    methods: {
        ...mapActions(["checkTokens"]),
    },

    mounted() {
        this.checkTokens();
    }
}
</script>

<style lang="scss">
body {
    padding: 0;
    margin: 0;
}

#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
}

.container {
    padding: 30px;
}

</style>