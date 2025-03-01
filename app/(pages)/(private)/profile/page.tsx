import CardsSection from "@/app/components/sections/CardsSection";
import ExtraInfoSection from "@/app/components/sections/ExtraInfoSection";
import LocalBusinessesSection from "@/app/components/sections/LocalBusinessSection";
import RewardsSection from "@/app/components/sections/RewardsSection";
import SchedulerSection from "@/app/components/sections/SchedulerSection";
import SearchHeader from "@/app/components/sections/SearchHeader";

export default function Page() {
    return (
      <div>
        <SearchHeader />
        <CardsSection />
        <RewardsSection />
        <SchedulerSection />
        <LocalBusinessesSection />
        <ExtraInfoSection />
      </div>
    );
  }
  