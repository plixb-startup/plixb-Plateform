import { Inter } from '@next/font/google'
import Navbar from "../../front/components/Navbar/navbar";
import Body from "../../front/components/Body/index";
import Footer from "../../front/components/Footer/footer";

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Navbar />
      {/* <Header /> */}
      <Body />
      <Footer />
    </>
  );
}
