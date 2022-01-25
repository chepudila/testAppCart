<template>
    <div class="app">
        <div class="app__wrapper">
            <main-menu />
            <div class="app__wrapper-body">
                <router-view />
            </div>
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
    align-items: center;
    justify-content: center;

    .app__wrapper {
        border-radius: 1em;
        background: $bg-color;
        box-shadow: 0.3em 0.3em 0.8em #272727, -0.3em -0.3em 0.8em #494949;
        padding: 1em;
        display: flex;

        .main-menu {
            margin-right: 1em;
        }

        .app__wrapper-body {
            padding: 1em;
            border-radius: 0.3em;
            background: $bg-color;
            box-shadow: inset 0.7em 0.7em 1.2em #303030, inset -0.7em -0.7em 1.2em #404040;
        }
    }
}
</style>
