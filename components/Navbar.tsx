'use client';

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ConnectButton } from '@rainbow-me/rainbowkit';
import Link from 'next/link';
import { useAccount } from 'wagmi';

export function Navbar() {
  const { address, isConnected } = useAccount(); // Real-time wallet status from Wagmi

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="text-xl font-bold text-primary">
              BaseAI Tracker
            </Link>
            <div className="ml-10 flex items-baseline space-x-4">
              <Link href="/" className="hover:text-secondary">Home</Link>
              <Link href="/trending" className="hover:text-secondary">Trending</Link>
              <Link href="/tokens" className="hover:text-secondary">Tokens</Link>
              <Link href="/ai-insights" className="hover:text-secondary">AI Insights</Link>
              <Link href="/portfolio" className="hover:text-secondary">Portfolio</Link>
              <Link href="/alerts" className="hover:text-secondary">Alerts</Link>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <Input placeholder="Search token/address" className="w-64" />
            {isConnected ? (
              <Button variant="outline">
                {address ? `${address.slice(0, 6)}...${address.slice(-4)}` : 'Connected'}
              </Button>
            ) : (
              <ConnectButton />
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
