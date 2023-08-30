import { Navbar } from "../../components"
import { egusi } from "../../assets/images"
export const Home = () => {
  return (
    <div className='bg-secondary min-h-screen'>
        <Navbar />
        <div className="flex flex-row divide-x-2 w-[80%] mx-auto max-sm:flex-col">
            <div className="basis-1/2  text-primary">
                <h2>AUTUMN SQUASH SOUP</h2>
                <p>SERVES: 6 | PREP TIME: 20 MINUTES | COOK TIME: 60 MINUTES</p>
                <hr />
                <h3>INGREDIENTS</h3>


                <h3>INSTRUCTIONS</h3>

            </div>
            <div className="basis-1/2 ">
                <img src={`${egusi}`} alt="" className="w-[95%] mx-auto"/>
            </div>
        </div>

    </div>
  )
}
