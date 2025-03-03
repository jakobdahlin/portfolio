import Image from "next/image"
import { Collapsible } from "./collapsible";

const skills = {
  "Design Software": ["Adobe Creative Cloud", "Adobe Photoshop", "Adobe Illustrator", "Figma", "Microsoft Office"],
  "Front-End Dev": [
    "HTML5",
    "CSS",
    "Tailwind CSS",
    "React",
    "Visual Studio Code",
    "Dreamweaver",
    "Wordpress Elementor",
  ],
  "SEO & Analytics": ["SEO strategy & implementation", "Google Search Console", "Keyword Research"],
  "UI/UX Design": ["Wireframing & Prototyping", "Typography", "Color Theory", "Responsive Web Design"],
  "Editing & Management": ["Final Cut Pro X", "Logic Pro", "Sound Design", "Data Entry", "System management"],
}

const experiences = [
  {
    title: "2023 - Present: Web Designer, SEO & Graphic Designer",
    period: "Self-employed",
    location: "New York, NY (Remote)",
    description: [
      "I am expanding my knowledge in web design and UI/UX design, while integrating these skills into my creative work as an architectural photographer. This expansion allows me to create responsive, user-friendly websites that reflect both functionality and aesthetics.",
      {
        period: "Web Design & React",
        content:
          "Build websites using HTML5, CSS, Tailwind CSS, and React, focusing on scalable, intuitive user interfaces.",
      },
      {
        period: "UI/UX Design",
        content:
          "Apply principles of user-centered design to create seamless and engaging experiences. Use wireframing, prototyping, and usability testing to ensure the best possible user outcomes.",
      },
      {
        period: "SEO",
        content:
          "Implement SEO practices to improve website visibility and drive organic traffic with tools like keyword research, Google Search Console and Smartlook.",
      },
      {
        period: "Graphic Design",
        content:
          "Design digital assets and create cohesive brand identities that enhance user experience and strengthen brand presence.",
      },
      {
        period: "Project Management",
        content: "Leverage my organizational skills from architectural photography to build and manage web projects.",
      },
    ],
  },
  {
    title: "2015 - Present: Architectural Photographer",
    period: "Self-employed",
    location: "Örebro, Sweden & New York, NY (Hybrid)",
    description: [
      "As an architectural photographer, I work in both residential and commercial real estate. I document each project from inception to completion, capturing every stage with close attention to detail that reflects my vision and architectural expertise.",
    ],
  },
  {
    title: "2014 - 2016: Childcare Worker",
    period: "Örebro Municipality",
    location: "Örebro, Sweden (Onsite)",
    description: [
      "Organized and led age-appropriate activities for children, encouraged creativity and social development. Managed digital lists and documentation and creation of marketing material.",
    ],
  },
  {
    title: "2013 - 2014: System Administrator",
    period: "Örebro Municipality",
    location: "Örebro, Sweden (Onsite)",
    description: [
      "Helped launch a project to connect job-seeking individuals with companies through a custom-built system. Managed website, social media, and marketing material for various events.",
    ],
  },
]

const education = [
  {
    title: "Swedish Armed Forces – Skaraborg Regiment (Försvarsmakten – Skaraborgs Regemente P4)",
    major: "Military Service – Field Operations & Culinary Training",
    degree: "Diploma & Service Medal",
    location: "Skövde, Sweden, Karlskrona, Sweden",
    description: [
      "Completed 11 months of military service at P4 Skaraborgs Regiment, including general basic training, national field exercises, and a one-month culinary training program at a naval base in southern Sweden.",
    ],
    period: "2009 – 2010"
  },
  {
    title: "Virginska Skolan",
    major: "Media Communication",
    degree: "Upper Secondary Diploma (Gymnasieexamen)",
    location: "Örebro, Sweden",
    description: [
      "Studied Media Communication with a focus on Photography, Graphic Design, and Video Production. Over three years, gradually specialized in Graphic Design and Video Production.",
    ],
    period: "2006 – 2009"
  },
]

export function Resume() {
  return (
    <div className="text-netural-500 text-left">
      <div className="mx-auto w-full px-4 py-8">
        <div className="grid gap-8 md:grid-cols-2">
          {/* Sidebar */}
          <aside className="space-y-6">
            <div className="space-y-2">
              <h1 className="text-2xl text-left font-bold text-white">JAKOB DAHLIN</h1>
              <p className="text-sm leading-relaxed text-neutral-500">
                Architectural photographer, Web designer, SEO strategist and graphic designer based in New York, driven
                by my passion for creativity, mentoring, and development.
              </p>
            </div>

            <div className="relative w-48 h-48 overflow-hidden rounded-full ">
            <Image
            src="https://i.ibb.co/QvVx3JR8/JDPortrait.jpg"
            alt="Jakob Dahlin"
            width={300}
            height={300}
            className="mx-auto rounded-full border-4 border-white shadow-2xl shadow-black"
          />
            </div>

            {Object.entries(skills).map(([title, skillList]) => (
              <Collapsible key={title} title={title} defaultOpen={true} className="text-xl">
                {/* All collapsibles here start as closed */}
                <ul className="space-y-1 text-sm ">
                  {skillList.map((skill) => (
                    <li key={skill} className="hover:text-neutral-300 text-neutral-500 transition-colors duration-100">{skill}</li>
                  ))}
                </ul>
              </Collapsible>
            ))}
          </aside>

          {/* Main Content */}
          <main className="space-y-6">
            <Collapsible title="Experience" defaultOpen={true} className="text-xl">
              <div className="space-y-4">
                {experiences.map((exp, index) => (
                  <Collapsible key={index} title={exp.title} defaultOpen={false} className="text-lg">
                    <div className="space-y-2">
                      <p className="text-lg text-white font-bold">
                        {exp.period} – {exp.location}
                      </p>
                      <div className="space-y-4 text-neutral-500">
                        {exp.description.map((item, idx) => {
                          if (typeof item === "string") {
                            return (
                              <p key={idx} className="text-sm leading-relaxed">
                                {item}
                              </p>
                            )
                          }
                          return (
                            <div key={idx} className="space-y-1">
                              <h4 className="font-semibold text-sm text-neutral-300">{item.period}:</h4>
                              <p className="text-sm leading-relaxed">{item.content}</p>
                            </div>
                          )
                        })}
                      </div>
                    </div>
                  </Collapsible> 
                ))} 

              </div>
            </Collapsible>

            <div className="mb-10">
  <Collapsible title="Education" defaultOpen={true} className="text-xl pb-10">
    <div className="space-y-4">
      {education.map((edu, index) => (
        <div key={index} className="space-y-2 border border-neutral-700 bg-neutral-900 
        rounded-lg p-4">
          <h3 className="text-lg font-semibold text-white">{edu.title}</h3>
          <p className="text-sm text-neutral-300 font-bold">Major:</p>
          <p className="text-sm text-neutral-500">{edu.major}</p>
          <p className="text-sm text-neutral-300 font-bold">Degree:</p>
          <p className="text-sm text-neutral-500">{edu.degree}</p>
          <p className="text-sm text-neutral-300 font-bold">Location:</p>
          <p className="text-sm text-neutral-500">{edu.location}</p>
          <p className="text-sm text-neutral-300 font-bold">Description:</p>
          {edu.description.map((desc, i) => (
            <p key={i} className="text-sm text-neutral-500">{desc}</p>
          ))}
          <p className="text-sm text-neutral-300 font-bold">Period:</p>
          <p className="text-sm text-neutral-500">{edu.period}</p>
        </div>
      ))}
    </div>
  </Collapsible>
</div>

          </main>
        </div>
      </div>
    </div>
  )
}

export default Resume;

