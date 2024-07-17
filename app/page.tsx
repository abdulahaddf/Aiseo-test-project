import AccountDetails from "@/components/AccountDetails";
import Nav from "@/components/Nav";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen px-10 py-5 text-white bg-dark">
     <Nav/>
     <div>
      <AccountDetails/>
      
     </div>
    </main>
  );
}
