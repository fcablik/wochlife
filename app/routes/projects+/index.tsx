import { NavLink } from '@remix-run/react'
import { Button } from '#app/components/ui/button.tsx'

export default function PortfolioFreelance() {
	return (
		<div className="max-md-to-lg:hidden">
			<h4 className="mb-9 text-center text-lg font-semibold capitalize md:text-xl">
				Discover My Projects
			</h4>

			<div className="custom-content-box-height pb-6">
				<div className="mb-6 grid w-full gap-3 md:grid-cols-2 xl:px-8 2xl:px-16">
					<NavLink to="custom-apps">
						{({ isActive }) => (
							<Button
								className="w-full capitalize"
								variant={isActive ? 'highlight' : 'default'}
							>
								custom web apps
							</Button>
						)}
					</NavLink>

					<NavLink to="e-commerce">
						{({ isActive }) => (
							<Button
								className="w-full capitalize"
								variant={isActive ? 'highlight' : 'default'}
							>
								e-commerce
							</Button>
						)}
					</NavLink>

					<NavLink to="accommodations-apps">
						{({ isActive }) => (
							<Button
								className="w-full capitalize"
								variant={isActive ? 'highlight' : 'default'}
							>
								accommodations web apps
							</Button>
						)}
					</NavLink>

					{/* <NavLink to="chaos-escape-app">
						{({ isActive }) => (
							<Button
								className="capitalize"
								variant={isActive ? 'highlight' : 'default'}
							>
								Car Dealer Finder App
							</Button>
						)}
					</NavLink> */}

					{/* <NavLink to="steretwear">
						{({ isActive }) => ( */}
					<Button
						className="w-full capitalize"
						// variant={isActive ? 'highlight' : 'default'}
						variant="disabled"
					>
						streetwear
					</Button>
					{/* )}
					</NavLink> */}

					{/* <NavLink to="nft-collection">
						{({ isActive }) => ( */}
					<Button
						className="w-full capitalize"
						// variant={isActive ? 'highlight' : 'default'}
						variant="disabled"
					>
						nft collection
					</Button>
					{/* )}
					</NavLink> */}

					{/* <NavLink to="web3-nft-game">
						{({ isActive }) => ( */}
					<Button
						className="w-full capitalize"
						// variant={isActive ? 'highlight' : 'default'}
						variant="disabled"
					>
						web3 NFT game
					</Button>
					{/* )}
					</NavLink> */}
				</div>
			</div>
		</div>
	)
}
