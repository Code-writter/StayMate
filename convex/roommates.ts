import { mutation, query } from "./_generated/server";
import {v} from "convex/values"

// get all roommates

export const getAllRoomMates = query({
    args : {},

    handler : async (ctx) => {
        const [users] = await ctx.db.query("roommates").collect()
        return users.roommates
    }
})


// add new roommate
export const addRooMate = mutation({
    args : {roommates: v.array(v.string())},

    handler : async (ctx, args) => {
        const response = await ctx.db.insert("roommates", {
            roommates: args.roommates
        })
        return response
    }
})

// Update roommate 

// delete roommate