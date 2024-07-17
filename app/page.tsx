import AccountDetails from "@/components/AccountDetails";
import BillingHistory from "@/components/BillingHistory";
import Nav from "@/components/Nav";
import PlanCard from "@/components/PlanCards";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen max-w-screen-2xl mx-auto py-5 text-white-600 bg-dark">
     <Nav/>
     <div className="px-2 md:px-[170px]">
      <AccountDetails/>
      <BillingHistory/>
      <PlanCard/>
     </div>
    </main>
  );
}
