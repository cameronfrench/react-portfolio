import { Outlet } from "react-router-dom";
import React from "react";
import NavbarDefault from "./components/Navigation";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <main className="relative isolate overflow-y-auto overflow-x-hidden bg-gradient-to-r from-gray-200 via-white-100to-gray-100 ... py-4 h-screen">
        <NavbarDefault />
        <div className="flex flex-col items-center">
          <div className="w-full max-w-screen-2xl">
            <Outlet />
          </div>
        </div>
      </main>
      <div className="w-full items-center">
        <Footer />
      </div>
    </>
  );
}

export default App;
