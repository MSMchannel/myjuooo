import Index from '../views/Index/index'
import indexRouter from './Index'
import homeRouter from './Home'
import theatreRouter from './TheatreList'
import eticketRouter from './Eticket'
import myjuoooRouter from './Myjuooo'
export default [
    {
        path: '/',
        component: Index,
        children: [
            ...indexRouter
        ]
    },
    ...homeRouter,
    ...theatreRouter,
    ...eticketRouter,
    ...myjuoooRouter,

]