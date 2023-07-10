import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Upload from '~/pages/Upload';
import { HeaderOnly } from '~/Layout';
import Profile from '~/pages/Profile';
import { routerConfig } from '~/Config/routerConfig';
import Live from '~/pages/Live';
const routers = [
    { path: routerConfig.home, component: Home },
    { path: routerConfig.Following, component: Following },
    { path: routerConfig.Profile, component: Profile },
    { path: routerConfig.Live, component: Live },

    { path: routerConfig.Upload, component: Upload, layout: HeaderOnly },
];
export default routers;
