import App from '../App'
import Counter from '../component/Counter'

//react-router-v4 router config
const routes = [
    {
        component: App,
        routes: [
            {
                path: '/counter',
                component: Counter,
            }
        ]
    }
]

export default routes