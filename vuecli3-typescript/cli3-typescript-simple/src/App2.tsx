import { Component, Vue } from "vue-property-decorator";

@Component

export default class App extends Vue {
    render() {
        return <div id='app'>hello world</div>;
    }
}