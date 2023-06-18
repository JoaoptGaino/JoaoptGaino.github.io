import About from "@/components/About";
import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import Main from "@/components/Main";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Head from "next/head";

export default function Home() {
  return (
    <div>
      <Head>
        <title>JoaoptGaino</title>
        <meta
          name="description"
          content="I’m a front-end web developer specializing in building (and occasionally designing) exceptional digital experiences."
        />
        <link rel="icon" href="/assets/logo_dark_theme.png" />
      </Head>
      <Main />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}
