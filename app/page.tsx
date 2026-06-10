import { siteContent } from "@/content/site";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Experience } from "@/components/sections/Experience";
import { Projects } from "@/components/sections/Projects";
import { Articles } from "@/components/sections/Articles";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  const { profile, about, experience, projects, articles } = siteContent;

  return (
    <>
      <Header />
      <main id="main-content">
        <Hero profile={profile} />
        <About about={about} />
        <Experience experience={experience} />
        <Projects projects={projects} />
        <Articles articles={articles} />
        <Contact profile={profile} />
      </main>
      <Footer />
    </>
  );
}
