import Header from "../components/global/Header";
import Footer from "../components/global/Footer";
import { redirect } from "next/navigation";

export default function Layout({ children }) {
  //+ maintenance
  redirect("/maintenance");

  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
