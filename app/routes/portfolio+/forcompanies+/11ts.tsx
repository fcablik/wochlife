export default function PortfolioForCompanies11ts() {
	const listStyleClasslist =
		"flex items-center before:mr-2 before:content-['#'] before:text-highlight before:text-lg"
	const listStyleClasslist2 =
		"before:mr-2 before:content-['#'] before:text-highlight before:text-lg"

	return (
		<>
			<h4 className="mb-2 text-lg font-semibold">11teamsports</h4>
			<p className="mb-6">- Fullstack Web Development</p>

			<div className="mb-6 md:pr-6">
				<p className="mb-2">
					After a company merger from Top4sport into 11teamsports Group, the services remained the same
					- continuing at freelance fullstack web development for Top4sport's e-commerce platform:
				</p>
				<ul className="pl-2">
					<li className={listStyleClasslist2}>new features and components implementation</li>
					<li className={listStyleClasslist2}>focusing on achieving better and more functional UX/UI</li>
					<li className={listStyleClasslist2}>bug solutions, looking for advanced frontend code solutions</li>
					<li className={listStyleClasslist2}>improving platform's speed</li>
					<li className={listStyleClasslist2}>
						my goal for Top4Sport / 11teamsports platforms has always been to achieve more functional and user-friendlier UX/UI, level-up traffic, repair existing parts and implement new better solutions to speed up the applications
					</li>
				</ul>
			</div>

			<div className="max-lg:mb-4">
				<p>Development-Stack:</p>

				<ul className="pl-2">
					<li className={listStyleClasslist}>JavaScript</li>
					<li className={listStyleClasslist}>jQuery</li>
					<li className={listStyleClasslist}>npm</li>
					<li className={listStyleClasslist}>Node.js</li>
					<li className={listStyleClasslist}>SASS / scss</li>
					<li className={listStyleClasslist}>Bootstrap</li>
					<li className={listStyleClasslist}>ajax</li>
					<li className={listStyleClasslist}>PHP</li>
					<li className={listStyleClasslist}>Nette - PHP framework</li>
					<li className={listStyleClasslist}>xDebug</li>
					<li className={listStyleClasslist}>Latte - templating engine</li>
					<li className={listStyleClasslist}>PHPStorm</li>
					<li className={listStyleClasslist}>GitLab</li>
					<li className={listStyleClasslist}>Bloomreach (Exponea)</li>
					<li className={listStyleClasslist}>
						AB-Testing - firstly with custom solution, later bloomreach
					</li>
					{/* <li>(TODO) - shopware, trim, vue?, eslint, </li> */}
				</ul>
			</div>
		</>
	)
}
