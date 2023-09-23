import React, {useContext, useEffect} from 'react';
import CollegeImage from "../assets/images/Slider_3.jpg";
import HistoryIllustration from "../assets/images/Histrory illustration.svg";
import LoaderContext from "../context/loaderContext";

const About = () => {

  const {setProgress} = useContext(LoaderContext);

  useEffect(()=>{
    setProgress(100);
  }, []);

  return (
    <>
      <section className='profile-bg'>
        <div className='my-16 md:h-[90vh] w-full flex justify-center items-center flex-wrap gap-12 px-5 md:my-0'>
          <img className="w-[35rem]" src={CollegeImage} alt="" />
          <div className='max-w-3xl md:px-10'>
            <h1 className='text-3xl md:text-4xl font-Mooli font-bold my-5 text-[#001e2b]'>COER University</h1>
            <p className='md:text-lg text-[#374045] font-Mooli'>Coer University, Roorkee, located in Uttarakhand, India, is a renowned institution with a rich history dating back to its founding in 2003. Initially established as an engineering college, it has evolved into a multidisciplinary university offering a wide range of undergraduate and postgraduate programs in engineering, management, computer applications, and more. COER is dedicated to academic excellence, innovation, and holistic development. It boasts state-of-the-art facilities, a distinguished faculty, and a commitment to producing graduates who contribute significantly to society. COER's history is marked by a relentless pursuit of knowledge and a vision for a brighter future.</p>
          </div>
        </div>
        <div>
          <h1 className='text-3xl text-center md:text-4xl lg:text-6xl font-Mooli font-extrabold text-[#023430]'>About The Eco Club</h1>
          <div className='my-16 flex justify-center items-center flex-wrap-reverse gap-12 px-5'>
            <div className='max-w-3xl md:px-10'>
              <h2 className='text-xl md:text-3xl font-semibold font-Mooli text-[#001e2b]'>History</h2>
              <p className='md:text-lg text-[#374045] my-4 font-Mooli'>ECO CLUB COER was established in 2009, under the College of Engineering Roorkee. The club was formed with the aim of making the students aware of their environmental issues and their duties towards the nature. For the last few years ECO CLUB, COER has been active in its duties with full enthusiasm conducting different activities with the sole objective of creating awareness about the degrading environment and initiating as ensue of responsibility among the fellow COERians.</p>
              <p className='md:text-lg text-[#374045] font-Mooli'>The eco club, also known as an environmental club, unites individuals with a shared passion for safeguarding the environment. Typically found in schools, colleges, workplaces, and communities, these groups aim to enhance environmental awareness and sustainability. Activities encompass education, community service, advocacy, and environmental projects. Members collaborate with diverse organizations, engage in outreach, and develop valuable skills. Their mission is to create a lasting impact by fostering environmental responsibility, networking, and participating in global environmental events. Eco clubs play a pivotal role in nurturing environmental stewardship and promoting sustainable practices for a greener future.</p>
            </div>
            <img className='w-96' src={HistoryIllustration} alt="" />
          </div>
        </div>
      </section>
      <section className='mt-10 py-24 bg-[#001E2B] rounded-tl-[3rem]  md:rounded-tl-[5rem] lg:rounded-tl-[10rem]'>
        <h1 className='text-3xl text-center md:text-4xl lg:text-5xl font-Mooli font-extrabold text-[#00ED64]'>How We Grow</h1>
        <p className='text-md md:text-lg max-w-4xl mt-10 mx-auto text-[#d8d8d8] my-4 text-center px-5 md:text-justify'>To expand and fortify your college's environment club, strategic planning, communication, and engagement are key. Begin by assessing its current status, understanding membership, activities, and strengths. Establish clear, achievable growth goals for impactful campus and community involvement. Appoint dedicated leaders to steer the club. Boost recruitment and outreach through creative promotion, participation in college events, collaborations, and inviting inspiring guest speakers. Create diverse, engaging activities to sustain member interest. Foster transparent communication via online platforms and mailing lists. Cultivate partnerships for resources and support. Prioritize education, advocacy, and recognition. Adapt to feedback, and ensure long-term sustainability with succession planning.</p>
      </section>
    </>
  )
}

export default About;