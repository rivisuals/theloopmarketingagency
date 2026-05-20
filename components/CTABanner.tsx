export default function CTABanner() {
  return (
    <section className="bg-[#0057FF] py-24 px-6" id="contact">
      <div className="max-w-4xl mx-auto text-center">
        <h2
          className="font-syne font-extrabold text-4xl md:text-6xl text-white mb-6 leading-tight"
          style={{ fontWeight: 800 }}
        >
          Klaar om jouw merk <br className="hidden md:block" />
          te laten groeien?
        </h2>
        <p className="text-blue-100 text-lg md:text-xl mb-10 max-w-xl mx-auto font-dm">
          Laten we iets bouwen waar mensen over praten — en op klikken. Jouw
          gratis audit is binnen 48 uur klaar.
        </p>
        <a
          href="mailto:hallo@theloopmarketing.nl"
          className="inline-block bg-white text-[#0057FF] font-syne font-bold text-base px-10 py-4 rounded-full hover:bg-gray-100 transition-colors duration-200"
        >
          Start het Gesprek
        </a>
      </div>
    </section>
  );
}
