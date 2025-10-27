import { footerLinks, languages } from '@/appData'
import { socials } from '@/appData/personal'
import Logo from '../Navbar/Logo'

const Footer = () => {
  return (
    <footer className="bg-secondary relative overflow-hidden px-4 py-10 md:px-14 md:py-12">
      <div className="relative z-20 max-w-[1200px] mx-auto">
        
        {/* TOP SECTION: Logo & Description + Navigation Links */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
          {/* Left: Logo & Bio */}
          <div>
            <div className="mb-4 flex items-center gap-2">
              <Logo width={30} height={24} />
              <span className="text-neutral text-lg font-semibold">Riyasudeen Farook</span>
            </div>
            <p className="text-neutral opacity-70 text-sm leading-relaxed">
              IT Operations Manager specializing in Infrastructure, Cloud, Systems and Security. 
              Based in Riyadh, Saudi Arabia.
            </p>
          </div>

          {/* Right: Quick Navigation */}
          <div className="flex flex-wrap gap-6 md:justify-end md:items-start">
            {footerLinks.map((link) => (
              <a
                href={link.href}
                key={link.href}
                className="text-neutral opacity-70 hover:opacity-100 hover:text-accent transition-all duration-300 text-sm font-medium">
                {link.title}
              </a>
            ))}
          </div>
        </div>

        {/* DIVIDER */}
        <div className="border-t border-neutral/20 my-8" />

        {/* BOTTOM SECTION: Contact, Location, Social, Copyright */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Column 1: Contact Info */}
          <div>
            <h5 className="text-neutral mb-3 text-sm font-semibold">Contact</h5>
            <div className="space-y-2">
              <a
                href="mailto:uriyaz22@gmail.com"
                className="text-neutral opacity-70 hover:text-accent hover:opacity-100 text-sm transition-all duration-300 block">
                uriyaz22@gmail.com
              </a>
              <a
                href="tel:+966535075778"
                className="text-neutral opacity-70 hover:text-accent hover:opacity-100 text-sm transition-all duration-300 block">
                +966 53 507 5778
              </a>
            </div>
          </div>

          {/* Column 2: Location */}
          <div>
            <h5 className="text-neutral mb-3 text-sm font-semibold">Location</h5>
            <address className="text-neutral opacity-70 text-sm not-italic">
              12211, Riyadh<br />
              Saudi Arabia
            </address>
          </div>

          {/* Column 3: Social Links */}
          <div>
            <h5 className="text-neutral mb-3 text-sm font-semibold">Connect</h5>
            <div className="flex gap-4">
              {socials.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral opacity-70 hover:text-accent hover:opacity-100 transition-all duration-300 hover:scale-110 transform"
                  aria-label={item.href}>
                  {item.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* FINAL ROW: Copyright & Languages */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 mt-8 pt-6 border-t border-neutral/20">
          {/* Copyright */}
          <p className="text-neutral opacity-60 text-xs">
            © 2025 Riyasudeen Farook. All rights reserved.
          </p>

          {/* Languages */}
          <div className="flex gap-4">
            <span className="text-neutral opacity-40 text-xs">Languages:</span>
            {languages.map((language, idx) => (
              <span
                key={language}
                className={`text-xs ${idx === 0 ? 'text-accent font-semibold' : 'text-neutral opacity-60'}`}>
                {language}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* DECORATIVE BACKGROUND CIRCLES - Subtle */}
      <div className="absolute top-1/2 -right-[300px] z-0 h-[600px] w-[600px] -translate-y-1/2 rounded-full opacity-5 bg-neutral/10 blur-3xl" />
    </footer>
  )
}

export default Footer
