'use client'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Card } from '@/components/ui/card'
import { toast } from 'sonner'
import { redirect } from 'next/navigation'

export default function ContactSection() {

    function submit(){
        toast("Thank you, we will contact soon")
        return(
            redirect("/")
        )
    }
    return (
        <section className="py-32">
            <div className="mx-auto max-w-3xl px-8 lg:px-0">
                <h1 className="text-center text-4xl font-semibold lg:text-5xl">Reach Us</h1>
                <p className="mt-4 text-center">We'll help you find the right Roomates.</p>

                <Card className="mx-auto mt-12 max-w-lg p-8 shadow-md sm:p-16">
                    <div>
                        <h2 className="text-xl font-semibold">Let's get you to the right place</h2>
                        <p className="mt-4 text-sm">Reach out to our team! We’re eager to provide perfect roommates for you.</p>
                    </div>

                    <form action="" className="**:[&>label]:block mt-12 space-y-6 *:space-y-3">
                        <div>
                            <Label htmlFor="name">Full name</Label>
                            <Input type="text" id="name" required />
                        </div>

                        <div>
                            <Label htmlFor="email">Work Email</Label>
                            <Input type="email" id="email" required />
                        </div>

                        <div>
                            <Label htmlFor="country">Country/Region</Label>
                            <Select>
                                <SelectTrigger>
                                    <SelectValue placeholder="Select Region" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="1">Indore</SelectItem>
                                    <SelectItem value="2">Bhopal</SelectItem>
                                    <SelectItem value="3">Shahdol</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>

                        <div>
                            <Label htmlFor="job">Job </Label>
                            <Select>
                                <SelectTrigger>
                                    <SelectValue placeholder="Select Job Function" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="1">Student</SelectItem>
                                    <SelectItem value="2">Teacher</SelectItem>
                                    <SelectItem value="3">Coder</SelectItem>
                                    <SelectItem value="4">More</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>

                        <div>
                            <Label htmlFor="msg">Message</Label>
                            <Textarea id="msg" rows={3} />
                        </div>

                        <Button onClick={() => {
                                    toast("Thank you, we will contact soon")
                                    return(
                                        redirect("/")
                                    )
                        }} >Submit</Button>
                    </form>
                </Card>
            </div>
        </section>
    )
}
