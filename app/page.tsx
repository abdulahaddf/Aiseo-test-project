import AccountDetails from "@/components/AccountDetails";
import BillingHistory from "@/components/BillingHistory";
import Nav from "@/components/Nav";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen px-10 py-5 text-white bg-dark">
     <Nav/>
     <div className="px-20">
      <AccountDetails/>
      <BillingHistory/>
     </div>
    </main>
  );
}
