import App from '../App'
import Count from '../component/Count'

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