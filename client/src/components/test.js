import store from '../store'

export const test = () => {
   console.log(store.getState().auth.token)
}

export default test