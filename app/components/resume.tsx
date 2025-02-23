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
        title: "Web Design & React",
        content:
          "Build websites using HTML5, CSS, Tailwind CSS, and React, focusing on scalable, intuitive user interfaces.",
      },
      {
        title: "UI/UX Design",
        content:
          "Apply principles of user-centered design to create seamless and engaging experiences. Use wireframing, prototyping, and usability testing to ensure the best possible user outcomes.",
      },
      {
        title: "SEO",
        content:
          "Implement SEO practices to improve website visibility and drive organic traffic with tools like keyword research, Google Search Console and Smartlook.",
      },
      {
        title: "Graphic Design",
        content:
          "Design digital assets and create cohesive brand identities that enhance user experience and strengthen brand presence.",
      },
      {
        title: "Project Management",
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
    <div className=" text-netural-600 text-left">
      <div className="mx-auto w-full px-4 py-8">
        <div className="grid gap-8 md:grid-cols-2">
          {/* Sidebar */}
          <aside className="space-y-6">
            <div className="space-y-2">
              <h1 className="text-2xl text-left font-bold text-white">JAKOB DAHLIN</h1>
              <p className="text-sm leading-relaxed text-netural-600">
                Architectural photographer, Web designer, SEO strategist and graphic designer based in New York, driven
                by my passion for creativity, mentoring, and development.
              </p>
            </div>

            <div className="relative h-48 w-48 overflow-hidden rounded-xl">
              <Image
                src="https://res.cloudinary.com/dj10sb6gx/image/upload/v1739300991/portrait_nbyrck.jpg"
                alt="Profile"
                fill
                className="object-cover object-center"
                priority
              />
            </div>

            {Object.entries(skills).map(([title, skillList]) => (
              <Collapsible key={title} title={title} defaultOpen={true} className="text-xl">
                {/* All collapsibles here start as closed */}
                <ul className="space-y-1 text-sm">
                  {skillList.map((skill) => (
                    <li key={skill} className="hover:text-neutral-300 transition-colors duration-100">{skill}</li>
                  ))}
                </ul>
              </Collapsible>
            ))}
          </aside>

          {/* Main Content */}
          <main className="space-y-6">
            <Collapsible title="Experience" defaultOpen={true} className="text-xl">
              <div className="space-y-4 text-lg">
                {experiences.map((exp, index) => (
                  <Collapsible key={index} title={exp.title} defaultOpen={false}>
                    <div className="space-y-2">
                      <p className="text-sm text-netural-600">
                        {exp.period} – {exp.location}
                      </p>
                      <div className="space-y-4">
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
                              <h4 className="font-semibold text-white">{item.title}:</h4>
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

            <Collapsible title="Education" defaultOpen={true} className="text-xl">
              <div className="space-y-4">
                {education.map((edu, index) => (
                  <div key={index} className="space-y-2">
                    <h3 className="text-lg font-semibold text-white">{edu.title}</h3>
                    <p className="text-sm text-white font-bold flex">
                    </p>
                    <p className="text-sm text-white font-bold inline-flex">
                        Major: <span className="text-sm text-neutral-600">{edu.major}</span>
                    </p>
                    <p className="text-sm text-white font-bold inline-flex">
                        Degree: <span className="text-sm text-neutral-600">{edu.degree}</span>
                    </p>
                    <p className="text-sm text-white font-bold inline-flex">
                        Location: <span className="text-sm text-neutral-600">{edu.location}</span>
                    </p>
                    <p className="text-sm text-white font-bold inline-flex">
                        Description: <span className="text-sm text-neutral-600">{edu.description}</span>
                    </p>
                    <p className="text-sm text-white font-bold inline-flex">
                        Period: <span className="text-sm text-neutral-600">{edu.period}</span>
                    </p>

                  </div>
                ))}
              </div>
            </Collapsible>
          </main>
        </div>
      </div>
    </div>
  )
}

export default Resume;

