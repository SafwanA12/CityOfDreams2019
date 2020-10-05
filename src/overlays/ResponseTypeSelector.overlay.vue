<template>
    <div class="slide-up-wrapper">
        <div class="slide-up">
            <header class="slide-up-header">
                <h1 class="slide-up-title" v-if=" searchType === 'AVAILABILITY'">Did you find it?</h1>
                <h1 class="slide-up-title" v-if=" searchType === 'PRICE'">Did you find the price?</h1>
                <h1 class="slide-up-title" v-if=" searchType === 'PRICE_BEAT'">Did you beat the price?</h1>
                <i class="close" @click=" $close()"></i>
            </header>
            <main class="slide-up-content">
                <div class="option" @click="  $close('FOUND')" v-if=" searchType === 'AVAILABILITY'">
                    <h2 class="positive">Yep, I Found It</h2>
                    <h3>You have this item in stock.</h3>
                </div>
                <div class="option" @click="  $close('PRICE_FOUND')" v-if=" searchType === 'PRICE'">
                    <h2 class="positive">Yep, I Found It</h2>
                    <h3>You want to share the price of the item in stock.</h3>
                </div>
                <div class="option" @click="  $close('PRICE_BEAT')" v-if=" searchType === 'PRICE_BEAT'">
                    <h2 class="positive">Yep, I Beat It</h2>
                    <h3>You have a better price than what the customer is looking for.</h3>
                </div>
                <div class="option" @click="  $close('HINT')">
                    <h2>Nope, But I Got A Hint</h2>
                    <h3 v-if=" searchType !== 'PRICE_BEAT'">You feel like you have this item in stock but are not
                        sure</h3>
                    <h3 v-if=" searchType === 'PRICE_BEAT'">You think you may be able to offer a better price</h3>
                </div>
                <div class="option" @click="  $close('PRICE_NOT_BEAT')" v-if="searchType === 'PRICE_BEAT'">
                    <h2 class="negative">Nope, The Price Is Higher</h2>
                    <h3>You know where the item is but your price is higher</h3>
                </div>
                <div class="option" @click="  $close('OUT_OF_STOCK')">
                    <h2 class="negative">Nope, It's Not In Stock</h2>
                    <h3>Your location sells the item but at the moment do not have it in stock</h3>
                </div>
                <div class="option" @click="  $close('NOT_SOLD')">
                    <h2 class="negative">Nope, It's Not Sold Here</h2>
                    <h3>Your location does not sell this item nor does it plan to</h3>
                </div>
            </main>
        </div>
    </div>
</template>

<script>


    const ONE_DAY = 24 * 3600 * 1000;

    if (!localStorage.getItem('askForRatingAfter')) {
        localStorage.setItem('askForRatingAfter', Date.now() + ONE_DAY)
    }

    export default {
        name: "PostTypeSelector",
        props: {
            searchType: {
                type: String,
                default: 'AVAILABILITY'
            }
        },
        data: () => ({
            mode: 'like'
        }),
        beforeMount() {
            document.body.classList.add('masked');
        },
        destroyed() {
            document.body.classList.remove('masked');
        },
        methods: {},
    }

</script>

<style lang="scss" scoped>
    .slide-up-wrapper {

        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        display: flex;
        background-color: rgba(black, .8);
        z-index: 4000;

        .slide-up {

            position: absolute;
            bottom: -100px;
            left: 5px;
            right: 5px;
            display: flex;
            flex-direction: column;

            &-header {
                background-color: $green;
                color: white;
                flex: 0 0 auto;
                //color: white;
                //background-color: $green;
                position: relative;
                border-radius: 5px 5px 0 0;
                min-height: 50px;
                display: flex;
                align-items: flex-start;

                .close {
                    flex: 0 0 auto;
                    height: $targetSize;
                    width: $targetSize;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    order: 2;

                    &:before {
                        font-family: 'Ionicons';
                        font-size: 16px;
                        content: $ionicon-var-close-round;
                    }
                }

                h1 {
                    @include normal-title-text(18px);
                    line-height: 1.2em;
                    flex: 1 1 auto;
                    padding: 15px 0 15px 15px;

                    @media (max-width: 320px) {
                        font-size: 16px;
                    }
                }
            }

            &-content {
                flex-grow: 1;
                overflow-y: auto;
                position: relative;
                background-color: white;
                padding: 0 0 120px;

                input {
                    font: inherit;
                    width: calc(100% - 40px);
                    padding: 10px 5px;
                    border: none;
                    text-align: center;
                    margin: 0 20px;

                    &:first-of-type {
                        border-bottom: 1px solid $dark;
                    }
                }

                .input-group {

                    text-align: center;

                    &.spaced {
                        margin-top: 10px;
                    }

                    p {
                        @include cap-text;
                        padding: 5px 15px 0;
                    }
                }

                .input-switch {

                    display: flex;
                    align-items: center;

                    > * {
                        pointer-events: none;
                    }

                    &.spaced {
                        margin-top: 10px;
                    }

                    input[type="checkbox"] {

                        display: none;

                        &:checked ~ .switch {

                            justify-content: flex-end;
                            background-color: $green;
                        }
                    }

                    span {

                        @include cap-text;
                        padding: 5px 15px 0;
                    }

                    .switch {

                        display: flex;
                        justify-content: flex-start;
                        background-color: $light;
                        padding: 4px;
                        border-radius: 30px;
                        flex: 0 0 45px;
                        margin-left: 15px;

                        &::after {
                            content: '';
                            display: block;
                            width: 22px;
                            height: 22px;
                            border-radius: 30px;
                            background-color: white;
                        }
                    }
                }
            }


            .option {

                padding: 15px;
                border-top: 1px solid $light;
                flex-shrink: 0;

                h2 {
                    @include title-text(16px);

                    &.positive {
                        //color: $;
                    }

                    &.negative {
                        color: $red;
                    }
                }

                h3 {
                    font-weight: 300;
                    line-height: normal;
                    color: $darkText;
                    font-size: 13px;
                    margin-top: 2px;
                }
            }

            &.saving,
            &.loading {

                .slide-up-loading {
                    opacity: 1;
                    visibility: inherit;
                    transition: opacity 150ms;
                }
            }

            &-loading {

                position: absolute;
                top: 0;
                left: 0;
                bottom: 0;
                right: 0;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                visibility: hidden;
                opacity: 0;
                transition: opacity 150ms, visibility 0s 150ms;
                z-index: 2;
                background-color: white;

                &-message {
                    @include cap-text;
                    font-weight: 600;
                    margin-top: 15px;
                    line-height: normal;
                }

                .spinner {

                    width: 150px;
                    height: 150px;

                    &-circle {
                        fill: none;
                        stroke-width: 40;
                        stroke-linecap: round;

                        &-inner {
                            stroke: $light;
                        }

                        &-outer {
                            stroke: $green;
                            stroke-dasharray: 145.2 1016.6;
                            transform-origin: 50% 50%;
                        }
                    }
                }
            }
        }
    }

    // TODO: fix these styles
    .overlay {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        overflow-y: auto;
        overflow-x: hidden;
        visibility: hidden;
        background-color: white;
        display: flex;
        flex-direction: column;
        z-index: -1;

        &.open {
            visibility: visible;
            z-index: 4000;

            .overlay-content,
            .slide-up-content {
                -webkit-overflow-scrolling: touch;
            }

            .spinner-circle-outer {
                //animation: $spinnerAnimation;
            }
        }

        &.opening {

            animation: open-overlay-slideup 250ms forwards;
        }

        &.closing {

            animation: close-overlay-slideup 250ms forwards;
        }

        &.saving,
        &.loading {

            .slide-up-loading {
                opacity: 1;
                visibility: inherit;
                transition: opacity 150ms;
            }
        }

        .overlay,
        .slide-up {
            &-header {
                flex: 0 0 auto;
                display: flex;
                align-items: center;
                justify-content: space-between;
                color: white;
                background-color: $green;
                flex-wrap: wrap;
                min-height: 50px;

                .close {
                    height: $targetSize;
                    width: $targetSize;
                    display: flex;
                    align-items: center;
                    justify-content: center;

                    &:before {
                        font-family: 'Ionicons';
                        font-size: 16px;
                        content: $ionicon-var-close-round;
                    }
                }

                h1,
                &-title {
                    @include normal-title-text(18px);
                    line-height: 1.2em;
                    flex: 1 0 auto;
                    padding: 0 15px;
                    max-width: calc(100% - #{$targetSize});

                    @media (max-width: 320px) {
                        font-size: 16px;
                    }
                }

                span.done {
                    display: flex;
                    height: 50px;
                    padding: 0 15px;
                    @include title-text(18px);
                    text-decoration: underline;
                    align-items: center;
                    margin-left: auto;

                    @media (max-width: 320px) {
                        font-size: 16px;
                    }
                }

                &-filter {
                    background-color: $light;
                    height: $targetSize - 5;
                    width: 100%;
                    display: flex;
                    align-items: stretch;
                    color: $darkText;

                    input {
                        background-color: transparent;
                        border: none;
                        font-size: 14px;
                        font-weight: 300;
                        flex: 1 0 auto;
                        padding: 0 15px;

                    }

                    .clear {
                        width: $targetSize;
                        flex: 0 0 auto;
                        display: flex;
                        align-items: center;
                        justify-content: center;

                        &:before {
                            font-family: 'Ionicons';
                            font-size: 12px;
                            content: $ionicon-var-android-close;
                        }
                    }
                }
            }

            &-content {
                padding: 15px;
                flex-grow: 1;
                overflow-y: auto;
                position: relative;

                input {
                    font: inherit;
                    width: calc(100% - 40px);
                    padding: 10px 5px;
                    border: none;
                    text-align: center;
                    margin: 0 20px;

                    &:first-of-type {
                        border-bottom: 1px solid $dark;
                    }
                }

                .input-group {

                    text-align: center;

                    &.spaced {
                        margin-top: 10px;
                    }

                    p {
                        @include cap-text;
                        padding: 5px 15px 0;
                    }
                }

                .input-switch {

                    display: flex;
                    align-items: center;

                    > * {
                        pointer-events: none;
                    }

                    &.spaced {
                        margin-top: 10px;
                    }

                    input[type="checkbox"] {

                        display: none;

                        &:checked ~ .switch {

                            justify-content: flex-end;
                            background-color: $green;
                        }
                    }

                    span {

                        @include cap-text;
                        padding: 5px 15px 0;
                    }

                    .switch {

                        display: flex;
                        justify-content: flex-start;
                        background-color: $light;
                        padding: 4px;
                        border-radius: 30px;
                        flex: 0 0 45px;
                        margin-left: 15px;

                        &::after {
                            content: '';
                            display: block;
                            width: 22px;
                            height: 22px;
                            border-radius: 30px;
                            background-color: white;
                        }
                    }
                }
            }

            &-footer {
                flex-shrink: 0;
                padding: 10px;

                [role="button"] {

                    @include button;
                    margin: 0 auto 10px;
                    color: white;
                    background-color: $green;

                    &:last-child {
                        margin-bottom: 0px;
                    }

                    &.close {
                        background-color: $red;
                    }

                    &.negative {
                        color: $darkText;
                        background-color: transparent;
                    }

                    &.disabled {
                        //background-color: rgba(black, .2) !important;
                    }
                }
            }

            &-loading {

                position: absolute;
                top: 0;
                left: 0;
                bottom: 0;
                right: 0;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                visibility: hidden;
                opacity: 0;
                transition: opacity 150ms, visibility 0s 150ms;
                z-index: 2;
                background-color: white;

                &-message {
                    @include cap-text;
                    font-weight: 600;
                    margin-top: 15px;
                    line-height: normal;
                }

                .spinner {

                    width: 150px;
                    height: 150px;

                    &-circle {
                        fill: none;
                        stroke-width: 40;
                        stroke-linecap: round;

                        &-inner {
                            stroke: $light;
                        }

                        &-outer {
                            stroke: $green;
                            stroke-dasharray: 145.2 1016.6;
                            transform-origin: 50% 50%;
                        }
                    }
                }
            }
        }
    }

    @keyframes open-overlay-slideup {

        from {
            transform: translate3d(0, 100%, 0);
        }

        to {
            transform: translate3d(0, 0, 0);
        }
    }

    @keyframes close-overlay-slideup {

        from {
            transform: translate3d(0, 0, 0);
        }

        to {
            transform: translate3d(0, 100%, 0);
        }
    }

</style>