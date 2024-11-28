import Leads from "@/components/admin/dashboard/Leads"
import { useSession } from "next-auth/react"

export default function Page() {
  const { data: session } = useSession()

  if (typeof window === "undefined") return null

  if (session) {
    return (
        <Leads/>
    )
  }
  return <p>Access Denied</p>
}
