import Header from "../components/global/Header";
import Footer from "../components/global/Footer";

export default function Layout({ children }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
