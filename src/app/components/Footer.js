export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  const footerLinks = [
    {
      title: 'Company',
      links: [
        { name: 'About Us', href: '/about' },
        { name: 'Our Team', href: '/team' },
        { name: 'Careers', href: '/careers' },
        { name: 'Blog', href: '/blog' },
        { name: 'Contact Us', href: '/contact' },
      ],
    },
    {
      title: 'Products',
      links: [
        { name: 'Hydraulic Presses', href: '/products/hydraulic-presses' },
        { name: 'Press Brakes', href: '/products/press-brakes' },
        { name: 'Shears', href: '/products/shears' },
        { name: 'Custom Solutions', href: '/solutions/custom' },
      ],
    },
    {
      title: 'Support',
      links: [
        { name: 'Documentation', href: '/support/docs' },
        { name: 'Guides', href: '/support/guides' },
        { name: 'API Status', href: '/status' },
        { name: 'Help Center', href: '/help' },
      ],
    },
  ];

  const socialLinks = [
    { name: 'Facebook', href: '#', icon: 'M24 12.07c0-6.63-5.37-12-12-12s-12 5.37-12 12c0 5.99 4.39 10.95 10.13 11.85v-8.38H7.08v-3.47h3.04V9.41c0-3.02 1.8-4.7 4.56-4.7 1.32 0 2.7.24 2.7.24v2.97h-1.52c-1.5 0-1.97.93-1.97 1.89v2.26h3.34l-.53 3.47h-2.81v8.38c5.74-.9 10.13-5.86 10.13-11.85z' },
    { name: 'Twitter', href: '#', icon: 'M23.95 4.57c-.89.4-1.85.67-2.85.79 1.03-.62 1.81-1.6 2.18-2.77-.96.57-2.02.99-3.15 1.21-.91-.97-2.2-1.57-3.63-1.57-2.74 0-4.97 2.22-4.97 4.97 0 .39.04.77.12 1.13-4.13-.21-7.8-2.19-10.25-5.2-.43.74-.67 1.6-.67 2.52 0 1.72.88 3.24 2.21 4.13-.81-.03-1.58-.25-2.25-.62v.06c0 2.41 1.72 4.42 3.99 4.88-.42.11-.86.17-1.31.17-.32 0-.63-.03-.94-.08.64 1.99 2.49 3.44 4.67 3.48-1.71 1.34-3.86 2.14-6.2 2.14-.4 0-.8-.02-1.19-.07 2.19 1.4 4.8 2.22 7.6 2.22 9.13 0 14.12-7.56 14.12-14.12 0-.22 0-.43-.01-.65 1.01-.72 1.88-1.63 2.56-2.66z' },
    { name: 'LinkedIn', href: '#', icon: 'M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.57h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.45v6.28zM6.2 7.57c-1.14 0-2.06-.93-2.06-2.07 0-1.14.92-2.06 2.06-2.06 1.14 0 2.06.92 2.06 2.06 0 1.14-.92 2.07-2.06 2.07zM8.1 20.45H4.3V9h3.8v11.45zM22.2 0H1.8C.8 0 0 .8 0 1.8v20.4c0 1 .8 1.8 1.8 1.8h20.4c1 0 1.8-.8 1.8-1.8V1.8c0-1-.8-1.8-1.8-1.8z' },
    { name: 'YouTube', href: '#', icon: 'M23.5 6.5c0-1.1-.9-2-2-2s-2 .9-2 2c0 .7.4 1.4 1 1.7v1.8l-3-1.7c-.5-.3-1.1-.3-1.6 0l-3 1.7v-1.8c.6-.3 1-1 1-1.7 0-1.1-.9-2-2-2s-2 .9-2 2c0 .7.4 1.4 1 1.7v1.8l-3-1.7c-.5-.3-1.1-.3-1.6 0l-3 1.7v-1.8c.6-.3 1-1 1-1.7 0-1.1-.9-2-2-2s-2 .9-2 2c0 .7.4 1.4 1 1.7v10.5c-.6.3-1 1-1 1.7 0 1.1.9 2 2 2s2-.9 2-2c0-.7-.4-1.4-1-1.7v-1.8l3 1.7c.5.3 1.1.3 1.6 0l3-1.7 3 1.7c.5.3 1.1.3 1.6 0l3-1.7 3 1.7c.5.3 1.1.3 1.6 0l3-1.7v1.8c-.6.3-1 1-1 1.7 0 1.1.9 2 2 2s2-.9 2-2c0-.7-.4-1.4-1-1.7V8.2c.6-.3 1-1 1-1.7zM12 15.5l-8-4.5 8-4.5 8 4.5-8 4.5z' },
  ];

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center">
              <span className="text-2xl font-bold bg-gradient-to-r from-primary-400 to-secondary-500 bg-clip-text text-transparent">
                AA Hydraulics
              </span>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">
              Leading manufacturer of industrial hydraulic press solutions, delivering precision and power for over 30 years.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-400 hover:text-white transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="sr-only">{item.name}</span>
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d={item.icon} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Footer Links */}
          {footerLinks.map((section) => (
            <div key={section.title} className="space-y-4">
              <h3 className="text-sm font-semibold text-white tracking-wider uppercase">
                {section.title}
              </h3>
              <ul className="space-y-3">
                {section.links.map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      className="text-sm text-gray-400 hover:text-white transition-colors"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact & Newsletter */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-sm font-semibold text-white tracking-wider uppercase">
                Contact Us
              </h3>
              <ul className="space-y-3 text-sm text-gray-400">
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-primary-400 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span>Jack Market, Habib Ganj<br />Misri Shah, Lahore, Pakistan</span>
                </li>
                <li className="flex items-center">
                  <svg className="h-5 w-5 text-primary-400 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <a href="mailto:uhydraulics@gmail.com" className="hover:text-white transition-colors">
                    uhydraulics@gmail.com
                  </a>
                </li>
                <li className="flex items-center">
                  <svg className="h-5 w-5 text-primary-400 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <a href="tel:+923244696549" className="hover:text-white transition-colors">
                    +92 324 4696549
                  </a>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="text-sm font-semibold text-white tracking-wider uppercase">
                Newsletter
              </h3>
              <p className="text-sm text-gray-400">
                Subscribe to our newsletter for the latest updates and offers.
              </p>
              <form className="space-y-3">
                <div>
                  <label htmlFor="email" className="sr-only">Email address</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className="w-full px-4 py-2 border border-gray-700 bg-gray-800 text-white placeholder-gray-400 focus:ring-2 focus:ring-primary-500 focus:border-transparent rounded-md text-sm"
                    placeholder="Enter your email"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gradient-to-r from-primary-600 to-secondary-600 hover:from-primary-700 hover:to-secondary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 transition-all duration-200"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-gray-400">
              &copy; {currentYear} AA Hydraulics. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
