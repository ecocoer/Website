import React, {useEffect, useContext} from 'react';
import LoaderContext from "../context/loaderContext";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import 'swiper/css/effect-fade';
import { Pagination, Autoplay } from 'swiper/modules';
import { EffectFade } from 'swiper/modules';
import Card from '../components/Card';
import PlantationImage from "../assets/images/plantation.svg";
import GangaSwachhtaImage from "../assets/images/Ganga.svg";
import PublicAwareness from "../assets/images/public awareness.svg";
import HaritimaImage from "../assets/images/13559217_5278464.svg";
import Bricks from "../assets/images/bricks.svg";
import EcoDrama from "../assets/images/Eco Drama.svg";
import Recycle from "../assets/images/recycle.svg";
import Slide from '../components/Slide';
import ChairmanSir from "../assets/images/Chairman-Sir.jpg";
import VCSir from "../assets/images/1532850162683.jpeg"
import ConvenorOne from "../assets/images/Convenor 1.png";
import ConvenorImage from "../assets/images/Convenor.jpg";
import MembersIcon from "../assets/icons/group.png";
import EventsIcon from "../assets/icons/event.png";
import InfiniteLoopIcon from "../assets/icons/infinite-mathematical-symbol.png";
import CreatorOne from "../assets/images/IMG_20211118_131620_419.jpg";
import CreatorTwo from "../assets/images/Image 2023-09-21 at 23.36.16.jpg";
import SlideImage1 from "../assets/images/Slide image 1.jpg";
import SlideImage2 from "../assets/images/Slide image 2.jpg";
import SlideImage3 from "../assets/images/Slide image 3.jpg";

const Home = () => {

    const { setProgress } = useContext(LoaderContext);

    useEffect(() => {
        document.title = "Eco Club | Connecting Students for a Greener Tomorrow"
        setProgress(100);
    }, []);

    return (
        <>
            <section className="home-bg h-[90vh] w-full flex justify-center items-center">
                <div className='py-4 text-center'>
                    <h1 className='text-[#00ED64]  text-4xl font-bold md:text-8xl md:font-extrabold'>THE ECO CLUB</h1>
                    <p className='text-white py-3 text-xl font-Mooli md:text-2xl md:font-bold'>“We are not above nature, we are a part of nature”</p>
                </div>
            </section>
            <section className='h-full w-full py-5 lg:py-12'>
                <h1 className='text-3xl lg:text-4xl text-center p-4 font-medium'><span className='text-[#00ED64]'>Eco Team</span> - Where Change Begins</h1>
                <p className='text-[#303030] max-w-2xl px-4 lg:max-w-4xl mx-auto text-justify py-3'><span className='py-1 px-2 rounded-lg bg-[#8db089] font-semibold text-[#19452b]'>The ECO Club</span> is the club in COER university which regulates the eco friendly activities in the campus and beyond that, The ECO club is determined to organise events that inspire the youth and the students to look forward for the sustainable development by any means. The club organises fun activities within and even outside the campus grabbing the attention of entire city by involving the sense of responsibility towards nature through Ganga Swachhta  Abhiyan among the citizen.</p>
                <div className='flex justify-center items-center flex-wrap mx-4 my-12 lg:mx-20 gap-x-10 gap-y-14'>
                    <Card image={PlantationImage} title="Plantation Drive" description="Tree Plantation drives combat many environmental issues like deforestation, erosion of soil, desertification in semi-arid areas, global warming and hence enhancing the beauty and balance of the environment." />
                    <Card image={GangaSwachhtaImage} title="Ganga Swachhta" description="The objectives is to ensure effective abatement of pollution and conservation of the river Ganga by adopting a river basin approach to promote inter-sectoral co-ordination." />
                    <Card image={PublicAwareness} title="Public Awareness" description="Spread the word about our Eco Club! Join us in our mission to protect the environment. Stay updated on our eco-friendly initiatives and events." />
                    <Card image={Bricks} title="Eco Bricks" description="Eco bricks are an innovative and interesting way to reduce the amount of plastic in landfills. Their circular design is environmentally conscious and easy to recreate at home or in communities with limited construction resources." />
                    <Card image={EcoDrama} title="Nukkad Natak" description="The objective of organizing this Nukkad Natak was to spread awareness among the students about the relevance of different environmental issues, like potable water, clean water bodies ,no plastic usage, afforestation etc." />
                    <Card image={Recycle} title="3 R’s" description="Natural canvas art has the power to stir emotions within us. The beauty and harmony depicted in these artworks resonate with our innermost selves, evoking a range of feelings such as awe, wonder, and even nostalgia." />
                </div>
            </section>
            <section className='h-sceeen w-full text-white md:px-5 lg:px-8 bg-[#001E2B] rounded-tr-[3rem]  md:rounded-tr-[5rem] lg:rounded-tr-[10rem] py-5 overflow-hidden '>
                <div className='flex flex-wrap-reverse my-20 justify-center md:justify-around items-center gap-y-5 gap-x-4 lg:gap-0'>
                    <div className='w-80 md:w-[30rem] lg:w-[40rem]'>
                        <Swiper
                            pagination={{
                                dynamicBullets: true,
                            }}
                            spaceBetween={50}
                            modules={[Pagination, Autoplay, EffectFade]}
                            loop={true}
                            effect="fade"
                            className=""
                        >
                            <SwiperSlide><Slide image={SlideImage1} /></SwiperSlide>
                            <SwiperSlide><Slide image={SlideImage2} /></SwiperSlide>
                            <SwiperSlide><Slide image={SlideImage3} /></SwiperSlide>
                        </Swiper>
                    </div>
                    <div className='w-64 md:w-72 lg:w-[26rem]'>
                        <h2 className='text-4xl md:text-5xl lg:text-6xl font-Mooli my-8 font-bold text-[#00ED64]'>The Eco Dome</h2>
                        <p className='text-[#cdcdcd] text-lg'>The Eco Dome created by students at COER College is a sustainable and innovative structure designed to promote eco-friendly practices. It likely incorporates environmentally conscious materials and technology to minimize its ecological footprint while providing a functional space for various purposes, aligning with the principles of sustainability and conservation. For specific details, it's best to refer to official documentation or contact the college directly.</p>
                    </div>
                </div>
                <div className='flex flex-wrap my-20 justify-center md:justify-around items-center gap-y-5 gap-x-4 lg:gap-0'>
                    <div className='w-64 md:w-72 lg:w-[26rem]'>
                        <h2 className='text-4xl md:text-5xl lg:text-6xl font-Mooli my-8 font-bold text-[#00ED64]'>Haritima 2K23</h2>
                        <p className='text-[#cdcdcd] text-lg'>Welcome to Haritima 2k23 Eco Club, where our passion for the environment drives positive change. Committed to a sustainable future, we unite students, staff, and the community in eco-conscious endeavors. Explore our initiatives, workshops, and projects dedicated to preserving nature's beauty and ensuring a greener tomorrow. Together, we make a lasting impact. Join us on this green journey!</p>
                    </div>
                    <img src={HaritimaImage} alt="" className='w-80 md:w-[30rem] lg:w-[40rem]' />
                </div>
            </section>
            <section className='py-8 px-4'>
                <div className='my-24 px-4'>
                    <h2 className='text-3xl text-center text-[#001e2b] md:text-4xl lg:text-5xl font-Mooli my-10 font-bold'>Committee Mentor</h2>
                    <div className='flex justify-center items-center gap-y-8 gap-x-24 lg:gap-x-36 flex-wrap'>
                        <div
                            className='profile-bg h-96 w-72 flex flex-col justify-center items-center bg-cover bg-no-repeat'>
                            <img className="h-44 rounded-full" src={ChairmanSir} alt="" />
                            <h3 className='text-center mt-7 text-lg font-Mooli font-semibold'>Shri J.C. Jain</h3>
                            <h4 className='text-center my-2 font-Mooli text-[#5d6c74]'>Chancellor, COER University</h4>
                        </div>
                        <div className='profile-bg h-96 w-72 flex flex-col justify-center items-center'>
                            <img className="h-44 rounded-full" src={VCSir} alt="" />
                            <h3 className='text-center mt-7 text-lg font-Mooli font-semibold'>Dr. B.M Singh</h3>
                            <h4 className='text-center my-2 font-Mooli text-[#5d6c74]'>Group Director, COER University</h4>
                        </div>
                    </div>
                </div>
                <div className='my-24 px-4'>
                    <h2 className='text-3xl text-center text-[#001e2b] md:text-4xl lg:text-5xl font-Mooli my-10 font-bold'>Committee Convenor</h2>
                    <div className='flex justify-center items-center gap-y-8 gap-x-24 lg:gap-x-36 flex-wrap'>
                        <div
                            className='profile-bg h-96 w-72 flex flex-col justify-center items-center bg-cover bg-no-repeat'>
                            <img className="h-44 rounded-full" src={ConvenorOne} alt="" />
                            <h3 className='text-center mt-7 text-lg font-Mooli font-semibold'>Dr. Pashupati Nath</h3>
                            <h4 className='text-center my-2 font-Mooli text-[#5d6c74]'>Assistant Professor, College of Smart Agriculture, COER University Roorkee</h4>
                        </div>
                        <div className='profile-bg h-96 w-72 flex flex-col justify-center items-center'>
                            <img className="h-44 rounded-full" src={ConvenorImage} alt="" />
                            <h3 className='text-center mt-7 text-lg font-Mooli font-semibold'>Dr. Induja Mishra</h3>
                            <h4 className='text-center my-2 font-Mooli text-[#5d6c74]'>Assistant Professor, College of Smart Agriculture, COER University Roorkee</h4>
                        </div>
                    </div>
                </div>

                <div className='flex mb-32 justify-center items-center gap-x-12 gap-y-8 flex-wrap'>
                    <div className='h-32 w-72 bg-[#023430] flex justify-start gap-x-8 items-center p-4 rounded-xl'>
                        <img className="w-20" src={MembersIcon} alt="" />
                        <div>
                            <h3 className='text-2xl font-Mooli font-semibold text-[#d8d8d8]'>Members</h3>
                            <h3 className='text-3xl mt-2 font-bold text-white'>30</h3>
                        </div>
                    </div>
                    <div className='h-32 w-72 bg-[#023430] flex justify-start gap-x-8 items-center p-4 rounded-xl'>
                        <img className="w-20" src={EventsIcon} alt="" />
                        <div>
                            <h3 className='text-2xl font-Mooli font-semibold text-[#d8d8d8]'>Events</h3>
                            <h3 className='text-3xl mt-2 font-bold text-white'>6</h3>
                        </div>
                    </div>
                    <div className='h-32 w-72 bg-[#023430] flex justify-start gap-x-8 items-center p-4 rounded-xl'>
                        <img className="w-20" src={InfiniteLoopIcon} alt="" />
                        <div>
                            <h3 className='text-2xl font-Mooli font-semibold text-[#d8d8d8]'>Fun</h3>
                            <h3 className='text-3xl mt-2 font-bold text-white'>Unlimted</h3>
                        </div>
                    </div>
                </div>

                <div className='h-96 w-full bg-[#00684A] rounded-[3rem] flex justify-center items-center'>
                    <div className='max-w-2xl'>
                        <h2 className='text-4xl md:text-5xl lg:text-6xl font-Mooli font-bold text-white text-center'>Our Mission</h2>
                        <p className='text-[#dfdfdf] my-4 text-center px-5'>The mission of an Eco club committee typically involves promoting environmental awareness, conservation, and sustainable practices within a  community. This can include organizing educational events, advocating for eco-friendly policies, initiating conservation projects, and fostering a sense of environmental responsibility among members and the larger community.</p>
                    </div>
                </div>
                <div className='my-24 px-4'>
                    <h2 className='text-3xl text-center text-[#001e2b] md:text-4xl lg:text-5xl font-Mooli my-10 font-bold'>FAQ</h2>
                    <div className='md:my-20 flex justify-center items-center flex-wrap gap-x-14'>
                        <div className='max-w-2xl my-8'>
                            <p className='text-md font-Mooli font-semibold mb-3'>What is the role of the eco club committee?</p>
                            <p className='text-sm font-Mooli text-[#5d6c74]'>The committee oversees and coordinates the eco club's activities, ensuring the smooth functioning and alignment with club objectives.</p>
                        </div>
                        <div className='max-w-2xl my-8'>
                            <p className='text-md font-Mooli font-semibold mb-3'>How can I become a committee member?</p>
                            <p className='text-sm font-Mooli text-[#5d6c74]'>Typically, committee positions are elected or appointed. Express your interest, and if there are openings, participate in the selection process.</p>
                        </div>
                        <div className='max-w-2xl my-8'>
                            <p className='text-md font-Mooli font-semibold mb-3'>What are the responsibilities of committee members?</p>
                            <p className='text-sm font-Mooli text-[#5d6c74]'>Responsibilities may include organizing events, managing finances, promoting the club's mission, coordinating meetings, and representing the club.</p>
                        </div>
                        <div className='max-w-2xl my-8'>
                            <p className='text-md font-Mooli font-semibold mb-3'>How often does the committee meet?</p>
                            <p className='text-sm font-Mooli text-[#5d6c74]'>Meetings frequency varies but is usually regular, such as monthly or bi-weekly, to discuss plans, updates, and upcoming initiatives.</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className='w-full h-96 bg-[#001E2B] rounded-t-[3rem] md:rounded-t-[5rem] lg:rounded-t-[8rem] flex flex-col justify-center items-center px-5'>
                <p className='text-4xl md:text-5xl lg:text-6xl font-Mooli font-bold text-[#00ED64] text-center'>Join Now!</p>
                <p className='text-[#cdcdcd] text-center text-lg my-3'>Come together to cultivate a greener future. Join our Eco Club committee and make a lasting impact on our planet.</p>
                <div className='pt-6'>
                    <h3 className='text-center my-4 font-Mooli text-white text-sm '>Created By</h3>
                    <div className='flex space-x-5'>
                        <a href="https://www.linkedin.com/in/shivam-rai-63234b282" target="_blank" rel="noreferrer"><img className='h-12 w-12 rounded-full border-2 border-[#00ED64]' src={CreatorOne} alt="" /></a>
                        <a href="https://www.linkedin.com/in/shivam-rajan-4b0823259" target="_blank" rel="noreferrer"><img className='h-12 w-12 rounded-full border-2 border-[#00ED64]' src={CreatorTwo} alt="" /></a>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Home;