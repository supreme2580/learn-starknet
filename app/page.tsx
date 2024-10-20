import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import { SocialIcon } from "react-social-icons";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"

export default function Home() {
  return (
    <div className="bg-[#161618] w-full h-full min-h-screen flex flex-col items-center justify-center">
      <main className="w-[80%] min-h-[640px] border-2 border-[#222122] bg-[#1C1C1E] rounded-xl p-20">
        <div className="flex flex-row items-start justify-between space-x-2.5 w-full h-full">
          <div className="flex-1 flex flex-col h-[520px] space-y-2.5">
            <Dialog>
              <DialogTrigger>
                <Button>Connect Wallet</Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Connect Wallet</DialogTitle>
                  <DialogDescription>Select a starknet wallet to connect to</DialogDescription>
                  <Button>Argent</Button>
                  <Button>Braavos</Button>
                </DialogHeader>
              </DialogContent>
            </Dialog>
            <div className="flex-1 h-full overflow-y-scroll" />
            {/* Write to contract */}
            <p className="text-white text-sm font-semibold">Write to contract: </p>
            <Input type="text" placeholder="Enter receipient" />
            <p className="text-white text-sm font-semibold">Status: </p>
            <Button>Send Transaction</Button>
            {/* Read contract */}
            <p className="text-white text-sm font-semibold">Read contract symbol: </p>
            <Input type="text" placeholder="Contract address" />
            <p className="text-white text-sm font-semibold">Data returned: </p>
            {/* Get balance */}
            <Input type="text" placeholder="Enter address" />
            <p className="text-white text-sm font-semibold">Balance of provided address: </p>
            <Button>Get Balance</Button>
          </div>
          <div className="flex-1 h-[520px] flex flex-col items-center justify-center">
            <div className="space-y-5 flex flex-col items-center justify-center">
              <Image src="/bored_ape_guest.avif" alt="Logo" width={200} height={200} className="w-[300px] h-[300px] rounded-full" />
              <p className="text-white text-3xl font-medium text-center">Guest user</p>
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
