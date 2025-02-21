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
    title: "Web Designer, SEO & Graphic Designer – Self-employed",
    period: "2023 – Present",
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
    title: "Architectural Photographer – Self-employed",
    period: "2015 – Present",
    location: "Örebro, Sweden & New York, NY (Hybrid)",
    description: [
      "As an architectural photographer, I work in both residential and commercial real estate. I document each project from inception to completion, capturing every stage with close attention to detail that reflects my vision and architectural expertise.",
    ],
  },
  {
    title: "Childcare Worker – Örebro Municipality",
    period: "2014 – 2016",
    location: "Örebro, Sweden (Onsite)",
    description: [
      "Organized and led age-appropriate activities for children, encouraged creativity and social development. Managed digital lists and documentation and creation of marketing material.",
    ],
  },
  {
    title: "System Administrator – Örebro Municipality",
    period: "2013 – 2014",
    location: "Örebro, Sweden (Onsite)",
    description: [
      "Helped launch a project to connect job-seeking individuals with companies through a custom-built system. Managed website, social media, and marketing material for various events.",
    ],
  },
]

const education = [
  {
    title: "Military Service",
    institution: "P4 Regiment, Skövde, Sweden",
    period: "2009 – 2010",
  },
  {
    title: "Media & Communication",
    institution: "Virginska Skolan, Örebro, Sweden",
    period: "2006 – 2009",
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
              <div className="space-y-4">
                {experiences.map((exp, index) => (
                  <Collapsible key={index} title={exp.title} defaultOpen={false} >
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
                    <p className="text-sm text-netural-600">
                      {edu.institution} – {edu.period}
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

