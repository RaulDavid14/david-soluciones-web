import LandingLayout from '../layout/LandingLayout';
import Hero from "../sections/Hero";
import Services from '../sections/Services';
import Situations from '../sections/Situations';
import WhyChooseUs from '../sections/WhyChooseUs';
import CallToAction from '../sections/CallToAction';
import HowDevelopmentWorks from '../sections/HowDevelopmentWorks';
import QualificationSection from '../sections/QualificationSection';


export default function LandingPage() {
  return (
    <LandingLayout>
      <Hero />
      <Situations />
      <Services />
      <QualificationSection />
      <HowDevelopmentWorks />
      <WhyChooseUs />
      <CallToAction />
    </LandingLayout>
  );
}
