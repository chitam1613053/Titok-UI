import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Upload from '~/pages/Upload';
import { HeaderOnly } from '~/components/Layout';

const routers = [
    { path: '/', component: Home },
    { path: '/Following', component: Following },
    { path: '/Upload', component: Upload, layout: HeaderOnly },
];
export default routers;
