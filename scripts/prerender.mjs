// scripts/prerender.mjs
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, "..");
const distDir = path.join(rootDir, "dist");

if (!fs.existsSync(distDir)) {
  console.error("dist directory not found. Please run vite build first.");
  process.exit(1);
}

const templateHtml = fs.readFileSync(path.join(distDir, "index.html"), "utf8");

const routes = [
  {
    path: "/",
    title: "UWE Services - Professional Home Services in Pune | Doorstep Repair & Maintenance",
    description: "Book trusted electricians, plumbers, house cleaners & AC repair in Pune & PCMC. Background-verified professionals, fair pricing, guaranteed doorstep service.",
    canonicalUrl: "https://uweservices.com/",
    ogImage: "https://uweservices.com/og-image.png",
    schema: {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "HomeAndConstructionBusiness",
          "@id": "https://uweservices.com/#organization",
          "name": "UWE Services",
          "alternateName": ["UWe Service", "UWE Home Services"],
          "url": "https://uweservices.com/",
          "telephone": "+91-9617671251",
          "email": "support@uweservices.com",
          "logo": "https://uweservices.com/favicon.svg",
          "priceRange": "₹₹",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Makan No. 01, Ward No. 42, Post–New Yard, Sai Nagar",
            "addressLocality": "Meharagaon, Hoshangabad",
            "addressRegion": "Madhya Pradesh",
            "postalCode": "461115",
            "addressCountry": "IN"
          },
          "areaServed": [
            { "@type": "City", "name": "Pune", "sameAs": "https://en.wikipedia.org/wiki/Pune" },
            { "@type": "AdministrativeArea", "name": "Pimpri-Chinchwad", "sameAs": "https://en.wikipedia.org/wiki/Pimpri-Chinchwad" },
            { "@type": "State", "name": "Maharashtra" }
          ],
          "sameAs": [
            "https://play.google.com/store/apps/details?id=com.uwe.homeservices",
            "https://play.google.com/store/apps/details?id=com.uweservices.partner"
          ]
        },
        {
          "@type": "FAQPage",
          "@id": "https://uweservices.com/#faqs",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "What home services does UWE Services offer in Pune?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "UWE Services offers professional doorstep plumbing, electrical repair and installation, house deep cleaning, AC repair and jet servicing, interior/exterior house painting, carpentry and furniture assembly, lawn and landscaping maintenance, and certified pest control across Pune and PCMC."
              }
            },
            {
              "@type": "Question",
              "name": "How can customers book a plumber or electrician in Pune?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Customers can browse our services on uweservices.com, select their required repair, pick a convenient date and time, and confirm. Bookings can also be made via our customer Android app or by calling +91-9617671251."
              }
            },
            {
              "@type": "Question",
              "name": "How can customers check service availability in their Pune locality?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Select your Pune locality (such as Hinjawadi, Wakad, Baner, Kothrud, Kharadi, or Pimple Saudagar) or enter your 6-digit PIN code on our website or mobile app to view immediate technician availability."
              }
            }
          ]
        }
      ]
    },
    contentHtml: `
      <main class="container mx-auto px-4 py-12">
        <header class="text-center max-w-3xl mx-auto mb-12">
          <h1 class="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Doorstep Home Services in Pune &amp; PCMC</h1>
          <p class="text-lg text-gray-700 leading-relaxed">Book trusted, background-verified professionals for all your home maintenance and repair needs. Quality work, fair upfront pricing, and 30-day workmanship guarantee.</p>
          <div class="mt-6 flex flex-wrap justify-center gap-4">
            <a href="/services" class="px-6 py-3 bg-orange-600 text-white rounded-full font-semibold">Browse All Services</a>
            <a href="tel:+919617671251" class="px-6 py-3 bg-gray-900 text-white rounded-full font-semibold">Call +91-9617671251</a>
          </div>
        </header>
        <section class="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <article class="p-6 bg-white rounded-xl shadow-sm border border-orange-100">
            <h2 class="text-xl font-bold text-gray-900 mb-2"><a href="/services/plumbing">Plumbing Services in Pune</a></h2>
            <p class="text-gray-600 text-sm mb-3">Leak repairs, tap fittings, pipe replacement, drain unblocking, and water heater installation.</p>
            <span class="text-orange-600 font-bold text-sm">₹599 - ₹2,999</span>
          </article>
          <article class="p-6 bg-white rounded-xl shadow-sm border border-orange-100">
            <h2 class="text-xl font-bold text-gray-900 mb-2"><a href="/services/electrical">Electrical Services in Pune</a></h2>
            <p class="text-gray-600 text-sm mb-3">Short-circuit diagnosis, switchboard fitting, ceiling fan installation, MCB trip troubleshooting.</p>
            <span class="text-orange-600 font-bold text-sm">₹799 - ₹4,999</span>
          </article>
          <article class="p-6 bg-white rounded-xl shadow-sm border border-orange-100">
            <h2 class="text-xl font-bold text-gray-900 mb-2"><a href="/services/cleaning">House Cleaning in Pune</a></h2>
            <p class="text-gray-600 text-sm mb-3">Full apartment deep cleaning, kitchen degreasing, bathroom scrubbing, sofa shampooing.</p>
            <span class="text-orange-600 font-bold text-sm">₹499 - ₹1,999</span>
          </article>
          <article class="p-6 bg-white rounded-xl shadow-sm border border-orange-100">
            <h2 class="text-xl font-bold text-gray-900 mb-2"><a href="/services/hvac">AC Repair &amp; Service in Pune</a></h2>
            <p class="text-gray-600 text-sm mb-3">Power jet foam cleaning, cooling diagnostics, refrigerant gas charging, split AC installation.</p>
            <span class="text-orange-600 font-bold text-sm">₹999 - ₹6,999</span>
          </article>
        </section>
        <section class="max-w-4xl mx-auto p-8 bg-white rounded-2xl border border-gray-200">
          <h2 class="text-2xl font-bold text-gray-900 mb-4">Pune Localities Covered</h2>
          <p class="text-gray-700 text-sm mb-4">Hinjawadi, Wakad, Baner, Aundh, Kothrud, Hadapsar, Kharadi, Viman Nagar, Wagholi, Pimple Saudagar, Pimpri, Chinchwad.</p>
          <a href="/locations/pune" class="text-orange-600 font-semibold underline">View Pune Service Hub Details</a>
        </section>
      </main>
    `
  },
  {
    path: "/about",
    title: "About UWE Services | Trusted Home Services in Pune & PCMC",
    description: "Learn about UWE Services: our mission, verified technicians, 30-day guarantee, and on-demand home maintenance services across Pune and Pimpri-Chinchwad.",
    canonicalUrl: "https://uweservices.com/about",
    ogImage: "https://uweservices.com/og-image.png",
    schema: {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "AboutPage",
          "@id": "https://uweservices.com/about#webpage",
          "name": "About UWE Services - Doorstep Home Services in Pune",
          "description": "Learn about UWE Services, Pune's reliable doorstep home maintenance and repair platform.",
          "url": "https://uweservices.com/about"
        },
        {
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://uweservices.com/" },
            { "@type": "ListItem", "position": 2, "name": "About Us", "item": "https://uweservices.com/about" }
          ]
        }
      ]
    },
    contentHtml: `
      <main class="container mx-auto px-4 py-12 max-w-4xl">
        <h1 class="text-3xl md:text-5xl font-bold text-gray-900 mb-4">About UWE Services</h1>
        <p class="text-lg text-gray-700 leading-relaxed mb-6">UWE Services ("You + We = Done Right") connects homeowners in Pune with verified, skilled trade professionals for all residential repair, maintenance, and cleaning requirements.</p>
        <h2 class="text-2xl font-bold text-gray-900 mb-3">Our Standards</h2>
        <ul class="list-disc pl-6 space-y-2 text-gray-700 mb-8">
          <li><strong>Background Verified:</strong> Identity and police-record checked tradespeople.</li>
          <li><strong>Upfront Rates:</strong> Itemized pricing with no surprise charges.</li>
          <li><strong>30-Day Guarantee:</strong> Free rework if any repaired issue recurs within 30 days.</li>
        </ul>
        <h2 class="text-2xl font-bold text-gray-900 mb-3">Service Coverage</h2>
        <p class="text-gray-700 mb-6">Serving Hinjawadi, Wakad, Baner, Aundh, Kothrud, Hadapsar, Kharadi, Viman Nagar, Wagholi, Pimple Saudagar, Pimpri, and Chinchwad.</p>
        <p class="text-gray-600 text-sm">Customer Helpline: <a href="tel:+919617671251" class="text-orange-600 font-semibold">+91-9617671251</a> | Support Email: <a href="mailto:support@uweservices.com" class="text-orange-600 font-semibold">support@uweservices.com</a></p>
      </main>
    `
  },
  {
    path: "/services",
    title: "Professional Home Services & Doorstep Repairs in Pune | UWE Services",
    description: "Book verified plumbers, electricians, AC repair, house cleaning, and carpenters in Pune & PCMC. Fast, transparent pricing and doorstep delivery.",
    canonicalUrl: "https://uweservices.com/services",
    ogImage: "https://uweservices.com/og-image.png",
    schema: {
      "@context": "https://schema.org",
      "@type": "ItemList",
      "name": "UWE Services - Home Services Directory",
      "description": "Directory of professional home maintenance and repair services available in Pune.",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Plumbing Services", "url": "https://uweservices.com/services/plumbing" },
        { "@type": "ListItem", "position": 2, "name": "Electrical Work", "url": "https://uweservices.com/services/electrical" },
        { "@type": "ListItem", "position": 3, "name": "House Cleaning", "url": "https://uweservices.com/services/cleaning" },
        { "@type": "ListItem", "position": 4, "name": "HVAC & AC Services", "url": "https://uweservices.com/services/hvac" },
        { "@type": "ListItem", "position": 5, "name": "Painting Services", "url": "https://uweservices.com/services/painting" },
        { "@type": "ListItem", "position": 6, "name": "Carpentry & Woodwork", "url": "https://uweservices.com/services/carpentry" },
        { "@type": "ListItem", "position": 7, "name": "Landscaping & Lawn Care", "url": "https://uweservices.com/services/landscaping" },
        { "@type": "ListItem", "position": 8, "name": "Pest Control", "url": "https://uweservices.com/services/pest-control" }
      ]
    },
    contentHtml: `
      <main class="container mx-auto px-4 py-12">
        <h1 class="text-3xl md:text-5xl font-bold text-gray-900 mb-4 text-center">All Home Services in Pune</h1>
        <p class="text-lg text-gray-600 text-center max-w-2xl mx-auto mb-12">Professional home maintenance and repairs delivered by verified experts across Pune and PCMC.</p>
        <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <article class="p-6 bg-white rounded-xl shadow-sm border border-orange-100">
            <h2 class="text-xl font-bold text-gray-900 mb-2"><a href="/services/plumbing">Plumbing Services</a></h2>
            <p class="text-gray-600 text-sm mb-4">Leak fixes, tap fittings, pipeline repair, overhead tank cleaning.</p>
            <a href="/services/plumbing" class="text-orange-600 font-semibold text-sm">View Details →</a>
          </article>
          <article class="p-6 bg-white rounded-xl shadow-sm border border-orange-100">
            <h2 class="text-xl font-bold text-gray-900 mb-2"><a href="/services/electrical">Electrical Work</a></h2>
            <p class="text-gray-600 text-sm mb-4">Wiring, switchboard fixes, tripping repairs, lighting installation.</p>
            <a href="/services/electrical" class="text-orange-600 font-semibold text-sm">View Details →</a>
          </article>
          <article class="p-6 bg-white rounded-xl shadow-sm border border-orange-100">
            <h2 class="text-xl font-bold text-gray-900 mb-2"><a href="/services/cleaning">House Cleaning</a></h2>
            <p class="text-gray-600 text-sm mb-4">Full apartment sanitization, deep scrubbing, sofa shampooing.</p>
            <a href="/services/cleaning" class="text-orange-600 font-semibold text-sm">View Details →</a>
          </article>
          <article class="p-6 bg-white rounded-xl shadow-sm border border-orange-100">
            <h2 class="text-xl font-bold text-gray-900 mb-2"><a href="/services/hvac">HVAC &amp; AC Services</a></h2>
            <p class="text-gray-600 text-sm mb-4">Jet servicing, cooling diagnosis, gas charging, AC installation.</p>
            <a href="/services/hvac" class="text-orange-600 font-semibold text-sm">View Details →</a>
          </article>
          <article class="p-6 bg-white rounded-xl shadow-sm border border-orange-100">
            <h2 class="text-xl font-bold text-gray-900 mb-2"><a href="/services/painting">Painting Services</a></h2>
            <p class="text-gray-600 text-sm mb-4">Interior &amp; exterior wall painting, damp-proofing, wall putty.</p>
            <a href="/services/painting" class="text-orange-600 font-semibold text-sm">View Details →</a>
          </article>
          <article class="p-6 bg-white rounded-xl shadow-sm border border-orange-100">
            <h2 class="text-xl font-bold text-gray-900 mb-2"><a href="/services/carpentry">Carpentry &amp; Woodwork</a></h2>
            <p class="text-gray-600 text-sm mb-4">Door lock repair, furniture assembly, hinge fixes, shelving.</p>
            <a href="/services/carpentry" class="text-orange-600 font-semibold text-sm">View Details →</a>
          </article>
          <article class="p-6 bg-white rounded-xl shadow-sm border border-orange-100">
            <h2 class="text-xl font-bold text-gray-900 mb-2"><a href="/services/landscaping">Landscaping &amp; Lawn Care</a></h2>
            <p class="text-gray-600 text-sm mb-4">Lawn mowing, hedge trimming, weed removal, garden design.</p>
            <a href="/services/landscaping" class="text-orange-600 font-semibold text-sm">View Details →</a>
          </article>
          <article class="p-6 bg-white rounded-xl shadow-sm border border-orange-100">
            <h2 class="text-xl font-bold text-gray-900 mb-2"><a href="/services/pest-control">Pest Control</a></h2>
            <p class="text-gray-600 text-sm mb-4">Odorless cockroach gel, anti-termite drill, bedbug treatment.</p>
            <a href="/services/pest-control" class="text-orange-600 font-semibold text-sm">View Details →</a>
          </article>
        </div>
      </main>
    `
  },
  {
    path: "/services/plumbing",
    title: "Plumbing Services & Plumber Near Me in Pune | UWE Services",
    description: "Book verified plumbers in Pune for pipe leak repairs, tap fitting, drain unblocking, and water heater installation. Fast doorstep service across Pune & PCMC.",
    canonicalUrl: "https://uweservices.com/services/plumbing",
    ogImage: "https://images.unsplash.com/photo-1613839397604-65fffe7fc3d4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    schema: {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "Plumber",
          "@id": "https://uweservices.com/services/plumbing#localbusiness",
          "name": "UWE Services - Plumbing Services in Pune",
          "url": "https://uweservices.com/services/plumbing",
          "telephone": "+91-9617671251",
          "priceRange": "₹599 - ₹2,999",
          "areaServed": [
            { "@type": "City", "name": "Pune" },
            { "@type": "AdministrativeArea", "name": "Pimpri-Chinchwad" },
            { "@type": "State", "name": "Maharashtra" }
          ]
        },
        {
          "@type": "Service",
          "@id": "https://uweservices.com/services/plumbing#service",
          "name": "Plumbing Services",
          "serviceType": "Residential Plumbing",
          "description": "Expert plumbing repairs, leak fixes, fixture installations, and emergency maintenance across Pune.",
          "provider": { "@type": "LocalBusiness", "name": "UWE Services", "url": "https://uweservices.com" },
          "areaServed": { "@type": "City", "name": "Pune" },
          "offers": { "@type": "Offer", "priceCurrency": "INR", "price": "599" }
        },
        {
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://uweservices.com/" },
            { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://uweservices.com/services" },
            { "@type": "ListItem", "position": 3, "name": "Plumbing Services", "item": "https://uweservices.com/services/plumbing" }
          ]
        },
        {
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "How fast can a plumber arrive at my location in Pune?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Across major Pune localities and PCMC, verified plumbers typically arrive within 45 to 90 minutes from confirmed booking time, with priority scheduling available for emergency leaks."
              }
            },
            {
              "@type": "Question",
              "name": "Do you offer a satisfaction guarantee on plumbing work in Pune?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, every plumbing job by UWE Services comes with a 30-day workmanship guarantee. If the same issue recurs within 30 days, we revisit and rectify it without additional labor fees."
              }
            }
          ]
        }
      ]
    },
    contentHtml: `
      <main class="container mx-auto px-4 py-12 max-w-4xl">
        <h1 class="text-3xl md:text-5xl font-bold text-gray-900 mb-4">Plumbing Services in Pune &amp; PCMC</h1>
        <p class="text-lg text-gray-700 leading-relaxed mb-6">Expert plumbing repairs, pipe leak detection, tap replacement, toilet and flush tank repair, overhead water tank cleaning, and geyser installation by verified plumbers.</p>
        <div class="p-6 bg-orange-50 rounded-2xl border border-orange-200 mb-8 flex flex-wrap items-center justify-between gap-4">
          <div>
            <span class="text-sm font-semibold text-orange-800">Standard Pricing:</span>
            <div class="text-2xl font-bold text-orange-600">₹599 - ₹2,999</div>
            <span class="text-xs text-gray-600">Average response time: 45 - 90 mins</span>
          </div>
          <div class="flex gap-3">
            <a href="/book/plumbing" class="px-6 py-3 bg-orange-600 text-white rounded-full font-semibold">Book Plumber</a>
            <a href="tel:+919617671251" class="px-6 py-3 bg-gray-900 text-white rounded-full font-semibold">Call +91-9617671251</a>
          </div>
        </div>
        <h2 class="text-2xl font-bold text-gray-900 mb-4">Plumbing Issues We Solve</h2>
        <ul class="grid sm:grid-cols-2 gap-3 text-gray-700 mb-10">
          <li class="p-3 bg-white rounded-lg border border-gray-200">✓ Water pipe leak detection and emergency sealing</li>
          <li class="p-3 bg-white rounded-lg border border-gray-200">✓ Tap, mixer, shower fitting and repair</li>
          <li class="p-3 bg-white rounded-lg border border-gray-200">✓ Clogged drain and sink unclogging</li>
          <li class="p-3 bg-white rounded-lg border border-gray-200">✓ Toilet commode and cistern repair</li>
        </ul>
      </main>
    `
  },
  {
    path: "/services/electrical",
    title: "Licensed Electrician Near Me in Pune | Home Wiring Services | UWE Services",
    description: "Hire verified local electricians in Pune for home wiring, switchboard replacement, MCB tripping troubleshooting, and fan fitting across Pune & PCMC.",
    canonicalUrl: "https://uweservices.com/services/electrical",
    ogImage: "https://images.unsplash.com/photo-1660330590022-9f4ff56b63f6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    schema: {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "Electrician",
          "@id": "https://uweservices.com/services/electrical#localbusiness",
          "name": "UWE Services - Electrician Services in Pune",
          "url": "https://uweservices.com/services/electrical",
          "telephone": "+91-9617671251",
          "priceRange": "₹799 - ₹4,999",
          "areaServed": [
            { "@type": "City", "name": "Pune" },
            { "@type": "AdministrativeArea", "name": "Pimpri-Chinchwad" },
            { "@type": "State", "name": "Maharashtra" }
          ]
        },
        {
          "@type": "Service",
          "@id": "https://uweservices.com/services/electrical#service",
          "name": "Electrical Work",
          "serviceType": "Residential Electrical",
          "description": "Certified and licensed electricians for safe wiring, appliance installation, and urgent electrical repairs.",
          "provider": { "@type": "LocalBusiness", "name": "UWE Services", "url": "https://uweservices.com" },
          "areaServed": { "@type": "City", "name": "Pune" },
          "offers": { "@type": "Offer", "priceCurrency": "INR", "price": "799" }
        },
        {
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://uweservices.com/" },
            { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://uweservices.com/services" },
            { "@type": "ListItem", "position": 3, "name": "Electrical Work", "item": "https://uweservices.com/services/electrical" }
          ]
        }
      ]
    },
    contentHtml: `
      <main class="container mx-auto px-4 py-12 max-w-4xl">
        <h1 class="text-3xl md:text-5xl font-bold text-gray-900 mb-4">Electrician Services in Pune &amp; PCMC</h1>
        <p class="text-lg text-gray-700 leading-relaxed mb-6">Certified local electricians for residential wiring, switchboard installation, MCB tripping troubleshooting, fan and chandelier mounting, and emergency short-circuit repairs.</p>
        <div class="p-6 bg-orange-50 rounded-2xl border border-orange-200 mb-8 flex flex-wrap items-center justify-between gap-4">
          <div>
            <span class="text-sm font-semibold text-orange-800">Standard Pricing:</span>
            <div class="text-2xl font-bold text-orange-600">₹799 - ₹4,999</div>
            <span class="text-xs text-gray-600">Average response time: 45 - 120 mins</span>
          </div>
          <div class="flex gap-3">
            <a href="/book/electrical" class="px-6 py-3 bg-orange-600 text-white rounded-full font-semibold">Book Electrician</a>
            <a href="tel:+919617671251" class="px-6 py-3 bg-gray-900 text-white rounded-full font-semibold">Call +91-9617671251</a>
          </div>
        </div>
      </main>
    `
  },
  {
    path: "/services/cleaning",
    title: "House Cleaning & Maid Services in Pune | UWE Services",
    description: "Professional home deep cleaning, maid services, kitchen degreasing, bathroom scrubbing, and sofa shampooing in Pune. Eco-friendly products used.",
    canonicalUrl: "https://uweservices.com/services/cleaning",
    ogImage: "https://images.unsplash.com/photo-1758273238594-9a9d6c20eaa2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    schema: {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "HouseCleaning",
          "@id": "https://uweservices.com/services/cleaning#localbusiness",
          "name": "UWE Services - House Cleaning in Pune",
          "url": "https://uweservices.com/services/cleaning",
          "telephone": "+91-9617671251",
          "priceRange": "₹499 - ₹1,999",
          "areaServed": [
            { "@type": "City", "name": "Pune" },
            { "@type": "AdministrativeArea", "name": "Pimpri-Chinchwad" },
            { "@type": "State", "name": "Maharashtra" }
          ]
        },
        {
          "@type": "Service",
          "@id": "https://uweservices.com/services/cleaning#service",
          "name": "House Cleaning",
          "serviceType": "Residential Deep Cleaning",
          "description": "Comprehensive home deep cleaning, regular maid services, kitchen sanitization, and sofa care.",
          "provider": { "@type": "LocalBusiness", "name": "UWE Services", "url": "https://uweservices.com" },
          "areaServed": { "@type": "City", "name": "Pune" },
          "offers": { "@type": "Offer", "priceCurrency": "INR", "price": "499" }
        },
        {
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://uweservices.com/" },
            { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://uweservices.com/services" },
            { "@type": "ListItem", "position": 3, "name": "House Cleaning", "item": "https://uweservices.com/services/cleaning" }
          ]
        }
      ]
    },
    contentHtml: `
      <main class="container mx-auto px-4 py-12 max-w-4xl">
        <h1 class="text-3xl md:text-5xl font-bold text-gray-900 mb-4">House Cleaning &amp; Deep Cleaning in Pune</h1>
        <p class="text-lg text-gray-700 leading-relaxed mb-6">Professional residential deep cleaning, intensive kitchen degreasing, bathroom tile descaling, sofa and carpet shampooing, and move-in/move-out cleaning across Pune.</p>
        <div class="p-6 bg-orange-50 rounded-2xl border border-orange-200 mb-8 flex flex-wrap items-center justify-between gap-4">
          <div>
            <span class="text-sm font-semibold text-orange-800">Standard Pricing:</span>
            <div class="text-2xl font-bold text-orange-600">₹499 - ₹1,999</div>
            <span class="text-xs text-gray-600">Duration: 2 - 5 hours</span>
          </div>
          <div class="flex gap-3">
            <a href="/book/cleaning" class="px-6 py-3 bg-orange-600 text-white rounded-full font-semibold">Book Cleaning</a>
            <a href="tel:+919617671251" class="px-6 py-3 bg-gray-900 text-white rounded-full font-semibold">Call +91-9617671251</a>
          </div>
        </div>
      </main>
    `
  },
  {
    path: "/services/hvac",
    title: "AC Repair & Servicing in Pune | Gas Refill & Jet Service | UWE Services",
    description: "Expert split and window AC repair, deep jet wash servicing, cooling diagnostics, and refrigerant gas refill in Pune by verified technicians.",
    canonicalUrl: "https://uweservices.com/services/hvac",
    ogImage: "https://images.unsplash.com/photo-1630481721508-5d37097dd8fc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    schema: {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "HVACBusiness",
          "@id": "https://uweservices.com/services/hvac#localbusiness",
          "name": "UWE Services - AC Repair in Pune",
          "url": "https://uweservices.com/services/hvac",
          "telephone": "+91-9617671251",
          "priceRange": "₹999 - ₹6,999",
          "areaServed": [
            { "@type": "City", "name": "Pune" },
            { "@type": "AdministrativeArea", "name": "Pimpri-Chinchwad" },
            { "@type": "State", "name": "Maharashtra" }
          ]
        },
        {
          "@type": "Service",
          "@id": "https://uweservices.com/services/hvac#service",
          "name": "HVAC & AC Services",
          "serviceType": "Air Conditioning Repair & Maintenance",
          "description": "Air conditioner servicing, jet wash cleaning, gas leakage refill, and cooling troubleshooting.",
          "provider": { "@type": "LocalBusiness", "name": "UWE Services", "url": "https://uweservices.com" },
          "areaServed": { "@type": "City", "name": "Pune" },
          "offers": { "@type": "Offer", "priceCurrency": "INR", "price": "999" }
        },
        {
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://uweservices.com/" },
            { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://uweservices.com/services" },
            { "@type": "ListItem", "position": 3, "name": "AC Services", "item": "https://uweservices.com/services/hvac" }
          ]
        }
      ]
    },
    contentHtml: `
      <main class="container mx-auto px-4 py-12 max-w-4xl">
        <h1 class="text-3xl md:text-5xl font-bold text-gray-900 mb-4">AC Repair &amp; Servicing in Pune</h1>
        <p class="text-lg text-gray-700 leading-relaxed mb-6">Doorstep air conditioner foam jet wash, cooling problem diagnostics, refrigerant gas refill (R32, R410A, R22), compressor inspection, and split AC installation.</p>
        <div class="p-6 bg-orange-50 rounded-2xl border border-orange-200 mb-8 flex flex-wrap items-center justify-between gap-4">
          <div>
            <span class="text-sm font-semibold text-orange-800">Standard Pricing:</span>
            <div class="text-2xl font-bold text-orange-600">₹999 - ₹6,999</div>
            <span class="text-xs text-gray-600">Average service time: 60 - 90 mins</span>
          </div>
          <div class="flex gap-3">
            <a href="/book/hvac" class="px-6 py-3 bg-orange-600 text-white rounded-full font-semibold">Book AC Service</a>
            <a href="tel:+919617671251" class="px-6 py-3 bg-gray-900 text-white rounded-full font-semibold">Call +91-9617671251</a>
          </div>
        </div>
      </main>
    `
  },
  {
    path: "/services/painting",
    title: "House Painting & Waterproofing Services in Pune | UWE Services",
    description: "Professional interior and exterior house painting, wall putty, primer, and damp-proofing in Pune. Flawless finish by skilled painters.",
    canonicalUrl: "https://uweservices.com/services/painting",
    ogImage: "https://images.unsplash.com/photo-1752649937956-f2c09651bf7f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    schema: {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "HousePainter",
          "@id": "https://uweservices.com/services/painting#localbusiness",
          "name": "UWE Services - Painting Services in Pune",
          "url": "https://uweservices.com/services/painting",
          "telephone": "+91-9617671251",
          "priceRange": "₹1,499 - ₹9,999"
        },
        {
          "@type": "Service",
          "@id": "https://uweservices.com/services/painting#service",
          "name": "Painting Services",
          "serviceType": "House Painting",
          "description": "Interior and exterior wall painting, waterproof coating, and color finishing.",
          "provider": { "@type": "LocalBusiness", "name": "UWE Services", "url": "https://uweservices.com" },
          "areaServed": { "@type": "City", "name": "Pune" }
        }
      ]
    },
    contentHtml: `
      <main class="container mx-auto px-4 py-12 max-w-4xl">
        <h1 class="text-3xl md:text-5xl font-bold text-gray-900 mb-4">House Painting &amp; Waterproofing in Pune</h1>
        <p class="text-lg text-gray-700 leading-relaxed mb-6">Interior wall emulsion, exterior weather-coat paint, wall putty smoothing, ceiling damp-proofing, and free color shade consultation across Pune &amp; PCMC.</p>
        <div class="p-6 bg-orange-50 rounded-2xl border border-orange-200 mb-8 flex flex-wrap items-center justify-between gap-4">
          <div>
            <span class="text-sm font-semibold text-orange-800">Pricing:</span>
            <div class="text-2xl font-bold text-orange-600">₹1,499 - ₹9,999</div>
          </div>
          <div class="flex gap-3">
            <a href="/book/painting" class="px-6 py-3 bg-orange-600 text-white rounded-full font-semibold">Book Painter</a>
            <a href="tel:+919617671251" class="px-6 py-3 bg-gray-900 text-white rounded-full font-semibold">Call +91-9617671251</a>
          </div>
        </div>
      </main>
    `
  },
  {
    path: "/services/carpentry",
    title: "Carpentry Services & Furniture Repair Near Me in Pune | UWE Services",
    description: "Book experienced carpenters in Pune for door lock repair, modular furniture assembly, wardrobe hinge fixes, and custom woodwork across Pune & PCMC.",
    canonicalUrl: "https://uweservices.com/services/carpentry",
    ogImage: "https://images.unsplash.com/photo-1728633826211-4e04854e344e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    schema: {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "HomeAndConstructionBusiness",
          "@id": "https://uweservices.com/services/carpentry#localbusiness",
          "name": "UWE Services - Carpentry Services in Pune",
          "url": "https://uweservices.com/services/carpentry",
          "telephone": "+91-9617671251",
          "priceRange": "₹799 - ₹4,499"
        },
        {
          "@type": "Service",
          "@id": "https://uweservices.com/services/carpentry#service",
          "name": "Carpentry & Woodwork",
          "serviceType": "Residential Carpentry",
          "description": "Custom woodwork, door and lock repairs, furniture assembly, and hinge adjustments.",
          "provider": { "@type": "LocalBusiness", "name": "UWE Services", "url": "https://uweservices.com" },
          "areaServed": { "@type": "City", "name": "Pune" }
        }
      ]
    },
    contentHtml: `
      <main class="container mx-auto px-4 py-12 max-w-4xl">
        <h1 class="text-3xl md:text-5xl font-bold text-gray-900 mb-4">Carpentry &amp; Furniture Repair in Pune</h1>
        <p class="text-lg text-gray-700 leading-relaxed mb-6">Expert carpenters for door lock installation, modular wardrobe and bed assembly, cabinet hinge repairs, and custom wooden shelving in Pune.</p>
        <div class="p-6 bg-orange-50 rounded-2xl border border-orange-200 mb-8 flex flex-wrap items-center justify-between gap-4">
          <div>
            <span class="text-sm font-semibold text-orange-800">Pricing:</span>
            <div class="text-2xl font-bold text-orange-600">₹799 - ₹4,499</div>
          </div>
          <div class="flex gap-3">
            <a href="/book/carpentry" class="px-6 py-3 bg-orange-600 text-white rounded-full font-semibold">Book Carpenter</a>
            <a href="tel:+919617671251" class="px-6 py-3 bg-gray-900 text-white rounded-full font-semibold">Call +91-9617671251</a>
          </div>
        </div>
      </main>
    `
  },
  {
    path: "/services/landscaping",
    title: "Landscaping & Garden Maintenance Services in Pune | UWE Services",
    description: "Keep your garden lush with lawn mowing, hedge trimming, weed removal, and soil nourishment by UWE Services gardeners in Pune.",
    canonicalUrl: "https://uweservices.com/services/landscaping",
    ogImage: "https://images.unsplash.com/photo-1721318308400-fd8da6c51efe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    schema: {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "HomeAndConstructionBusiness",
          "@id": "https://uweservices.com/services/landscaping#localbusiness",
          "name": "UWE Services - Landscaping in Pune",
          "url": "https://uweservices.com/services/landscaping",
          "telephone": "+91-9617671251",
          "priceRange": "₹599 - ₹2,999"
        },
        {
          "@type": "Service",
          "@id": "https://uweservices.com/services/landscaping#service",
          "name": "Landscaping & Lawn Care",
          "serviceType": "Garden Maintenance",
          "description": "Professional lawn mowing, garden cleanup, shrub trimming, and seasonal soil maintenance.",
          "provider": { "@type": "LocalBusiness", "name": "UWE Services", "url": "https://uweservices.com" },
          "areaServed": { "@type": "City", "name": "Pune" }
        }
      ]
    },
    contentHtml: `
      <main class="container mx-auto px-4 py-12 max-w-4xl">
        <h1 class="text-3xl md:text-5xl font-bold text-gray-900 mb-4">Garden Maintenance &amp; Lawn Care in Pune</h1>
        <p class="text-lg text-gray-700 leading-relaxed mb-6">Residential lawn mowing, ornamental shrub pruning, flower bed maintenance, organic fertilizer application, and garden cleanup in Pune.</p>
        <div class="p-6 bg-orange-50 rounded-2xl border border-orange-200 mb-8 flex flex-wrap items-center justify-between gap-4">
          <div>
            <span class="text-sm font-semibold text-orange-800">Pricing:</span>
            <div class="text-2xl font-bold text-orange-600">₹599 - ₹2,999</div>
          </div>
          <div class="flex gap-3">
            <a href="/book/landscaping" class="px-6 py-3 bg-orange-600 text-white rounded-full font-semibold">Book Garden Care</a>
            <a href="tel:+919617671251" class="px-6 py-3 bg-gray-900 text-white rounded-full font-semibold">Call +91-9617671251</a>
          </div>
        </div>
      </main>
    `
  },
  {
    path: "/services/pest-control",
    title: "Pest Control & Termite Treatment Near Me in Pune | UWE Services",
    description: "Protect your home with certified, odorless cockroach, termite, and bed bug pest control treatments in Pune by UWE Services.",
    canonicalUrl: "https://uweservices.com/services/pest-control",
    ogImage: "https://images.unsplash.com/photo-1687840936382-7333b7d26fca?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    schema: {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "HomeAndConstructionBusiness",
          "@id": "https://uweservices.com/services/pest-control#localbusiness",
          "name": "UWE Services - Pest Control in Pune",
          "url": "https://uweservices.com/services/pest-control",
          "telephone": "+91-9617671251",
          "priceRange": "₹499 - ₹2,499"
        },
        {
          "@type": "Service",
          "@id": "https://uweservices.com/services/pest-control#service",
          "name": "Pest Control",
          "serviceType": "Residential Pest Control",
          "description": "Safe, odorless, and government-approved pest control treatments for termites, cockroaches, and bedbugs.",
          "provider": { "@type": "LocalBusiness", "name": "UWE Services", "url": "https://uweservices.com" },
          "areaServed": { "@type": "City", "name": "Pune" }
        }
      ]
    },
    contentHtml: `
      <main class="container mx-auto px-4 py-12 max-w-4xl">
        <h1 class="text-3xl md:text-5xl font-bold text-gray-900 mb-4">Pest Control &amp; Termite Treatment in Pune</h1>
        <p class="text-lg text-gray-700 leading-relaxed mb-6">Safe, odorless herbal gel cockroach treatments, drill-and-fill anti-termite barriers, two-stage bedbug eradication, and rodent management across Pune.</p>
        <div class="p-6 bg-orange-50 rounded-2xl border border-orange-200 mb-8 flex flex-wrap items-center justify-between gap-4">
          <div>
            <span class="text-sm font-semibold text-orange-800">Pricing:</span>
            <div class="text-2xl font-bold text-orange-600">₹499 - ₹2,499</div>
          </div>
          <div class="flex gap-3">
            <a href="/book/pest-control" class="px-6 py-3 bg-orange-600 text-white rounded-full font-semibold">Book Treatment</a>
            <a href="tel:+919617671251" class="px-6 py-3 bg-gray-900 text-white rounded-full font-semibold">Call +91-9617671251</a>
          </div>
        </div>
      </main>
    `
  },
  {
    path: "/locations/pune",
    title: "Home Services in Pune | Book Online with UWE Services",
    description: "Find available home services in Pune with UWE Services. Explore plumbing, electrical, cleaning and other services, check availability and book online.",
    canonicalUrl: "https://uweservices.com/locations/pune",
    ogImage: "https://uweservices.com/og-image.png",
    schema: {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "HomeAndConstructionBusiness",
          "@id": "https://uweservices.com/locations/pune#localbusiness",
          "name": "UWE Services - Pune",
          "url": "https://uweservices.com/locations/pune",
          "telephone": "+91-9617671251",
          "email": "support@uweservices.com",
          "description": "On-demand doorstep home maintenance and repair services across Pune and Pimpri-Chinchwad.",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Serving Pune & Pimpri-Chinchwad Metropolitan Region, Maharashtra",
            "addressLocality": "Pune",
            "addressRegion": "Maharashtra",
            "addressCountry": "IN"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": 18.5204,
            "longitude": 73.8567
          },
          "areaServed": {
            "@type": "City",
            "name": "Pune"
          }
        },
        {
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://uweservices.com/" },
            { "@type": "ListItem", "position": 2, "name": "Locations", "item": "https://uweservices.com/locations" },
            { "@type": "ListItem", "position": 3, "name": "Pune", "item": "https://uweservices.com/locations/pune" }
          ]
        }
      ]
    },
    contentHtml: `
      <main class="container mx-auto px-4 py-12 max-w-4xl">
        <h1 class="text-3xl md:text-5xl font-bold text-gray-900 mb-4">Doorstep Home Services in Pune</h1>
        <p class="text-lg text-gray-700 leading-relaxed mb-6">UWE Services provides on-demand doorstep home maintenance across Pune and Pimpri-Chinchwad. Connect with verified local technicians for plumbing, electrical work, deep cleaning, AC repair, carpentry, painting, and pest control.</p>
        <h2 class="text-2xl font-bold text-gray-900 mb-4">Localities Covered Across Pune &amp; PCMC</h2>
        <div class="flex flex-wrap gap-2 mb-8">
          <span class="px-3 py-1 bg-orange-100 text-orange-800 rounded-full text-xs font-semibold">Hinjawadi</span>
          <span class="px-3 py-1 bg-orange-100 text-orange-800 rounded-full text-xs font-semibold">Wakad</span>
          <span class="px-3 py-1 bg-orange-100 text-orange-800 rounded-full text-xs font-semibold">Baner</span>
          <span class="px-3 py-1 bg-orange-100 text-orange-800 rounded-full text-xs font-semibold">Aundh</span>
          <span class="px-3 py-1 bg-orange-100 text-orange-800 rounded-full text-xs font-semibold">Kothrud</span>
          <span class="px-3 py-1 bg-orange-100 text-orange-800 rounded-full text-xs font-semibold">Hadapsar</span>
          <span class="px-3 py-1 bg-orange-100 text-orange-800 rounded-full text-xs font-semibold">Kharadi</span>
          <span class="px-3 py-1 bg-orange-100 text-orange-800 rounded-full text-xs font-semibold">Viman Nagar</span>
          <span class="px-3 py-1 bg-orange-100 text-orange-800 rounded-full text-xs font-semibold">Wagholi</span>
          <span class="px-3 py-1 bg-orange-100 text-orange-800 rounded-full text-xs font-semibold">Pimple Saudagar</span>
          <span class="px-3 py-1 bg-orange-100 text-orange-800 rounded-full text-xs font-semibold">Pimpri</span>
          <span class="px-3 py-1 bg-orange-100 text-orange-800 rounded-full text-xs font-semibold">Chinchwad</span>
        </div>
        <div class="flex gap-4">
          <a href="/services" class="px-6 py-3 bg-orange-600 text-white rounded-full font-semibold">Book a Service in Pune</a>
          <a href="tel:+919617671251" class="px-6 py-3 bg-gray-900 text-white rounded-full font-semibold">Call +91-9617671251</a>
        </div>
      </main>
    `
  },
  {
    path: "/locations",
    title: "Home Service Areas in Pune | UWE Services",
    description: "Explore UWE Services coverage across Pune and PCMC. Book verified electricians, plumbers, cleaning professionals, AC technicians and more.",
    canonicalUrl: "https://uweservices.com/locations",
    ogImage: "https://uweservices.com/og-image.png",
    schema: {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "WebPage",
          "name": "Home Service Areas in Pune | UWE Services",
          "description": "Explore UWE Services coverage across Pune and PCMC.",
          "url": "https://uweservices.com/locations"
        },
        {
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://uweservices.com/" },
            { "@type": "ListItem", "position": 2, "name": "Locations", "item": "https://uweservices.com/locations" }
          ]
        }
      ]
    },
    contentHtml: `
      <main class="container mx-auto px-4 py-12 max-w-4xl">
        <h1 class="text-3xl md:text-5xl font-bold text-gray-900 mb-4">UWE Services Coverage Hub</h1>
        <p class="text-lg text-gray-700 leading-relaxed mb-6">Browse our verified doorstep coverage areas in Pune and Pimpri-Chinchwad.</p>
        <div class="p-6 bg-white rounded-2xl border border-orange-100 shadow-sm">
          <h2 class="text-2xl font-bold text-gray-900 mb-2"><a href="/locations/pune" class="hover:text-orange-600">Pune &amp; Pimpri-Chinchwad, Maharashtra</a></h2>
          <p class="text-gray-600 text-sm mb-4">Serving Hinjawadi, Wakad, Baner, Aundh, Kothrud, Hadapsar, Kharadi, Viman Nagar, Wagholi, Pimple Saudagar, Pimpri, and Chinchwad.</p>
          <a href="/locations/pune" class="px-5 py-2.5 bg-orange-600 text-white rounded-full font-semibold text-sm">View Pune Details</a>
        </div>
      </main>
    `
  },
  {
    path: "/contact",
    title: "Contact UWE Services | Doorstep Home Service Support in Pune",
    description: "Get in touch with UWE Services for home service bookings, technician inquiries, and customer support in Pune & PCMC. Call +91-9617671251.",
    canonicalUrl: "https://uweservices.com/contact",
    ogImage: "https://uweservices.com/og-image.png",
    schema: {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "ContactPage",
          "@id": "https://uweservices.com/contact#webpage",
          "name": "Contact UWE Services",
          "description": "Customer support and booking assistance for doorstep home services in Pune and PCMC.",
          "url": "https://uweservices.com/contact"
        },
        {
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://uweservices.com/" },
            { "@type": "ListItem", "position": 2, "name": "Contact", "item": "https://uweservices.com/contact" }
          ]
        }
      ]
    },
    contentHtml: `
      <main class="container mx-auto px-4 py-12 max-w-4xl">
        <h1 class="text-3xl md:text-5xl font-bold text-gray-900 mb-4">Contact UWE Services</h1>
        <p class="text-lg text-gray-700 leading-relaxed mb-8">Reach our customer support team for bookings, inquiries, and technician dispatch in Pune.</p>
        <div class="grid sm:grid-cols-2 gap-6 mb-12">
          <div class="p-6 bg-white rounded-xl border border-gray-200 shadow-sm">
            <h2 class="text-lg font-bold text-gray-900 mb-2">Customer Helpline</h2>
            <p class="text-gray-600 text-sm mb-3">Available Monday – Sunday for bookings &amp; emergencies</p>
            <a href="tel:+919617671251" class="text-orange-600 font-bold text-xl">+91-9617671251</a>
          </div>
          <div class="p-6 bg-white rounded-xl border border-gray-200 shadow-sm">
            <h2 class="text-lg font-bold text-gray-900 mb-2">Support Email</h2>
            <p class="text-gray-600 text-sm mb-3">For partnerships, feedback, or booking assistance</p>
            <a href="mailto:support@uweservices.com" class="text-orange-600 font-bold text-xl">support@uweservices.com</a>
          </div>
        </div>
        <div class="p-6 bg-gray-50 rounded-xl border border-gray-200 text-sm text-gray-700">
          <p><strong>Primary Operational &amp; Service Hub:</strong> Pune &amp; Pimpri-Chinchwad Metropolitan Region, Maharashtra, India</p>
          <p class="mt-2 text-gray-500"><strong>Registered Office:</strong> Makan No. 01, Ward No. 42, Post–New Yard, Sai Nagar, Meharagaon, Hoshangabad, MP – 461115</p>
        </div>
      </main>
    `
  },
  {
    path: "/privacy-policy",
    title: "Privacy Policy | UWE Services",
    description: "Learn how UWE Services collects, protects, and handles your personal information when booking home services.",
    canonicalUrl: "https://uweservices.com/privacy-policy",
    ogImage: "https://uweservices.com/og-image.png",
    contentHtml: `
      <main class="container mx-auto px-4 py-12 max-w-4xl">
        <h1 class="text-3xl font-bold text-gray-900 mb-4">Privacy Policy</h1>
        <p class="text-gray-700 leading-relaxed">UWE Services ("we", "our", or "us") is operated by Mayank Choudhary. We are committed to protecting your privacy and ensuring transparency in how your personal data is handled.</p>
      </main>
    `
  },
  {
    path: "/terms-and-conditions",
    title: "Terms & Conditions | UWE Services",
    description: "Review the terms and conditions governing home service bookings, technician dispatch, and customer service agreements on UWE Services.",
    canonicalUrl: "https://uweservices.com/terms-and-conditions",
    ogImage: "https://uweservices.com/og-image.png",
    contentHtml: `
      <main class="container mx-auto px-4 py-12 max-w-4xl">
        <h1 class="text-3xl font-bold text-gray-900 mb-4">Terms &amp; Conditions</h1>
        <p class="text-gray-700 leading-relaxed">These terms govern your use of UWE Services website, booking platform, and home service appointments.</p>
      </main>
    `
  },
  {
    path: "/refund-policy",
    title: "Refund & Cancellation Policy | UWE Services",
    description: "Understand our customer-friendly refund and cancellation policies for home service appointments on UWE Services.",
    canonicalUrl: "https://uweservices.com/refund-policy",
    ogImage: "https://uweservices.com/og-image.png",
    contentHtml: `
      <main class="container mx-auto px-4 py-12 max-w-4xl">
        <h1 class="text-3xl font-bold text-gray-900 mb-4">Refund &amp; Cancellation Policy</h1>
        <p class="text-gray-700 leading-relaxed">Transparent cancellation and refund rules for home service bookings with UWE Services.</p>
      </main>
    `
  }
];

console.log(`Starting static prerendering for ${routes.length} routes...`);

for (const r of routes) {
  let html = templateHtml;

  // 1. Replace Title
  html = html.replace(/<title>[\s\S]*?<\/title>/, `<title>${r.title}</title>`);
  html = html.replace(/<meta name="title" content="[\s\S]*?" \/>/, `<meta name="title" content="${r.title}" />`);

  // 2. Replace Description
  html = html.replace(/<meta name="description" content="[\s\S]*?" \/>/, `<meta name="description" content="${r.description}" />`);

  // 3. Replace Canonical
  html = html.replace(/<link rel="canonical" href="[\s\S]*?" \/>/, `<link rel="canonical" href="${r.canonicalUrl}" />`);

  // 4. Replace OG Tags
  html = html.replace(/<meta property="og:title" content="[\s\S]*?" \/>/, `<meta property="og:title" content="${r.title}" />`);
  html = html.replace(/<meta property="og:description" content="[\s\S]*?" \/>/, `<meta property="og:description" content="${r.description}" />`);
  html = html.replace(/<meta property="og:url" content="[\s\S]*?" \/>/, `<meta property="og:url" content="${r.canonicalUrl}" />`);
  if (r.ogImage) {
    html = html.replace(/<meta property="og:image" content="[\s\S]*?" \/>/, `<meta property="og:image" content="${r.ogImage}" />`);
    html = html.replace(/<meta property="twitter:image" content="[\s\S]*?" \/>/, `<meta property="twitter:image" content="${r.ogImage}" />`);
  }

  // 5. Replace Twitter Tags
  html = html.replace(/<meta property="twitter:title" content="[\s\S]*?" \/>/, `<meta property="twitter:title" content="${r.title}" />`);
  html = html.replace(/<meta property="twitter:description" content="[\s\S]*?" \/>/, `<meta property="twitter:description" content="${r.description}" />`);
  html = html.replace(/<meta property="twitter:url" content="[\s\S]*?" \/>/, `<meta property="twitter:url" content="${r.canonicalUrl}" />`);

  // 6. Inject Route-specific Structured Data Schema
  if (r.schema) {
    const schemaScript = `\n    <script type="application/ld+json" id="prerendered-page-schema">\n${JSON.stringify(r.schema, null, 2)}\n    </script>\n  </head>`;
    html = html.replace("</head>", schemaScript);
  }

  // 7. Inject Semantic HTML inside #root for instant crawler parsing
  if (r.contentHtml) {
    html = html.replace(
      '<div id="root"></div>',
      `<div id="root">${r.contentHtml}</div>`
    );
  }

  // Determine file path
  let targetFile;
  if (r.path === "/") {
    targetFile = path.join(distDir, "index.html");
  } else {
    const subDir = path.join(distDir, r.path.replace(/^\//, ""));
    fs.mkdirSync(subDir, { recursive: true });
    targetFile = path.join(subDir, "index.html");
  }

  fs.writeFileSync(targetFile, html, "utf8");
  console.log(`✓ Prerendered: ${r.path} -> ${path.relative(distDir, targetFile)}`);
}

console.log("Static prerendering completed successfully!");
