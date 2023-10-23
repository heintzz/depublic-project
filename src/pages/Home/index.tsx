import Highlight from "components/Carousel/Highlight";
import Menu from "components/Carousel/Menu";
import UpcomingEvent from "components/Carousel/UpcomingEvent";
import MainLayout from "components/MainLayout";
import NavigateButton from "components/NavigateButton";
import SectionSeparator from "components/SectionSeparator";

import TwoBubbleOrnament from "assets/ornaments/two-bubble.svg";

import PopularBlog from "components/Carousel/PopularBlog";
import Footer from "components/Footer";
import SearchBar from "components/SearchBar";
import { useEffect, useState } from "react";
import { SummaryType } from "src/types/highlight.type";
import { highlightServices } from "services/highlight.services";

export default function HomePage() {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<SummaryType>();

  useEffect(() => {
    (async () => {
      setLoading(true);
      try {
        const res = await highlightServices.getHighlight();
        setData(res.data);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    })();
  }, []);

  return (
    <MainLayout>
      <div className="bg-[#FEF6E5] px-7 pt-12 relative text-base">
        <img
          src={TwoBubbleOrnament}
          alt="bubble ornament"
          className="absolute -top-10 -right-10 w-60 -z-1"
        />
        <SearchBar />
        <div className="mt-14 pb-28 relative z-[1]">
          <p className="max-w-[200px] text-3xl font-semibold mb-6">Tagline Hero Section</p>
          <NavigateButton path="#" mode="btn-md-full">
            Download Aplikasi
          </NavigateButton>
        </div>
        <Menu />
      </div>
      <SectionSeparator additionalClassname="mt-20" />
      <Highlight loading={loading} data={data?.top_events || []} />
      <UpcomingEvent loading={loading} data={data?.events || []} />
      <SectionSeparator />
      <PopularBlog loading={loading} data={data?.blogs || []} />
      <Footer />
    </MainLayout>
  );
}
