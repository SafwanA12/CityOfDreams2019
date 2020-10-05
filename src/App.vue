<template>
    <div id="app">
        <transition name="bounce" enter-active-class="bounceInRight" leave-active-class="bounceOutLeft"
                    @after-enter="afterEnter">
            <router-view></router-view>
        </transition>
        <div class="app-menu" v-if="showAppMenu">
            <i class="action action-dashboard" @click="navigate('dashboard')"></i>
            <i class="action action-deals" @click="navigate('dealEditor')"></i>
            <i class="action action-profile" @click="navigate('profile')"></i>
        </div>
        <dialogs-wrapper transition-name="popups" duration="1000" name="dialogs"></dialogs-wrapper>
        <dialogs-wrapper transition-name="slide-ups" :duration="{enter: 1000, leave: 250}" name="slideUps"></dialogs-wrapper>
    </div>
</template>
<script>
    export default {
        name: 'App',
        computed: {
            showAppMenu() {
                return this.$route.meta.showAppMenu;

            }
        },
        methods: {
            navigate(location) {
                this.$router.push(location)


            },


            afterEnter(el) {
            }
        }
    }
</script>
<style lang="scss">
    .app-menu {
        display: flex;
        justify-content: space-between;
        height: auto;
        position: fixed;
        bottom: 0;
        left: 0;
        right: 0;
        background-color: white;
        z-index: 1000;
    }

    .action {
        width: 50px;
        height: 50px;
        background-color: blue;
    }
    .action-dashboard{
        display: flex;
        height: 50px;
        width: 50px;
        background: url("./images/icons/home-alt-1.svg") no-repeat center center;
        background-size: 40px 40px;

    }
    .action-deals{
        display: flex;
        height: 50px;
        width: 50px;
        background: url("./images/icons/explore/explore-alt-2.svg") no-repeat center center;
        background-size: 40px 40px;

    }
    .action-profile{
        display: flex;
        height: 50px;
        width: 50px;
        background: url("./images/icons/user-alt-2.svg") no-repeat center center;
        background-size: 40px 40px;

    }

</style>