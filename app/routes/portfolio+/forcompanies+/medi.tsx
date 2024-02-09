export default function PortfolioForCompaniesMedi() {
	const listStyleClasslist = "flex items-center before:mr-2 before:content-['#'] before:text-highlight before:text-lg"
	const listStyleClasslist2 =
		"before:mr-2 before:content-['#'] before:text-highlight before:text-lg"

	return (
		<>
			<h4 className="mb-2 text-lg font-semibold">medi.de/cs (Maxis, a.s.)</h4>
			<p className="mb-6">- FrontEnd Web Development</p>

			<div className="mb-4">
				<p className="mb-2">
					Position with focus on redesign, improvements, new features implementations and third party services connections:
				</p>
				


				<ul className="pl-2">
				<li className={listStyleClasslist2}>
					webs redesign into new generational responsive web-standard
				</li>
				<li className={listStyleClasslist2}>
					new custom features implementation that benefited both the shops’ UX/UI and
					customers (both b2b and b2c)
				</li>
				<li className={listStyleClasslist2}>
					various features connections with APIs, company SW connections, third-party service and CMS connection
				</li>
				<li className={listStyleClasslist2}>
					as a side-effect of this position I’d learnt and deepened
					knowledge about business structures, Company SWs, CMS, ERPS, products
					management, stock management — had to communicate and work with all
					these departments to align everything on our shops with the company
					itself and with real data.
				</li>
				</ul>
			</div>

			<div className="max-lg:mb-4">
				<p>Development-Stack:</p>

				<ul className="pl-2">
					<li className={listStyleClasslist}>css, sass</li>
					<li className={listStyleClasslist}>Latte - templating engine</li>
					<li className={listStyleClasslist}>html</li>
					<li className={listStyleClasslist}>bootstrap</li>
					<li className={listStyleClasslist}>js</li>
					<li className={listStyleClasslist}>jquery</li>
					<li className={listStyleClasslist}>php</li>
					<li className={listStyleClasslist}>Nette - php framework</li>
					<li className={listStyleClasslist}>custom cms</li>
					<li className={listStyleClasslist}>erp</li>
					<li className={listStyleClasslist}>api connections</li>
					<li className={listStyleClasslist}>shoptet</li>
					<li className={listStyleClasslist}>ajax</li>
				</ul>
			</div>
		</>
	)
}
