import { BentoCard } from '@/components/bento-card'
import { Button } from '@/components/button'
import { Container } from '@/components/container'
import { Footer } from '@/components/footer'
import { Gradient } from '@/components/gradient'
import { Link } from '@/components/link'
// import { Navbar } from '@/components/navbar'
import { Heading, Subheading } from '@/components/text'
import { Preview } from '@/components/preview'
import Carousel from '@/components/carousel'
import { AnimatedNumber } from '@/components/animated-number'
import { Newsletter } from '@/components/newsletter'

import { ChevronRightIcon } from '@heroicons/react/16/solid'
import type { Metadata } from 'next'
import { Keyboard } from '@/components/keyboard'
import { LogoCluster } from '@/components/logo-cluster'
import { Map } from '@/components/map'

export const metadata: Metadata = {
    description:
        'Save, grow, spend.',
}

function Hero() {
    return (
        <div id="hero" className="relative">
            <Gradient className="absolute inset-2 bottom-0 rounded-4xl ring-1 ring-white/10 ring-inset" />
            <Container className="relative">
                <div className="pt-16 pb-24 sm:py-24 flex flex-col justify-center items-center text-center">
                    <img src="/etherfi-wordmark.png" alt="Etherfi Logo" className="inline-block align-middle mb-6 mx-2 w-100" />
                    <h1 className="pb-1 font-display text-balance text-6xl leading-[1.1] sm:text-8xl font-medium tracking-tight text-white">
                        Spend Your
                        <span className="inline-block align-middle mx-3">
                            <img src="/HL.svg" alt="Hyperliquid Icon" width={60} height={60} className="inline-block align-middle mb-6 mx-2" />
                        </span>
                        $HYPE
                        <br />
                        Without Selling
                    </h1>

                    <p className="my-8 max-w-3xl text-xl leading-8 font-medium text-white/75 sm:text-2xl sm:leading-9">
                        Borrow against your $$HYPE and $$beHYPE and spend anywhere with a globally accepted Visa card. Keep trading, keep earning yield, and unlock real-world utility with your $$HYPE.
                    </p>

                    <div className="max-lg:mt-16 lg:col-span-1">
                        <hr className="mt-6 border-t border-gray-300" />
                        <dl className="mt-6 grid grid-cols-2 gap-x-8 gap-y-4 sm:grid-cols-3">
                            <div className="flex flex-col gap-y-2 border-b border-dotted border-gray-300 pb-4">
                                <dt className="text-sm/6 text-gray-300">24h Volume</dt>
                                <dd className="order-first text-6xl font-medium tracking-tight bg-gradient-to-b from-white to-[#97fde4] bg-clip-text text-transparent">
                                    $<AnimatedNumber start={0} end={1.5} decimals={1} />M
                                </dd>
                            </div>
                            <div className="flex flex-col gap-y-2 border-b border-dotted border-gray-300 pb-4">
                                <dt className="text-sm/6 text-gray-300">Daily Users</dt>
                                <dd className="order-first text-6xl font-medium tracking-tight bg-gradient-to-b from-white to-[#97fde4] bg-clip-text text-transparent">
                                    <AnimatedNumber start={2.5} end={40} />K
                                </dd>
                            </div>
                            <div className="flex flex-col gap-y-2 border-b border-dotted border-gray-300 pb-4">
                                <dt className="text-sm/6 text-gray-300">Borrow Rate</dt>
                                <dd className="order-first text-6xl font-medium tracking-tight bg-gradient-to-b from-white to-[#97fde4] bg-clip-text text-transparent">
                                    <AnimatedNumber start={0} end={4} />%
                                </dd>
                            </div>
                        </dl>
                    </div>

                    <div className="mt-12 flex flex-col gap-x-6 gap-y-4">
                        <Button variant="secondary" href="#">
                            <img src="/aaplw.png" alt="Apple Icon" width={15} height={15} className="inline-block align-middle mr-2 mb-1" />
                            Download Today
                        </Button>
                        <p className="text-sm text-white/75">
                            Physical Cards Available.<br />
                            <a href="https://etherfi.com/" className="text-white/75 underline hover:text-white">Discover more</a>
                        </p>
                    </div>
                </div>

            </Container>
        </div>
    )
}

function BentoSection() {
    return (
        <div id="features" className="bg-[#171719] py-24">
            <Container>
                <Subheading dark>Features</Subheading>
                <Heading as="h3" className="mt-2 max-w-3xl" dark>
                    A Whole New Way to Spend.
                </Heading>

                <div className="sm:mb-[-500px] mt-10 grid grid-cols-1 gap-4 sm:mt-20 lg:grid-cols-6 lg:grid-rows-2">
                    <BentoCard
                        dark
                        eyebrow="You Own Your Assets"
                        title="Non-Custodial"
                        description="Your $HYPE and $beHYPE are stored in your wallet, you are the sole owner of your assets."
                        graphic={<Map />}
                        className="lg:col-span-2 lg:rounded-bl-4xl"
                    />
                    <BentoCard
                        dark
                        eyebrow="Spend Globally"
                        title="Over 100M Accepted Merchants"
                        description="Buy a coffee or book a flight with your $HYPE at over 100M merchants worldwide."
                        graphic={<Map />}
                        className="lg:col-span-2"
                    />
                    <BentoCard
                        dark
                        eyebrow="Earn Yield"
                        title="Up to 10% APY on $HYPE/$beHYPE"
                        description="Earn yield on your $HYPE and $beHYPE by LP'ing into our yield-bearing vaults."
                        graphic={<Map />}
                        className="max-lg:rounded-b-4xl lg:col-span-2 lg:rounded-br-4xl"
                    />
                </div>
            </Container>
        </div>
    )
}

export default function Home() {
    return (
        <main className="overflow-hidden">
            <Hero />
            <section id="carousel">
                <Container className="mt-10">
                    <Carousel />
                </Container>
            </section>
            <section className="">
                <div id="newsletter">
                    <Newsletter />
                </div>
                <BentoSection />
            </section>
            <Footer />
        </main>
    )
}
