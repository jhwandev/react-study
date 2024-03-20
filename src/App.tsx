import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";

import {
  HomePage,
  SamplePage,
  ErrorPage,
  SplatsExPage,
  ComponentExPage,
} from "./pages";


const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route errorElement={<ErrorPage />}>
        <Route path="/" element={<HomePage />} />
        {/* Optional Segment */}
        <Route path="sample/:opt?/:req" element={<SamplePage />} />
        {/* Splats */}
        <Route path="/splats-ex/*" element={<SplatsExPage/>}/>
        {/* Component Example */}
        <Route path="/comp-ex/" element={<ComponentExPage/>}/>
      </Route>
    </>
  )
);

function App() {
    return <RouterProvider router={router} />;
}

export default App
