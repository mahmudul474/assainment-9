import Image from "next/image";
import { Inter } from "next/font/google";

import Banner from "@/components/hero/banner";
import Layout from "@/components/layout/layout";
import Navbar from "@/components/navbar/navbar";
import Featured from "@/components/hero/featured/featured";
import Services from "@/components/hero/service/services";
import Member from "@/components/hero/member/member";
import Pricing from "@/components/pricing/pricing";
import About from "@/components/hero/about/about";
import Timeline from "@/components/hero/timeline/timeline";
import Glary from "@/components/hero/galary/glary";
import { Riview } from "@/components/hero/review/review";
import Blog from "@/components/hero/blog/blog";
import Contact from "@/components/contact/contact";
import Faq from "@/components/faq/faq";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Layout>
        <Banner />
        <Featured />
        <Services />
        <Member />
        <Pricing/>
        <About/>
        <Timeline/>
        <Glary/>
        <Riview/>
        <Faq/>
        <Blog/> 
        <Contact/>
      </Layout>
    </>
  );
}
