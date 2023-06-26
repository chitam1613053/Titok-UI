import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import routers from './routers';
import { DefaultLayout } from './components/Layout';
import { Fragment } from 'react';
function App() {
    return (
        <Router>
            <Routes>
                {routers.map((router, index) => {
                    let Layout = DefaultLayout;
                    if (router.layout) {
                        Layout = router.layout;
                    } else if (router.layout === null) {
                        Layout = Fragment;
                    }
                    return (
                        <Route
                            key={index}
                            path={router.path}
                            element={
                                <Layout>
                                    <router.component />
                                </Layout>
                            }
                        ></Route>
                    );
                })}
            </Routes>
        </Router>
    );
}
export default App;
