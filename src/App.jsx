import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import React, { Suspense, lazy, useEffect } from "react";
import useScrollToTop from "./custom/hooks/scrollToTop";

const Articles = lazy(() => import("./pages/Articles"));
const AskAQuestion = lazy(() => import("./pages/AskAQuestion"));
const Community = lazy(() => import("./pages/Community"));
const Contact = lazy(() => import("./pages/Contact"));
const Home = lazy(() => import("./pages/Home"));
const LandingPage = lazy(() => import("./pages/Landing"));
const Login = lazy(() => import("./pages/Login"));
const PostAnArticle = lazy(() => import("./pages/PostAnArticle"));
const Signup = lazy(() => import("./pages/Signup"));
const SingleArticle = lazy(() => import("./pages/SingleArticle"));
const NotFound = lazy(() => import("./pages/NotFound"));
const SingleQuestion = lazy(() => import("./pages/SingleQuestion"));
const UserProfile = lazy(() => import("./pages/UserProfile"));

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <Suspense
              fallback={
                <div className="w-full h-screen bg-background flex justify-center items-center font-montage text-font">
                  Loading...
                </div>
              }
            >
              <LandingPage />
            </Suspense>
          }
        />
        <Route
          path="/login" 
          element={
            <Suspense fallback={
              <div className="w-full h-screen bg-background font-montage text-font flex justify-center items-center">
                Loading...
              </div>
            }>
              <Login />
            </Suspense>
          }
        />
        <Route
          path="/signup" 
          element={
            <Suspense fallback={
              <div className="w-full h-screen bg-background font-montage text-font flex justify-center items-center">
                Loading...
              </div>
            }>
              <Signup />
            </Suspense>
          }
        />
        <Route
          path="/articles" 
          element={
            <Suspense fallback={
              <div className="w-full h-screen bg-background font-montage text-font flex justify-center items-center">
                Loading...
              </div>
            }>
              <Articles />
            </Suspense>
          }
        />
        <Route
          path="/home" 
          element={
            <Suspense fallback={
              <div className="w-full h-screen bg-background font-montage text-font flex justify-center items-center">
                Loading...
              </div>
            }>
              <Home />
            </Suspense>
          }
        />
        <Route
          path="/contact" 
          element={
            <Suspense fallback={
              <div className="w-full h-screen bg-background font-montage text-font flex justify-center items-center">
                Loading...
              </div>
            }>
              <Contact />
            </Suspense>
          }
        />
        <Route
          path="/community" 
          element={
            <Suspense fallback={
              <div className="w-full h-screen bg-background font-montage text-font flex justify-center items-center">
                Loading...
              </div>
            }>
              <Community />
            </Suspense>
          }
        />
        <Route
          path="/profile" 
          element={
            <Suspense fallback={
              <div className="w-full h-screen bg-background font-montage text-font flex justify-center items-center">
                Loading...
              </div>
            }>
              <UserProfile />
            </Suspense>
          }
        />
        <Route
          path="/askaquestion" 
          element={
            <Suspense fallback={
              <div className="w-full h-screen bg-background font-montage text-font flex justify-center items-center">
                Loading...
              </div>
            }>
              <AskAQuestion />
            </Suspense>
          }
        />
        <Route
          path="/postanarticle" 
          element={
            <Suspense fallback={
              <div className="w-full h-screen bg-background font-montage text-font flex justify-center items-center">
                Loading...
              </div>
            }>
              <PostAnArticle />
            </Suspense>
          }
        />
        <Route
          path="/articles/:articleName" 
          element={
            <Suspense fallback={
              <div className="w-full h-screen bg-background font-montage text-font flex justify-center items-center">
                Loading...
              </div>
            }>
              <SingleArticle />
            </Suspense>
          }
        />
        <Route
          path="/community/:questionName" 
          element={
            <Suspense fallback={
              <div className="w-full h-screen bg-background font-montage text-font flex justify-center items-center">
                Loading...
              </div>
            }>
              <SingleQuestion />
            </Suspense>
          }
        />
        <Route
          path="*" 
          element={
            <Suspense fallback={
              <div className="w-full h-screen bg-background font-montage text-font flex justify-center items-center">
                Loading...
              </div>
            }>
              <NotFound />
            </Suspense>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
