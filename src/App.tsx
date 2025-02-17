import React from 'react';
import { ChevronDown, Coins, Users, Trophy, ArrowRight } from 'lucide-react';
import { FaDiscord, FaXTwitter } from 'react-icons/fa6';

function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 antialiased">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pixel-bg overflow-hidden">
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        <div className="absolute top-4 right-4 flex gap-4">
          <a
            href="https://x.com/DigSol01"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 bg-gray-800 rounded pixel-border hover:bg-gray-700 transition-colors"
          >
            <FaXTwitter className="w-5 h-5" />
          </a>
          <a
            href="https://discord.gg/jUgvfzB6Gq"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 bg-gray-800 rounded pixel-border hover:bg-gray-700 transition-colors"
          >
            <FaDiscord className="w-5 h-5" />
          </a>
        </div>
        <div className="relative container mx-auto px-6 py-16 text-center">
          <img 
            src="/assets/dig.png" 
            alt="DIG Token Logo" 
            className="w-32 h-32 mx-auto mb-8 pixel-border"
          />
          <h1 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight leading-relaxed">
            $DIG: The Official Token of the GFM Trenches
          </h1>
          <p className="text-lg md:text-xl mb-12 text-gray-300 leading-relaxed">
            Join our Discord to find and share GFM GEMS
          </p>
          <a
            href="https://discord.gg/jUgvfzB6Gq"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 text-base font-bold pixel-button"
          >
            <FaDiscord className="w-5 h-5 mr-2" />
            Join the Trenches
          </a>
          <div className="mt-16">
            <ChevronDown className="w-6 h-6 mx-auto animate-bounce" />
          </div>
        </div>
      </section>

      {/* Tokenomics Section */}
      <section className="py-24 bg-gray-800">
        <div className="container mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-16 leading-relaxed">
            Tokenomics
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="flex items-start space-x-4 p-6 bg-gray-700 rounded pixel-border">
                <Coins className="w-10 h-10 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-bold mb-2">GEMFinder Rewards</h3>
                  <p className="text-sm text-gray-300 leading-relaxed">
                    10% of initial token supply reserved for rewarding successful calls
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4 p-6 bg-gray-700 rounded pixel-border">
                <Trophy className="w-10 h-10 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-bold mb-2">Caller Rewards</h3>
                  <p className="text-sm text-gray-300 leading-relaxed">
                    Pre-Bond to 1M+ Mcap calls within the GFM Trenches Discord to get 5M $DIG
                  </p>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square bg-gray-700 rounded-lg pixel-border p-8 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-4xl font-bold mb-4">10%</div>
                  <div className="text-lg text-gray-300">Reward Pool</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section className="py-24 bg-gray-900">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-16 leading-relaxed">
            Join Our Community
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 bg-gray-800 rounded pixel-border">
              <Users className="w-10 h-10 mx-auto mb-4" />
              <h3 className="text-lg font-bold mb-4">Active Community</h3>
              <p className="text-sm text-gray-300 leading-relaxed">
                Connect with fellow traders and gem hunters
              </p>
            </div>
            <div className="p-6 bg-gray-800 rounded pixel-border">
              <Trophy className="w-10 h-10 mx-auto mb-4" />
              <h3 className="text-lg font-bold mb-4">Exclusive Rewards</h3>
              <p className="text-sm text-gray-300 leading-relaxed">
                Earn $DIG tokens for successful calls
              </p>
            </div>
            <div className="p-6 bg-gray-800 rounded pixel-border">
              <FaDiscord className="w-10 h-10 mx-auto mb-4" />
              <h3 className="text-lg font-bold mb-4">Discord Community</h3>
              <p className="text-sm text-gray-300 leading-relaxed">
                Join our Discord for real-time updates and calls
              </p>
            </div>
          </div>
          <div className="mt-16">
            <a
              href="https://discord.gg/jUgvfzB6Gq"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 text-base font-bold pixel-button"
            >
              Join Discord Now
              <ArrowRight className="w-5 h-5 ml-2" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;