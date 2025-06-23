import Navbar from "./Navbar";
import Footer from "./Footer";

function Layout({ children }) {
  return (
    <div className="max-w-screen-xl mx-auto">
      <Navbar />
      <div className="min-h-screen">{children}</div>
      <Footer />
    </div>
  );
}

export default Layout;
