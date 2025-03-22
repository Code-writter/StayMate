'use client'

import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
  
import { useQuery } from "convex/react"
import { api } from "../../convex/_generated/api"


export default function userTable() {
    const users = useQuery(api.user.getUser)
    return(
        <Table>
        <TableCaption>A list of all users.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Habbits</TableHead>
            <TableHead className="text-right">Preferences</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {users?.map((user) => (
            <TableRow key={user._id}>
              <TableCell className="font-medium">{user.name}</TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell> {user.habbits} </TableCell>
              <TableCell className="text-right"> {user.preferences} </TableCell>
            </TableRow>
          ))}
        </TableBody>
    
      </Table>
    )
    
  }
  