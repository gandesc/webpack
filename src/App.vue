<template>
    <div id="app">
        <nav class="navbar" role="navigation" aria-label="main navigation">
            <div class="navbar-brand">
                <a class="navbar-item" href="https://bulma.io">
                    <img src="https://bulma.io/images/bulma-logo.png" alt="Bulma: a modern CSS framework based on Flexbox" width="112" height="28">
                </a>
            </div>

            <div class="navbar-menu is-active">
                <div class="navbar-start">
                    <router-link
                        class="navbar-item"
                        :to="{name:'home'}">
                            Home
                    </router-link>

                    <router-link
                        class="navbar-item"
                        :to="{name:'contact'}">
                            Contact
                    </router-link>

                    <router-link
                        class="navbar-item"
                        :to="{name:'accounts'}">
                            Accounts
                    </router-link>

                    <router-link
                        class="navbar-item"
                        :to="{name:'todos.index'}">
                            Todos
                    </router-link>

                </div>

                <div class="navbar-end">
                    <router-link
                        class="navbar-item"
                        :to="{name: 'login'}">
                            <a >
                                Login
                            </a>
                    </router-link>

                    <a class="navbar-item" @click.prevent="logout">
                        Logout
                    </a>
                </div>
            </div>
        </nav>

        <img src="./assets/logo.png">
        <router-view></router-view>
    </div>
</template>

<script>
    import Test from './components/Test';
    import BulmaForm from './components/BulmaForm';
    import BulmaTransitions from './components/BulmaTransitions';
    import RenderAnimate from './components/RenderAnimate';
    import TransitionInOut from './components/TransitionInOut';
    import TransGroup from './components/TransGroup';
    import DynamicComponents from './components/components/DynamicComponents';
    import SlotChecking from './components/advancedComponents/SlotChecking';
    import RequestOnClick from './components/axios/RequestOnClick';
    import RequestById from './components/axios/RequestById';
    import state from '@/state/index';

    export default {
        name: 'App',
        components: {
            Test, BulmaForm, BulmaTransitions, RenderAnimate, TransitionInOut, TransGroup,
            DynamicComponents, SlotChecking, RequestOnClick, RequestById
        },
        data: function () {
            return {
                state,
            }
        },
        methods: {
            logout() {
                this.state.isLoggedIn = false;

                localStorage.setItem('isLoggedIn', '0');

                this.$router.push({name: 'login'});
            }
        }
    }
</script>

<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }

    .card-enter-active {
        animation-duration: 1s;
        animation-fill-mode: both;
        animation-name: zoomIn;
    }

    .card-enter-active {
        animation-duration: 1s;
        animation-fill-mode: both;
        animation-name: zoomOut;
    }
</style>
