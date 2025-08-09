import HomeClientWrapper from "@/components/Home/HomeClientWrapper";
import { GetPortfolio } from "@/lib/GetPortfolio";

const page = async() => {
  const data = await GetPortfolio()
  // console.log("data", data)
// console.log("data", data.datas)
  return (
    <div>
      <HomeClientWrapper data={data}/>
    </div>
  )
}

export default page