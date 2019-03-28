import App from '../App'
import Count from '../component/Count'

//react-router-v4 router config
const routes = [
    {
        component: App,
        routes: [
            {
                path: '/count',
                component: Count,
            }
        ]
    }
]

export default routes