import React, {useEffect, useContext} from 'react';
import LoaderContext from "../context/loaderContext";
import GangaSwachtaImage from "../assets/images/7009745_3443835.svg";
import MusicUnwindImage from "../assets/images/33459768_8035757.svg";
import PoetryUnpluggedImage from "../assets/images/22890310_6719438.svg";
import NatureAThonImage from "../assets/images/20832664_6360239.svg";
import NatureCanvasImage from "../assets/images/26388236_7195265.svg";
import StreetSagaImage from "../assets/images/12145628_Wavy_Edu-06_Single-10.svg";
import SeedBallImage from "../assets/images/21094702_6409772.svg";
import EcoBricksImage from "../assets/images/bricks.svg";

const Events = () => {

  const {setProgress} = useContext(LoaderContext);

  useEffect(()=>{
    document.title = "Haritima 2K23 | Our Annual Event is Coming Soon! Register Today!"
    setProgress(100);
  }, []);
  
  return (
    <>
      <section className='w-full bg-[#001E2B] px-5 h-72 md:h-96 flex justify-center items-center flex-col text-center rounded-b-[3rem] md:rounded-b-[5rem] lg:rounded-b-[8rem]'>
        <h1 className='text-4xl md:text-5xl lg:text-6xl font-Mooli font-bold text-[#00ED64] text-center'>Haritima 2K23</h1>
        <p className='text-[#cdcdcd] text-center text-lg my-3'>Empower your passion, ignite your purpose, and be the change you wish to see in the world</p>
      </section>
      <p className='px-5 my-14 mx-auto text-center text-[#5d6c74] text-lg md:text-justify md:max-w-3xl lg:max-w-4xl '>Join us on a journey of environmental consciousness and creativity as we come together for a series of inspiring events - Ganga Swachta Abhiyan, Nature-A-Thon, Nature Canvas, Eco Bricks Workshop, Seed Ball Workshop, Poetry Unplugged, Music Unwind, Street Saga, and Eco Folks. Together, we'll paint a greener, cleaner, and more harmonious future for our planet. Let's make every action count and every moment memorable in our mission to nurture and protect our precious Earth.</p>
      <section className='mt-16 py-12 bg-[#ece3ef] rounded-tr-[3rem]  md:rounded-tr-[5rem] lg:rounded-tr-[10rem]'>
        <div className='my-20'>
          <h2 className='text-center text-2xl md:text-3xl lg:text-5xl font-Mooli font-extrabold text-[#023430]'>Ganga Swachta Abhiyan</h2>
          <div className='px-5 flex flex-wrap justify-center gap-12 my-10'>
            <img className='w-[35rem]' src={GangaSwachtaImage} alt="" />
            <div className='space-y-5'>
              <p className="md:w-[40rem] text-[#3e474d] text-justify">The Ganges River, often referred to as the "Mother Ganga," is not just a geographical entity but a spiritual and cultural lifeline of India. It has been revered by generations for its purity, sanctity, and the spiritual solace it offers. However, over the years, this sacred river has faced a multitude of challenges, primarily due to pollution and environmental degradation. To address this issue and restore the glory of the Ganges, we are thrilled to announce the "Ganga Swachhta Abhiyan" event.</p>
              <p className="md:w-[40rem] text-[#3e474d] text-justify">Our event is a platform for individuals and teams to actively participate in the Ganga Swachhta Abhiyan, where you can expect to join hands with fellow volunteers and actively participate in cleaning the Ganges riverbanks, with a focus on removing plastics, garbage, and other pollutants.</p>
            </div>
          </div>
          <div className='flex gap-x-14 justify-center items-center flex-wrap gap-y-8'>
            <div className='h-24 w-56 bg-[#192B34] rounded-lg p-5'>
              <h3 className='text-[#00ED64] text-lg font-Mooli font-semibold'>Venue</h3>
              <h4 className='text-white font-Mooli'>Har Ki Pauri</h4>
            </div>
            <div className='h-24 w-56 bg-[#192B34] rounded-lg p-5'>
              <h3 className='text-[#00ED64] text-lg font-Mooli font-semibold'>Date</h3>
              <h4 className='text-white font-Mooli'>25/09/2023</h4>
            </div>
            <div className='h-24 w-56 bg-[#192B34] rounded-lg p-5'>
              <h3 className='text-[#00ED64] text-lg font-Mooli font-semibold'>Time</h3>
              <h4 className='text-white font-Mooli'>Before Break</h4>
            </div>
          </div>
        </div>

        <div className='my-28'>
          <h2 className='text-center text-2xl md:text-3xl lg:text-5xl font-Mooli font-extrabold text-[#023430]'>Nature-A-Thon</h2>
          <div className='px-5 flex flex-wrap-reverse justify-center gap-12 my-10'>
            <div className='space-y-5'>
              <p className="md:w-[40rem] text-[#3e474d] text-justify">In an era where environmental concerns have become more pressing than ever, taking action to protect our planet is not just a choice but a necessity. It's heartening to see young minds coming together to make a positive impact. This year, Eco Club is proud to introduce the "Nature-A-Thon" – a unique event that promises to bring together teams of passionate individuals to plant trees in nearby villages. This initiative is not just about planting trees; it's about fostering a sense of responsibility, environmental consciousness, and unity among our community.</p>
              <p className="md:w-[40rem] text-[#3e474d] text-justify">Nature-A-Thon is set to be an exciting and fulfilling event with the following expectations: we've carefully chosen villages in close proximity to our college, making it convenient for everyone to participate. Team Participation involves forming teams with your friends, classmates, or colleagues and registering for the event, with each team responsible for planting a specific number of trees. The heart of the event is tree planting, and we'll provide the saplings, tools, and guidance needed to ensure that every tree is planted with care and precision.</p>
            </div>
            <img className='w-[35rem]' src={NatureAThonImage} alt="" />
          </div>
          <div className='flex gap-x-14 justify-center items-center flex-wrap gap-y-8'>
            <div className='h-24 w-56 bg-[#192B34] rounded-lg p-5'>
              <h3 className='text-[#00ED64] text-lg font-Mooli font-semibold'>Venue</h3>
              <h4 className='text-white font-Mooli'>Village opted by COER</h4>
            </div>
            <div className='h-24 w-56 bg-[#192B34] rounded-lg p-5'>
              <h3 className='text-[#00ED64] text-lg font-Mooli font-semibold'>Date</h3>
              <h4 className='text-white font-Mooli'>25/09/2023</h4>
            </div>
            <div className='h-24 w-56 bg-[#192B34] rounded-lg p-5'>
              <h3 className='text-[#00ED64] text-lg font-Mooli font-semibold'>Time</h3>
              <h4 className='text-white font-Mooli'>After Break</h4>
            </div>
          </div>
        </div>

        <div className='my-28'>
          <h2 className='text-center text-2xl md:text-3xl lg:text-5xl font-Mooli font-extrabold text-[#023430]'> Nature Canvas</h2>
          <div className='px-5 flex flex-wrap justify-center gap-12 my-10'>
            <img className='w-[35rem]' src={NatureCanvasImage} alt="" />
            <div className='space-y-5'>
              <p className="md:w-[40rem] text-[#3e474d] text-justify">In a world grappling with environmental challenges, the need for creative and sustainable solutions has never been more pressing. That's where "Nature Canvas" comes into play, a groundbreaking event that not only fosters creativity but also champions eco-consciousness. Nature Canvas is a platform where teams from all walks of life come together to transform waste materials into breathtaking works of art. This event not only showcases the power of human innovation but also serves as a reminder that even the most discarded and overlooked items can be turned into masterpieces.</p>
              <p className="md:w-[40rem] text-[#3e474d] text-justify">At Nature Canvas, the primary goal is to shed light on the incredible potential of discarded items. From old newspapers and magazines to scrap metal, plastic bottles, and more, the teams are encouraged to explore the limitless possibilities that lie within waste materials. The event invites participants to think outside the box, to see beauty where others see trash, and to redefine the concept of artistry.</p>
              <p className="md:w-[40rem] text-[#3e474d] text-justify">Nature Canvas thrives on the spirit of teamwork and collaboration. Each team consists of individuals from diverse backgrounds, including artists, environmentalists, engineers, and everyday enthusiasts. Together, they pool their skills, creativity, and resourcefulness to craft unique and stunning pieces of art. The event is not just about creating art; it's about connecting people and forging new bonds. Through the collaborative process, participants learn from each other, exchange ideas, and gain a deeper appreciation for the environment and the importance of recycling and upcycling.</p>
            </div>
          </div>
          <div className='flex gap-x-14 justify-center items-center flex-wrap gap-y-8'>
            <div className='h-24 w-56 bg-[#192B34] rounded-lg p-5'>
              <h3 className='text-[#00ED64] text-lg font-Mooli font-semibold'>Venue</h3>
              <h4 className='text-white font-Mooli'>Seminar Hall CB-105</h4>
            </div>
            <div className='h-24 w-56 bg-[#192B34] rounded-lg p-5'>
              <h3 className='text-[#00ED64] text-lg font-Mooli font-semibold'>Date</h3>
              <h4 className='text-white font-Mooli'>26/09/2023</h4>
            </div>
            <div className='h-24 w-56 bg-[#192B34] rounded-lg p-5'>
              <h3 className='text-[#00ED64] text-lg font-Mooli font-semibold'>Time</h3>
              <h4 className='text-white font-Mooli'>12:00 PM To 01:00 PM</h4>
            </div>
          </div>
        </div>

        <div className='my-28'>
          <h2 className='text-center text-2xl md:text-3xl lg:text-5xl font-Mooli font-extrabold text-[#023430]'> Eco Bricks Workshop</h2>
          <div className='px-5 flex flex-wrap-reverse justify-center gap-12 my-10'>
            <div className='space-y-5'>
              <p className="md:w-[40rem] text-[#3e474d] text-justify">An eco-bricks workshop is an educational event or hands-on activity that teaches participants how to create eco-friendly building blocks called "eco-bricks" from plastic waste. During the workshop, participants typically learn about the environmental impact of plastic pollution and the importance of recycling.</p>
              <p className="md:w-[40rem] text-[#3e474d] text-justify">Eco-bricks are a sustainable construction material made by tightly stuffing plastic bottles with clean and sorted plastic waste. In addition to their eco-friendly nature, these bricks encourage community involvement and have a positive environmental impact</p>
            </div>
            <img className='w-[35rem]' src={EcoBricksImage} alt="" />
          </div>
          <div className='flex gap-x-14 justify-center items-center flex-wrap gap-y-8'>
            <div className='h-24 w-56 bg-[#192B34] rounded-lg p-5'>
              <h3 className='text-[#00ED64] text-lg font-Mooli font-semibold'>Venue</h3>
              <h4 className='text-white font-Mooli'>Seminar Hall CB-105</h4>
            </div>
            <div className='h-24 w-56 bg-[#192B34] rounded-lg p-5'>
              <h3 className='text-[#00ED64] text-lg font-Mooli font-semibold'>Date</h3>
              <h4 className='text-white font-Mooli'>26/09/2023</h4>
            </div>
            <div className='h-24 w-56 bg-[#192B34] rounded-lg p-5'>
              <h3 className='text-[#00ED64] text-lg font-Mooli font-semibold'>Time</h3>
              <h4 className='text-white font-Mooli'>02:00 PM To 03:00 PM</h4>
            </div>
          </div>
        </div>

        <div className='my-28'>
          <h2 className='text-center text-2xl md:text-3xl lg:text-5xl font-Mooli font-extrabold text-[#023430]'>Seed Ball Workshop</h2>
          <div className='px-5 flex flex-wrap justify-center gap-12 my-10'>
            <img className='w-[35rem]' src={SeedBallImage} alt="" />
            <div className='space-y-5'>
              <p className="md:w-[40rem] text-[#3e474d] text-justify">A seed ball workshop is an engaging and educational event that teaches participants how to create seed balls, which are small, self-contained spheres of soil, clay, and seeds. The purpose of seed balls is to make it easy to plant seeds in a natural and sustainable way. </p>
              <p className="md:w-[40rem] text-[#3e474d] text-justify">The workshop on seed balls commences with an introduction to these eco-friendly spheres and their ecological significance, emphasizing their utility in reforestation, wildflower planting, and habitat restoration. It then shifts focus to seed selection, educating participants on the importance of choosing native plant species suitable for the local environment. The core activity centers around mixing clay, soil, and selected seeds, with instructors guiding participants on the correct ratios and consistency of the mixture. Afterward, participants form small, marble-sized seed balls, each housing one or more seeds within a protective clay-soil shell. The next step involves drying and curing the seed balls, a crucial process explained by instructors to ensure their robustness for planting. Participants are then taught various planting techniques, such as tossing them into open fields, scattering them in gardens, or strategically placing them in degraded areas, with a focus on timing and location for optimal success. Throughout the workshop, the environmental benefits of seed balls, including soil enrichment, erosion control, and biodiversity enhancement, are underscored. Participants also have the hands-on opportunity to create their own seed balls, experimenting with different seed combinations and shapes.</p>
            </div>
          </div>
          <div className='flex gap-x-14 justify-center items-center flex-wrap gap-y-8'>
            <div className='h-24 w-56 bg-[#192B34] rounded-lg p-5'>
              <h3 className='text-[#00ED64] text-lg font-Mooli font-semibold'>Venue</h3>
              <h4 className='text-white font-Mooli'>Seminar Hall CB-105</h4>
            </div>
            <div className='h-24 w-56 bg-[#192B34] rounded-lg p-5'>
              <h3 className='text-[#00ED64] text-lg font-Mooli font-semibold'>Date</h3>
              <h4 className='text-white font-Mooli'>26/09/2023</h4>
            </div>
            <div className='h-24 w-56 bg-[#192B34] rounded-lg p-5'>
              <h3 className='text-[#00ED64] text-lg font-Mooli font-semibold'>Time</h3>
              <h4 className='text-white font-Mooli'>03:00 PM To 03:30 PM</h4>
            </div>
          </div>
        </div>

        <div className='my-28'>
          <h2 className='text-center text-2xl md:text-3xl lg:text-5xl font-Mooli font-extrabold text-[#023430]'>Eco Folks</h2>
          <div className='px-5 flex flex-wrap-reverse justify-center gap-12 my-10'>
            <div className='space-y-5'>
              <p className="md:w-[40rem] text-[#3e474d] text-justify">The world we live in is changing rapidly, and as stewards of our planet, it's our responsibility to protect and preserve its beauty for future generations. In the spirit of environmental consciousness and creativity, we are thrilled to announce the "Eco Folks Dance Competition," an event that brings together individuals and teams who share a passion for both dance and the environment. Get ready to dance your way towards a greener tomorrow!</p>
              <p className="md:w-[40rem] text-[#3e474d] text-justify">At Eco Folks, we believe that dance is not just about moving to the rhythm; it's also a powerful platform for raising awareness about important issues. Our dance competition encourages participants to use their talent to highlight environmental concerns and promote sustainable living. Through the art of dance, we aim to inspire change and encourage everyone to take action for a healthier planet.</p>
              <p className="md:w-[40rem] text-[#3e474d] text-justify">The Eco Folks Dance Competition is open to everyone, regardless of age, gender, or experience level. Whether you're a seasoned dancer, a beginner, or simply someone with a passion for dance and the environment, this event is for you! Participants can register as individuals or as part of a team. The more diverse the participants, the richer the tapestry of dance styles and environmental messages we can showcase.</p>
            </div>
            <img className='w-[35rem]' src={GangaSwachtaImage} alt="" />
          </div>
          <div className='flex gap-x-14 justify-center items-center flex-wrap gap-y-8'>
            <div className='h-24 w-56 bg-[#192B34] rounded-lg p-5'>
              <h3 className='text-[#00ED64] text-lg font-Mooli font-semibold'>Venue</h3>
              <h4 className='text-white font-Mooli'>Seminar Hall CB-105</h4>
            </div>
            <div className='h-24 w-56 bg-[#192B34] rounded-lg p-5'>
              <h3 className='text-[#00ED64] text-lg font-Mooli font-semibold'>Date</h3>
              <h4 className='text-white font-Mooli'>27/09/2023</h4>
            </div>
            <div className='h-24 w-56 bg-[#192B34] rounded-lg p-5'>
              <h3 className='text-[#00ED64] text-lg font-Mooli font-semibold'>Time</h3>
              <h4 className='text-white font-Mooli'>10:00 AM To 11:00 AM</h4>
            </div>
          </div>
        </div>

        <div className='my-28'>
          <h2 className='text-center text-2xl md:text-3xl lg:text-5xl font-Mooli font-extrabold text-[#023430]'>Music Unwind</h2>
          <div className='px-5 flex flex-wrap justify-center gap-12 my-10'>
            <img className='w-[35rem]' src={MusicUnwindImage} alt="" />
            <div className='space-y-5'>
              <p className="md:w-[40rem] text-[#3e474d] text-justify">The world is a symphony of natural beauty, and what better way to celebrate it than through the universal language of music? "Music Unwind" is an enchanting event that brings together individuals from all walks of life to harmonize with nature through the power of song. Nestled in the heart of nature, this event promises a melodious journey that will soothe your soul and deepen your connection with the environment.</p>
              <p className="md:w-[40rem] text-[#3e474d] text-justify">Music Unwind isn't just a typical music event; it's a celebration of our planet's natural wonders. Through music, we aim to foster a deeper appreciation for the environment, reminding ourselves of the fragile beauty that surrounds us. We believe that by connecting with nature through song, we can inspire positive change and contribute to the preservation of our planet.</p>
              <p className="md:w-[40rem] text-[#3e474d] text-justify">Our event welcomes a diverse array of performers, from professional musicians to passionate amateurs who simply love to sing. What unites them all is their shared love for nature and the desire to express it through their voices. Expect to hear a wide range of musical styles, from folk tunes inspired by rural landscapes to pop songs celebrating the wonders of the natural world.</p>
            </div>
          </div>
          <div className='flex gap-x-14 justify-center items-center flex-wrap gap-y-8'>
            <div className='h-24 w-56 bg-[#192B34] rounded-lg p-5'>
              <h3 className='text-[#00ED64] text-lg font-Mooli font-semibold'>Venue</h3>
              <h4 className='text-white font-Mooli'>Seminar Hall CB-105</h4>
            </div>
            <div className='h-24 w-56 bg-[#192B34] rounded-lg p-5'>
              <h3 className='text-[#00ED64] text-lg font-Mooli font-semibold'>Date</h3>
              <h4 className='text-white font-Mooli'>25/09/2023</h4>
            </div>
            <div className='h-24 w-56 bg-[#192B34] rounded-lg p-5'>
              <h3 className='text-[#00ED64] text-lg font-Mooli font-semibold'>Time</h3>
              <h4 className='text-white font-Mooli'>11:30 AM To 12:30 PM</h4>
            </div>
          </div>
        </div>

        <div className='my-28'>
          <h2 className='text-center text-2xl md:text-3xl lg:text-5xl font-Mooli font-extrabold text-[#023430]'>Street Saga</h2>
          <div className='px-5 flex flex-wrap-reverse justify-center gap-12 my-10'>
            <div className='space-y-5'>
              <p className="md:w-[40rem] text-[#3e474d] text-justify">In a world where the delicate balance of nature is increasingly under threat, it is crucial for us to come together and raise our voices for the environment. What better way to do this than through the power of art and drama? Welcome to "Street Saga," an event that promises to be a unique fusion of creativity, activism, and entertainment. This thrilling extravaganza will bring together individuals and teams to perform drama and nukkad natak (street plays) that revolve around the themes of nature and the environment.</p>
              <p className="md:w-[40rem] text-[#3e474d] text-justify">Street theater, or nukkad natak, is a vibrant and dynamic form of artistic expression that has the ability to captivate audiences and deliver powerful messages in an engaging way. It is an art form that thrives on the energy of live performances and the immediate connection it establishes with the audience. "Street Saga" aims to harness this power to spread awareness about the pressing issues our planet faces today.</p>
              <p className="md:w-[40rem] text-[#3e474d] text-justify">"Street Saga" will feature a diverse range of performances, from solo acts to group dramas, all centered on the themes of nature and the environment. Expect to be moved, inspired, and educated by the thought-provoking narratives and exceptional acting.</p>
            </div>
            <img className='w-[35rem]' src={StreetSagaImage} alt="" />
          </div>
          <div className='flex gap-x-14 justify-center items-center flex-wrap gap-y-8'>
            <div className='h-24 w-56 bg-[#192B34] rounded-lg p-5'>
              <h3 className='text-[#00ED64] text-lg font-Mooli font-semibold'>Venue</h3>
              <h4 className='text-white font-Mooli'>Seminar Hall CB-105</h4>
            </div>
            <div className='h-24 w-56 bg-[#192B34] rounded-lg p-5'>
              <h3 className='text-[#00ED64] text-lg font-Mooli font-semibold'>Date</h3>
              <h4 className='text-white font-Mooli'>27/09/2023</h4>
            </div>
            <div className='h-24 w-56 bg-[#192B34] rounded-lg p-5'>
              <h3 className='text-[#00ED64] text-lg font-Mooli font-semibold'>Time</h3>
              <h4 className='text-white font-Mooli'>01:00 PM To 02:00 PM</h4>
            </div>
          </div>
        </div>

        <div className='my-28'>
          <h2 className='text-center text-2xl md:text-3xl lg:text-5xl font-Mooli font-extrabold text-[#023430]'>Poetry Unplugged</h2>
          <div className='px-5 flex flex-wrap-reverse justify-center gap-12 my-10'>
            <div className='space-y-5'>
              <p className="md:w-[40rem] text-[#3e474d] text-justify">Nature has always been a profound source of inspiration for poets throughout the ages. Its beauty, complexity, and ever-changing essence have spurred countless verses that capture the essence of the natural world. In an increasingly digital and fast-paced world, there's a growing need to reconnect with nature, and what better way to do so than through the power of poetry? That's precisely the aim of "Poetry Unplugged," an upcoming event that promises to immerse attendees in the beauty of nature through the spoken word.</p>
              <p className="md:w-[40rem] text-[#3e474d] text-justify">"Poetry Unplugged" is a unique and immersive event that celebrates the wonders of nature through poetry. In this event poets and poetry enthusiasts will gather to share their love for the environment and the written word. The event is open to all, from seasoned poets to those simply looking to experience the magic of nature through verse.</p>
              <p className="md:w-[40rem] text-[#3e474d] text-justify">"The heart of "Poetry Unplugged" lies in the captivating performances by a diverse group of poets. Attendees will be treated to an array of poetic styles and voices, each bringing a unique perspective on the natural world. From sonnets to haikus, the event promises a rich tapestry of poetic expression.</p>
            </div>
            <img className='w-[35rem]' src={PoetryUnpluggedImage} alt="" />
          </div>
          <div className='flex gap-x-14 justify-center items-center flex-wrap gap-y-8'>
            <div className='h-24 w-56 bg-[#192B34] rounded-lg p-5'>
              <h3 className='text-[#00ED64] text-lg font-Mooli font-semibold'>Venue</h3>
              <h4 className='text-white font-Mooli'>Seminar Hall CB-105</h4>
            </div>
            <div className='h-24 w-56 bg-[#192B34] rounded-lg p-5'>
              <h3 className='text-[#00ED64] text-lg font-Mooli font-semibold'>Date</h3>
              <h4 className='text-white font-Mooli'>26/09/2023</h4>
            </div>
            <div className='h-24 w-56 bg-[#192B34] rounded-lg p-5'>
              <h3 className='text-[#00ED64] text-lg font-Mooli font-semibold'>Time</h3>
              <h4 className='text-white font-Mooli'>02:15 PM To 03:00 PM</h4>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Events;