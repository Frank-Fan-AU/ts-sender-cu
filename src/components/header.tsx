"use client"

import { ConnectButton } from "@rainbow-me/rainbowkit"
import { FaGithub } from "react-icons/fa"
import Image from "next/image"

export default function Header() {
    return (
        <nav className="px-8 py-4.5 border-b-[1px] border-zinc-100 flex flex-row justify-between items-center bg-white xl:min-h-[77px]">
            <div className="flex items-center"> 
    <div className="flex-shrink-0">
    <div className="flex items-center space-x-2">
      <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
       <span className="text-white font-bold text-sm">T</span>
     </div>
    <span className="text-xl font-bold text-gray-900">TSender</span>
  </div>
</div>
</div>
            <h3 className="italic text-left hidden text-zinc-500 lg:block">
                The most gas efficient airdrop contract on earth, built in huff 🐎
            </h3>
            <div className="flex items-center gap-4">
                <ConnectButton />
            </div>
        </nav>
    )
}


