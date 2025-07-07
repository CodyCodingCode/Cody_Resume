import Header from "./components/Header";
// import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="font-sans text-gray-800 bg-white dark:bg-gray-900 dark:text-white min-h-screen">
      <Header />
      <main className="px-6 md:px-16 py-8 space-y-20">
        {/* <About /> */}
        <Experience />
        <Projects />
      </main>
      <Footer />
    </div>
  );
}

export default App;