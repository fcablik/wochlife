import { parse } from '@conform-to/zod'
import { json, type DataFunctionArgs, type MetaFunction } from '@remix-run/node'
import { Link, Outlet } from '@remix-run/react'
import { safeRedirect } from 'remix-utils/safe-redirect'
import { z } from 'zod'
import { ContactFormEmail } from '#app/components/emails/contact-email.server.tsx'
import { GeneralErrorBoundary } from '#app/components/error-boundary.tsx'
import { Button } from '#app/components/ui/button.tsx'
import { sendEmail } from '#app/utils/email.server.ts'
import { redirectWithToast } from '#app/utils/toast.server.ts'
import { EmailSchema } from '#app/utils/user-validation.ts'

const contactFormSchema = z.object({
	email: EmailSchema,
	name: z.string().min(1),
	message: z.string().min(1),
	redirectTo: z.string().optional(),
})

export async function action({ request }: DataFunctionArgs) {
	const formData = await request.formData()

	const submission = await parse(formData, {
		schema: contactFormSchema,
		// acceptMultipleErrors: () => true,
		async: true,
	})

	if (submission.intent !== 'submit') {
		return json({ status: 'idle', submission } as const)
	}
	if (!submission.value) {
		return json(
			{
				status: 'error',
				submission,
			} as const,
			{ status: 400 },
		)
	}
	const { email, name, message, redirectTo } = submission.value

	const response = await sendEmail({
		from: 'Contact Form from Wochlife <noreply@Wochlife.com>',
		to: 'filip.cablik@icloud.com', // mail of preference where the message should be delivered to (owner of web, admin, etc.)
		reply_to: email,
		subject: `Web Form message from ` + email,
		react: <ContactFormEmail email={email} name={name} message={message} />,
	})

	if (response.status === 'success') {
		return redirectWithToast(safeRedirect(redirectTo, '/'), {
			title: 'Contact Form',
			description: 'Your message was sent! 👍.',
		})
	} else {
		submission.error[''] = [response.error.message]
		return json(
			{
				status: 'error',
				submission,
			} as const,
			{ status: 500 },
		)
	}
}

export const meta: MetaFunction = () => {
	return [{ title: 'Contact Us | Wochlife' }]
}

export default function ContactForm() {
	return (
		<div className="container mx-auto flex flex-col justify-center pb-32 pt-20">
			<div className="text-center">
				<h1 className="text-h3">Contact</h1>
				<p className="mt-6">Get in touch with me through socials </p>

				<div className='mt-4'>
				<a
					href="https://instagram.com/wochlife"
					target="_blank"
					rel="noreferrer"
				>
					<Button variant="highlight">@wochlife</Button>
				</a>
				</div>
			</div>

			<div className="mt-4 text-center">
				<Link to="form">
					<Button>Or Send a Message</Button>
				</Link>
			</div>

			<Outlet />
		</div>
	)
}

export function ErrorBoundary() {
	return <GeneralErrorBoundary />
}
