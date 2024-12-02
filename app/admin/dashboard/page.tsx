import Leads from "@/components/admin/dashboard/Leads"
// import { useSession } from "next-auth/react"
// import { authOptions } from "@/lib/auth"
// import { getServerSession } from "next-auth"

export default async function Page() {
  let data = await fetch('https://dominobackend.vercel.app/get-contacts')
  let posts = await data.json();
  return(
    <Leads posts={posts}/>
  )
}
