import { useEffect, useRef } from "react"
import { Facebook, Instagram, Mail, Phone, Twitter } from "lucide-react"
import "../styles/mental-health-page.css"

export default function MentalHealthSection() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in")
          }
        })
      },
      { threshold: 0.1 },
    )

    const section = sectionRef.current
    if (section) {
      const elements = section.querySelectorAll(".skill-card")
      elements.forEach((el, index) => {
        // Add delay based on index
        el.setAttribute("style", `--animation-delay: ${index * 0.1}s`)
        observer.observe(el)
      })
    }

    return () => {
      if (section) {
        const elements = section.querySelectorAll(".skill-card")
        elements.forEach((el) => observer.unobserve(el))
      }
    }
  }, [])

  const skills = [
    {
      title: "Secretaria de Salud de Yucatán",
      description: "Línea gratuita de apoyo a la salud mental",
      number: "800-000-0779",
      mail: "",
      facebook: "",
      instagram: "",
      twitter: "",
    },
    {
      title: "Línea de la Vida",
      description: "",
      number: "800-911-2000",
      mail: "lalineadelavida@salud.gob.mx",
      facebook: "Linea De La Vida",
      facebookURL : "https://facebook.com/LaLineaDeLaVidamx",
      instagram: "Conasamamx",
      instagramURL : "https://www.instagram.com/conasamamx/",
      twitter: "Conasama",
      twitterURL : "https://x.com/conasamamx",
    },
    {
      title: "Salvemos una vida",
      description: "",
      number: "924-59-91 ; 945-37-77 ; 075",
      mail: "",
      facebook: "Salvemos una Vida Radio",
      facebookURL : "https://www.facebook.com/SalvemosunaVidaRadio/",
      instagram: "",
      twitter: "",
    },
    {
      title: "Ayuntamiento de Mérida",
      description: "Línea de apoyo emocional",
      number: "9994-54-10-81",
      mail: "",
      facebook: "",
      instagram: "",
      twitter: "",
    },
    {
      title: "Programa para la atención del suicidio (PIAS)",
      description: "",
      number: "9993-10-36-62",
      mail: "",
      facebook: "",
      instagram: "",
      twitter: "",
    },
  ]

  return (
    <section id="skills" className="skills-section" ref={sectionRef}>
      <div className="section-container">
        <div className="section-header">
          <div className="section-subtitle">Recuperar el sentido y las ganas de vivir es posible</div>
          <h2 className="section-title">Líneas de prevención del suicidio en Yucatán</h2>
          <div className="section-divider"></div>
        </div>

        <div className="skills-grid">
          {skills.map((skill) => (
            <div key={skill.title} className="skill-card animate">
              <h3 className="skill-title">{skill.title}</h3>
              <p className="skill-description">{skill.description}</p>
                <p className="skill-text">
                  {skill.number?<Phone className="phone-icon"/>:""}
                  {skill.number}
                </p>
                <p className="skill-text">
                  {skill.mail?<Mail className="mail-icon"/>:""}
                  {skill.mail}
                </p>
                <p className="skill-text">
                    {skill.facebook?<Facebook className="facebook-icon"/>:""}
                  <a href={skill.facebook?skill.facebookURL:"/"}>
                    {skill.facebook}
                  </a>
                </p>
                <p className="skill-text">
                  {skill.instagram?<Instagram className="instagram-icon"/>:""}
                  <a href={skill.instagram?skill.instagramURL:"/"}>
                  {skill.instagram}
                  </a>
                </p>
                <p className="skill-text">
                  {skill.twitter?<Twitter className="twitter-icon"/>:""}
                  <a href={skill.twitter?skill.twitterURL:"/"}>
                  {skill.twitter}
                  </a>
                </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

