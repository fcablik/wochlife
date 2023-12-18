import { type DataFunctionArgs, type MetaFunction } from '@remix-run/node'
// import { LogoWochlife, LogoPhil } from '#app/components/logos.tsx'
import { requireUserWithRole } from '#app/utils/permissions.ts'

export async function loader({ request }: DataFunctionArgs) {
	await requireUserWithRole(request, 'admin') // Temporary DEVelopment Phase
	return null
}

export default function Index() {
	return (
<div className='flex mx-auto max-w-[1150px] 2xl:max-w-[1450px] max-xl:px-4'>

<div className="bg-black/70 rounded-2xl max-w-[400px]">
			<h1 className="hidden">Wochlife</h1>
			<div className="flex flex-col items-center p-16">
				{/* <div className="mb-4">
					<LogoWochlife className="max-w-full px-8" />
					<LogoPhil className="max-w-full px-8" />
				</div> */}

				<h2 className="text-[22px] font-[300] capitalize">
					wochlife
				</h2>
			</div>
		</div>

</div>
	)
}

export const meta: MetaFunction = () => [{ title: 'Welcome To Wochlife' }]
