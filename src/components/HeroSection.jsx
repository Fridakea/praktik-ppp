import portrait1 from '../assets/images/frida-portrait.webp';
console.log(portrait1);

export function HeroSection() {

    return (
      <div className='relative'>
        <div className="hidden sm:block w-[75%] max-w-[1250px] h-[100%] absolute right-0 top-0 -z-10 bg-white mr-[-1rem]"></div>

        <div className='flex flex-col sm:flex-row-reverse sm:items-end sm:mb-16'>
          <div className='aspect-square w-[75%] bg-cover bg-secondary self-end mr-[-1rem] sm:w-[100%] sm:h-[100%]' style={{backgroundImage: `url(${portrait1})`}}></div>

          <h1 className='mt-[-5vh] sm:mb-[-16px] w-full'>Frida<br />Alberte<br />Bendorff</h1>
        </div>
        <h5 className='text-right sm:hidden'>WEB DESIGN  -  CODE<br />UI/UX  -  SEO  -  DATABASE<br />USER TESTING  -  GRAPHIC DESIGN </h5>
        <h5 className='hidden sm:block'>WEB DESIGN  -  CODE  -  UI/UX  -  SEO<br />DATABASE  -  USER TESTING  -  GRAPHIC DESIGN </h5>
      </div>
    );
  }