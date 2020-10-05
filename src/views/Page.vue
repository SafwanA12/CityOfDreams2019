<template>
    <div class="screen" :style="{'background-image':page.image}">
        <main class="screen-content">
        <h1>{{page.title}}</h1>
        <vue-typer  :text="page.text" :repeat="0"  ></vue-typer>
        <p class="cta">{{page.cta}}</p>
        </main>
       <footer class="screen-footer">
        <button  v-for="action in page.decisions" @click="goto(action.page)">{{action.choice}}</button>
       </footer>
    </div>
</template>

<script>
    import service from '@/services/chapter.service'

    export default {
        name: "Page",
        data: () => ({
            page: {}
        }),
        watch: {
            "$route.query.page": function () {
                this.load()

            }
        },

        methods: {
            goto(page) {
                this.$router.push({
                    name: 'page',
                    query: {
                        page
                    }
                })
            },
            load() {
                this.page = service.getChapter(this.$route.query.page)

            }
        },
        mounted() {
           this.load()
        }
    }
</script>

<style scoped lang="scss">

</style>
