import {
	Accordion,
	AccordionItem,
	AccordionHeader,
	AccordionTrigger,
	AccordionContent,
} from '@radix-ui/react-accordion'
import { Link } from '@remix-run/react'
import { format } from 'date-fns'
import { Button } from '#app/components/ui/button.tsx'
import { Icon } from '#app/components/ui/icon.tsx'
import { cn, useDoubleCheck } from '#app/utils/misc.tsx'

export function ContactMessageAccordion({
	id,
	status,
	name,
	email,
	message,
	createdAt,
}: {
	id: string
	status: string
	name: string
	email: string
	message: string
	createdAt: Date
}) {
	const doubleCheckCancell = useDoubleCheck()

	return (
		<Accordion type="single" collapsible>
			<AccordionItem
				value={'id_' + id}
				className="mb-4 rounded-xl border-2 border-foreground bg-background max-xl:shadow-md md:px-8 md:max-xl:mb-16"
			>
				<AccordionHeader className="AccordionHeader flex justify-between py-3 md:max-xl:relative">
					<div className="flex w-full items-center justify-between xl:px-8">
						<div className="max-lg:px-4 lg:max-xl:px-8">
							<div className="mb-1 flex flex-nowrap">Email: {email}</div>

							<div className="flex flex-wrap">
								<span>name: {name}</span>
							</div>

							{/* <div className="shadow-reservation-number mr-4 rounded-md px-2 py-[.15em] text-sm font-bold text-highlight">
									id: {id}
								</div> */}
						</div>
					</div>

					<AccordionTrigger className="pr-4 lg:pr-8">
						<Icon name="caret-down" size="4xl" className="" />
					</AccordionTrigger>
				</AccordionHeader>

				<AccordionContent className="AccordionContent px-4 lg:px-8">
					<div className="py-4 md:max-xl:mt-12 lg:py-8">
						<h5 className="text-h5 font-normal capitalize">
							guest information
						</h5>

						<div className="mt-4">
							<div
								className={cn(
									message
										? '2xl:flex 2xl:items-end 2xl:justify-between'
										: 'md:flex md:items-end md:justify-between',
								)}
							>
								<div className={cn(message ? '2xl:max-w-2/3' : '')}>
									<div className="flex flex-wrap">
										<span className="capitalize">guest's email:&nbsp;</span>
										{email}
									</div>

									<div className="mt-2">
										<span className="capitalize">
											reservation created:&nbsp;
										</span>
										{format(createdAt, 'PPP')}
									</div>

									<div className="mt-2 sm:flex 2xl:pr-3">
										<div className="capitalize">message:&nbsp;</div>

										{!!message && <>{message}</>}
									</div>
								</div>

								<div className={cn('text-right', !!message && 'max-2xl:mt-6')}>
									<div className="flex justify-end gap-2">
										<Link to={`/admin/reservations/${id}`}>
											<Button variant="outline">
												{status !== 'cancelled' ? (
													<Icon name="pencil-1">edit</Icon>
												) : (
													<span className="capitalize">detail</span>
												)}
											</Button>
										</Link>

										{status !== 'cancelled' ? (
											<Link to={`/admin/reservations/${id}`}>
												<Button
													variant={
														doubleCheckCancell.doubleCheck
															? 'highlight-secondary'
															: 'destructive'
													}
													{...doubleCheckCancell.getButtonProps({
														name: 'intent',
														value: 'delete',
													})}
												>
													{doubleCheckCancell.doubleCheck ? (
														'go to detail to cancel'
													) : (
														<Icon name="trash">Cancel</Icon>
													)}
												</Button>
											</Link>
										) : null}
									</div>
								</div>
							</div>
						</div>
					</div>
				</AccordionContent>
			</AccordionItem>
		</Accordion>
	)
}
