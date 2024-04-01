import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';

import { HomePage, SamplePage, ErrorPage, SplatsExPage, ComponentExPage, TestPage, TestPage2 } from './pages';
import TestPage3 from './pages/test-page3';

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route errorElement={<ErrorPage />}>
        <Route path="/" element={<HomePage />} />
        {/* Optional Segment */}
        <Route path="sample/:opt?/:req" element={<SamplePage />} />
        {/* Splats */}
        <Route path="/splats-ex/*" element={<SplatsExPage />} />
        {/* Component Example */}
        <Route path="/comp-ex/" element={<ComponentExPage />} />
        {/* test */}
        <Route path="/test/" element={<TestPage />} />
        <Route path="/test2/" element={<TestPage2 />} />
        <Route path="/test3/" element={<TestPage3 />} />
      </Route>
    </>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
