export default function PortfolioForCompaniesMedi() {
	const listStyleClasslist =
		"flex items-center before:mr-2 before:content-['#'] before:text-highlight before:text-lg"
	const listStyleClasslist2 =
		"before:mr-2 before:content-['#'] before:text-highlight before:text-lg"

	return (
		<>
			<h4 className="mb-2 text-lg font-semibold">medi.de/cs (Maxis, a.s.)</h4>
			<p className="mb-6">- Frontend Web Development</p>

			<div className="mb-6 md:pr-6">
				<p className="mb-2">
					Position with focus on redesign, improvements, new features
					implementations and third party services connections:
				</p>

				<ul className="pl-2">
					<li className={listStyleClasslist2}>
						websites redesign into a new gen responsive web-standard -
						responsive design implementation
					</li>
					<li className={listStyleClasslist2}>
						new custom features, new structures and components implementation
					</li>
					<li className={listStyleClasslist2}>
						various API connections - 3rd party shipping and payment services,
						company ERP{'<->'}E-commerce-platform connections and data transfers
					</li>
					<li className={listStyleClasslist2}>
						this position has deepened my knowledge
						about business structures, In-house SW, CMS, ERPs, products
						management, stock management and real-time communications and data alignment between company departments
					</li>
				</ul>
			</div>

			<div className="max-lg:mb-4">
				<p>Development-Stack:</p>

				<ul className="pl-2">
					<li className={listStyleClasslist}>CSS / SCSS</li>
					<li className={listStyleClasslist}>
						Latte - Nette Templating Engine
					</li>
					<li className={listStyleClasslist}>Nette - PHP Framework</li>
					<li className={listStyleClasslist}>PHP</li>
					<li className={listStyleClasslist}>JavaScript</li>
					<li className={listStyleClasslist}>jQuery</li>
					<li className={listStyleClasslist}>AJAX</li>
					<li className={listStyleClasslist}>API connections</li>
					<li className={listStyleClasslist}>Bootstrap</li>
					<li className={listStyleClasslist}>Html</li>
					<li className={listStyleClasslist}>
						custom e-commerce Content Mangement System
					</li>
					<li className={listStyleClasslist}>Shoptet</li>
				</ul>
			</div>
		</>
	)
}
