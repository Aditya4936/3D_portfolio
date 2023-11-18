import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import { CTA } from "../components";
import { experiences, skills } from "../constants";

import "react-vertical-timeline-component/style.min.css";

const About = () => {
  return (
    <section className="max-container">
      <h1 className="head-text">
        Hello, I'm{" "}
        <span className="blue-gradient_text font-semibold drop-shadow">
          {" "}
          Aditya
        </span>{" "}
        👋
      </h1>

      <div className="mt-5 flex flex-col gap-3 text-slate-500">
        <p>
          Computer Engineer based in India, specializing in Web-Development and
          UI/UX Designing.
        </p>
      </div>

      <div className="py-10 flex flex-col">
        <h3 className="subhead-text">My Skills</h3>

        <div className="mt-16 flex flex-wrap gap-12">
          {skills.map((skill) => (
            <div className="block-container w-20 h-20" key={skill.name}>
              <div className="btn-back rounded-xl" />
              <div className="btn-front rounded-xl flex justify-center items-center">
                <img
                  src={skill.imageUrl}
                  alt={skill.name}
                  className="w-1/2 h-1/2 object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="py-16">
        <h3 className="subhead-text">About My Self.</h3>
        <div className="mt-5 flex flex-col gap-3 text-slate-500">
          <p>
            "Hello there! I'm Aditya Patel, a dedicated student on a fascinating
            journey through the realm of computer science. Currently enrolled at
            Marwadi University, I'm deeply engaged in exploring the diverse
            landscapes of technology, coding, and innovation. Hailing from the
            vibrant town of Morbi, I've always been captivated by the world of
            bits and bytes. My academic journey is fueled by a desire to
            understand the intricacies of computer science and to uncover its
            potential to transform our lives.
            <br />
            <br />
            Hailing from the vibrant town of Morbi, I've always been captivated
            by the world of bits and bytes. My academic journey is fueled by a
            desire to understand the intricacies of computer science and to
            uncover its potential to transform our lives.
            <br />
            <br />
            As I navigate through my educational voyage, I'm committed to honing
            my skills in areas like software development, data structures, and
            algorithms. The thrill of solving complex problems and the joy of
            creating functional applications inspire me to reach for new
            heights. With my graduation expected in 2024, I'm eager to seize
            every opportunity to learn, collaborate, and innovate. This
            portfolio serves as a window into my growth, projects, and
            accomplishments. Join me on this exciting expedition as I merge
            creativity with code to build a future empowered by technology. Feel
            free to connect, collaborate, and be a part of my journey towards a
            brighter digital horizon!"
            <br />
            <br />
            This portfolio serves as a window into my growth, projects, and
            accomplishments. Join me on this exciting expedition as I merge
            creativity with code to build a future empowered by technology. Feel
            free to connect, collaborate, and be a part of my journey towards a
            brighter digital horizon!"
          </p>
        </div>

        {/* <div className='mt-12 flex'>
          <VerticalTimeline>
            {experiences.map((experience, index) => (
              <VerticalTimelineElement
                key={experience.company_name}
                date={experience.date}
                iconStyle={{ background: experience.iconBg }}
                icon={
                  <div className='flex justify-center items-center w-full h-full'>
                    <img
                      src={experience.icon}
                      alt={experience.company_name}
                      className='w-[60%] h-[60%] object-contain'
                    />
                  </div>
                }
                contentStyle={{
                  borderBottom: "8px",
                  borderStyle: "solid",
                  borderBottomColor: experience.iconBg,
                  boxShadow: "none",
                }}
              >
                <div>
                  <h3 className='text-black text-xl font-poppins font-semibold'>
                    {experience.title}
                  </h3>
                  <p
                    className='text-black-500 font-medium text-base'
                    style={{ margin: 0 }}
                  >
                    {experience.company_name}
                  </p>
                </div>

                <ul className='my-5 list-disc ml-5 space-y-2'>
                  {experience.points.map((point, index) => (
                    <li
                      key={`experience-point-${index}`}
                      className='text-black-500/50 font-normal pl-1 text-sm'
                    >
                      {point}
                    </li>
                  ))}
                </ul>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div> */}
      </div>

      <hr className="border-slate-200" />

      <CTA />
    </section>
  );
};

export default About;
