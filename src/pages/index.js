import Image from "next/image";
import { Inter } from "next/font/google";

import Banner from "@/components/hero/banner";
import Layout from "@/components/layout/layout";
import Navbar from "@/components/navbar/navbar";
import Featured from "@/components/hero/featured/featured";
import Services from "@/components/hero/service/services";
import Member from "@/components/hero/member/member";
import Pricing from "@/components/pricing/pricing";

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
      </Layout>
    </>
  );
}
