<template>
    <div class="dialog-wrapper">
        <div class="dialog">
            <header class="dialog-header">
                <div class="dialog-title">{{title}}</div>
            </header>
            <main class="dialog-content">{{message}}</main>
            <footer class="dialog-footer">

                <div class="button yep" v-if="showYep" @click="$close(true)">{{yep}}</div>
                <div class="button nope" v-if="showNope" @click="$close(false)">{{nope}}</div>
            </footer>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Dialog",
        props: {
            title: {
                type: String,
                default: 'Are You Sure?'
            },
            message: String,
            yep: {
                type: String,
                default: 'Yep'
            },
            nope: {
                type: String,
                default: 'Nope'
            },
            showYep: {
                type: Boolean,
                default: true
            },
            showNope: {
                type: Boolean,
                default: true
            }
        }
    }
</script>

<style lang="scss" scoped>
    .dialog {
        background-color: white;
        border-radius: 10px;
        border: 1px solid $black;
        box-shadow: 0 15px 0 -10px rgba(black, .2);
        width: calc(100% - 60px);
        display: flex;
        flex-direction: column;
        max-width: 320px;
        position: relative;

        &-wrapper {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            display: flex;
            align-items: center;
            justify-content: center;
            background-color: rgba(black, .4);
            z-index: 100000;
        }

        &-header {
            padding: 20px 20px 0;
        }

        &-content {
            padding: 20px;
            font-weight: 300;

            .challenger {
                font-weight: 600;
            }
        }

        &-footer {
            padding: 0 20px 15px;
        }
    }


    .title {
        text-align: center;
        text-transform: uppercase;
        font-weight: 300;
    }

    .button {
        display: flex;
        border-radius: 10px;
        height: 50px;
        border: 1px solid $black;
        box-shadow: 0 5px 0 -2px rgba(black, .2);
        margin-bottom: 5px;
        align-items: center;
        justify-content: center;
        background-image: $whiteButtonGradient;
        color: $black;

        .button ~ & {
            margin-top: 10px;
        }

        &.yep {
            background-image: $redButtonGradient;
            color: white;
        }
    }

    .separator {
        text-align: center;
        margin: 10px 0;
    }
</style>