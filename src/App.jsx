import DataImage, { listTools, listProyek, Video, scraping } from "./data";

export default function App() {
  return (
    <>
      {/* header ssection */}
      <div className="hero grid md:grid-cols-2 pt-10 items-center xl:gap-0 gap-6 grid-cols-1">
        <div className="animate__animated animate__fadeInUp animate__delay-3s">
          <div className="flex items-center gap-3 mb-6 bg-zinc-800 w-fit p-4 rounded-2xl">
            <img
              src={DataImage.HeroImage}
              alt="Hero image"
              className="w-10 rounded-md"
              loading="lazy"
            />
            <q>Mohamed Ayman, live in Mansoura. 😁</q>
          </div>
          <h1 className="text-5xl/tight font-bold mb-6">Hi, " Helmy " </h1>
          <p className="text-base/loose mb-6 opacity-50">
            Ambitious Student and Front-End Developer with 1 year of intensive
            experience in building dynamic, user-friendly web interfaces using
            React, JavaScript, HTML/CSS, and Tailwind. My background includes a
            strong foundation in Data Structures and Algorithms (Python/C++). I
            excel at problem-solving and time management, and I am actively
            seeking a role in a major company to contribute my precision and
            organizational skills.
          </p>
          <div className="flex items-center sm:gap-4  gap-2  ">
            <a
              href="/MOHAMED_AYMAN_HELMY.pdf"
              target="_blank"
              rel="noreferrer"
              className="bg-violet-700 p-4 rounded-2xl hover:bg-violet-600"
              loading="lazy"
            >
              <i className="ri-download-line ri-lg "></i>
              Download CV
            </a>
            <a
              href="#project"
              className="bg-zinc-700 p-4 rounded-2xl hover:bg-zinc-600"
            >
              <i className="ri-arrow-down-line ri-lg "></i>
              View Projects
            </a>
          </div>
        </div>
        <img
          src={DataImage.HeroImage}
          alt="Hero image"
          className="w-125 rounded-2xl md:ml-auto animate__animated animate__fadeInUp animate__delay-4s"
        />
      </div>
      {/* About section */}
      <div className="about mt-32 py-10" id="about">
        <div
          className="xl:w-2/3 lg:w-3/4 w-full mx-auto p-7 bg-zinc-800 rounded-lg "
          data-aos="fade-up"
          data-aos-duration="1500"
          data-aos-once="true"
        >
          <img
            src={DataImage.HeroImage}
            alt="image"
            className="w-12 rounded-md mb-10 sm:hidden"
            loading="lazy"
          />
          <p className="text-base/loose mb-10  ">
            Hi, Mohamed Ayman I'm a Front-End Developer with one year of
            experience building dynamic web interfaces. Proficient in React,
            JavaScript, HTML, CSS, and Tailwind, and possess a strong foundation
            in Data Structures and Algorithms (Python, C++). My strengths
            include flexibility, a passion for learning, and the ability to
            manage time and solve complex problems. Seeking an opportunity as a
            student to join a major company and translate my technical and soft
            skills (communication, teamwork) into measurable results.
          </p>
          <div className="flex items-center justify-between">
            <img
              src={DataImage.HeroImage}
              alt="iamge"
              className="w-12 rounded-md sm:block hidden "
              loading="lazy"
            />
            <div className="flex items-center gap-6">
              <div>
                <h1 className="text-4xl mb-1">
                  {listProyek.length + Video.length + scraping.length}
                  <span className="text-violet-500">+</span>
                </h1>
                <p className="">completed project</p>
              </div>

              <div>
                <h1 className="text-4xl mb-1">
                  1<span className="text-violet-500">+</span>
                </h1>
                <p>Years of experience</p>
              </div>
            </div>
          </div>
        </div>

        <div className="tools mt-32">
          <h1
            className="text-4xl/snug font-bold mb-4"
            data-aos="fade-up"
            data-aos-duration="1500"
            data-aos-once="true"
          >
            Tools Used
          </h1>
          <p
            className="xl:w-2/5 lg:w-2/4 md:w-2/3 sm:w-3/4 w-full text-base/loose opacity-50"
            data-aos-delay="300"
            data-aos="fade-up"
            data-aos-duration="1500"
            data-aos-once="true"
          >
            Several tools that I usually use for website Creation
          </p>
          <div className="tools-box mt-14 grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 sm:grid-cols-2 gap-4">
            {listTools.map((tool) => (
              <div
                className="group flex items-center gap-2 p-3 border border-zinc-600 rounded-md hover:bg-zinc-800"
                key={tool.id}
                data-aos="fade-up"
                data-aos-duration="1500"
                data-aos-delay={tool.dad}
                data-aos-once="true"
              >
                <img
                  src={tool.gambar}
                  alt="tools image"
                  loading="lazy"
                  className="w-15 bg-zinc-800 p-1 group-hover:bg-zinc-900"
                />
                <div>
                  <h4 className="font-bold ">{tool.nama}</h4>
                  <p className="opacity-50">{tool.ket}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* project */}
      <div className="project mt-32 py-10" id="project">
        <h1
          className="text-center text-4xl font-bold mb-2"
          data-aos="fade-up"
          data-aos-duration="1500"
          data-aos-once="true"
        >
          Project
        </h1>
        <p
          className="text-base/loose text-center opacity-50"
          data-aos="fade-up"
          data-aos-duration="1500"
          data-aos-delay="300"
          data-aos-once="true"
        >
          Here are some projects I have created.
        </p>
        <div className="project-box  mt-14 grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4">
          {listProyek.map((project) => (
            <div
              key={project.id}
              className="p-4 bg-zinc-800 rounded-md"
              data-aos="fade-up"
              data-aos-duration="1500"
              data-aos-delay={project.dad}
              data-aos-once="true"
            >
              <img
                src={project.gambar}
                className="object-cover"
                alt="project-image"
                loading="lazy"
              />
              <div>
                <h1 className="text-2xl font-bold my-4">{project.nama}</h1>
                <p className="text-base/loose mb-4">{project.desk}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tools.map((tool, index) => (
                    <p
                      className="py-1 px-3 border border-zinc-500 bg-zinc-600 rounded-md font-semibold "
                      key={index}
                    >
                      {tool}
                    </p>
                  ))}
                </div>
                <div className="mt-8 text-center">
                  <a
                    href={`${project.href}`}
                    target="_blank"
                    className="bg-violet-700  p-3 rounded-lg block border border-zinc-600 hover:bg-violet-600"
                  >
                    see website
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Ecommerce video */}
        <div className="my-5  gap-4 ">
          {Video.map((project) => (
            <div
              key={project.id}
              className="p-4 bg-zinc-800 rounded-md w-full lg:w-1/2"
              data-aos="fade-up"
              data-aos-duration="1500"
              data-aos-delay={project.dad}
              data-aos-once="true"
            >
              <iframe
                className="rounded h-[50vh] w-full"
                src={project.src}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>

              <div>
                <h1 className="text-2xl font-bold my-4">{project.nama}</h1>
                <p className="text-base/loose mb-4">{project.desk}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tools.map((tool, index) => (
                    <p
                      className="py-1 px-3 border border-zinc-500 bg-zinc-600 rounded-md font-semibold "
                      key={index}
                    >
                      {tool}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* scraping Project */}
        <div className="my-20 gap-4">
          <h1
            className="text-center text-4xl font-bold mb-2"
            data-aos="fade-up"
            data-aos-duration="1500"
            data-aos-once="true"
          >
            Scraping Project
          </h1>
          <p
            className="text-base/loose text-center opacity-50"
            data-aos="fade-up"
            data-aos-duration="1500"
            data-aos-delay="300"
            data-aos-once="true"
          >
            Projects in this section leverage automation engines like Selenium
            and Headless Chrome. Running browser automation on free cloud
            hosting tiers is highly inefficient due to strict CPU/RAM throttling
            and container limits. To showcase the codebase realistically without
            cloud-imposed performance drops, these projects are demonstrated via
            high-quality video walkthroughs alongside their full Dockerized
            source code."
          </p>
          <div className="project-box  mt-14 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
           {scraping.map((project) => (
            <div
              key={project.id}
              className="p-4 bg-zinc-800 rounded-md w-full"
              data-aos="fade-up"
              data-aos-duration="1500"
              data-aos-delay={project.dad}
              data-aos-once="true"
            >
              <iframe
                className="rounded h-[50vh] w-full"
                src={project.src}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>

              <div>
                <h1 className="text-2xl font-bold my-4">{project.nama}</h1>
                <p className="text-base/loose mb-4">{project.desk}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tools.map((tool, index) => (
                    <p
                      className="py-1 px-3 border border-zinc-500 bg-zinc-600 rounded-md font-semibold "
                      key={index}
                    >
                      {tool}
                    </p>
                  ))}
                </div>
              </div>
              <div className="mt-8 space-y-5 text-center">
                  {project.frontHref && <a
                    href={`${project.frontHref}`}
                    target="_blank"
                    className="bg-violet-700  p-3 rounded-lg block border border-zinc-600 hover:bg-violet-600"
                  >
                    go to Frontend Code
                  </a>}
                  <a
                    href={`${project.BackHerf}`}
                    target="_blank"
                    className="bg-violet-700  p-3 rounded-lg block border border-zinc-600 hover:bg-violet-600"
                  >
                    go to Backend Code
                  </a>
                </div>
            </div>
          ))}
        </div>
        </div>
      </div>
      {/* contact */}
      <div className="contact mt-32 sm:p-10 p-0" id="contact">
        <h1
          className="text-4xl mb-2 font-bold text-center"
          data-aos="fade-up"
          data-aos-duration="1500"
          data-aos-once="true"
        >
          Contact me
        </h1>
        <p
          className="text-base/loose text-center mb-10 opacity-50"
          data-aos="fade-up"
          data-aos-duration="1500"
          data-aos-delay="300"
          data-aos-once="true"
        >
          let's connect with me
        </p>

        <form
          action="https://formsubmit.co/mohamdayman35@gmail.com"
          method="POST"
          className="bg-zinc-800 p-10 sm:w-fit w-full mx-auto rounded-md "
          autoComplete="off"
          data-aos="fade-up"
          data-aos-duration="1500"
          data-aos-delay="500"
          data-aos-once="true"
        >
          <div className="flex flex-col gap-6 ">
            <div className="flex flex-col gap-2">
              <label className="font-semibold">Enter the full name</label>
              <input
                type="text"
                name="name"
                placeholder="Enter name"
                className="border border-zinc-500 p-2 rounded-md"
                required
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="font-semibold">Email</label>
              <input
                type="email"
                name="email"
                className="border border-zinc-500 p-2 rounded-md"
                placeholder="Enter Email..."
                required
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="message" className="font-semibold">
                message
              </label>
              <textarea
                name="message"
                id="message"
                className="border border-zinc-500 p-2 rounded-md"
                cols="45"
                rows="7"
                required
                placeholder="message..."
              />
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="bg-violet-700 hover:bg-violet-600 p-3 rounded-lg w-full cursor-pointer border border-zinc-600"
              >
                Send message
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
