import { SetBodyToOpenModalState } from '#app/components/classlist-modifiers.tsx'
import { useRedirectWithScrollToTop } from '#app/components/modal-animation.tsx'
import { modalBackdropClassList } from '#app/components/modal-backdrop.tsx'
import {
    ContactFormOperator,
	action,
} from '#app/routes/resources+/__contact-form-operator.tsx'

export { action }

export default function ReservationEdit() {
	SetBodyToOpenModalState()

	const navigateAndScroll = useRedirectWithScrollToTop()
	const closeReservationFormRoute = () => {
		navigateAndScroll('back')
	}

	return (
		<>
			<div
				onClick={closeReservationFormRoute}
				className={modalBackdropClassList}
			/>

			<ContactFormOperator />
		</>
	)
}
