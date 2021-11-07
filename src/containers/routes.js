import { NotFound } from "../components";
import { AboutPage, HomePage, MenuPage } from "../pages";

export const routes = [
    {
        path:'/',
        exact: true,
        main:()=><HomePage/>
    }, {
        path:'/menu',
        exact: true,
        main:()=><MenuPage/>
    }, {
        path:'/about',
        exact: true,
        main:()=><AboutPage/>
    }, {
        path:'',
        exact: true,
        main:()=><NotFound/>
    },
]