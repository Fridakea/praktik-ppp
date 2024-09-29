import portrait1 from '../assets/images/frida-portrait.webp';

export function HeroSection() {

    return (
      <section className='relative mb-24 sm:mb-28'>
        <div className="w-[50%] sm:w-[80%] max-w-[1250px] h-[108%] mr-[-1rem] sm:mr-4 absolute right-0 top-0 -z-10 bg-primaryTint"></div>

        <div className='flex flex-col sm:flex-row-reverse sm:items-end sm:mb-16'>
          <div className='aspect-square w-[75%] mt-12 bg-cover bg-secondary self-end mr-[-1rem] sm:w-[100%] sm:h-[100%]' style={{backgroundImage: `url(${portrait1})`}}></div>

          <h1 className='mt-[-5vh] sm:mb-[-16px] w-full'><span className='text-action'>Frida</span><br />Alberte<br />Bendorff</h1>
        </div>
        <h5 className='text-right sm:hidden'>WEB DESIGN  -  CODE<br />UI/UX  -  SEO  -  DATABASE<br />USER TESTING  -  GRAPHIC DESIGN </h5>
        <h5 className='hidden sm:block'>WEB DESIGN  -  CODE  -  UI/UX  -  SEO<br />DATABASE  -  USER TESTING  -  GRAPHIC DESIGN </h5>
      </section>
    );
  }