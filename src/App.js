import { RouterProvider } from "react-router-dom";
import "./App.css";
import router from "./Routes/Route/Routes";
import ScrollToTop from "react-scroll-to-top";
import { Toaster } from "react-hot-toast";


function App() {
  return (
    <div className="max-w-[1440px] mx-auto">
      <RouterProvider router={router}></RouterProvider>
      <ScrollToTop
        width="28"
        height="28"
        color="#e25822"
        viewBox="0 0 14 24"
        className='motion-safe:animate-bounce'
        svgPath='M4.5 15.75l7.5-7.5 7.5 7.5'
        smooth></ScrollToTop>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 58 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
      </svg>
    <Toaster/>
    </div>
  );
}

export default App;
