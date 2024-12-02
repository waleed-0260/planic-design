import React from 'react'
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

  async function fetchData() {
    const res = await fetch('https://dominobackend.vercel.app/get-contacts');
    const data = await res.json();
    return data;
  }

const Leads = async() => {
  // console.log("posts", posts?.posts)
  const posts = await fetchData();

    return (
    <div className='ml-64 p-6'>
      <h1 className='text-4xl font-bold text-black'>Leads</h1>
        <Table>
      <TableCaption>A list of your recent contact form.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Name</TableHead>
          <TableHead>Email</TableHead>
          <TableHead>Phone</TableHead>
          <TableHead className="text-right">Project Details</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {posts?.data?.map((invoice:any, index:any) => (
          <TableRow key={index}>
            <TableCell className="font-medium">{invoice.name}</TableCell>
            <TableCell>{invoice.email}</TableCell>
            <TableCell>{invoice.phone}</TableCell>
            <TableCell className="text-right">{invoice.message}</TableCell>
          </TableRow>
        ))}
      </TableBody>
      {/* <TableFooter>
        <TableRow>
          <TableCell colSpan={3}>Total</TableCell>
          <TableCell className="text-right">$2,500.00</TableCell>
        </TableRow>
      </TableFooter> */}
    </Table>
    </div>
  )
}

export default Leads