import HeroSection from './PageSections/heroSection'
import FeatureSection from './PageSections/featureSection'
import CtaSection from "./PageSections/ctaSection";
import BlogSection from './PageSections/blogSection';


export default function Index() {
    
    return (
      <>
        <HeroSection />
        <FeatureSection />
        <BlogSection />
        <CtaSection />
      </>
    );
}