import React from "react";
import Header from "./Header";
import Hero from "./Hero";
import UseCases from "./UseCases";
import Testimonial from "./Testimonial";
import FeatureGrid from "./FeatureGrid";
import HowItWorks from "./HowItWorks";
import VisualEditing from "./VisualEditing";
import Collaboration from "./Collaboration";
import CollaborationFeatures from "./CollaborationFeatures.jsx";
import CollaborationBenefits from "./CollaborationBenefits";
import DeploymentSection from "./DeploymentSection";
import ScalingSection from "./ScalingSection";
import MarketplaceSection from "./MarketplaceSection";
import PluginsSection from "./PluginsSection";
import CommunitySection from "./CommunitySection";
import TestimonialSection from "./TestimonialSection";
import Footer from "./Footer";

function MainLayout() {
  return (
    <div className="flex overflow-hidden flex-col items-center pt-16 bg-white">
      <Header />
      <main>
        <Hero />
        <UseCases />
        <Testimonial />
        <FeatureGrid />
        <HowItWorks />
        <VisualEditing />
        <Collaboration />
        <CollaborationFeatures />
        <CollaborationBenefits />
        <DeploymentSection />
        <ScalingSection />
        <MarketplaceSection />
        <PluginsSection />
        <CommunitySection />
        <TestimonialSection />
      </main>
      <Footer />
    </div>
  );
}

export default MainLayout;
