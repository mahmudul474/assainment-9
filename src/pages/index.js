import Image from "next/image";
import { Inter } from "next/font/google";
import Banner from "@/components/hero/banner";
import Layout from "@/components/layout/layout";
import Navbar from "@/components/navbar/navbar";
import Featured from "@/components/hero/featured/featured";
import Services from "@/components/hero/service/services";
import Member from "@/components/hero/member/member";
import Pricing from "@/components/hero/pricing/pricing";
import About from "@/components/hero/about/about";
import Timeline from "@/components/hero/timeline/timeline";
import Glary from "@/components/hero/galary/glary";
import { Riview } from "@/components/hero/review/review";
import Blog from "@/components/hero/blog/blog";
import Contact from "@/components/hero/about/contact/contact";
import Faq from "@/components/hero/faq/faq";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Layout>
        <Banner />
        <Featured />
        <Timeline/>
        <Services />
        <Pricing/>
        <Member />
        
        <About/>
    
        <Glary/>
        <Riview/>
        <Faq/>
        <Blog/> 
      
        <Contact/>
      </Layout>
    </>
  );
}
