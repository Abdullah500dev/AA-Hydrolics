import Image from "next/image";
import Link from "next/link";
import { BeakerIcon, BoltIcon, CogIcon, ChartBarIcon, ClockIcon, UserGroupIcon, BuildingOfficeIcon, CubeIcon, WrenchScrewdriverIcon } from '@heroicons/react/24/outline';

const features = [
  {
    title: 'Advanced Technology',
    description: 'State-of-the-art hydraulic systems with precise control and monitoring capabilities.',
    icon: BeakerIcon,
  },
  {
    title: 'Energy Efficient',
    description: 'Optimized power consumption without compromising on performance.',
    icon: BoltIcon,
  },
  {
    title: 'Easy Maintenance',
    description: 'Designed for minimal downtime with easy access to all components.',
    icon: CogIcon,
  },
];

const services = [
  {
    title: 'Custom Manufacturing',
    description: 'Tailored hydraulic press solutions designed to meet your specific requirements.',
    icon: CubeIcon,
  },
  {
    title: 'Installation & Setup',
    description: 'Professional installation and configuration services by certified technicians.',
    icon: WrenchScrewdriverIcon,
  },
  {
    title: 'Industrial Solutions',
    description: 'Complete industrial press systems for manufacturing and production facilities.',
    icon: BuildingOfficeIcon,
  },
];

// const stats = [
//   {
//     title: 'Years Experience',
//     value: '25+',
//     icon: ClockIcon,
//   },
//   {
//     title: 'Satisfied Clients',
//     value: '500+',
//     icon: UserGroupIcon,
//   },
//   {
//     title: 'Projects Completed',
//     value: '1000+',
//     icon: ChartBarIcon,
//   },
// ];

const testimonials = [
  {
    name: 'John Smith',
    role: 'Production Manager',
    company: 'Industrial Solutions Inc.',
    content: 'The hydraulic press system has significantly improved our manufacturing efficiency. The precision and reliability are outstanding.',
    image: '/testimonial-1.jpg',
  },
  {
    name: 'Sarah Johnson',
    role: 'Operations Director',
    company: 'Advanced Manufacturing Co.',
    content: 'Excellent customer service and technical support. The team went above and beyond to ensure our press was perfectly calibrated.',
    image: '/testimonial-2.jpg',
  },
  {
    name: 'Michael Chen',
    role: 'Chief Engineer',
    company: 'Global Tech Industries',
    content: 'The energy efficiency and advanced monitoring capabilities have helped us reduce costs while maintaining high quality standards.',
    image: '/testimonial-3.jpg',
  },
];

import ImageSlider from './components/ImageSlider';
import Footer from './components/Footer';
import Navbar from './components/Navbar';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Navbar />

      {/* Hero Section */}
      <section
        id="home"
        className="pt-32 pb-24 sm:pt-40 sm:pb-32 bg-gradient-to-br from-primary-50 via-white to-primary-50 dark:from-gray-900 dark:to-primary-900/20"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 lg:space-y-8">
              <span className="inline-block px-4 py-2 rounded-full bg-primary-100 text-primary-800 dark:bg-primary-900/30 dark:text-primary-200 text-sm font-medium">
                Innovation in Motion
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight bg-gradient-to-r from-gray-900 to-primary-700 dark:from-white dark:to-primary-300 bg-clip-text text-transparent">
                Industrial Strength <br />
                <span className="text-primary-600 dark:text-primary-400">Hydraulic Press</span> Solutions
              </h1>
              <p className="text-lg md:text-xl leading-relaxed text-gray-600 dark:text-gray-300">
                Precision engineering meets power with our state-of-the-art hydraulic press technology. 
                Engineered for performance, built for durability.
              </p>
              <div className="flex flex-wrap gap-4 pt-2">
                <button className="btn btn-primary px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200">
                  Get Started
                  <span className="ml-2">→</span>
                </button>
                <button className="btn bg-white text-gray-800 dark:bg-gray-800 dark:text-white px-8 py-4 text-lg font-semibold border-2 border-primary-500 dark:border-primary-400 hover:bg-primary-50 dark:hover:bg-gray-700/50 transition-all duration-200 shadow-lg hover:shadow-xl">
                  Learn More
                </button>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl col-span-2">
                <Image
                  src="/machine-1.jpg"
                  alt="Industrial Hydraulic Press"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  priority
                  className="object-cover"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-gray-50 dark:bg-gray-900/50 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-gray-200/50 dark:bg-grid-gray-800/50 [mask-image:linear-gradient(0deg,transparent,white,darkgray)] dark:[mask-image:linear-gradient(0deg,transparent,#1f2937,#4b5563)]"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 rounded-full bg-primary-100 text-primary-800 dark:bg-primary-900/30 dark:text-primary-200 text-sm font-medium mb-4">
              Our Features
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mt-4">
              Why Choose Our <span className="text-primary-600 dark:text-primary-400">Hydraulic Presses</span>
            </h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Built for performance, designed for efficiency, and engineered to exceed your expectations
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 relative z-10">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-8 rounded-xl hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700 hover:border-primary-200 dark:hover:border-primary-900 hover:-translate-y-1"
              >
                <div className="w-14 h-14 bg-primary-50 dark:bg-primary-900/30 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary-100 dark:group-hover:bg-primary-900/50 transition-colors duration-300">
                  <feature.icon className="w-7 h-7 text-primary-600 dark:text-primary-400" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Showcase Slider */}
      <ImageSlider />

      {/* Services Section */}
      <section id="services" className="py-20 bg-white dark:bg-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-50/30 to-transparent dark:from-primary-900/10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 rounded-full bg-primary-100 text-primary-800 dark:bg-primary-900/30 dark:text-primary-200 text-sm font-medium mb-4">
              What We Offer
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mt-4">
              Our <span className="text-primary-600 dark:text-primary-400">Services</span>
            </h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Comprehensive hydraulic press solutions tailored to meet your industrial needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
            {services.map((service, index) => (
              <div 
                key={index} 
                className="group bg-white dark:bg-gray-800/80 backdrop-blur-sm p-8 rounded-xl hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700 hover:border-primary-200 dark:hover:border-primary-700 hover:-translate-y-1"
              >
                <div className="w-14 h-14 bg-primary-50 dark:bg-primary-900/20 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary-100 dark:group-hover:bg-primary-900/30 transition-colors duration-300">
                  <service.icon className="w-7 h-7 text-primary-600 dark:text-primary-400" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {service.description}
                </p>
                <div className="mt-4">
                  <a 
                    href="#contact" 
                    className="inline-flex items-center text-primary-600 dark:text-primary-400 hover:text-primary-800 dark:hover:text-primary-300 font-medium transition-colors"
                  >
                    Learn more
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      {/* <section className="py-24 sm:py-32 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-16">
            {stats.map((stat, index) => (
              <div key={index} className="text-center space-y-4">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 dark:bg-blue-900 mb-4">
                  <stat.icon className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                </div>
                <div className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white">{stat.value}</div>
                <div className="text-lg text-gray-600 dark:text-gray-300">{stat.title}</div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Quality Banner Section */}
      <section className="relative py-24 sm:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/machine-7.jpg"
            alt="Hydraulic Press Manufacturing"
            fill
            className="object-cover opacity-10 dark:opacity-[0.03]"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary-700/95 via-primary-600/90 to-secondary-700/90 dark:from-primary-900/95 dark:to-secondary-900/90" />
        </div>
        
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white text-sm font-medium mb-6">
            <span className="w-2 h-2 mr-2 bg-green-400 rounded-full animate-pulse"></span>
            Industry Leader Since 1995
          </div>
          
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-8 leading-tight">
            Precision Engineering <br className="hidden sm:block" />
            <span className="text-primary-200 dark:text-primary-300">Meets Innovation</span>
          </h2>
          
          <p className="text-xl sm:text-2xl text-primary-100 dark:text-primary-200 max-w-3xl mx-auto mb-12 leading-relaxed">
            Our commitment to quality and innovation drives us to deliver exceptional hydraulic press solutions that exceed industry standards.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6">
            <button className="group relative px-8 py-4 bg-white text-primary-700 font-semibold rounded-lg hover:bg-primary-50 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5">
              <span className="relative z-10">Download Brochure</span>
              <span className="absolute inset-0 bg-gradient-to-r from-primary-100 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></span>
            </button>
            
            <button className="group relative px-8 py-4 bg-transparent text-white font-semibold rounded-lg border-2 border-white/30 hover:border-white/60 hover:bg-white/5 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5">
              <span className="relative z-10 flex items-center justify-center">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Schedule Demo
              </span>
              <span className="absolute inset-0 bg-gradient-to-r from-primary-500/10 to-secondary-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded"></span>
            </button>
          </div>
          
          <div className="mt-16 flex flex-wrap justify-center gap-8 sm:gap-12">
            {[
              { value: '25+', label: 'Years Experience' },
              { value: '500+', label: 'Machines Installed' },
              { value: '98%', label: 'Client Satisfaction' },
              { value: '24/7', label: 'Support' }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl sm:text-4xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-sm uppercase tracking-wider text-primary-200/90 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900/50 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-5 dark:opacity-[0.02] bg-center [mask-image:linear-gradient(180deg,white,transparent)]"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 rounded-full bg-primary-100 text-primary-800 dark:bg-primary-900/30 dark:text-primary-200 text-sm font-medium mb-4">
              Testimonials
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mt-4">
              What Our <span className="text-primary-600 dark:text-primary-400">Clients Say</span>
            </h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Trusted by industry leaders and manufacturers worldwide
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index} 
                className="group relative bg-white dark:bg-gray-800/80 backdrop-blur-sm p-8 rounded-xl hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700 hover:border-primary-200 dark:hover:border-primary-700 hover:-translate-y-1"
              >
                <div className="absolute top-0 right-0 w-24 h-24 -mr-6 -mt-6 opacity-10">
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full text-primary-500">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </div>
                
                <div className="flex items-center gap-4 mb-6 relative z-10">
                  <div className="relative w-16 h-16 rounded-full overflow-hidden bg-gradient-to-br from-primary-500 to-secondary-500 p-0.5">
                    <div className="bg-white dark:bg-gray-800 w-full h-full rounded-full flex items-center justify-center">
                      <span className="text-2xl font-bold bg-gradient-to-br from-primary-600 to-secondary-600 bg-clip-text text-transparent">
                        {testimonial.name.charAt(0)}
                      </span>
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white">{testimonial.name}</h3>
                    <p className="text-sm text-primary-600 dark:text-primary-400 font-medium">{testimonial.role}</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{testimonial.company}</p>
                  </div>
                </div>
                
                <div className="relative">
                  <svg 
                    className="absolute -left-2 -top-6 w-8 h-8 text-primary-100 dark:text-primary-900/30" 
                    fill="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed relative z-10 pl-6">
                    {testimonial.content}
                  </p>
                </div>
                
                <div className="mt-6 flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <svg 
                      key={i} 
                      className={`w-5 h-5 ${i < 5 ? 'text-yellow-400' : 'text-gray-300 dark:text-gray-600'}`} 
                      fill="currentColor" 
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <p className="text-gray-500 dark:text-gray-400 text-sm">
              TrustScore 4.9 • Based on 128 reviews
            </p>
            <div className="mt-4 flex justify-center space-x-2">
              {['Trustpilot', 'Google', 'Clutch'].map((platform, i) => (
                <div key={i} className="px-4 py-2 bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700 text-sm font-medium text-gray-700 dark:text-gray-300">
                  {platform}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section id="contact" className="relative py-24 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-primary-700 via-primary-600 to-secondary-700 dark:from-primary-900/95 dark:to-secondary-900/95" />
          <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10 dark:opacity-5" />
        </div>
        
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white text-sm font-medium mb-8">
            <span className="w-2 h-2 mr-2 bg-green-400 rounded-full animate-pulse"></span>
            Get Started Today
          </div>
          
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6 leading-tight">
            Ready to Transform Your <br className="hidden sm:block" />
            <span className="text-primary-200">Manufacturing Process?</span>
          </h2>
          
          <p className="text-xl text-primary-100 dark:text-primary-200 max-w-2xl mx-auto mb-10">
            Join hundreds of industry leaders who trust our hydraulic press solutions to enhance their production capabilities and efficiency.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6">
            <Link 
              href="/contact"
              className="group relative px-8 py-4 bg-white text-primary-700 font-semibold rounded-lg hover:bg-primary-50 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
            >
              <span className="relative z-10 flex items-center justify-center">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Contact Sales Team
              </span>
              <span className="absolute inset-0 bg-gradient-to-r from-primary-100 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></span>
            </Link>
            
            <a 
              href="tel:+1234567890"
              className="group relative px-8 py-4 bg-transparent text-white font-semibold rounded-lg border-2 border-white/30 hover:border-white/60 hover:bg-white/5 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
            >
              <span className="relative z-10 flex items-center justify-center">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                +1 (234) 567-890
              </span>
              <span className="absolute inset-0 bg-gradient-to-r from-primary-500/10 to-secondary-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded"></span>
            </a>
          </div>
          
          <div className="mt-12 flex flex-wrap justify-center gap-6 text-primary-100 dark:text-primary-200 text-sm">
            <div className="flex items-center">
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              24/7 Customer Support
            </div>
            <div className="flex items-center">
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Quick Response Time
            </div>
            <div className="flex items-center">
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
              </svg>
              Expert Consultation
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
