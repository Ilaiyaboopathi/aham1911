import React, { useState } from "react";

const ManagementTeamSection = () => {
  const [selectedMember, setSelectedMember] = useState(null);

  const teamMembers = [
    {
      id: 1,
      name: "Venkatesh Kannappan",
      designation:
        "Founder, Managing Director & CEO, Aham Housing Finance Pvt. Ltd.",
      image: "/img/team/Venkatesh.jpg",
      bio: [
        "Mr. Venkatesh Kannappan is the Founder, Managing Director & CEO of Aham Housing Finance, a fast-growing affordable housing finance company committed to enabling low- and middle-income families to achieve their dream of homeownership. ",
        "Since founding Aham, Venkatesh has successfully led its transformation from a start-up into a trusted player in the affordable housing segment. Under his leadership, the company delivers innovative, low-cost housing finance solutions tsailored to underserved customer segments and is creating a meaningful social impact.",
         "At Aham Housing Finance, Venkatesh drives the company’s strategic growth, investor and stakeholder partnerships, operational excellence, regulatory compliance, and people development. His ability to combine business acumen with a strong social purpose is setting new benchmarks in the affordable housing finance industry.",
         "Prior to founding Aham, Venkatesh held senior leadership roles in reputed financial institutions, where he played a pivotal role in scaling businesses and driving profitable growth.",
        ],
    },
    {
      id: 2,
      name: "Ajit Kumar Sarangi",
      designation: "Head Human Resources",
      image: "/img/team/Ajit.jpg",
      bio: [
        "Mr. Ajit Kumar Sarangi is the Head Human Resources at Aham Housing Finance, and a transformational HR leader with over 15 years of experience in shaping people strategies that drive organizational growth and cultural excellence. He holds a Post Graduate Program in Management from the Indira Group of Institutes and is currently pursuing his PhD from Lovely Professional University, reflecting his commitment to continuous learning and innovation in the HR domain.",
        //"Ajit has successfully led large-scale HR transformations across reputed organizations, including TVS Credit Services Limited, where he spearheaded initiatives to build leadership pipelines, enhance workforce productivity through AI and digital transformation, and embed a performance-driven culture. His professional journey also includes leadership roles at Siesta Hospitality & Services Limited and Mahindra Holidays & Resorts India Limited, where he developed expertise in organisational development, talent management, and employee engagement.",
      "At Aham Housing Finance, Ajit is driving a future-focused people strategy, fostering an inclusive and empowering workplace, and building capabilities that align with the company's vision for sustainable growth. His leadership is redefining HR as a key enabler of business success, balancing employee aspirations with organizational priorities.",
      "A passionate advocate for people-centric transformation, Ajit believes in leveraging HR innovation to unlock human potential and create workplaces where employees thrive and deliver exceptional outcomes. ",
      ],
    },
    {
      id: 3,
      name: "Ranju Abraham ",
      designation: "Business Head, Aham Housing Finance",
      image: "/img/team/Abraham.jpg",
      bio: [
        "Mr. Ranju Abraham brings over 13 years of rich experience in business development, construction finance, mortgage operations, and commercial credit. Known for his ability to lead large teams, manage strategic partnerships, and drive performance across regions, he is a strong addition to Aham’s leadership team.",
        "Before joining Aham, Ranju was Regional Manager – Home Loans at Axis Bank, where he successfully managed operations across Kerala and Karnataka. Earlier, at HDFC Ltd., he played a pivotal role in scaling the construction finance business, spearheading a vast sourcing network of over 250 staff, 200 bank branches, and 200+ channel partners. His expertise spans strategic planning, team building, credit evaluation, product training, and operational leadership.",
        "Academically, Ranju holds a PGDBM from Xavier Institute of Management & Entrepreneurship, a B.Tech. in Mechanical Engineering, and has cleared CFA Level 1. He is also certified in financial planning and depository operations, reflecting his strong blend of technical and business acumen. ",
       
      ],
    },
     {
      id: 4,
      name: "Arunachalarajan",
      designation: "Chief Technology Officer, Aham Housing Finance",
      image: "/img/team/Arunachalarajan.jpg",
      bio: [
        "Mr. Arunachalarajan is the Chief Technology Officer at Aham Housing Finance, bringing over 17 years of expertise in driving large-scale IT transformations and delivering innovative technology solutions across diverse domains. With a decade in mid-level leadership roles, he has extensive experience in designing and executing IT initiatives in NBFCs and other sectors, including sales, collections, finance, compliance, HR, treasury, banking, and e-governance. ",
        "Prior to joining Aham, Arunachalarajan held senior positions at TVS Credit Services Ltd., where he led over 26 IT projects, delivering impactful outcomes such as automating incentive payouts with Oracle Intelligent Advisor and developing WhatsApp-based systems to enhance collection efficiency. At TerraCIS Technologies (formerly IL&FS Technologies), he spearheaded data migration projects for 13+ e-governance departments, eliminating 2.5 million ghost beneficiaries and implementing robust Aadhaar-based data security systems. His earlier tenure at Tech Mahindra saw him manage IT application systems for marquee clients like State Bank of India and NISSAN North America, driving significant cost and efficiency gains.",
        //"At Aham Housing Finance, Arunachalarajan leads the company’s technology vision and digital transformation agenda. His expertise in customer-facing solutions and proficiency in modern technologies like PaaS, Salesforce, J2EE, and cloud platforms (AWS, OCI) are key to building scalable, secure, and future-ready systems that power business growth. ",
        
      ],
    },
     {
      id: 5,
      name: "Rajkumar PS",
      designation: "Head Internal Audit",
      image: "/img/team/Rajkumar.jpg",
      bio: [
        "Mr. Rajkumar brings with him deep expertise in credit, risk management, compliance, and internal controls, built over a career spanning leadership roles at Manappuram Home Finance, Hinduja Housing Finance, and L&T Housing Finance. With proven capability in credit risk evaluation, operational governance, fraud prevention, and regulatory compliance, he has successfully managed multi-location credit operations and delivered consistent results across diverse lending portfolios. ",
        "Before taking charge as Head – Internal Audit & Risk at Aham Housing Finance, Rajkumar served as our National Credit Manager, where he developed a thorough understanding of Aham’s business model, operational framework, and governance priorities. He led pan-India portfolios of over ₹130 Cr with Nil NPA performance.",
        "In his current role, Rajkumar is responsible for establishing a comprehensive risk and audit framework aligned with NHB and RBI guidelines, conducting independent reviews of credit and operational processes, and proactively identifying potential risks. ",
        " ",
      ],
    },
     {
      id: 6,
      name: "Ganesh Janakiram",
      designation: "Senior Leadership, Aham Housing Finance",
      image: "/img/team/Ganesh.jpg",
      bio: [
        "Mr. Ganesh Janakiram brings with him over three decades of diverse experience in the financial services industry, spanning operations, credit, compliance, human resources, and business planning. He has successfully navigated both strategic and execution-driven roles at leading institutions such as Sundaram Home Finance, Hinduja Leyland Finance, Magma Fincorp, and Sundaram Finance Ltd. ",
        "In his most recent role as Deputy General Manager – Operations at Sundaram Home Finance, Ganesh was instrumental in overseeing central processing operations, coordinating IT systems for credit and compliance, and managing post-disbursement services. Over the years, he has also led the Central Processing Centre, held HR leadership responsibilities, and driven multiple transformation projects aimed at enhancing turnaround time, improving service quality, and strengthening regulatory alignment.",
        "With a deep understanding of customer lifecycle processes, audit and compliance frameworks, and technology-enabled operational excellence, Ganesh adds significant strength to Aham’s leadership team. His expertise will be pivotal in building a robust operational backbone and scalable service infrastructure as Aham continues its growth journey. ",
        " ",
      ],
    },
     {
      id: 7,
      name: "Selvakumar P",
      designation: "National Credit Manager",
      image: "/img/team/Selvakumar.jpg",
      bio: [
        "Mr. Selvakumar brings with him over 18 years of extensive experience in credit underwriting, risk management, product and policy development, compliance, audit, and portfolio monitoring across leading banks and NBFCs. His wide exposure to lending products—including home loans, LAP, unsecured business loans, co-lending, leasing, and digital finance—positions him as a key driver of Aham’s credit and risk strategy. ",
        "Before joining Aham, Selvakumar led the centralized credit and risk functions for SME products at Cholamandalam Investment and Finance Company, managing credit exposure up to ₹25 Cr. In this role, he was responsible for national credit underwriting, policy formulation, regulatory compliance, and audit oversight. His earlier leadership stints at TVS Credit, Indiabulls Consumer Finance, RBL Finserve, and HDFC Bank saw him spearhead credit operations across multiple states and pioneering automation-led underwriting solutions.",
        "With a proven ability to align business growth with robust risk frameworks, and deep expertise in digital LOS/LMS implementations, Selvakumar brings a strong balance of strategic foresight and execution. His leadership will be instrumental in building a scalable, technology-driven credit infrastructure at Aham Housing Finance. ",
        " ",
      ],
    },
     {
      id: 8,
      name: "Srinivasababu R",
      designation: "National of Collections Manager",
      image: "/img/team/Srinivasababu.jpg",
      bio: [
        "Mr. Srinivasababu R brings over 16 years of extensive experience in portfolio and receivables management, risk recovery strategies, and legal collections across secured and unsecured lending products, including home loans, mortgages, and strategic SME loans. ",
        " ",
        " Before joining Aham Housing Finance, he served as AVP – Zonal Collections Manager at SMFG India Home Finance Ltd., where he successfully led collections operations across Tamil Nadu and Karnataka. His expertise in secured recoveries and legal proceedings under SARFAESI and NI Act (Sec 138), combined with his ability to drive team efficiency and mitigate portfolio risk, makes him a pivotal leader in Aham’s credit and recovery ecosystem.",
        "Earlier in his career, Srinivasababu held key roles at Religare Finvest, Royal Bank of Scotland, and GE-SBI Cards, managing critical functions such as capital reporting, KYC systems, cheque clearing, and recovery agency operations. A Certified Lean Professional, he is adept at building high-performing teams, monitoring portfolio health through robust MIS systems, and fostering collaboration across credit, sales, and legal functions. ",
     //"At Aham Housing Finance, Srinivasababu leads the collections strategy with a focus on operational excellence, risk mitigation, and strengthening the company’s asset quality. ",
      ],
    },
    {
      id: 9,
      name: "Priya Datta Joshi ",
      designation: "Chief Compliance Officer, Aham Housing Finance",
      image: "/img/team/Priya.jpg",
      bio: [
        "Mr. Priya Datta Joshi is the Chief Compliance Officer at Aham Housing Finance and has been an integral part of the company since its inception. As one of the earliest members of the organization, he has played a foundational role in setting up the governance, regulatory, and compliance framework that underpins Aham’s operations today. ",
        "An associate member of the Institute of Company Secretaries of India (ICSI), Mr. Joshi holds bachelor’s degrees in Commerce and Law from Sambalpur University, Odisha. With a deep understanding of corporate law, regulatory compliance, and governance practices, he brings over a decade of expertise in managing secretarial functions for dynamic and growing organizations.",
        "At Aham Housing Finance, Joshi leads all secretarial, compliance, and governance functions with a sharp focus on ensuring the company operates in full alignment with statutory and regulatory requirements. He oversees board processes, corporate filings, stakeholder communications, and the implementation of sound governance practices that inspire confidence among regulators, investors, and partners. ",
        " ",
      ],
    },
  ];

  return (
    <>
      {/* 🌟 Banner Section */}
      <section
        className="relative bg-cover bg-center bg-no-repeat text-white py-32 px-6 lg:px-24 overflow-hidden"
        style={{
          backgroundImage:
            "linear-gradient(rgba(3, 18, 47, 0.7), rgba(3, 18, 47, 0.7)), url('/img/eligibility/resale-loan.jpg')",
        }}
      >
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-400/30 rounded-full blur-3xl opacity-30 animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/30 rounded-full blur-3xl opacity-30 animate-pulse"></div>

        <div className="relative text-center z-10">
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight mb-4">
            Our Management Team
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto text-blue-100 leading-relaxed">
            The driving force behind Aham Housing Finance — leading with vision,
            integrity, and excellence.
          </p>
        </div>
      </section>

      {/* 👇 Team Section */}
      <section className="relative py-20 bg-gradient-to-b from-blue-50 via-white to-blue-100 overflow-hidden">
        <div className="absolute top-0 left-0 w-72 h-72 bg-blue-200/30 rounded-full blur-3xl opacity-40 animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-blue-300/30 rounded-full blur-3xl opacity-40 animate-pulse"></div>

        <div className="container mx-auto px-6 lg:px-16 relative z-10">
          <h2 className="text-3xl lg:text-5xl font-extrabold bg-gradient-to-r from-blue-800 to-blue-600 text-transparent bg-clip-text text-center mb-16">
            Board of Directors
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {teamMembers.map((member) => (
              <div
                key={member.id}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-500"
              >
                <div className="h-90 overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transform transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-semibold text-gray-900 mb-1">
                    {member.name}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    {member.designation}
                  </p>
                  <button
                    onClick={() => setSelectedMember(member)}
                    className="text-blue-600 font-medium hover:underline transition"
                  >
                    View Profile
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 🌟 Modal Popup */}
      {selectedMember && (
        <div className="fixed inset-0 bg-black/60 flex justify-center items-center z-50">
          <div className="bg-blue-50 rounded-3xl p-8 max-w-4xl w-[90%] relative shadow-2xl overflow-y-auto max-h-[90vh]">
            <button
              className="absolute top-4 right-4 text-gray-600 hover:text-black text-2xl font-bold"
              onClick={() => setSelectedMember(null)}
            >
              ✕
            </button>

            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="flex-shrink-0 w-60 h-70 rounded-2xl overflow-hidden shadow-lg">
                <img
                  src={selectedMember.image}
                  alt={selectedMember.name}
                  className="w-full h-full object-cover"
                />
              </div>

              <div>
                <h3 className="text-2xl font-bold text-blue-700 mb-1">
                  {selectedMember.name}
                </h3>
                <p className="text-gray-700 font-medium mb-6">
                  {selectedMember.designation}
                </p>
                <div className="text-gray-700 space-y-4 leading-relaxed text-justify">
                  {selectedMember.bio.map((para, i) => (
                    <p key={i}>{para}</p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ManagementTeamSection;
