/**
 * Centralized content data for static pages
 * Single source of truth for all text/image content
 * Makes updates easier - change once, update everywhere
 */

// Page 5: Confidential Section
export const confidentialData = {
    title: "CONFIDENTIAL DATA AND INFORMATION ARE SECURED",
    logo: "/src/images/teleconnect.png",
    backgroundImage: "/src/images/bg_4.png"
};

// Page 6: Cost Savings & Growth
export const costSavingsData = {
    backgroundVideo: "/src/images/bg_1.mp4",
    sections: [
        {
            id: 1,
            title: "ACCELERATED GROWTH",
            description: "Our dedicated team will allow you to focus on strategic planning in growing and serving your customers which will save you time and money of having to worry about your back-office needs.",
            image: "/src/images/bg_12.png",
            imageAlt: "Growth Chart"
        },
        {
            id: 2,
            title: "LOW COSTS ON STAFFING",
            description: "Drives operational budget at its peak by outsourcing our global dedicated Accountants, complementing your team's local equivalents which will reduce staffing costs of up to 68% savings to account more on your firm's profitability net worth to service more of your customer's needs.",
            image: "/src/images/bg_13.png",
            imageAlt: "68% Cost Savings"
        }
    ]
};

// Page 8: Why Choose Us
export const whyChooseData = {
    backgroundImage: "/src/images/bg_3.png",
    backgroundGif: "/src/images/bg_4.gif",
    mainTitle: "BEST REASON/S",
    subTitle: "WHY CHOOSE US?",
    reasons: [
        {
            id: 1,
            title: '"Customer is King" Service Value',
            description: "This is how we impeccably treat our customers as we cater the needs and goals of each business. Gearing towards organizational growth and success through result driven solutions."
        },
        {
            id: 2,
            title: "Change Leadership",
            description: "We have our structured processes in place to see change as an opportunity for growth and improvement. ETC values shared vision with our customers through a consultative approach based on 10+ years of customer satisfaction and service excellence."
        },
        {
            id: 3,
            title: "Seamless Connectivity",
            description: "ETC integrates the most advanced web technology into our workforce through cloud-based applications to collaborate with our global customers. We have a state of the art high security IT Infrastructure."
        },
        {
            id: 4,
            title: "Diversity in Action",
            description: "ETC respects the uniqueness of each individual which make up our entire organization as a whole. This organic work culture empowers streamlined connections with our customers."
        }
    ]
};

// Page 9: Accountant Profile
export const profileData = {
    backgroundVideo: "/src/images/bg_1.mp4",
    image: "/src/images/AccountingProfile.png",
    position: "Finance Controller - US Campaign",
    company: "E-TeleConnect, Inc.",
    quote: {
        text: "THE BEST ACCOUNTANTS DON'T JUST SEE NUMBERS; THEY SEE THE POTENTIAL FOR FINANCIAL TRANSFORMATION.",
        author: "Samantha Wilson"
    },
    heading: "ACCOUNTANT AND BOOKKEEPING BPO FIRM SERVING GREATER ARIZONA AND CALIFORNIA AREA",
    description: "There are a lot of Accounting firms globally but not all can provide the variety of services your company needs to keep careful track of your finances. At ETC, you'll work with a Team of Accountants who have deep knowledge of all aspects of Accounting and can provide the reliable, accurate, and timely services you can rely on. We offer a wide range of CPA Services for individuals and businesses in a more personal and interactive approach."
};

// Page 10: Best Deal Pricing
export const pricingData = {
    backgroundVideo: "/src/images/bg_1.mp4",
    title: "OUR BEST DEAL",
    image: "/src/images/OURBESTDEAL.png",
    serviceImage: "/src/images/prof_acctg_services.png",
    services: ["Bookkeeping", "Financial Statement Reporting"],
    price: "$500/MONTH",
    priceDescription: "Introductory price for new clients",
    ctaText: "GET A QUOTE",
    ctaLink: "/api/book-an-appointment"
};

// Page 11: Book Appointment Process
export const appointmentProcessData = {
    backgroundVideo: "/src/images/bg_1.mp4",
    teamImage: "/src/images/bg_19.png",
    mainTitle: "ADVANCE YOUR FIRM'S GROWTH WITH THE \"A\" PLAYER IN OUTSOURCED ACCOUNTING SERVICES",
    subTitle: "Explore how our Acounting Outsourcing Services will work best for your firm's needs in getting the best talents to maximize the company's manpower growth potential",
    centerStep: {
        number: 1,
        title: "BOOK AN APPOINTMENT",
        description: "Let's have a quick meet-up call to strategize how to tailor fit your best outsourcing solution",
        ctaText: "GET STARTED"
    },
    leftSteps: [
        {
            number: 5,
            title: "PERFORMANCE MANAGEMENT",
            description: "Hassle-free tracking of assigned tasks & accountabilities through ETC's close monitoring of your offshore team's deliverables",
            icon: "BarChart2"
        },
        {
            number: 4,
            title: "TEAM MANAGEMENT",
            description: "ETC brings your offshore team together where they will feel valued to meet your firm's staffing goals & expectations",
            icon: "Users"
        }
    ],
    rightSteps: [
        {
            number: 2,
            title: "RECRUITMENT",
            description: "ETC will source out globally-skilled professional 'A' Player Accountants/Bookkeepers in the industry",
            icon: "UserCheck"
        },
        {
            number: 3,
            title: "SELECTION & ONBOARDING PROCESS",
            description: "The choice is yours among the pool of shortlisted qualified candidates as we on-board them in a fully equipped high-tech office",
            icon: "CheckCircle"
        }
    ]
};

// Page 14: Global Locations
export const locationsData = {
    backgroundVideo: "/src/images/bg_1.mp4",
    title: "EXPAND YOUR NEXT \"GLOBAL BRANCH OFFICE\" TO GROW YOUR BUSINESS WITH ETC!",
    locations: [
        {
            id: 1,
            title: "PARAÑAQUE",
            text: "Manila, Philippines",
            image: "/src/images/bg_16.png",
            imageAlt: "People in a meeting room in Parañaque"
        },
        {
            id: 2,
            title: "LAGUNA",
            text: "Philippines",
            image: "/src/images/bg_17.png",
            imageAlt: "Office cubicles in Laguna"
        },
        {
            id: 3,
            title: "NORTH AMERICA",
            text: "USA",
            image: "/src/images/UnitedStates.png",
            imageAlt: "Flag of the United States representing North America"
        }
    ]
};

// Page 15: Footer Contact Info
export const contactData = {
    backgroundImage: "/src/images/yellow.png",
    title: "CONTACT US",
    website: "www.eteleconnectinc.com",
    websiteUrl: "https://www.eteleconnectinc.com",
    offices: [
        {
            id: 1,
            title: "E-TeleConnect, Inc. PH ROHQ",
            location: "Parañaque City, Metro Manila, Philippines",
            directLine: "US line: (855)800-0710 Loc. 805",
            telNo: "(632) 8-829-0703 loc. 101/105"
        },
        {
            id: 2,
            title: "E-TeleConnect, Inc. – Los Baños",
            location: "Los Baños, Laguna, Philippines 4030",
            directLine: "US line (808) 445-6527",
            telNo: "(6349) 501-1210 loc.117/119"
        }
    ],
    email: "accounting@e-teleconnectinc.com"
};

// Page 2: Promo Videos
export const promoData = {
    backgroundImage: "/src/images/bg_3.png",
    heading: "WE HAVE TRUSTED PROFESSIONAL \"A\" PLAYERS BASED IN THE PHILIPPINES WHO'LL BE YOUR NEXT \"BRANCH OFFICE\" TO GROW YOUR BUSINESS",
    videos: [
        { src: "/src/images/2.mp4", autoPlay: true },
        { src: "/src/images/3.mp4", autoPlay: true },
        { src: "/src/images/4.mp4", autoPlay: true }
    ]
};

// Page 7: About Us
export const aboutUsData = {
    backgroundImage: "/src/images/bg_2.png",
    title: "About Us",
    video: "/src/images/bg_14.mp4",
    logo: "/src/images/teleconnect.png",
    paragraphs: [
        "ETC now offers a wide variety of Accounting Services which includes Bookkeeping, Accounts Payable (A/P) & Accounts Receivable (A/R) Processing, Payroll Services, Billing & Collections, and Audit Services, etc.",
        "ETC's Competitive Edge to name a few are: Our Solid Management Team; Our Modern and Fully-equipped Facilities alongside with the most advanced Accounting Software Applications; Our Cost-Saving prices with the quality of service which could save up to 68% in Operational expenditures for most companies worldwide."
    ]
};