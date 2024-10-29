import Home from "../components/home/Home";
import Layout from "../components/layout/Layout";
import MovieDetail from "../components/movieDetail/MovieDetail";
import PageNotFound from "../components/pageNotFound/PageNotFound";
import { createBrowserRouter } from 'react-router-dom';

const RouterData = () => {
    const strictRoute = createBrowserRouter(
        [
            {
                path: '/',
                element: <Layout />,
                errorElement: <PageNotFound />,
                children: [
                    {
                        index: true,
                        element: <Home />,
                    },
                    {
                        path: '/movie/:imdbId',
                        element: <MovieDetail />,
                    },
                ]

            }
        ]
    )
    return strictRoute;
}

export default RouterData;