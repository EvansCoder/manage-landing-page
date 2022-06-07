import Head from "next/head";
import About from "../components/About/About";
import Header from "../components/Header/Header";
import HeroSection from "../components/HeroSection/HeroSection";

export default function Home() {
  return (
    <div>
      <Head>
        <title>manage</title>
        <meta name="description" content="manage-landing-page | FrontedMentor" />
        <meta name="description" content="Created by github.com/evanscoder" />
        <link rel="icon" href="/images/favicon.ico" />
      </Head>
      <div className=" max-w-full h-screen  mx-10 lg:mx-32 z-10">
        <Header />
        <HeroSection />
        <About/>
      </div>
    </div>
  );
}
