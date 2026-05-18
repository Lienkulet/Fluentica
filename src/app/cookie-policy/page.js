import Container from '@/components/layout/Container'
import Link from 'next/link'

export const metadata = {
  title: 'Politica de Cookies | Fluentica',
  description: 'Politica de utilizare a cookie-urilor pe site-ul Fluentica.',
}

export default function CookiePolicyPage() {
  return (
    <main className='bg-white pt-36 pb-20'>
      <Container>
        <div className='max-w-3xl mx-auto'>
          <h1 className='text-blue-navy font-extrabold text-3xl md:text-4xl leading-[1.2] mb-2'>
            Politica de Cookies
          </h1>
          <p className='text-blue-grey text-sm mb-12'>Ultima actualizare: mai 2026</p>

          <div className='flex flex-col gap-10 text-blue-grey leading-[1.7]'>

            <section>
              <h2 className='text-blue-navy font-bold text-xl mb-3'>Ce sunt cookie-urile?</h2>
              <p>Cookie-urile sunt fișiere mici de text stocate pe dispozitivul tău atunci când vizitezi un site web. Ele permit site-ului să rețină preferințele tale și să funcționeze corect la vizitele ulterioare.</p>
            </section>

            <section>
              <h2 className='text-blue-navy font-bold text-xl mb-3'>Ce cookie-uri folosim</h2>

              <div className='flex flex-col gap-6'>
                <div className='border border-gray-100 rounded-2xl p-5'>
                  <h3 className='text-blue-navy font-semibold mb-1'>Cookie-uri esențiale</h3>
                  <p className='text-sm'>Necesare pentru funcționarea de bază a site-ului. Nu pot fi dezactivate. Nu colectează date personale.</p>
                  <ul className='mt-2 text-sm list-disc pl-5 flex flex-col gap-1'>
                    <li><strong>cookie_consent</strong> — reține preferința ta privind cookie-urile (stocat în localStorage)</li>
                  </ul>
                </div>

                <div className='border border-gray-100 rounded-2xl p-5'>
                  <h3 className='text-blue-navy font-semibold mb-1'>Cookie-uri analitice <span className='text-xs font-normal text-blue-grey ml-1'>(necesită acordul tău)</span></h3>
                  <p className='text-sm'>Ne ajută să înțelegem cum este utilizat site-ul, ce pagini sunt vizitate și cum putem îmbunătăți experiența. Toate datele sunt anonimizate.</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className='text-blue-navy font-bold text-xl mb-3'>Cum îți gestionezi preferințele</h2>
              <p>Poți accepta sau refuza cookie-urile non-esențiale prin bannerul afișat la prima vizită. De asemenea, poți șterge cookie-urile din setările browserului tău în orice moment.</p>
              <p className='mt-3'>Instrucțiuni pentru cele mai populare browsere:</p>
              <ul className='mt-2 list-disc pl-5 flex flex-col gap-1 text-sm'>
                <li>Chrome: Setări → Confidențialitate și securitate → Cookie-uri</li>
                <li>Safari: Preferințe → Confidențialitate</li>
                <li>Firefox: Setări → Confidențialitate și securitate</li>
              </ul>
            </section>

            <section>
              <h2 className='text-blue-navy font-bold text-xl mb-3'>Contact</h2>
              <p>
                Pentru orice întrebări legate de utilizarea cookie-urilor, ne poți contacta la{' '}
                <a href='mailto:fluenticaenglish@gmail.com' className='text-blue-navy underline hover:text-orange1 transition-colors duration-200'>
                  fluenticaenglish@gmail.com
                </a>
                {' '}sau consulta{' '}
                <Link href='/terms' className='text-blue-navy underline hover:text-orange1 transition-colors duration-200'>
                  Termenii și Condițiile
                </Link>.
              </p>
            </section>

          </div>
        </div>
      </Container>
    </main>
  )
}
