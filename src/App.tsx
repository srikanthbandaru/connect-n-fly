import React, { useState } from 'react';
import { 
  Search, 
  Users, 
  Shield, 
  MessageCircle, 
  CheckCircle, 
  Star, 
  ArrowRight, 
  Plane, 
  Heart, 
  MapPin, 
  Clock, 
  User, 
  Baby, 
  GraduationCap, 
  Globe,
  Phone,
  Mail,
  ChevronDown,
  TrendingUp,
  Award,
  UserCheck
} from 'lucide-react';

function App() {
  const [searchMode, setSearchMode] = useState<'find' | 'post'>('find');
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setExpandedFaq(expandedFaq === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white border-b border-gray-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-teal-500 rounded-full flex items-center justify-center">
                <Plane className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-gray-900">ConnectnFly</span>
            </div>
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#how-it-works" className="text-gray-600 hover:text-gray-900 transition-colors">How It Works</a>
              <a href="#safety" className="text-gray-600 hover:text-gray-900 transition-colors">Safety</a>
              <a href="#about" className="text-gray-600 hover:text-gray-900 transition-colors">Our Story</a>
              <button className="text-gray-600 hover:text-gray-900 transition-colors">Log In</button>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">Sign Up</button>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-teal-50 py-12 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Travel Together.{' '}
                <span className="text-blue-600">Fly Safe.</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Connect with fellow travelers on your flight for comfort, help, or companionship. 
                Perfect for seniors, solo parents, first-time flyers, and anyone who wants support.
              </p>
              
              <div className="bg-white p-1 rounded-xl shadow-lg mb-8 max-w-md">
                <div className="grid grid-cols-2 gap-1">
                  <button
                    onClick={() => setSearchMode('find')}
                    className={`px-4 py-3 rounded-lg text-sm font-medium transition-all ${
                      searchMode === 'find' 
                        ? 'bg-blue-600 text-white shadow-sm' 
                        : 'text-gray-600 hover:text-gray-900'
                    }`}
                  >
                    Find a Travel Buddy
                  </button>
                  <button
                    onClick={() => setSearchMode('post')}
                    className={`px-4 py-3 rounded-lg text-sm font-medium transition-all ${
                      searchMode === 'post' 
                        ? 'bg-blue-600 text-white shadow-sm' 
                        : 'text-gray-600 hover:text-gray-900'
                    }`}
                  >
                    Post Your Flight
                  </button>
                </div>
              </div>

              {/* Search Form */}
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">From</label>
                      <div className="relative">
                        <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                        <input 
                          type="text" 
                          placeholder="Departure city"
                          className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">To</label>
                      <div className="relative">
                        <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                        <input 
                          type="text" 
                          placeholder="Destination city"
                          className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                      </div>
                    </div>
                  </div>
                  
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Travel Date</label>
                      <div className="relative">
                        <Clock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                        <input 
                          type="date" 
                          className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">I am a</label>
                      <select className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                        <option>Any traveler</option>
                        <option>Senior (65+)</option>
                        <option>Solo parent</option>
                        <option>First-time flyer</option>
                        <option>Student</option>
                        <option>International traveler</option>
                      </select>
                    </div>
                  </div>

                  <button className="w-full bg-blue-600 text-white py-4 rounded-lg hover:bg-blue-700 transition-colors font-medium text-lg">
                    {searchMode === 'find' ? (
                      <>
                        <Search className="w-5 h-5 inline mr-2" />
                        Find My Travel Buddy
                      </>
                    ) : (
                      <>
                        <Users className="w-5 h-5 inline mr-2" />
                        Post My Flight
                      </>
                    )}
                  </button>
                </div>
              </div>

              <p className="text-sm text-gray-500 mt-4 text-center">
                Free to search • Message to coordinate • Travel with confidence
              </p>
            </div>

            <div className="hidden lg:block">
              <div className="relative">
                <div className="bg-white p-8 rounded-2xl shadow-xl">
                  <div className="text-center mb-6">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Heart className="w-8 h-8 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900">1,284 travelers</h3>
                    <p className="text-gray-600">connected this month</p>
                  </div>
                  <div className="space-y-3">
                    {[
                      { name: "Sarah M.", badge: "Senior Helper", route: "NYC → DEL", verified: true },
                      { name: "David L.", badge: "Family Travel", route: "LAX → LHR", verified: true },
                      { name: "Priya K.", badge: "Language Helper", route: "SFO → BOM", verified: true }
                    ].map((traveler, idx) => (
                      <div key={idx} className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                        <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-teal-500 rounded-full flex items-center justify-center">
                          <span className="text-white text-sm font-medium">{traveler.name[0]}</span>
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center space-x-2">
                            <span className="font-medium text-gray-900">{traveler.name}</span>
                            {traveler.verified && <CheckCircle className="w-4 h-4 text-green-500" />}
                          </div>
                          <div className="flex items-center space-x-2 text-xs text-gray-600">
                            <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded-full">{traveler.badge}</span>
                            <span>{traveler.route}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">How It Works</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Connect safely and travel with confidence in just four simple steps
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: 1,
                icon: Search,
                title: "Search Flights or Companions",
                description: "Find your flight or post your journey to connect with fellow travelers"
              },
              {
                step: 2,
                icon: Users,
                title: "Explore Matching Travelers",
                description: "Browse verified profiles and see who's on your flight or similar route"
              },
              {
                step: 3,
                icon: MessageCircle,
                title: "Connect & Coordinate",
                description: "Message securely, share plans, and arrange to meet at the airport"
              },
              {
                step: 4,
                icon: Shield,
                title: "Fly Together with Confidence",
                description: "Travel with peace of mind knowing you have help and companionship"
              }
            ].map((step, idx) => (
              <div key={idx} className="text-center group">
                <div className="relative mb-6">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto group-hover:bg-blue-200 transition-colors">
                    <step.icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                    {step.step}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who It's For */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Perfect For Every Traveler</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Whether you're new to flying or need extra support, we're here to help
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: User,
                title: "Seniors (65+)",
                benefit: "Navigate airports with confidence and friendly assistance",
                color: "from-purple-500 to-pink-500"
              },
              {
                icon: Baby,
                title: "Solo Parents",
                benefit: "Get help with luggage, kids, and peace of mind while traveling",
                color: "from-green-500 to-teal-500"
              },
              {
                icon: GraduationCap,
                title: "Students",
                benefit: "Connect with peers and save on travel costs together",
                color: "from-blue-500 to-indigo-500"
              },
              {
                icon: Globe,
                title: "International Travelers",
                benefit: "Find language support and local guidance from helpful natives",
                color: "from-orange-500 to-red-500"
              }
            ].map((audience, idx) => (
              <div key={idx} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className={`w-12 h-12 bg-gradient-to-br ${audience.color} rounded-lg flex items-center justify-center mb-4`}>
                  <audience.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{audience.title}</h3>
                <p className="text-gray-600 leading-relaxed">{audience.benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust & Safety */}
      <section id="safety" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Your Safety Is Our Priority</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We've built comprehensive safety features so you can connect with confidence
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: UserCheck,
                title: "Profile Verification",
                description: "ID verification, phone confirmation, and social proof badges for trusted travelers"
              },
              {
                icon: Shield,
                title: "Safe Communication",
                description: "Secure in-app messaging with report and block features to keep conversations respectful"
              },
              {
                icon: Award,
                title: "Community Standards",
                description: "Clear code of conduct, moderation team, and best practices for safe travel meetups"
              }
            ].map((feature, idx) => (
              <div key={idx} className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <feature.icon className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <div className="inline-flex items-center space-x-2 bg-green-50 px-4 py-2 rounded-full">
              <CheckCircle className="w-5 h-5 text-green-600" />
              <span className="text-green-700 font-medium">You're always in control • Message first, decide later</span>
            </div>
          </div>
        </div>
      </section>

      {/* Trending Routes */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900">Active Routes This Week</h2>
            <div className="flex items-center text-gray-600">
              <TrendingUp className="w-5 h-5 mr-2" />
              <span>Most popular</span>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { route: "NYC → DEL", travelers: 23, date: "Dec 15-20" },
              { route: "LAX → LHR", travelers: 18, date: "Dec 18-22" },
              { route: "SFO → BOM", travelers: 15, date: "Dec 20-25" },
              { route: "ORD → FRA", travelers: 12, date: "Dec 22-27" },
              { route: "ATL → DXB", travelers: 9, date: "Dec 25-30" },
              { route: "DFW → ICN", travelers: 7, date: "Dec 28-31" }
            ].map((route, idx) => (
              <div key={idx} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow cursor-pointer">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-lg font-semibold text-gray-900">{route.route}</h3>
                  <div className="text-sm text-gray-500">{route.date}</div>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="flex -space-x-2">
                    {[1,2,3].map((_, i) => (
                      <div key={i} className="w-6 h-6 bg-gradient-to-br from-blue-500 to-teal-500 rounded-full border-2 border-white"></div>
                    ))}
                  </div>
                  <span className="text-sm text-gray-600">{route.travelers} travelers looking</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Real Stories, Real Connections</h2>
            <p className="text-xl text-gray-600">See how ConnectnFly helped travelers fly with confidence</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Margaret Chen",
                role: "First international trip at 68",
                content: "I was nervous about navigating Dubai airport during my layover. My ConnectnFly buddy helped me find my gate and even shared her phone charger. Made all the difference!",
                rating: 5
              },
              {
                name: "Sarah Johnson",
                role: "Solo mom with 2 kids",
                content: "Traveling alone with my twins was daunting. Connected with another parent who helped with luggage and kept the kids entertained during delays. Lifesaver!",
                rating: 5
              },
              {
                name: "Raj Patel",
                role: "Student, first time in US",
                content: "My flight buddy explained customs process and helped me navigate to connecting flight. As a first-timer, having someone who spoke my language was incredible.",
                rating: 5
              }
            ].map((testimonial, idx) => (
              <div key={idx} className="bg-gray-50 p-6 rounded-xl">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 leading-relaxed">"{testimonial.content}"</p>
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-600">{testimonial.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Founder Story Preview */}
      <section id="about" className="py-16 bg-blue-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8">
            <div className="w-20 h-20 bg-gray-200 rounded-full mx-auto mb-6 flex items-center justify-center">
              <User className="w-10 h-10 text-gray-400" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why We Started ConnectnFly</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
              When our parents took their first international trip, they faced language barriers, missed connections, 
              and an overnight delay in a foreign airport. We realized how many travelers need support but don't know 
              where to find it. ConnectnFly was born from the simple belief that no one should feel alone when traveling.
            </p>
            <button className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium">
              Read Our Full Story <ArrowRight className="w-4 h-4 ml-2" />
            </button>
          </div>
        </div>
      </section>

      {/* FAQ Preview */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600">Everything you need to know about traveling together safely</p>
          </div>

          <div className="space-y-4">
            {[
              {
                question: "Is ConnectnFly safe to use?",
                answer: "Absolutely. We require profile verification, provide secure in-app messaging, and maintain strict community guidelines. You control who you connect with and can report any concerns immediately."
              },
              {
                question: "How do flight matches work?",
                answer: "We match travelers by exact flight numbers, routes, and dates. You can also set preferences for passenger type, language, and assistance needs to find the most compatible travel companions."
              },
              {
                question: "Is ConnectnFly free to use?",
                answer: "Yes! Searching, posting flights, and messaging other travelers is completely free. We believe everyone deserves to travel with confidence and support."
              },
              {
                question: "What if my flight gets changed or canceled?",
                answer: "No problem! You can easily update your flight details, and we'll notify your connections. If flights are canceled, you can search for new matches on your rescheduled flight."
              }
            ].map((faq, idx) => (
              <div key={idx} className="border border-gray-200 rounded-lg">
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                >
                  <span className="font-medium text-gray-900">{faq.question}</span>
                  <ChevronDown className={`w-5 h-5 text-gray-500 transform transition-transform ${expandedFaq === idx ? 'rotate-180' : ''}`} />
                </button>
                {expandedFaq === idx && (
                  <div className="px-6 pb-4">
                    <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <button className="text-blue-600 hover:text-blue-700 font-medium">
              View All FAQs <ArrowRight className="w-4 h-4 inline ml-2" />
            </button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-blue-600 to-teal-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">Ready to Travel Together?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join thousands of travelers who've found comfort, help, and friendship in the skies
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-4 rounded-lg hover:bg-gray-50 transition-colors font-medium text-lg">
              Find a Travel Buddy
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-blue-600 transition-colors font-medium text-lg">
              Post Your Flight
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-teal-500 rounded-full flex items-center justify-center">
                  <Plane className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold">ConnectnFly</span>
              </div>
              <p className="text-gray-400 leading-relaxed">
                Connecting travelers for safer, more comfortable flights worldwide.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">How It Works</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Safety</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Community Guidelines</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Report Issue</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Legal</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Cookie Policy</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400">© 2024 ConnectnFly. All rights reserved.</p>
              <div className="flex items-center space-x-6 mt-4 md:mt-0">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Mail className="w-5 h-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Phone className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;