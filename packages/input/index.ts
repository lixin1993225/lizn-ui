import vInput from './index.vue'
vInput.install = (app:any) => {
    app.component(vInput.name,vInput)
}
export default vInput