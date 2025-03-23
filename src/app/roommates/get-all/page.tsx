'use client'

import { useEffect, useState } from 'react';
import { Doc } from '../../../../convex/_generated/dataModel';
import { api } from '../../../../convex/_generated/api';
import { useQuery } from 'convex/react';
import Link from 'next/link';

type Roommate = Doc<"roommates">


const GetAllRoommates: React.FC = () => {

    const singleRoommate = useQuery(api.roommates.getAllRoomMates) || []
    const roommate = useQuery(api.user.getUserByClerkId, {
        clerkId: singleRoommate[0] || ''
    })

    return (
        <section className="bg-gray-50 py-16 md:py-32 dark:bg-transparent">
            <div className="mx-auto max-w-5xl border-t px-6">
                <span className="text-caption -ml-6 -mt-3.5 block w-max bg-gray-50 px-6 dark:bg-gray-950">Team</span>
                <div className="mt-12 gap-4 sm:grid sm:grid-cols-2 md:mt-24">
                    <div className="sm:w-2/5">
                        <h2 className="text-3xl font-bold sm:text-4xl">Stay Mates</h2>
                    </div>
                    <div className="mt-6 sm:mt-0">
                        <p className="text-sm text-muted-foreground"> Enjoy and have a chat with your stay Mates </p>
                    </div>
                </div>
                <div className="mt-12 md:mt-24">
                    <div className="grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
                        {roommate?
                            <div className="group overflow-hidden">
                                <Link href={`/user/${roommate.clerkId}`}>
                                    <img className="h-96 w-full rounded-md object-cover object-top grayscale transition-all duration-500        hover:grayscale-0 group-hover:h-[22.5rem] group-hover:rounded-xl" src={roommate.image} alt="team member"       width="826" height="1239" />
                                </Link>
                                <div className="px-2 pt-2 sm:pb-0 sm:pt-4">
                                    <div className="flex justify-between">
                                        <h3 className="text-title text-base font-medium transition-all duration-500 group-hover:tracking-wider">{roommate.name}</h3>
                                        {/* <span className="text-xs">_0{ + 1}</span> */}
                                    </div>
                                    <div className="mt-1 flex items-center justify-between">
                                        <span className="text-muted-foreground inline-block translate-y-6 text-sm opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">{roommate.preferences}</span>
                                        <Link href={roommate.clerkId} className="group-hover:text-primary-600 dark:group-hover:text-primary-400 inline-block translate-y-8 text-sm tracking-wide opacity-0 transition-all duration-500 hover:underline group-hover:translate-y-0 group-hover:opacity-100">
                                            
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            :""
                        }
                    </div>
                </div>
            </div>
        </section>
    );
};

export default GetAllRoommates;