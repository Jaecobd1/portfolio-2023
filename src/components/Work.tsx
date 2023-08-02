import { Tooltip } from '@mantine/core'
import linkGarden from '/link-garden.png'
import Hap from '/Hap.png'
import clientPortal from '/Client-Portal.png'
import christmas from '/christmas.png'
import chatFish from '/chatFish.png'
function Work() {
  return (
    <>
      <div id="work"></div>

      <div className="bg-gradient-to-b from-indigo-900 to-white min-h-screen text-white">
        <div className="flex flex-col p-12 ">
          <h2 className="md:text-4xl text-2xl mt-12">Portfolio</h2>
          <div className="flex flex-wrap mt-12 gap-12 justify-evenly">
            <WorkContainer name="Link Garden" image={linkGarden} />
            <WorkContainer name="Hall Aluminum Products" image={Hap} />
            <WorkContainer name="Reusser Client Portal" image={clientPortal} />
            <WorkContainer name="3D Christmas Card" image={christmas} />
            <WorkContainer name="Chat Fish" image={chatFish} />
          </div>
        </div>
      </div>
    </>
  )
}

function WorkContainer({ name, image }: { name: string; image: string }) {
  return (
    <Tooltip label="open">
      <div className="border-2 border-white flex  md:h-52 h- relative rounded-lg overflow-hidden">
        <img src={image} alt="Link Garden" className="cover" />
        <div className="absolute bottom-0 bg-slate-900/60 w-fit right-0 mx-auto px-2 left-0 text-white rounded-lg">
          <h3 className="text-xl">{name}</h3>
        </div>
      </div>
    </Tooltip>
  )
}

export default Work
