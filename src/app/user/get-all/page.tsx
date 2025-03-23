'use client'

import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { useQuery } from "convex/react";
import { api } from "../../../../convex/_generated/api";
import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@/components/ui/avatar"
import { redirect } from "next/navigation";
import Link from "next/link";

export default function UserTable(){
    const users = useQuery(api.user.getUser)

    async function getUserDetails(id : string){

        redirect(`/user/${id}`)
    }
    return (
        <section className="bg-gray-50 py-16 md:py-32 dark:bg-transparent">
            <div className="mx-auto max-w-5xl border-t px-6">
                <span className="text-caption -ml-6 -mt-3.5 block w-max bg-gray-50 px-6 dark:bg-gray-950">Team</span>
                <div className="mt-12 gap-4 sm:grid sm:grid-cols-2 md:mt-24">
                    <div className="sm:w-2/5">
                        <h2 className="text-3xl font-bold sm:text-4xl">Global</h2>
                    </div>
                    <div className="mt-6 sm:mt-0">
                        <p className="text-sm text-muted-foreground">Find a roommate that matches your preferences </p>
                    </div>
                </div>
                <div className="mt-12 md:mt-24">
                    <div className="grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
                        {users?.map((user) => (
                            <div key={user._id} className="group overflow-hidden">
                                <Link href={`/user/${user.clerkId}`}>
                                <img className="h-96 w-full rounded-md object-cover object-top grayscale transition-all duration-500        hover:grayscale-0 group-hover:h-[22.5rem] group-hover:rounded-xl" src={user.image} alt="team member"       width="826" height="1239" />
                                </Link>
                                <div className="px-2 pt-2 sm:pb-0 sm:pt-4">
                                    <div className="flex justify-between">
                                        <h3 className="text-title text-base font-medium transition-all duration-500 group-hover:tracking-wider">{user.name}</h3>
                                        {/* <span className="text-xs">_0{ + 1}</span> */}
                                    </div>
                                    <div className="mt-1 flex items-center justify-between">
                                        <span className="text-muted-foreground inline-block translate-y-6 text-sm opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">{user.preferences}</span>
                                        <Link href={user.clerkId} className="group-hover:text-primary-600 dark:group-hover:text-primary-400 inline-block translate-y-8 text-sm tracking-wide opacity-0 transition-all duration-500 hover:underline group-hover:translate-y-0 group-hover:opacity-100">
                                            
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}





    // return(
    //     <div className="p-7 h-[700px] w-full flex items-center justify-center ">
    //         <div  className=" flex items-center justify-between rounded-2xl">
    //         <Table className="text-sm border-2 w-[900px] rounded-2xl">
    //         <TableCaption className="text-xs">A list of all users.</TableCaption>
    //         <TableHeader>
    //           <TableRow>
    //         <TableHead className="w-20">Image</TableHead>
    //         <TableHead className="w-20">Name</TableHead>
    //         <TableHead>Email</TableHead>
    //         <TableHead>Habbits</TableHead>
    //         <TableHead className="text-right">Preferences</TableHead>
    //           </TableRow>
    //         </TableHeader>
    //         <TableBody>
    //           {users?.map((user) => (
    //         <TableRow
    //           onClick={() => getUserDetails(user.clerkId)}
    //           key={user._id}
    //           className="cursor-pointer"
    //         >
    //           <TableCell className="font-medium">{
    //             <Avatar>
    //             <AvatarImage src={`${user.image}`} alt="@shadcn" />
    //             <AvatarFallback>IMG</AvatarFallback>
    //             </Avatar>
    //             }</TableCell>
    //           <TableCell className="font-medium">{user.name}</TableCell>
    //           <TableCell>{user.email}</TableCell>
    //           <TableCell>{user.habbits}</TableCell>
    //           <TableCell className="text-right">{user.preferences}</TableCell>
    //         </TableRow>
    //           ))}
    //         </TableBody>
    //         </Table>
    //         </div>
    //     </div>
    // )