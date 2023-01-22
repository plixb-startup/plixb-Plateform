import CtaSection from "./PageSections/ctaSection"
import FeatureSection from "./PageSections/featureSection"
import HeroSection from "./PageSections/heroSection"
import HowWeSell from "./PageSections/howWeSell"
export default function Index() {
    return (
        <>
            <HeroSection />
            <FeatureSection />
            <HowWeSell />
            <CtaSection/>
        </>
    )
}