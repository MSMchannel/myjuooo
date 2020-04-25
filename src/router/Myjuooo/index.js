import BuyPlus from '../../views/MyJuooo/BuyPlus'
import Certification from '../../views/MyJuooo/Certification'
import Coupon from '../../views/MyJuooo/Coupon'
import Feedback from '../../views/MyJuooo/Feedback'
import MyAddress from '../../views/MyJuooo/MyAddress'
import MyBalance from '../../views/MyJuooo/MyBalance'
import MyOrderList from '../../views/MyJuooo/MyOrderList'
import Mysecurity from '../../views/MyJuooo/Mysecurity'
import MyWallet from '../../views/MyJuooo/MyWallet'
import Points from '../../views/MyJuooo/Points'

export default [
    {
        path: '/BuyPlus',
        component: BuyPlus
    },
    {
        path: '/Certification',
        component: Certification
    },
    {
        path: '/Coupon',
        component: Coupon
    },
    {
        path: '/MyAddress',
        component: MyAddress
    },
    {
        path: '/Feedback',
        component: Feedback
    },
    {
        path: '/MyBalance',
        component: MyBalance
    },
    {
        path: '/MyOrderList',
        component: MyOrderList
    },
    {
        path: '/Mysecurity',
        component: Mysecurity
    },
    {
        path: '/MyWallet',
        component: MyWallet
    },
    {
        path: '/Points',
        component: Points
    }
]