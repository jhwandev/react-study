import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";

import {
  HomePage,
  SamplePage,
  ErrorPage,
  SplatsExPage,
  ComponentExPage,
  TestPage
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
        {/* test */}
        <Route path="/test/" element={<TestPage/>}/>
      </Route>
    </>
  )
);

function App() {
    return <RouterProvider router={router} />;
}

export default App
