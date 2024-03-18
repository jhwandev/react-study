import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import HomePage from "./pages/home-page";
import ErrorPage from "./pages/error-page";
import SamplePage from "./pages/sample-page";
import SplatsExPage from "./pages/splats-ex-page";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route errorElement={<ErrorPage />}>
        <Route path="/" element={<HomePage />} />
        {/* Optional Segment */}
        <Route path="sample/:opt?/:req" element={<SamplePage />} />
        {/* Splats */}
        <Route path="/splats-ex/*" element={<SplatsExPage/>}/>
      </Route>
    </>
  )
);

function App() {
    return <RouterProvider router={router} />;
}

export default App
