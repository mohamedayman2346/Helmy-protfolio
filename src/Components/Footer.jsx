export default function Footer() {
  return (
    <div className="mt-32 py-4  flex md:flex-row flex-col gap-6 md:gap-0 justify-between items-center">
      <h1 className="text-2xl font-bold">portfolio</h1>
      <div className="flex gap-7">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#project">project</a>
      </div>
      <div className="flex items-center gap-3">
        <a href="https://linkedin.com/in/mohamed-ayman-54a33825b" target="_blank">
          <i class="ri-linkedin-fill ri-2x"></i>
        </a>
        <a href="https://github.com/mohamedayman2346"  target="_blank">
          <i className="ri-github-fill ri-2x"></i>
        </a>
        <a href="https://www.instagram.com/muhammed_ayman_35_?igsh=MWI3c3lqM3NodjhkcQ==" target="_blank">
          <i className="ri-instagram-fill ri-2x"></i>
        </a>
      </div>
    </div>
  );
}
