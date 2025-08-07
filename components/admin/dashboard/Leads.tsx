"use client"
import React, {useState, useEffect} from 'react'
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

const Leads = () => {
  const [posts, setPosts] = useState<any>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('/api/contact');
        const data = await res.json();
        setPosts(data); // Update state with fetched data
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false); // Update loading state
      }
    };

    fetchData();
  }, []); // Empty dependency array ensures the effect runs once

  if (loading) {
    return <p>Loading...</p>; // Show a loading indicator while fetching
  }

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