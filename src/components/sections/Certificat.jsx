import { Award, Building2, CalendarDays, Download } from "lucide-react";
import FadeIn from "../animations/FadeIn";
import { certificats } from "../../utils/certificats";

const CertificateImage = ({ image, name }) => {
  if (!image) {
    return <ImagePlaceholder name={name} />;
  }

  return (
    <img
      src={image}
      alt={`Certificat ${name}`}
      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
      onError={(event) => {
        event.currentTarget.style.display = "none";
        event.currentTarget.nextElementSibling?.classList.remove("hidden");
      }}
    />
  );
};

const ImagePlaceholder = ({ name }) => (
  <div className="hidden h-full w-full flex-col items-center justify-center gap-3 bg-white/5 text-center text-white/50">
    <Award className="h-10 w-10 text-primary" />
    <span className="px-6 text-sm">Ajoutez l’image de ce certificat</span>
  </div>
);

const Certificat = () => {
  return (
    <section id="certificats" className="relative overflow-hidden bg-black py-20">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute left-0 top-1/3 h-96 w-96 rounded-full bg-primary/40 opacity-20 blur-3xl" />
        <div className="absolute right-0 top-1/2 h-96 w-96 rounded-full bg-primary/30 opacity-20 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-4 lg:px-8">
        <FadeIn>
          <div className="mb-12 text-center">
            <div className="mb-2 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-2">
              <Award className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium text-primary">Mes certifications</span>
            </div>
            <h2 className="mb-4 text-4xl font-normal text-white lg:text-5xl">
              Certificats professionnels
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-white/60">
              Les formations et certifications qui enrichissent mon parcours.
            </p>
          </div>
        </FadeIn>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {certificats.map((certificat, index) => (
            <FadeIn key={certificat.id} delay={index * 100}>
              <article className="group overflow-hidden rounded-2xl border border-white/10 bg-white/5 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40">
                <div className="relative aspect-4/3 overflow-hidden bg-white/5">
                  <CertificateImage image={certificat.image} name={certificat.nom} />
                  <div className="absolute inset-0 bg-linear-to-t from-black/70 via-transparent to-transparent" />
                </div>
                <div className="space-y-4 p-6">
                  <h3 className="text-xl font-semibold text-white transition-colors group-hover:text-primary">
                    {certificat.nom}
                  </h3>
                  <div className="space-y-3 text-sm text-white/60">
                    <div className="flex items-start gap-3">
                      <Building2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                      <span>{certificat.institut}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CalendarDays className="h-4 w-4 shrink-0 text-primary" />
                      <span>{certificat.periode}</span>
                    </div>
                  </div>
                  {certificat.pdf && (
                    <a
                      href={certificat.pdf}
                      download
                      className="inline-flex items-center gap-2 rounded-lg border border-primary/40 bg-primary/10 px-4 py-2 text-sm font-medium text-primary transition-colors hover:bg-primary/20"
                      aria-label={`Télécharger le certificat ${certificat.nom}`}
                    >
                      <Download className="h-4 w-4" />
                      Télécharger le PDF
                    </a>
                  )}
                </div>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificat;