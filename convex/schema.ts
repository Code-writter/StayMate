import { defineSchema, defineTable } from "convex/server";
import {v} from 'convex/values'
export default defineSchema({
    users : defineTable({

        name : v.string(),
        email : v.string(),
        clerkId : v.string(),
        image : v.optional(v.string()),
        preferences : v.optional(v.array(v.string())),
        habbits : v.optional(v.array(v.string()))

    }).index("by_clerk_id", ["clerkId"])
        .searchIndex("by_clerk_id", {
            searchField: "clerkId",
            filterFields: ["clerkId"],
        }),

    roommates : defineTable({
        roommates : v.array(v.id("users"))

    }),

    expenses : defineTable({
        between : v.id("roommates"),
        description : v.string(),
        amount : v.float64()
    }),

    task : defineTable({
        description : v.string(),
        dueDate : v.optional(v.string()), // Store date as an ISO 8601 string
        status : v.union(v.literal("incomplte"), v.literal("complete")),
        assignedRoommate : v.id("users")
    })
})  


// import { defineSchema, defineTable } from "convex/server";
// import { v } from "convex/values";

// export default defineSchema({
//   messages: defineTable({
//     body: v.string(),
//     channel: v.string(),
//   }).searchIndex("search_body", {
//     searchField: "body",
//     filterFields: ["channel"],
//   }),
// });