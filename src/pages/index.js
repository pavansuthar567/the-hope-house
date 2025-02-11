import BannerSlider from "@/components/BannerSlider/BannerSlider";
// import BrandArea from "@/components/BrandArea/BrandArea";
import Categories from "@/components/Categories/Categories";
import CtaArea from "@/components/CtaArea/CtaArea";
import FunFacts from "@/components/FunFacts/FunFacts";
import GuideArea from "@/components/GuideArea/GuideArea";
import Header from "@/components/Header/Header";
import Layout from "@/components/Layout/Layout";
import NewsArea from "@/components/NewsArea/NewsArea";
import ProjectsArea from "@/components/ProjectsArea/ProjectsArea";
import TeamArea from "@/components/TeamArea/TeamArea";
import TeamMainArea from "@/components/TeamArea/TeamMainArea";
import TestimonialsArea from "@/components/Testimonials/TestimonialsArea";
import TogetherArea from "@/components/TogetherArea/TogetherArea";
import WhyChoose from "@/components/WhyChoose/WhyChoose";

const Home = () => {
  return (
    <Layout>
      <Header />
      <BannerSlider />
      <Categories />
      <CtaArea />
      <ProjectsArea />
      <WhyChoose />
      <FunFacts />
      <TogetherArea />
      {/* <BrandArea /> */}
      <TestimonialsArea />
      <TeamArea />
      <TeamMainArea count={8} />
      <NewsArea />
      <GuideArea />
    </Layout>
  );
};

export default Home;
