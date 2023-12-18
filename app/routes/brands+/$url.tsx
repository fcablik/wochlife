import {
	json,
	type DataFunctionArgs,
	// type MetaFunction,
	redirect,
} from '@remix-run/node'
import { Link, Outlet, useLoaderData, useParams } from '@remix-run/react'
import { z } from 'zod'
import {
	baseContainerWidthClassList,
	frontendRoutesSpacingFromHeaderAndFooter,
} from '#app/components/classlists.tsx'
import { GeneralErrorBoundary } from '#app/components/error-boundary.tsx'
import { ErrorList } from '#app/components/forms.tsx'
import { SearchBar } from '#app/components/search-bar.tsx'
import { Spacer } from '#app/components/spacer.tsx'
import { Button } from '#app/components/ui/button.tsx'
import { prisma } from '#app/utils/db.server.ts'
import { cn, useDelayedIsPending } from '#app/utils/misc.tsx'

const CarModelSearchResultSchema = z.object({
	id: z.string(),
	url: z.string(),
	title: z.string().nullable(),
	carBrandTitle: z.string(),
})

const CarModelSearchResultsSchema = z.array(CarModelSearchResultSchema)

export async function loader({ request, params }: DataFunctionArgs) {
	const searchTerm = new URL(request.url).searchParams.get('search')
	if (searchTerm === '') {
		return redirect('/brands/' + params.url)
	}

	const like = `%${searchTerm ?? ''}%`
	const rawCarModels = await prisma.$queryRaw`
		SELECT CarModel.id, CarModel.url, CarModel.title, CarBrand.title as carBrandTitle
		FROM CarModel
		JOIN CarBrand ON CarModel.carBrandId = CarBrand.id
		WHERE CarBrand.url = ${params.url}
		AND (CarModel.title LIKE ${like} OR CarModel.url LIKE ${like})
		LIMIT 50
	`

	const result = CarModelSearchResultsSchema.safeParse(rawCarModels)
	if (!result.success) {
		return json({ status: 'error', error: result.error.message } as const, {
			status: 400,
		})
	}
	return json({ status: 'idle', carModels: result.data } as const)
}

export default function CarModelUrlRoute() {
	const data = useLoaderData<typeof loader>()
	const params = useParams()

	const isPending = useDelayedIsPending({
		formMethod: 'GET',
		formAction: '/brands/' + params.url,
	})
	if (data.status === 'error') {
		console.error(data.error)
	}

	return (
		<div
			className={cn(
				baseContainerWidthClassList,
				frontendRoutesSpacingFromHeaderAndFooter,
			)}
		>
			<div className="text-center">
				<h1>
					{data.status === 'idle' &&
						data.carModels.length ?
						<span className='capitalize text-h1'>{data.carModels[0].carBrandTitle}</span> : <span className='text-2xl'>No Models for <span className='capitalize underline'>{params.url}</span> Found</span>}
				</h1>
				<Spacer size="sm" />

				<div className="mb-8 w-full max-w-[700px]">
					<SearchBar
						carModelUrl={params.url}
						actionUrl="brands"
						status={data.status}
						autoFocus
						autoSubmit
					/>
				</div>

				<div>
					{data.status === 'idle' ? (
						data.carModels.length ? (
							<ul
								className={cn(
									'flex w-full flex-wrap items-center justify-center gap-4 delay-200',
									{ 'opacity-50': isPending },
								)}
							>
								{data.carModels.map(carModel => (
									<li key={carModel.id}>
										<Link
											to={carModel.url}
											className="flex h-36 w-44 flex-col items-center justify-center rounded-lg bg-muted px-5 py-3"
										>
											{carModel.title && (
												<span className="w-full overflow-hidden text-ellipsis whitespace-nowrap text-center text-body-md">
													{carModel.title}
												</span>
											)}
										</Link>
									</li>
								))}
							</ul>
						) : (
							<p>No models found</p>
						)
					) : data.status === 'error' ? (
						<ErrorList errors={['There was an error parsing the results']} />
					) : null}
				</div>

				{/* <div className="px-2 py-4 sm:mx-auto sm:max-w-[550px] md:max-w-[650px] lg:max-w-[750px] lg:px-0 lg:py-12">
					<div className="flex flex-row flex-wrap justify-between">
						{data.carModel.carModels.map(
							(model, i) =>
								model.visibility && (
									<div className="w-1/2 p-2 text-center md:p-6" key={i}>
										<div className="z-1 border bg-background px-3 pb-6 pt-4 transition-opacity hover:opacity-95 lg:px-4 lg:pb-10 lg:pt-6">
											<Link to={model.url} className="text-center">
												<div className="overflow-hidden py-6 lg:p-8">
													<div>{model.title}</div>
												</div>

												<Button variant="secondary" className="">
													Detail
												</Button>
											</Link>
										</div>
									</div>
								),
						)}
					</div>
				</div> */}
			</div>

			<Outlet />
		</div>
	)
}

export function ErrorBoundary() {
	return (
		<GeneralErrorBoundary
			statusHandlers={{
				404: ({ params }) => (
					<div className="container mx-auto flex h-5/6 flex-col justify-center pb-32 pt-20 text-center">
						<h3 className="text-h3">
							No carModel with the carModel url "{params.url}" exists
						</h3>

						<Spacer size="sm" />

						<Link to="/">
							<Button variant="default" className="text-xs" size="sm">
								go home
							</Button>
						</Link>
					</div>
				),
			}}
		/>
	)
}

// export const meta: MetaFunction<typeof loader> = ({ data, params }) => {
// 	const displayName = data?.carModel.title ?? params.url
// 	const seoContent = data?.carModel.seo ?? params.title

// 	return [
// 		{ title: `${displayName} | Wochlife` },
// 		{
// 			name: 'description',
// 			content: seoContent,
// 		},
// 	]
// }
