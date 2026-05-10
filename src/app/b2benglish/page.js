'use client';
import Hero from "@/components/sections/Hero";
import Gallery from "@/components/sections/Gallery";
import Testimonials from "@/components/sections/Testimonials";
import Register from "@/components/sections/Register";
import WhyB2B from "@/components/sections/WhyB2B";

const testimonials = [
    {
        name: 'Ana Matveev',
        quote: '„Pentru mine problema principală era exprimarea. Știam cuvinte, dar nu știam cum să le leg. La Fluentica am făcut multă practică și am înțeles cum să vorbesc clar, nu doar să fac exerciții."',
    },
    {
        name: 'Elena Donos',
        quote: '„Am ales Fluentica pentru copilul meu pentru că aveam nevoie de un mediu sigur și bine structurat. Am observat rapid că vorbește mai deschis în engleză și nu mai evită orele."',
    },
    {
        name: 'Luciana Lucca',
        quote: '„Pentru Cambridge aveam nevoie de structură și feedback clar. La Fluentica am înțeles exact ce se cere la examen și pe ce să mă concentrez. M-a ajutat mult partea de speaking."',
    },
    {
        name: 'Victor Miciu',
        quote: '„Aveam nevoie de engleză pentru interviuri. Știam gramatica, dar nu știam să vorbesc clar. Cursurile m-au ajutat să-mi organizez ideile și să vorbesc mai sigur. Am trecut cu succes interviul."',
    },
    {
        name: 'Andrei Frunză',
        quote: '„La început îmi era greu să vorbesc în engleză și îmi era frică să greșesc. La Fluentica am început să vorbesc treptat, fără presiune. Acum mă exprim mult mai liber și am mai multă încredere la școală."',
    },
    {
        name: 'Matei Spătar',
        quote: '„Îmi place la engleză pentru că vorbim mult și nu e plictisitor. Profesorul explică frumos și mă ajută când nu înțeleg."',
    },
]

export default function B2BEnglish() {
    return (
        <>
            <Hero
                title='Engleză corporativă pentru companii'
                subtitle={<span> Cursuri de Business English personalizate <br />
                        pentru echipe, cu focus pe comunicare <br />
                        profesională și eficiență în mediul de afaceri.</span>}
                showShape={false}
            />
            <WhyB2B />
            <Register
                img='/assets/register/register-boy.png'
                title='Solicită o evaluare gratuită pentru echipa ta'
                desc='Evaluăm nivelul de engleză al echipei și îți oferim toate detaliile despre curs, program și preț.'
            />
            <Testimonials testimonials={testimonials} />
            <Gallery />
        </>
    );
}
