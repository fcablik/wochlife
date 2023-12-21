import { type DataFunctionArgs } from "@remix-run/node"
import { requireUserWithRole } from "#app/utils/permissions.ts"

export async function loader({ request }: DataFunctionArgs) {
	await requireUserWithRole(request, 'admin') // Temporary DEVelopment Phase
	return null
}

export default function AboutRoute() {
    return (
        <>
        </>
    )
}