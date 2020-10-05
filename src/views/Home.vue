<template>

    <div class="screen">
        <header>City Of Dreams</header>
        <div class="button button--green" @click="start()">Start Game</div>
    </div>
</template>

<script>
    import logo from '@/images/HomeLogo.svg'

    export default {
        name: 'home',
        data: () => ({
            loading: false,
            logo
        }),

        methods: {
            start() {
                this.$router.replace({
                    name: 'page',
                    query: {
                        page: 1
                    }
                })
            },

        },

        mounted() {

        },
        beforeDestroy() {
        }
    }
</script>

<style lang="scss" scoped>

    .login {
        &-header {
            display: flex;
            background: $blue url(../images/shop-skyline.svg) bottom center no-repeat;
            background-size: calc(100% - 55px) auto;
            flex: 1 1 auto;
            align-items: center;
            justify-content: center;
            padding-top: env(safe-area-inset-top);
            padding-bottom: env(safe-area-inset-bottom);

            .ios & {
                padding-top: 20px;
                padding-top: env(safe-area-inset-top);
                padding-bottom: env(safe-area-inset-bottom);
            }
        }

        &-footer {
            display: flex;
            flex-direction: column;
            background-color: white;
            justify-content: flex-end;
            padding: 40px;


        }


    }

    .logo {
        background: url("../images/HomeLogo.svg") no-repeat center center;
        max-width: 400px;
        width: 70%;

    }

    .or {
        text-align: center;
        padding: 25px;
    }

    .button--green {

    }

    .button--blue {

    }

</style>
