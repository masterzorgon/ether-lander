import { PlusGrid, PlusGridItem, PlusGridRow } from '@/components/plus-grid'
import { Button } from './button'
import { Container } from './container'
import { Gradient } from './gradient'
import { Link } from './link'
import { Subheading } from './text'
import { Logo } from './logo'

function CallToAction() {
	return (
		<div className="relative pt-20 pb-16 text-center sm:py-24">
			<hgroup>
				<Subheading>Get started</Subheading>
				<p className="mt-6 text-3xl font-medium tracking-tight text-gray-950 sm:text-5xl">
					Start Using Ether.fi
				</p>
			</hgroup>
			<p className="mx-auto mt-6 max-w-sm text-lg/6 text-gray-500">
				Borrow against your portfolio and spend on daily expenses, with Ether.fi Cash.
			</p>
			<div className="mt-6">
				<Button className="" href="https://www.ether.fi/app/cash/sign-up?redirect=/app/cash/safe">
					Sign up
				</Button>
			</div>
		</div>
	)
}

function SitemapHeading({ children }: { children: React.ReactNode }) {
	return <h3 className="text-sm/6 font-medium text-gray-950/50">{children}</h3>
}

function SitemapLinks({ children }: { children: React.ReactNode }) {
	return <ul className="mt-6 space-y-4 text-sm/6">{children}</ul>
}

function SitemapLink(props: React.ComponentPropsWithoutRef<typeof Link>) {
	return (
		<li>
			<Link
				{...props}
				className="font-medium text-gray-950 data-hover:text-gray-950/75"
			/>
		</li>
	)
}

function Sitemap() {
	return (
		<>
			<div>
				<SitemapHeading>Technical</SitemapHeading>
				<SitemapLinks>
					{/* <SitemapLink href="#">Docs</SitemapLink> */}
					{/* <SitemapLink href="/terms#cookie-policy">Github</SitemapLink> */}
					<SitemapLink href="https://www.youtube.com/watch?v=Aq5WXmQQooo&list=RDAq5WXmQQooo&start_radio=1">Audits</SitemapLink>
				</SitemapLinks>
			</div>
			<div>
				<SitemapHeading>Socials</SitemapHeading>
				<SitemapLinks>
					<SitemapLink href="https://www.youtube.com/watch?v=Aq5WXmQQooo&list=RDAq5WXmQQooo&start_radio=1">Twitter</SitemapLink>
					<SitemapLink href="https://www.youtube.com/watch?v=Aq5WXmQQooo&list=RDAq5WXmQQooo&start_radio=1">Telegram</SitemapLink>
					<SitemapLink href="https://www.youtube.com/watch?v=Aq5WXmQQooo&list=RDAq5WXmQQooo&start_radio=1">Discord</SitemapLink>
					{/* <SitemapLink href="mailto:hi@project0.xyz">hi@project0.xyz</SitemapLink> */}
				</SitemapLinks>
			</div>
			<div>
				<SitemapHeading>Company</SitemapHeading>
				<SitemapLinks>
					<SitemapLink href="https://www.youtube.com/watch?v=Aq5WXmQQooo&list=RDAq5WXmQQooo&start_radio=1">Website</SitemapLink>
					<SitemapLink href="https://www.youtube.com/watch?v=Aq5WXmQQooo&list=RDAq5WXmQQooo&start_radio=1">Media Kit</SitemapLink>
				</SitemapLinks>
			</div>
		</>
	)
}

function SocialIconX(props: React.ComponentPropsWithoutRef<'svg'>) {
	return (
		<svg viewBox="0 0 16 16" fill="currentColor" {...props}>
			<path d="M12.6 0h2.454l-5.36 6.778L16 16h-4.937l-3.867-5.594L2.771 16H.316l5.733-7.25L0 0h5.063l3.495 5.114L12.6 0zm-.86 14.376h1.36L4.323 1.539H2.865l8.875 12.837z" />
		</svg>
	)
}



// function SocialIconTelegram(props: React.ComponentPropsWithoutRef<'svg'>) {
// 	return (
// 		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" fill="currentColor" {...props}>
// 			<path d="M25,2c12.703,0,23,10.297,23,23S37.703,48,25,48S2,37.703,2,25S12.297,2,25,2z M32.934,34.375	c0.423-1.298,2.405-14.234,2.65-16.783c0.074-0.772-0.17-1.285-0.648-1.514c-0.578-0.278-1.434-0.139-2.427,0.219	c-1.362,0.491-18.774,7.884-19.78,8.312c-0.954,0.405-1.856,0.847-1.856,1.487c0,0.45,0.267,0.703,1.003,0.966	c0.766,0.273,2.695,0.858,3.834,1.172c1.097,0.303,2.346,0.04,3.046-0.395c0.742-0.461,9.305-6.191,9.92-6.693	c0.614-0.502,1.104,0.141,0.602,0.644c-0.502,0.502-6.38,6.207-7.155,6.997c-0.941,0.959-0.273,1.953,0.358,2.351	c0.721,0.454,5.906,3.932,6.687,4.49c0.781,0.558,1.573,0.811,2.298,0.811C32.191,36.439,32.573,35.484,32.934,34.375z"></path>
// 		</svg>
// 	)
// }

function SocialIconDiscord(props: React.ComponentPropsWithoutRef<'svg'>) {
	return (
		<svg viewBox="0 0 24 24" fill="currentColor" {...props}>
			<path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
		</svg>
	)
}

function SocialLinks() {
	return (
		<>
			<Link
				href="https://x.com/ether_fi"
				target="_blank"
				aria-label="Visit us on X"
				className="text-gray-950 data-hover:text-gray-950/75"
			>
				<SocialIconX className="size-4" />
			</Link>
			{/* <Link
				href="https://t.me/p0dotxyz"
				target="_blank"
				aria-label="Visit us on Telegram"
				className="text-gray-950 data-hover:text-gray-950/75"
			>
				<SocialIconTelegram className="size-6" />
			</Link> */}
			<Link
				href="https://discord.com/invite/etherfi"
				target="_blank"
				aria-label="Visit us on Discord"
				className="text-gray-950 data-hover:text-gray-950/75"
			>
				<SocialIconDiscord className="size-6" />
			</Link>
		</>
	)
}

function Copyright() {
	return (
		<div className="text-sm/6 text-gray-950">
			&copy; {new Date().getFullYear()} Ether.fi.
		</div>
	)
}

export function Footer() {
	return (
		<footer>
			<Gradient className="relative">
				<div className="absolute inset-2 rounded-4xl bg-white/80" />
				<Container>
					<CallToAction />
					<PlusGrid className="pb-16">
						<PlusGridRow>
							<div className="grid grid-cols-2 gap-y-10 pb-6 lg:grid-cols-6 lg:gap-8">
								<div className="col-span-2 flex">

								</div>
								<div className="col-span-2 grid grid-cols-2 gap-x-8 gap-y-12 lg:col-span-4 lg:grid-cols-subgrid lg:pt-6">
									<Sitemap />
								</div>
							</div>
						</PlusGridRow>
						<PlusGridRow className="flex justify-between">
							<div>
								<PlusGridItem className="py-3">
									<Copyright />
								</PlusGridItem>
							</div>
							<div className="flex">
								<PlusGridItem className="flex items-center gap-8 py-3">
									<SocialLinks />
								</PlusGridItem>
							</div>
						</PlusGridRow>
					</PlusGrid>
				</Container>
			</Gradient>
		</footer>
	)
}
