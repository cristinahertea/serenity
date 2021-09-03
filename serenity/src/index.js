import { render } from 'react-dom'
import { App } from './components/App'
import './style.scss'

const here = document.querySelector('#root')
const app = <App />

render(app, here)
