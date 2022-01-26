<template>
    <div class="app">
        <main-menu />
        <div class="app__wrapper-body">
            <router-view />
        </div>
    </div>
</template>

<script>
import MainMenu from "./components/Common/MainMenu/MainMenu.vue";

export default {
    name: "App",
    components: {
        MainMenu,
    },
};
</script>

<style lang="scss">
$bg-color: #383838;

.app {
    width: 100vw;
    height: 100vh;
    background-color: $bg-color;
    display: flex;

    .main-menu {
        padding: 1em;
    }

    .app__wrapper-body {
        width: 100%;
        margin: 1em 1em 1em 0;
        padding: 1em;
        border-radius: 0.3em;
        background: $bg-color;
        box-shadow: inset 0.3em 0.3em 0.6em #303030, inset -0.3em -0.3em 0.6em #404040;
    }
}
</style>
