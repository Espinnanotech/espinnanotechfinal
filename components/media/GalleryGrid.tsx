"use client";

import { GalleryCard } from "./GalleryCard";

const GALLERY_ITEMS = [
  
  {
    title: "AC मे लगाए 250 रुपए कीमत का यह एयर फिल्टर, IIT कानपुर द्वारा बने इस फ़िल्टर से मिलेगी बैक्टीरिया मुक्त शुद्ध हवा",
    description: "IIT Kanpur Made Cheap AC Air Purifier: सर्दिया खत्म हो गई है और उसी का साथ गर्मी का सीजन भी शुरू हो गया है।...",
    image: "/media/enhanced.webp",
    date: "April 15, 2023",
    category: "News",
    externalLink: "https://biharivoice.com/good-news-by-iit-kanpur-they-made-swasa-air-purifier-filter-for-ac-incubated-company-made-this-know-full-details-about-it/"
  },
  {
    title: "Get cleaner air with nano-tech based purifiers",
    description: "IIT-K&rsquo;s device costs ₹ 13k-14k; cleans air within 40-m radius",
    image: "/media/airpurifires.webp",
    date: "Dec 18, 2022",
    category: "News",
    externalLink: "https://punemirror.com/others/scitech/Get-cleaner-air-with-nano-tech-based-purifiers/cid9490718.htm"
  },
  {
    title: "IIT-Kanpur develops nano purifier to keep SPM out of air we breathe",
    description: "It consumes less power and is different from the purifiers available in the market....",
    image: "/media/air-purifier2.jpeg",
    date: "Dec 18, 2022",
    category: "News",
    externalLink: "https://health.economictimes.indiatimes.com/news/medical-devices/iit-kanpur-develops-nano-purifier-to-keep-spm-out-of-air-we-breathe/96318544"
  },
  {
    title: "IIT Kanpur develops 'Swasa', a nano-tech-based air purifier with a range of 400m",
    description: "The revolutionary air purifier, 'Swasa' can clean the air within its 400m radius and can also filter out harmful viruses and bacteria.",
    image: "/media/air-purifier2.jpeg",
    date: "Dec 19, 2022",
    category: "News",
    externalLink: "https://www.knocksense.com/kanpur/iit-kanpur-develops-swasa-a-nano-tech-based-air-purifier-with-a-range-of-400m"
  },
  {
    title: "Sandip Patil: An Inspiration for Millions of Visionaries",
    description: "An entrepreneur, technologist, founder and managing director of an enterprise, E-Spin Nanotech Pvt. Ltd. at SIIC IIT Kanpur, Dr. Sandip Patil is a passionate researcher and he is often referred to as the ideal of entrepreneurship at IIT-K.",
    image: "/media/Dr.-Sandip-Patil-Founder.webp",
    date: "2022",
    category: "News",
    externalLink: "https://businessiconic.com/sandip-patil-an-inspiration-for-millions-of-visionaries/"
  },
  {
    title: "Startup Mantra: Robust rise of new successful firms",
    description: "2021 has proved to a turning point for the Pune startup ecosystem",
    image: "/media/mantra image.webp",
    date: "Dec 25, 2021",
    category: "News",
    externalLink: "https://www.hindustantimes.com/cities/pune-news/startup-mantra-robust-rise-of-new-successful-firms-101640429905455.html"
  },
  {
    title: "3 incredible IIT Kanpur startup success stories that can transform the world",
    description: "Here are three incredible IIT Kanpur startup success stories which has the potential to transform not just India but the world.",
    image: "/media/IIT_Kanpur_startup_success.webp",
    date: "Dec 28, 2021",
    category: "News",
    externalLink: "https://www.indiatoday.in/education-today/news/story/3-incredible-iit-kanpur-startup-success-stories-1893227-2021-12-28"
  },
  {
    title: "Startup mantra: Giving nanofibres a Covid-safe spin cycle",
    description: "PUNE E Spin Nanotech is a nanotechnology manufacturing firm that pivoted in the face of Covid-19 to startup its movement towards making its R&D keep Indians safe",
    image: "/media/startup matra.webp",
    date: "Jul 10, 2021",
    category: "News",
    externalLink: "https://www.hindustantimes.com/cities/pune-news/startup-mantra-giving-nanofibres-a-covid-safe-spin-cycle-101625917116369.html"
  },
  {
    title: "IIT-कानपुर का बना मास्क पहुंचा संसद:लोकसभा और राज्यसभा में सांसदों ने पहना IIT-कानपुर का बना 'श्वासा' मास्क, गिफ्ट पैक में पहुंचाया गया; PM भी कर चुके हैं तारीफ",
    description: "कोरोना संकट के बीच लोकसभा और राज्यसभा में सोमवार से मानसून सत्र दिल्ली में शुरू हुआ। इस दौरान सभी सांसदों ने कानपुर IIT का बना हुआ N95 और N99 श्वासा मास्क लगाकर कोरोना प्रोटोकॉल का पालन किया।",
    image: "/media/iit-kanpur_1626712244_enhanced.webp",
    date: "November 20, 2021",
    category: "News",
    externalLink: "https://www.bhaskar.com/local/uttar-pradesh/kanpur/news/mps-in-lok-sabha-and-rajya-sabha-wore-masks-made-in-iit-kanpur-pmo-narendra-modi-128717594.html"
  },
  {
    title: "Age of Heroes",
    description: "For every Covid-19 warrior who went to battle, there was a battalion of heroes",
    image: "/media/50-Housekeeping-staff.png",
    date: "March 28, 2021",
    category: "News",
    externalLink: "https://www.theweek.in/theweek/cover/2021/03/18/age-of-heroes.html"
  },
  {
    title: "IIT Kanpur Alumnus Sandeep Patil Invents A Way To Bottle Oxygen Which Can Be Sprayed Into Patient's Mouth",
    description: "Recently, because of the shortage of oxygen in the country, an alumnus of IIT Kanpur has invented the Oxyrise bottle that carries oxygen in the pocket.",
    image: "/media/SWASA-OXYSIZE-Gallery.png",
    date: "Jul 14, 2021",
    category: "News",
    externalLink: "https://news.abplive.com/technology/iit-kanpur-alumnus-sandeep-patil-invents-a-way-to-bottle-oxygen-which-can-be-sprayed-into-patient-s-mouth-1469432"
  },
  {
    title: "Dr. Sandip Patil: From The Man With The Invisible Thread To The Mask Man Of India",
    description: "",
    image: "/media/9ysap,image9_enhanced.png",
    date: "May 12, 2021",
    category: "News",
    externalLink: "https://www.ceoinsightsindia.com/leader/dr-sandip-patil-from-the-man-with-the-invisible-thread-to-the-mask-man-of-india-cid-1972.html"
  },
  {
    title: "कानपुर IIT की डिवाइस दूर करेगी स्ट्रेस:इंस्टेंट रिलीफ, एनर्जी बूस्टर का भी काम करेगी; कोरोना की दूसरी लहर के दौरान हुआ था ट्रायल",
    description: "",
    image: "/media/1626178663.png",
    date: "November 20, 2021",
    category: "News",
    externalLink: "https://www.bhaskar.com/local/uttar-pradesh/kanpur/news/ready-made-device-that-will-provide-instant-relief-this-device-will-also-work-as-an-energy-booster-kanpur-iit-128696274.html"
  },
  {
    title: "Swasa: A homespun mask with a 'nano' touch",
    description: "Sandip Patil and his team developed a unique nanofibre mask",
    image: "/media/sandip-patil.jpg",
    date: "March 28, 2021",
    category: "News",
    externalLink: "https://www.theweek.in/theweek/cover/2021/03/18/swasa-a-homespun-mask-with-a-nano-touch.html"
  },
  {
    title: "IIT-Kanpur Based Startup Espin Nanotech to Produce 70,000 N95 'Swasa' Face Masks Per Day Amid Rise in COVID-19 Cases in India",
    description: "Amid the rise in COVID-19 Pandemic in the country, IIT-Kanpur based Espin Nanotech Private Limited announced to produce 70,000 pieces of N95 'Swasa' face masks per day. Currently, the startup produces nearly 30,000 face masks day from its manufacturing unit in IIT-Kanpur campus.",
    image: "/media/SWASA Plus n95.png",
    date: "Aug 14, 2020",
    category: "News",
    externalLink: "https://www.latestly.com/lifestyle/health-wellness/iit-kanpur-based-startup-espin-nanotech-to-produce-70000-n95-swasa-face-masks-per-day-amid-rise-in-covid-19-cases-in-india-1963457.html"
  },
  {
    title: "बाजार में आने वाला है नये लुक वाला एन-95 मास्क, कई खूबियों संग फैशन की पूरी करेगा मांग",
    description: "आइआइटी के पीएचडी के पूर्व छात्र ने सुरक्षा के साथ फैशन का ध्यान रखते हुए मास्क में कई डिजाइन तैयार किए हैं जो लोगों को बेहद पसंद आने वाले। ई-स्पि नैनोटेक स्टार्टअप कंपनी आॅनलाइन बाजार में उतारने की तैयारी कर रही है।",
    image: "/media/SWASA Plus n95.png",
    date: "Oct 27, 2020",
    category: "News",
    externalLink: "https://www.jagran.com/news/state-coronavirus-kanpur-news-iit-phd-student-made-new-look-n-95-mask-according-to-fashion-20961593.html"
  },
  {
    title: "IIT-Kanpur introduces indegenous fashionable masks to fight Covid-19",
    description: "Masks have become a precautionary measure for saving lives during the ongoing corona pandemic.",
    image: "/media/iitkanpurs.png",
    date: "Sep 21, 2020",
    category: "News",
    externalLink: "https://www.indiatvnews.com/news/india/iit-kanpur-introduces-indegenous-fashionable-masks-to-fight-coronavirus-651164"
  },
  {
    title: "1st IITian of His Village, Farmers Son Designs Cutting-Edge Nano Machine!",
    description: "Earning an annual turnover of Rs 4 Crore, Sandip sells his Made-In-India invention in Europe, USA as well as several top research labs in India.",
    image: "/media/iitian sandip sir.png",
    date: "Feb 04, 2020",
    category: "News",
    externalLink: "https://thebetterindia.com/213206/iit-innovation-nanotechnology-maharashtra-farmer-son-startup-india-say143/"
  },
  {
    title: "IIT-Kanpur to produce Swadeshi masks to help doctors fight Covid-19",
    description: "The researchers have set up filter testing equipped with aerosol laser spectrometer and non-woven polypropylene based on 3-4 layer material to make a better mask. It offers much lower resistance to the air passage",
    image: "/media/dosctors.png",
    date: "Apr 04, 2020",
    category: "News",
    externalLink: "https://www.hindustantimes.com/education/iit-kanpur-to-produce-swadeshi-masks-to-help-doctors-fight-covid-19/story-ncT41B1GDysM2FuMadI4qM.html"
  },
  {
    title: "PM Narendra Modi wears IIT-Kanpur's Swasa N-95 mask",
    description: "Prime Minister Narendra Modi, during the Bhoomi Pujan on Wednesday, wore an N-95 mask named 'Swasa' developed by IIT Kanpur",
    image: "/media/swasamask.png",
    date: "Aug 06, 2020",
    category: "News",
    externalLink: "https://timesofindia.indiatimes.com/city/kanpur/pm-narendra-modi-wears-iit-kabpurs-swasa-n-95-mask/articleshow/77384962.cms"
  },
  {
    title: "IITK team designed Namo's Ayodhya mask",
    description: "On Wednesday, as the bhoomi puja for the Ram temple got underway in Ayodhya, IIT-Kanpur's incubator team highlighted the mask the prime minster wore.",
    image: "/media/modi.png",
    date: "Aug 05, 2020",
    category: "News",
    externalLink: "https://m.rediff.com/getahead/report/iitk-team-designed-namos-ayodhya-mask/20200805.htm"
  },
  {
    title: "Top stories this week: 3 entrepreneurs who beat the odds and made it big",
    description: "These are the stories of a famous veg hot dog seller, a nanofibres company owner, and a namkeen brand head who overcame difficult personal situations to emerge successful.",
    image: "/media/three story.jpg",
    date: "Sept 22, 2019",
    category: "News",
    externalLink: "https://yourstory.com/smbstory/successful-small-business-johnny-hot-dog-indore-namkeen-nanofibres"
  },
  {
    title: "From living in a mud hut to launching a nano-tech firm, read how Sandip Patil found success",
    description: "It was passion, surviving instinct and sheer determination that has brought success to Sandip Patil. Hailing from a small village, today his nanotech firm has a turnover of Rs 2.2 crore.",
    image: "/media/sandip sir.webp",
    date: "Jan 01, 2019",
    category: "News",
    externalLink: "https://yourstory.com/smbstory/from-living-in-a-small-mud-hut-to-launching-a-nano-tech-firm-espin-sandip-patil"
  },
  {
    title: "Sandip Patil | The man with the invisible thread",
    description: "Sandip Patil rose above the circumstances of a deprived childhood and has been a key contributor to India's nanotechnology projects",
    image: "/media/news.jpg",
    date: "Aug 09, 2014",
    category: "News",
    externalLink: "https://www.livemint.com/Leisure/FDL7utZBy4oXwoZMNXCaeP/Sandip-Patil--The-man-with-the-invisible-thread.html"
  }
 
] as const;

export function GalleryGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {GALLERY_ITEMS.map((item, index) => (
        <GalleryCard
          key={item.title}
          {...item}
          index={index}
        />
      ))}
    </div>
  );
}