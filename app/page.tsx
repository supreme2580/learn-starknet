import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import { SocialIcon } from "react-social-icons";

export default function Home() {
  return (
    <div className="bg-black w-full h-full min-h-screen flex flex-col items-center justify-center">
      <main className="w-[80%] min-h-[640px] border-2 border-green-500 rounded-lg p-2.5">
        <div className="flex flex-row items-start justify-between space-x-2.5 w-full h-full">
          <div className="flex-1 flex flex-col h-[620px] space-y-2.5">
            <Button>Connect Wallet</Button>
            <p className="text-white text-sm font-semibold">Events </p>
            <div className="flex-1 h-full overflow-y-scroll">
            </div>
            {/* Write to contract */}
            <Input type="text" placeholder="Enter data" />
            <p className="text-white text-sm font-semibold">Status: </p>
            <Button>Write Contract</Button>
            {/* Read contract */}
            <Button className="w-full h-10 bg-transparent border-2 border-green-500 text-green-500">Read contract</Button>
            <p className="text-white text-sm font-semibold">Data returned: </p>
            {/* Get block number */}
            <Input type="text" placeholder="Enter address" />
            <p className="text-white text-sm font-semibold">Block number of provided contract address: </p>
            <Button>Get Block number</Button>
            {/* Get balance */}
            <Input type="text" placeholder="Enter address" />
            <p className="text-white text-sm font-semibold">Balance of provided address: </p>
            <Button>Get Balance</Button>
          </div>
          <div className="flex-1 h-[620px] border-2 border-green-500 rounded-lg flex flex-col items-center justify-center">
            <div className="space-y-2.5 flex flex-col items-center justify-center">
              <Image src="/bored_ape_guest.avif" alt="Logo" width={200} height={200} className="w-[300px] h-[300px] border-2 border-green-500 rounded-full" />
              <p className="text-white text-3xl font-semibold text-center">Guest user</p>
              <div className="space-x-2.5">
                <SocialIcon url="https://x.com" className="border-2 border-white rounded-full" />
                <SocialIcon url="https://discord.com" />
                <SocialIcon url="https://github.com" bgColor="#000000" className="border-2 border-white rounded-full" />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
