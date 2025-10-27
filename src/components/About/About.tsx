import { personal } from '@/appData/personal'

const About = () => {
  return (
    <section id="about" className="bg-base-100 py-16 md:py-24">
      <div className="container mx-auto px-4 max-w-[1200px]">
        {/* MAIN HEADING - Left-aligned */}
        <h2 className="mb-8 text-left text-3xl font-bold text-neutral md:text-4xl">
          // About Me
        </h2>
        
        <div className="grid gap-8 md:grid-cols-2">
          {/* LEFT COLUMN: Professional Background */}
          <div>
            {/* SUBHEADING IN RED */}
            <h3 className="mb-4 text-xl font-semibold text-accent">
              Professional Background
            </h3>
            <p className="mb-4 text-base leading-relaxed text-neutral opacity-80">
              {personal.bio}
            </p>
            <p className="text-base leading-relaxed text-neutral opacity-80">
              {personal.about}
            </p>
          </div>
          
          {/* RIGHT COLUMN: Current Role & Contact */}
          <div>
            {/* SUBHEADING IN RED */}
            <h3 className="mb-4 text-xl font-semibold text-accent">
              Current Role
            </h3>
            
            {personal.experience && personal.experience.map((exp, index) => (
              <div key={index} className="mb-6 rounded-lg bg-base-200 p-6">
                {/* Job Title */}
                <h4 className="text-lg font-bold text-neutral">
                  {exp.title}
                </h4>
                
                {/* Company Name - RED */}
                <p className="text-sm font-semibold text-accent">
                  {exp.company}
                </p>
                
                {/* Location */}
                <p className="text-sm text-neutral opacity-70">
                  {exp.location}
                </p>
                
                {/* Period */}
                <p className="mt-2 text-sm italic text-neutral opacity-60">
                  {exp.period}
                </p>
                
                {/* Description */}
                <p className="mt-4 text-neutral opacity-80">
                  {exp.description}
                </p>
              </div>
            ))}
            
            {/* Contact Information */}
            <div className="mt-6 rounded-lg bg-base-200 p-6">
              {/* SUBHEADING IN RED */}
              <h4 className="mb-3 font-semibold text-accent">Contact</h4>
              <p className="text-sm text-neutral opacity-80">
                📧 {personal.email}
              </p>
              <p className="text-sm text-neutral opacity-80">
                📱 {personal.phone}
              </p>
              <p className="text-sm text-neutral opacity-80">
                📍 {personal.location}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
