import Container from '@/components/layout/Container'

export const metadata = {
  title: 'Termeni și Condiții | Fluentica',
  description: 'Termenii și condițiile de utilizare ale serviciilor Fluentica – școală de limbă engleză.',
}

export default function TermsPage() {
  return (
    <main className='bg-white pt-36 pb-20'>
      <Container>
        <div className='max-w-3xl mx-auto'>
          <h1 className='text-blue-navy font-extrabold text-3xl md:text-4xl leading-[1.2] mb-2'>
            Termeni și Condiții
          </h1>
          <p className='text-blue-grey text-sm mb-12'>Ultima actualizare: mai 2026</p>

          <div className='flex flex-col gap-10 text-blue-grey leading-[1.7]'>

            <section>
              <h2 className='text-blue-navy font-bold text-xl mb-3'>1. Informații generale</h2>
              <p>Prezentul document reglementează termenii și condițiile de utilizare a serviciilor oferite de <strong>Fluentica</strong> (denumit în continuare „Școala"), cu sediul la str. Gavriil-Bănulescu Bodoni 59, Chișinău, Republica Moldova. Prin înscrierea la orice curs sau serviciu oferit de Fluentica, cursantul (sau tutorele legal, în cazul minorilor) confirmă că a citit, înțeles și acceptat prezentele condiții.</p>
            </section>

            <section>
              <h2 className='text-blue-navy font-bold text-xl mb-3'>2. Înscrierea</h2>
              <p>Înscrierea se consideră finalizată după completarea formularului de înregistrare și confirmarea locului de către echipa Fluentica. Locul în grupă este rezervat doar după achitarea taxei de înregistrare sau a primei rate, conform înțelegerii stabilite cu administratorul școlii.</p>
            </section>

            <section>
              <h2 className='text-blue-navy font-bold text-xl mb-3'>3. Taxe și plăți</h2>
              <ul className='list-disc pl-5 flex flex-col gap-2'>
                <li>Tarifele pentru cursuri sunt comunicate individual, în funcție de tipul cursului, frecvența lecțiilor și durata programului.</li>
                <li>Plata se efectuează lunar, anticipat, până la data stabilită de comun acord.</li>
                <li>Fluentica își rezervă dreptul de a modifica tarifele cu notificarea prealabilă a cursanților cu cel puțin 30 de zile înainte.</li>
                <li>Sumele achitate nu sunt rambursabile, cu excepția cazurilor menționate la secțiunea 4.</li>
              </ul>
            </section>

            <section>
              <h2 className='text-blue-navy font-bold text-xl mb-3'>4. Politica de anulare și rambursare</h2>
              <ul className='list-disc pl-5 flex flex-col gap-2'>
                <li>Cursantul poate solicita anularea înscrierii cu cel puțin <strong>7 zile calendaristice</strong> înainte de începerea cursului, caz în care taxa achitată va fi rambursată integral.</li>
                <li>Anulările efectuate cu mai puțin de 7 zile înainte de începerea cursului nu sunt rambursabile.</li>
                <li>Lecțiile anulate de cursant fără preaviz de minimum 24 de ore nu se recuperează și nu se rambursează.</li>
                <li>Lecțiile anulate de Fluentica vor fi recuperate la o dată convenită de ambele părți.</li>
              </ul>
            </section>

            <section>
              <h2 className='text-blue-navy font-bold text-xl mb-3'>5. Desfășurarea cursurilor</h2>
              <ul className='list-disc pl-5 flex flex-col gap-2'>
                <li>Cursurile se desfășoară conform orarului stabilit la momentul înscrierii, online sau la sediul școlii.</li>
                <li>Fluentica își rezervă dreptul de a modifica orarul sau profesorul alocat, cu notificarea prealabilă a cursanților.</li>
                <li>În cazul în care numărul de cursanți dintr-o grupă scade sub minimul necesar, Fluentica poate propune transferul la altă grupă sau un format individual.</li>
              </ul>
            </section>

            <section>
              <h2 className='text-blue-navy font-bold text-xl mb-3'>6. Obligațiile cursantului</h2>
              <ul className='list-disc pl-5 flex flex-col gap-2'>
                <li>Cursantul se angajează să participe activ la lecții și să respecte programul stabilit.</li>
                <li>Comportamentul inadecvat sau perturbator poate conduce la excluderea din curs, fără drept de rambursare.</li>
                <li>Materialele didactice furnizate de Fluentica sunt destinate exclusiv uzului personal și nu pot fi reproduse sau distribuite fără acordul scris al școlii.</li>
              </ul>
            </section>

            <section>
              <h2 className='text-blue-navy font-bold text-xl mb-3'>7. Protecția datelor personale</h2>
              <p>Fluentica colectează și prelucrează datele personale ale cursanților exclusiv în scopul furnizării serviciilor educaționale, în conformitate cu legislația în vigoare privind protecția datelor. Datele nu vor fi transmise către terți fără consimțământul explicit al titularului. Pentru orice solicitare legată de datele dvs., ne puteți contacta la <a href='mailto:fluenticaenglish@gmail.com' className='text-blue-navy underline hover:text-orange1 transition-colors duration-200'>fluenticaenglish@gmail.com</a>.</p>
            </section>

            <section>
              <h2 className='text-blue-navy font-bold text-xl mb-3'>8. Modificarea termenilor</h2>
              <p>Fluentica își rezervă dreptul de a modifica prezentele condiții în orice moment. Versiunea actualizată va fi publicată pe site-ul oficial. Continuarea utilizării serviciilor după publicarea modificărilor constituie acceptul noilor condiții.</p>
            </section>

            <section>
              <h2 className='text-blue-navy font-bold text-xl mb-3'>9. Contact</h2>
              <p>Pentru orice întrebări legate de prezentele condiții, ne puteți contacta:</p>
              <ul className='mt-2 flex flex-col gap-1'>
                <li>Email: <a href='mailto:fluenticaenglish@gmail.com' className='text-blue-navy underline hover:text-orange1 transition-colors duration-200'>fluenticaenglish@gmail.com</a></li>
                <li>Telefon: <a href='tel:+37369634884' className='text-blue-navy underline hover:text-orange1 transition-colors duration-200'>+373 69 63 48 84</a></li>
                <li>Adresă: str. Gavriil-Bănulescu Bodoni 59, Chișinău</li>
              </ul>
            </section>

          </div>
        </div>
      </Container>
    </main>
  )
}
