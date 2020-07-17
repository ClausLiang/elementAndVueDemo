<template>
    <div class="loading-wrapper" v-show="visible">
        <div class="loading">
            <div class="circle-out"></div>
            <div class="circle-in"></div>
            <div class="loading-msg">Loading</div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'loading',
    components: {},
    data() {
        return {
            visible: false
        }
    },
    created() {},
    mounted() {},
    methods: {
        show() {
            this.visible = true
        },
        hide() {
            this.visible = false
        }
    },
    computed: {}
}
</script>
<style lang="stylus" scoped>
.loading-wrapper {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: rgba(0, 0, 0, 0.7);
    z-index: 99;
}

.loading {
    position: absolute;
    left: 50%;
    top: 50%;
    margin: -100px 0 0 -100px;
}

@keyframes circle {
    0% {
        transform: rotate(0deg);
    }

    100% {
        transform: rotate(360deg);
    }
}

.loading .circle-out {
    width: 200px;
    height: 200px;
    border: 1px solid #a6a7aa;
    border-radius: 200px;
    animation: circle 2s ease infinite;
}

.loading .circle-in {
    width: 170px;
    height: 170px;
    border: 1px solid #a6a7aa;
    border-radius: 200px;
    position: absolute;
    left: 50%;
    top: 50%;
    margin: -85px 0 0 -85px;
    animation: circle 2s linear infinite;
}

.loading .circle-out::after, .loading .circle-in::after {
    content: '';
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 99%;
    height: 99%;
    border-radius: 200px;
    border: 5px solid transparent;
    border-top-color: #2aa298;
    border-left-color: #2aa298;
}

.loading .circle-in::after {
    border: 3px solid transparent;
    border-top-color: #829601;
    border-left-color: #829601;
}

@keyframes fade {
    50% {
        opacity: 0.05;
    }
}

.loading .loading-msg {
    position: absolute;
    text-align: center;
    font-size: 18px;
    top: 50%;
    left: 0;
    right: 0;
    margin-top: -10px;
    color: gray;
    animation: fade 2s ease infinite;
}
</style>