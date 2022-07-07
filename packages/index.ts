import tButton from './button/index'
import vInput from './input/index'
const install = (app:any) => {
    app.use(tButton)
    app.use(vInput)
}

const VUI = {
    install
}
export {tButton}
export {vInput}
export default VUI