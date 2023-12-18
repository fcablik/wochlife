import { Link } from "@remix-run/react";
import { Spacer } from "#app/components/spacer.tsx";
import { Button } from "#app/components/ui/button.tsx";

export default function AdminIndex() {
	return (
        <div className="container text-center mx-auto flex flex-col justify-center pb-32 pt-20">
            <p className="text-2xl">Welcome to the admin dashboard of this Application</p>
            
            <Spacer size="3xs" />
            <div className="flex max-sm:flex-wrap justify-center gap-5">
                <Link to='carmodels'>
                    <Button variant='secondary'>cars</Button>
                </Link>

                <Link to='pages'>
                    <Button variant='secondary'>pages</Button>
                </Link>

                <Link to='users'>
                    <Button variant='secondary'>users</Button>
                </Link>

                {/* <Link to='cache'>
                    <Button variant='secondary'>cache</Button>
                </Link> */}
            </div>
        </div>
    )
}
