import BannerSlider from "../Components/BannerSlider";
import IssueCategories from "../Components/IssueCategories";
import CommunityStats from "../Components/CommunityStats";
import VolunteerCTA from "../Components/VolunteerCTA";
import RecentComplaints from "../Components/RecentComplaints";
import Features from "../Components/Features";
import HowItWorks from "../Components/HowItWorks";
import Testimonials from "../Components/Testimonials";
import FAQ from "../Components/FAQ";
import Newsletter from "../Components/Newsletter";
import { Fade } from "react-awesome-reveal";

const Home = () => {
  return (
    <div>
      <title>Clean Hub - Home</title>

      <Fade triggerOnce cascade damping={0.15}>
        <BannerSlider />
        <Features />
        <IssueCategories />
        <HowItWorks />
        <RecentComplaints />
        <CommunityStats />
        <Testimonials />
        <FAQ />
        <VolunteerCTA />
        <Newsletter />
      </Fade>
    </div>
  );
};

export default Home;
