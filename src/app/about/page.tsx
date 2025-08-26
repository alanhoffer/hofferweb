import Image from 'next/image';
import { Target, Users } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

function BeehiveIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 2l8 4.5v9l-8 4.5-8-4.5v-9L12 2z"></path>
      <path d="M12 22v-9"></path>
      <path d="M4 6.5l8 4.5 8-4.5"></path>
      <path d="M4 15.5l8-4.5 8 4.5"></path>
      <path d="M12 2v4.5"></path>
    </svg>
  );
}


export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-12 md:py-16">
      <header className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold font-headline text-primary">Acerca de Cabaña Hoffer</h1>
        <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
          Descubre la pasión, la gente y el propósito detrás de nuestra colmena.
        </p>
      </header>

      <section className="mb-16">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl font-bold font-headline mb-4">Nuestra Historia</h2>
            <p className="text-muted-foreground mb-4">
              Cabaña Hoffer no comenzó como un negocio, sino como un hobby de patio trasero. Nuestro fundador, un ávido jardinero, quedó fascinado con el papel vital que juegan las abejas en nuestro ecosistema. Lo que comenzó con una sola colmena pronto floreció en una pasión total por la apicultura y un deseo de compartir la alegría y la maravilla de la apicultura con otros.
            </p>
            <p className="text-muted-foreground">
              Nos dimos cuenta de que había una necesidad de suministros de apicultura accesibles y de alta calidad y, lo que es más importante, de educación confiable. Fue entonces cuando nació Cabaña Hoffer, para apoyar tanto a los apicultores aspirantes como a los experimentados en su viaje, proporcionando las herramientas y el conocimiento para ayudar a sus colonias a prosperar.
            </p>
          </div>
          <div>
            <Image
              src="https://placehold.co/600x400.png"
              alt="El equipo fundador de Cabaña Hoffer sonriendo en un apiario"
              width={600}
              height={400}
              className="rounded-lg shadow-lg"
              data-ai-hint="team photo beekeeping"
            />
          </div>
        </div>
      </section>

      <section className="mb-16">
        <div className="grid md:grid-cols-3 gap-8 text-center">
          <Card>
            <CardHeader>
              <BeehiveIcon className="h-12 w-12 mx-auto text-primary" />
              <CardTitle className="mt-4">Nuestro Apiario</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">Manejamos más de 50 colmenas, centrándonos en prácticas sostenibles que priorizan la salud de las abejas y la producción de miel natural.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <Target className="h-12 w-12 mx-auto text-primary" />
              <CardTitle className="mt-4">Nuestra Misión</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">Empoderar a los apicultores con productos y educación de primer nivel, fomentando una comunidad que respeta y protege a estos vitales polinizadores.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <Users className="h-12 w-12 mx-auto text-primary" />
              <CardTitle className="mt-4">Nuestro Equipo</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">Un grupo dedicado de apicultores apasionados, educadores y expertos en soporte al cliente comprometidos con tu éxito.</p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section>
        <div className="text-center">
            <h2 className="text-3xl font-bold font-headline mb-4">Conoce al Equipo</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
              Somos un pequeño equipo con un gran amor por las abejas. Conoce a las caras detrás de Cabaña Hoffer.
            </p>
            <div className="flex justify-center flex-wrap gap-8">
                <div className="flex flex-col items-center">
                    <Image src="https://placehold.co/150x150.png" data-ai-hint="woman portrait smiling" alt="Fundadora" width={150} height={150} className="rounded-full shadow-md" />
                    <h3 className="mt-4 font-bold">Alex Johnson</h3>
                    <p className="text-sm text-muted-foreground">Fundadora y Apicultora Principal</p>
                </div>
                 <div className="flex flex-col items-center">
                    <Image src="https://placehold.co/150x150.png" data-ai-hint="man portrait smiling" alt="Educador" width={150} height={150} className="rounded-full shadow-md" />
                    <h3 className="mt-4 font-bold">Ben Carter</h3>
                    <p className="text-sm text-muted-foreground">Educador Principal</p>
                </div>
                 <div className="flex flex-col items-center">
                    <Image src="https://placehold.co/150x150.png" data-ai-hint="woman portrait friendly" alt="Soporte al Cliente" width={150} height={150} className="rounded-full shadow-md" />
                    <h3 className="mt-4 font-bold">Casey Lee</h3>
                    <p className="text-sm text-muted-foreground">Felicidad del Cliente</p>
                </div>
            </div>
        </div>
      </section>
    </div>
  );
}
