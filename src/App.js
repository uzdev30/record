import "./App.css";
import Content from "./components/content/content";
import { DarkModeFn } from "./components/context/dark";
import Footer from "./components/footer/footer";

import Head from "./components/head/head";
import Sidebar from "./components/sidebar/sidebar";
import Wrapp from "./components/wrapp/wrapp";

function App() {
  return (
    <DarkModeFn>
      <div className={`container mx-auto max-[376px]:px-[15px]  `}>
        <Head />
        <Wrapp />
        <Content />
        <Sidebar />
        <Footer />
      </div>
    </DarkModeFn>
  );
}

export default App;
