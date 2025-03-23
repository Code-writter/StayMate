import { SignIn } from '@clerk/nextjs'

export default function Page() {
    return (
        <div>
            <SignIn afterSignOutUrl={'/'} afterSignInUrl={'/onboarding'} />
        </div>
    )
}