import { Form, useSearchParams, useSubmit } from '@remix-run/react'
import { useEffect, useState } from 'react'
import { useDebounce, useIsPending } from '#app/utils/misc.tsx'
import { Button } from './ui/button.tsx'
import { Icon } from './ui/icon.tsx'
import { Input } from './ui/input.tsx'
import { Label } from './ui/label.tsx'
import { StatusButton } from './ui/status-button.tsx'

export function FiltersWithSearchAndCalendar({
	actionUrl,
	status,
	// autoFocus = false,
	autoSubmit = false,
}: {
	actionUrl: 'admin/contact-messages'
	status: 'idle' | 'pending' | 'success' | 'error'
	// autoFocus?: boolean
	autoSubmit?: boolean
}) {
	const action = actionUrl
	const [searchParams] = useSearchParams()
	const submit = useSubmit()
	const isSubmitting = useIsPending({
		formMethod: 'GET',
		formAction: action,
	})
	const handleFormChange = useDebounce((form: HTMLFormElement) => {
		submit(form)
	}, 400)

	const [currentSearch, setCurrentSearch] = useState(
		searchParams.get('search') ?? '',
	)
	// handling live search param changes -(e.g. on change of searchParams by external Link from sidebar)
	useEffect(() => {
		setCurrentSearch(searchParams.get('search') ?? '')
	}, [searchParams])

	function handleSelectedFilter(e: React.ChangeEvent<HTMLInputElement>) {
		setCurrentSearch(e.target.value)
	}
	function handleSelect(selectString: string) {
		setCurrentSearch(selectString)
	}

	return (
		<Form
			method="GET"
			action={`/${action}`}
			className="flex flex-col md:gap-2"
			onChange={e => autoSubmit && handleFormChange(e.currentTarget)}
		>
			<p className="mb-4 font-normal sm:mb-2">Filters</p>

			<div className="relative sm:max-xl:flex sm:max-md:flex-col-reverse ">
				<div className="xl:max-w-2/3">
					<div className="mb-4 flex w-full flex-col gap-3">
						<div className="flex flex-wrap gap-3 max-sm:justify-center">
							<Button
								onClick={() => handleSelect('new-today')}
								variant={
									currentSearch === 'new-today' ? 'highlight' : 'secondary'
								}
								className="capitalize"
							>
								new today
							</Button>

							<div className="flex flex-wrap gap-3">
								<div className="sm:max-xl:min-w-[250px] xl:min-w-[300px]">
									<Label htmlFor="search" className="sr-only">
										Search
									</Label>
									<Input
										type="search"
										name="search"
										id="search"
										placeholder="Search"
										// autoFocus={autoFocus}
										onChange={handleSelectedFilter}
										value={currentSearch}
									/>
								</div>

								{!autoSubmit ? (
									<div>
										<StatusButton
											type="submit"
											status={isSubmitting ? 'pending' : status}
											className="flex w-full items-center justify-center"
											size="sm"
										>
											<Icon name="magnifying-glass" size="sm" />
											<span className="sr-only">Search</span>
										</StatusButton>
									</div>
								) : null}

								<Button onClick={() => handleSelect('')} variant="secondary">
									<Icon name="cross-1" />
								</Button>
							</div>
						</div>
					</div>

					<div className="text-sm max-xl:mb-4">(Order: Newest first)</div>
				</div>
			</div>
		</Form>
	)
}
