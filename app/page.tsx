import HomeClientWrapper from "@/components/Home/HomeClientWrapper";


const page = async() => {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";
const res = await fetch(`https://planicdesign.com/api/portfolio`);
// console.log("res", res )
  const data = await res.json();
// console.log("data", data.datas)
  return (
    <div>
      <HomeClientWrapper products={data.data}/>
    </div>
  )
}

export default page