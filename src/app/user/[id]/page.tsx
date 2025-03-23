'use client'

import { AspectRatio } from "@/components/ui/aspect-ratio";
// To query a user from the Convex database using the Clerk ID, you need to ensure that your Convex function (`getUserByClerkId`) is properly implemented and that you're passing the correct `clerkId` parameter. Here's how you can modify your code:

// ### Steps:

// 1. **Ensure Convex Function Implementation**: In your Convex backend, you should have a function like `getUserByClerkId` that queries the database using the `clerkId`. For example:

//     ```ts
    // convex/functions/user.ts
//     import { query } from "convex/server";

//     export const getUserByClerkId = query(async ({ db }, { clerkId }: { clerkId: string }) => {
//          return await db.query("users").filter((q) => q.eq(q.field("clerkId"), clerkId)).first();
//     });
//     ```

// 2. **Update Your Frontend Code**: Ensure you're passing the `clerkId` correctly and handling the query result properly. Here's the updated code:

//     ```tsx
//     'use client';
//     import { useParams } from "next/navigation";
//     import { api } from "../../../../convex/_generated/api";
//     import { useQuery } from "convex/react";

//     export default function GetUserById() {
//          const params = useParams();
//          const clerkId = params.id as string;

         // Query the user from Convex using the clerkId
//          const user = useQuery(api.user.getUserByClerkId, { clerkId });

//          return (
//               <div>
//                     {user ? (
//                          <div>
//                               <h1>User Name: {user.name}</h1>
//                               <p>Email: {user.email}</p>
//                          </div>
//                     ) : (
//                          <p>Loading user data...</p>
//                     )}
//               </div>
//          );
//     }
//     ```

// 3. **Check Your Convex Schema**: Ensure your Convex database schema has a `users` table with a `clerkId` field. For example:

//     ```ts
//     // convex/schema.ts
//     import { defineSchema, defineTable } from "convex/schema";

//     export default defineSchema({
//          users: defineTable({
//               clerkId: "string",
//               name: "string",
//               email: "string",
//          }),
//     });
//     ```

// 4. **Test the Integration**: Run your application and navigate to the page with the appropriate `id` in the URL. Ensure the `clerkId` matches a record in your Convex database.

// This setup should allow you to query a user from the Convex database using their Clerk ID.
import { api } from "../../../../convex/_generated/api";
import { useQuery } from "convex/react";
import { useParams } from "next/navigation";
import { Separator } from "@/components/ui/separator"
import { useAuth } from "@clerk/nextjs";

export default function getUserById() {
    const params = useParams();
    const clerkId = params.id as string;


     // const age = userId ? calculateAge(userId.birthdate) : null;
    //  Query the user from Convex using the clerkId
    // const existingComments = useQuery(api.comments.getComments, { interviewId });
     const user = useQuery(api.user.getUserByClerkId, { clerkId });
     if (!user) {
          return <p>Loading user data...</p>;
     }

     return (
            <div className=" h-screen">
               <div className=" flex items-center justify-center gap-14 pt-52" >
                    <div className="w-[450px]">
                      <AspectRatio ratio={16 / 9}>
                        <img src={user.image || "/placeholder.png"} alt="Image" className="rounded-md object-cover" />
                      </AspectRatio>
                    </div>
                    <div className="  w-[450px] " >
                    <AspectRatio ratio={19 / 1}>
                      <div className="space-y-1   " >
                        <h4 className="text-sm font-medium leading-none"> {user.name}  </h4>
                        <p className="text-sm text-muted-foreground">
                         {user.email}
                        </p>
                      </div>
                      <Separator className="my-4" />
                         <p className="text-sm text-muted-foreground">
                              Preferences
                        </p>
                      <div className="flex h-5 items-center space-x-4 text-sm">
                        <div> {user.preferences} </div>
                        <Separator orientation="vertical" />
                        <div> {user.preferences} </div>
                        <Separator orientation="vertical" />
                        <div> {user.preferences} </div>
                      </div>
                      <Separator className="my-4" />
                         <p className="text-sm text-muted-foreground">
                              Hobies
                        </p>
                      <div className="flex h-5 items-center space-x-4 text-sm">
                        <div> {user.habits} </div>
                        <Separator orientation="vertical" />
                        <div> {user.habits} </div>
                        <Separator orientation="vertical" />
                        <div> {user.habits} </div>
                      </div>
                      </AspectRatio>
                    </div>
                    
               </div>

          </div>
     );
}


