import { Hero } from '../layout/Hero';
import AboutMe from '../layout/AboutMe';
import Education from '../layout/Education';
import FreelanceProjects from '../layout/FreelanceProjects';
import SkillsSection from '../layout/SkillsSection';
import { Projects } from '../layout/Projects';
import { FeaturedArticles } from '../layout/FeaturedArticles';
import Contact from '../layout/Contact';
import SEO from '../common/SEO';

const homeSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Avishek Adhikary",
  "url": "https://avishekadhikary.in",
  "jobTitle": "Full Stack Developer",
  "sameAs": [
    "https://github.com/avishek0769",
    "https://linkedin.com/in/avishekadhikary",
    "https://x.com/avishek0769",
    "https://medium.com/@avishekadhikary"
  ]
};

export default function Home() {
  return (
    <>
      <SEO schema={homeSchema} />
      <Hero />
      <AboutMe />
      <Education />
      <FreelanceProjects />
      <Projects />
      <SkillsSection />
      <FeaturedArticles />
      <Contact />
    </>
  );
}
