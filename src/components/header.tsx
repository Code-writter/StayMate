'use client'
import Link from 'next/link'
import { Logo } from './logo'
import { Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import React from 'react'
import { useScroll } from 'motion/react'
import { cn } from '@/lib/utils'
import { SignInButton, SignOutButton, SignUpButton, UserButton, useUser } from '@clerk/nextjs'
import { ModeToggle } from './theme-toggle'

const menuItems = [
    { name: 'Features', href: '/features' },
    { name: 'Pricing', href: '/pricing' },
    { name: 'Contact Us', href: '/contact-us' },
    { name: `FAQ's`, href: '/faqs' },
]

export const HeroHeader = () => {
    const [menuState, setMenuState] = React.useState(false)
    const [scrolled, setScrolled] = React.useState(false)
    const {isLoaded, isSignedIn, user} = useUser()

    const { scrollYProgress } = useScroll()

    React.useEffect(() => {
        const unsubscribe = scrollYProgress.on('change', (latest) => {
            setScrolled(latest > 0.05)
        })
        return () => unsubscribe()
    }, [scrollYProgress])

    return (
        <header className='' >
            <nav
                data-state={menuState && 'active'}
                className={cn('fixed z-20 w-full border-b transition-colors duration-150', scrolled && 'bg-background/50 backdrop-blur-3xl')}>
                <div className="mx-auto max-w-5xl px-6 transition-all duration-300">
                    <div className="relative flex flex-wrap items-center justify-between gap-6 py-3 lg:gap-0 lg:py-4">
                        <div className="flex w-full items-center justify-between gap-12 lg:w-auto">
                            <Link
                                href="/"
                                aria-label="home"
                                className="flex items-center space-x-2">
                                <Logo />
                            </Link>

                            <button
                                onClick={() => setMenuState(!menuState)}
                                aria-label={menuState == true ? 'Close Menu' : 'Open Menu'}
                                className="relative z-20 -m-2.5 -mr-4 block cursor-pointer p-2.5 lg:hidden">
                                <Menu className="in-data-[state=active]:rotate-180 in-data-[state=active]:scale-0 in-data-[state=active]:opacity-0 m-auto size-6 duration-200" />
                                <X className="in-data-[state=active]:rotate-0 in-data-[state=active]:scale-100 in-data-[state=active]:opacity-100 absolute inset-0 m-auto size-6 -rotate-180 scale-0 opacity-0 duration-200" />
                            </button>

                            <div className="hidden lg:block">
                                <ul className="flex gap-8 text-sm">
                                    {menuItems.map((item, index) => (
                                        <li key={index}>
                                            <Link
                                                href={item.href}
                                                className="text-muted-foreground hover:text-accent-foreground block duration-150">
                                                <span>{item.name}</span>
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            {
                                isLoaded && isSignedIn ? (
                                    <div className=' flex items-center gap-4' > 
                                        <Link className=" text-sm text-muted-foreground hover:text-accent-foreground block duration-150" href={'/roommates/get-all'} >Roomates</Link>
                                        <Link className="text-sm text-muted-foreground hover:text-accent-foreground block duration-150" href={'/expenses'} >Expenses</Link>
                                        <Link className="text-sm text-muted-foreground hover:text-accent-foreground block duration-150" href={'/user/get-all'} >Near Friends</Link>

                                    </div>
                                    
                                ):("")
                            }
                        </div>

                        <div className="bg-background in-data-[state=active]:block lg:in-data-[state=active]:flex mb-6 hidden w-full flex-wrap items-center justify-end space-y-8 rounded-3xl border p-6 shadow-2xl shadow-zinc-300/20 md:flex-nowrap lg:m-0 lg:flex lg:w-fit lg:gap-6 lg:space-y-0 lg:border-transparent lg:bg-transparent lg:p-0 lg:shadow-none dark:shadow-none dark:lg:bg-transparent">
                            <div className="lg:hidden">
                                <ul className="space-y-6 text-base">
                                    {menuItems.map((item, index) => (
                                        <li key={index}>
                                            <Link
                                                href={item.href}
                                                className="text-muted-foreground hover:text-accent-foreground block duration-150">
                                                <span>{item.name}</span>
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="flex w-full flex-col space-y-3 sm:flex-row sm:gap-3 sm:space-y-0 md:w-fit">
                                    {
                                        isSignedIn? (
                                            <div className=' flex items-center justify-center gap-6' >
                                                <UserButton />
                                                <Button
                                                    asChild
                                                    variant='destructive'
                                                    size="sm">
                                                    
                                                        <span>{<SignOutButton/>}</span>
                                                                                            
                                                    </Button>
                                            </div>
                                        ) : (
                                            <div>
                                                <Button
                                                    asChild
                                                    variant="outline"
                                                    size="sm">
                                                    
                                                        <span>{<SignInButton/>}</span>

                                                    </Button>
                                                    <Button
                                                    asChild
                                                    size="sm">
                                                    
                                                        <span> {<SignUpButton />} </span>

                                                    </Button> 
                                            </div>
                                        )
                                    }
                                <ModeToggle />

                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    )
}


