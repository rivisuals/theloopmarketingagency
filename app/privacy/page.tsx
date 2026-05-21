import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Privacybeleid — TheLoop Marketing Agency",
  description:
    "Lees hoe TheLoop Marketing Agency omgaat met jouw persoonsgegevens, welke gegevens wij verzamelen en wat jouw rechten zijn.",
};

const sections = [
  {
    title: "1. Wie zijn wij?",
    content: (
      <>
        <p>
          TheLoop Marketing Agency is een social media marketingbureau gevestigd
          in Den Haag, Nederland. Wij zijn ingeschreven in het Handelsregister
          van de Kamer van Koophandel onder nummer{" "}
          <strong>87815168</strong>.
        </p>
        <p className="mt-3">
          Voor vragen over dit privacybeleid kun je contact met ons opnemen via{" "}
          <a
            href="mailto:info@theloopmarketingagency.nl"
            className="text-[#0057FF] hover:underline underline-offset-4"
          >
            info@theloopmarketingagency.nl
          </a>{" "}
          of telefonisch via{" "}
          <a
            href="tel:+31684909371"
            className="text-[#0057FF] hover:underline underline-offset-4"
          >
            +31 6 84 909 371
          </a>
          .
        </p>
      </>
    ),
  },
  {
    title: "2. Welke gegevens verzamelen wij?",
    content: (
      <>
        <p>Wij kunnen de volgende persoonsgegevens verzamelen:</p>
        <ul className="mt-3 space-y-2 list-none">
          {[
            "Naam en contactgegevens (e-mailadres, telefoonnummer) — wanneer je contact met ons opneemt of een audit aanvraagt",
            "Bedrijfsnaam en functietitel — wanneer je dit met ons deelt",
            "Websitegedrag en -gebruik — via de TikTok Pixel die op onze website is geïnstalleerd (zie ook sectie 7 over cookies)",
            "IP-adres en browsergegevens — automatisch verzameld bij een bezoek aan onze website",
          ].map((item, i) => (
            <li key={i} className="flex gap-3">
              <span className="mt-1 w-1.5 h-1.5 rounded-full bg-[#0057FF] flex-shrink-0 mt-[7px]" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </>
    ),
  },
  {
    title: "3. Waarom verzamelen wij deze gegevens?",
    content: (
      <>
        <p>Wij gebruiken jouw gegevens voor de volgende doeleinden:</p>
        <ul className="mt-3 space-y-2 list-none">
          {[
            "Het beantwoorden van jouw vragen en het uitvoeren van opdrachten",
            "Het opstellen en uitvoeren van een overeenkomst met jou of jouw bedrijf",
            "Het verbeteren van onze website en dienstverlening",
            "Het meten van de effectiviteit van onze marketinginspanningen via de TikTok Pixel",
            "Het voldoen aan wettelijke verplichtingen",
          ].map((item, i) => (
            <li key={i} className="flex gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#0057FF] flex-shrink-0 mt-[7px]" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <p className="mt-4">
          De grondslag voor de verwerking is afhankelijk van het doel: uitvoering
          van een overeenkomst, een gerechtvaardigd belang, of jouw toestemming.
        </p>
      </>
    ),
  },
  {
    title: "4. Hoe lang bewaren wij je gegevens?",
    content: (
      <p>
        Wij bewaren jouw persoonsgegevens niet langer dan strikt noodzakelijk is
        voor de doeleinden waarvoor ze zijn verzameld. Contactgegevens bewaren
        wij maximaal <strong>2 jaar</strong> na het laatste contact. Gegevens die
        wij op grond van de wet verplicht moeten bewaren (zoals financiële
        administratie) worden bewaard gedurende de wettelijk vereiste termijn van{" "}
        <strong>7 jaar</strong>. Gegevens verzameld via de TikTok Pixel worden
        bewaard conform het beleid van TikTok (doorgaans maximaal 13 maanden).
      </p>
    ),
  },
  {
    title: "5. Delen wij je gegevens met derden?",
    content: (
      <>
        <p>
          Wij verkopen jouw persoonsgegevens nooit aan derden. Wij kunnen jouw
          gegevens wel delen met de volgende partijen:
        </p>
        <div className="mt-4 space-y-4">
          <div className="border border-gray-100 rounded-xl p-5">
            <p className="font-syne font-bold text-[#0A0F2C] mb-1">TikTok Ireland Limited</p>
            <p className="text-sm text-gray-500">
              Via de TikTok Pixel op onze website worden gegevens over jouw
              websitegedrag gedeeld met TikTok ten behoeve van advertentiemeting
              en doelgroepoptimalisatie. TikTok verwerkt deze gegevens conform
              haar eigen privacybeleid. Meer informatie:{" "}
              <a
                href="https://www.tiktok.com/legal/privacy-policy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#0057FF] hover:underline underline-offset-4"
              >
                tiktok.com/legal/privacy-policy
              </a>
              .
            </p>
          </div>
          <div className="border border-gray-100 rounded-xl p-5">
            <p className="font-syne font-bold text-[#0A0F2C] mb-1">Verwerkers</p>
            <p className="text-sm text-gray-500">
              Wij maken gebruik van verwerkers (zoals hostingproviders en
              e-maildiensten) die namens ons gegevens verwerken. Met deze
              partijen sluiten wij verwerkersovereenkomsten af.
            </p>
          </div>
        </div>
      </>
    ),
  },
  {
    title: "6. Jouw rechten",
    content: (
      <>
        <p>
          Op grond van de Algemene Verordening Gegevensbescherming (AVG) heb je
          de volgende rechten:
        </p>
        <ul className="mt-3 space-y-2 list-none">
          {[
            "Recht op inzage — je kunt opvragen welke gegevens wij van jou verwerken",
            "Recht op correctie — je kunt onjuiste of onvolledige gegevens laten corrigeren",
            "Recht op verwijdering — je kunt vragen jouw gegevens te verwijderen ('recht op vergetelheid')",
            "Recht op beperking — je kunt de verwerking van jouw gegevens (tijdelijk) laten beperken",
            "Recht op dataportabiliteit — je kunt jouw gegevens opvragen in een machineleesbaar formaat",
            "Recht van bezwaar — je kunt bezwaar maken tegen de verwerking van jouw gegevens",
          ].map((item, i) => (
            <li key={i} className="flex gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#0057FF] flex-shrink-0 mt-[7px]" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <p className="mt-4">
          Om een verzoek in te dienen, stuur een e-mail naar{" "}
          <a
            href="mailto:info@theloopmarketingagency.nl"
            className="text-[#0057FF] hover:underline underline-offset-4"
          >
            info@theloopmarketingagency.nl
          </a>
          . Wij reageren binnen 30 dagen. Je hebt ook het recht om een klacht in
          te dienen bij de Autoriteit Persoonsgegevens via{" "}
          <a
            href="https://www.autoriteitpersoonsgegevens.nl"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#0057FF] hover:underline underline-offset-4"
          >
            autoriteitpersoonsgegevens.nl
          </a>
          .
        </p>
      </>
    ),
  },
  {
    title: "7. Cookies",
    content: (
      <>
        <p>
          Onze website maakt gebruik van cookies en vergelijkbare
          trackingtechnologieën. Specifiek plaatsen wij de volgende cookie:
        </p>
        <div className="mt-4 border border-gray-100 rounded-xl overflow-hidden">
          <table className="w-full text-sm">
            <thead className="bg-gray-50">
              <tr>
                <th className="text-left px-4 py-3 font-syne font-bold text-[#0A0F2C] text-xs">Cookie</th>
                <th className="text-left px-4 py-3 font-syne font-bold text-[#0A0F2C] text-xs">Partij</th>
                <th className="text-left px-4 py-3 font-syne font-bold text-[#0A0F2C] text-xs">Doel</th>
                <th className="text-left px-4 py-3 font-syne font-bold text-[#0A0F2C] text-xs">Bewaartermijn</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t border-gray-100">
                <td className="px-4 py-3 text-gray-600 font-mono text-xs">_ttp</td>
                <td className="px-4 py-3 text-gray-600">TikTok</td>
                <td className="px-4 py-3 text-gray-600">Advertentiemeting en retargeting</td>
                <td className="px-4 py-3 text-gray-600">13 maanden</td>
              </tr>
              <tr className="border-t border-gray-100">
                <td className="px-4 py-3 text-gray-600 font-mono text-xs">_tt_enable_cookie</td>
                <td className="px-4 py-3 text-gray-600">TikTok</td>
                <td className="px-4 py-3 text-gray-600">Sessietracking voor de TikTok Pixel</td>
                <td className="px-4 py-3 text-gray-600">Sessie</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="mt-4">
          Je kunt cookies weigeren of verwijderen via de instellingen van jouw
          browser. Houd er rekening mee dat het uitschakelen van cookies de
          functionaliteit van de website kan beïnvloeden.
        </p>
      </>
    ),
  },
  {
    title: "8. Beveiliging",
    content: (
      <p>
        Wij nemen passende technische en organisatorische maatregelen om jouw
        persoonsgegevens te beschermen tegen ongeautoriseerde toegang, verlies of
        misbruik. Onze website maakt gebruik van een beveiligde HTTPS-verbinding.
      </p>
    ),
  },
  {
    title: "9. Contactgegevens",
    content: (
      <div className="space-y-1">
        <p><strong>TheLoop Marketing Agency</strong></p>
        <p>Den Haag, Nederland</p>
        <p>KvK-nummer: 87815168</p>
        <p>
          E-mail:{" "}
          <a
            href="mailto:info@theloopmarketingagency.nl"
            className="text-[#0057FF] hover:underline underline-offset-4"
          >
            info@theloopmarketingagency.nl
          </a>
        </p>
        <p>
          Telefoon:{" "}
          <a
            href="tel:+31684909371"
            className="text-[#0057FF] hover:underline underline-offset-4"
          >
            +31 6 84 909 371
          </a>
        </p>
      </div>
    ),
  },
];

export default function PrivacyPage() {
  return (
    <main className="bg-white min-h-screen">
      {/* Top bar */}
      <div className="border-b border-gray-100">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 py-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-dm font-medium text-gray-500 hover:text-[#0057FF] transition-colors duration-200"
          >
            <ArrowLeft className="w-4 h-4" />
            Terug naar home
          </Link>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-3xl mx-auto px-6 lg:px-8 py-16 md:py-24">
        {/* Header */}
        <div className="mb-14">
          <span className="text-[#0057FF] font-dm text-sm font-semibold tracking-widest uppercase">
            Juridisch
          </span>
          <h1
            className="font-syne text-4xl md:text-5xl text-[#0A0F2C] mt-3 leading-tight"
            style={{ fontWeight: 800 }}
          >
            Privacybeleid
          </h1>
          <p className="font-dm text-gray-500 mt-4 text-base leading-relaxed">
            TheLoop Marketing Agency hecht veel waarde aan de bescherming van
            jouw persoonsgegevens. In dit privacybeleid leggen wij uit hoe wij
            omgaan met de gegevens die wij van jou verwerken.
          </p>
          <p className="font-dm text-sm text-gray-400 mt-4">
            Laatste wijziging:{" "}
            <time dateTime="2025-05-01">1 mei 2025</time>
          </p>
        </div>

        {/* Sections */}
        <div className="space-y-12">
          {sections.map(({ title, content }) => (
            <section key={title} className="border-t border-gray-100 pt-10">
              <h2
                className="font-syne text-xl text-[#0A0F2C] mb-4"
                style={{ fontWeight: 700 }}
              >
                {title}
              </h2>
              <div className="font-dm text-gray-600 text-base leading-relaxed">
                {content}
              </div>
            </section>
          ))}
        </div>

        {/* Back to top */}
        <div className="mt-16 pt-10 border-t border-gray-100">
          <Link
            href="/"
            className="inline-flex items-center gap-2 bg-[#0057FF] text-white font-syne font-bold text-sm px-7 py-3.5 rounded-full hover:bg-blue-700 transition-colors duration-200"
          >
            <ArrowLeft className="w-4 h-4" />
            Terug naar home
          </Link>
        </div>
      </div>
    </main>
  );
}
