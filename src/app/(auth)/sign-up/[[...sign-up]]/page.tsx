import { SignUp } from '@clerk/nextjs'

export default function Page() {
  return (
    <div >
      <SignUp afterSignOutUrl={'/'} afterSignUpUrl={'/'} />
    </div>
  )
}