// src/components/InfiniteCarousel.tsx
'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { CurrencyDollarIcon } from '@heroicons/react/20/solid'

const payouts = [
    {
        id: 1,
        name: '@crypto_whale',
        pfp: 'https://pbs.twimg.com/profile_images/1905420963128508417/tnL4ltal_400x400.jpg',
        amount: '2.4 ETHFI',
        week: '9/9/25'
    },
    {
        id: 2,
        name: '@defi_alpha',
        pfp: 'https://pbs.twimg.com/profile_images/1877880032292388864/aOzokCej_400x400.jpg',
        amount: '1.8 ETHFI',
        week: '3/10/25'
    },
    {
        id: 3,
        name: '@etherfi_og',
        pfp: 'https://pbs.twimg.com/profile_images/1615506283502927873/OPwLON_X_400x400.jpg',
        amount: '3.2 ETHFI',
        week: '8/10/25'
    },
    {
        id: 4,
        name: '@stake_master',
        pfp: 'https://pbs.twimg.com/profile_images/1964433713686884352/hNB7mr-x_400x400.jpg',
        amount: '1.5 ETHFI',
        week: '9/10/25'
    },
    {
        id: 5,
        name: '@liquid_staker',
        pfp: 'https://pbs.twimg.com/profile_images/1967109339585388544/9gwn7Fn6_400x400.jpg',
        amount: '2.1 ETHFI',
        week: '3/12/25'
    },
    {
        id: 6,
        name: '@eth_bull',
        pfp: 'https://pbs.twimg.com/profile_images/1956760267330572288/RLKoQJwK_400x400.jpg',
        amount: '4.7 ETHFI',
        week: '1/1/25'
    }
]

const loopPayouts = [...payouts, ...payouts, ...payouts]

type PayoutItem = (typeof payouts)[number]

function CarouselCard({ item }: { item: PayoutItem }) {
    return (
        <div className="flex-shrink-0 w-[18rem] sm:w-[20rem] px-3 sm:px-4">
            <div className="relative overflow-hidden rounded-lg bg-gray-800/50 backdrop-blur-sm p-6 shadow-lg border border-gray-700/50 hover:border-gray-600/70 transition-colors">
                <dt>
                    <div className="absolute rounded-full border-2 border-gray-600/50">
                        <img
                            src={item.pfp}
                            alt={`${item.name} profile picture`}
                            className="h-12 w-12 rounded-full object-cover"
                        />
                    </div>
                    <div className="flex justify-between">
                        <p className="ml-16 truncate text-sm font-medium text-gray-300">{item.name}</p>
                        <p className="truncate text-sm font-medium text-white bg-gray-700/20 border border-white/20 rounded-full px-2 py-0">
                            {item.week}
                        </p>
                    </div>
                </dt>
                <dd className="ml-16 flex items-center gap-x-4">
                    <p className="text-2xl font-semibold text-white">{item.amount}</p>
                    <img src="/ethfi-white.png" alt="ETHFI Icon" width={25} height={25} className="" />
                </dd>
            </div>
        </div>
    )
}

export default function Carousel() {
    const duration = 35

    return (
        <div className="space-y-4">
            {/* Mini header */}
            <div className="text-center mb-10">
                <h3 className="text-3xl font-semibold text-white/90">Ether.fi Cash users are earning 3% cash back</h3>
            </div>

            {/* Carousel container */}
            <div
                className="
            relative w-full overflow-hidden bg-[#171719]
            before:pointer-events-none before:absolute before:left-0 before:top-0 before:z-10
            before:h-full before:w-24 before:bg-[linear-gradient(to_right,#171719_0%,rgba(23,23,25,0)_100%)]
            before:content-['']
            after:pointer-events-none after:absolute after:right-0 after:top-0 after:z-10
            after:h-full after:w-24 after:-scale-x-100
            after:bg-[linear-gradient(to_right,#171719_0%,rgba(23,23,25,0)_100%)]
            after:content-['']
          "
            >
                <motion.div
                    className="flex w-max"
                    animate={{ x: ['0%', '-50%'] }}
                    transition={{ duration, ease: 'linear', repeat: Infinity }}
                >
                    {loopPayouts.map((item, idx) => (
                        <CarouselCard key={`${item.id}-${idx}`} item={item} />
                    ))}
                </motion.div>
            </div>
        </div>
    )
}
