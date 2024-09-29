import { githubIcon, instagramIcon, linkedinIcon } from '../assets/icons/exports.jsx';

const iconsStyling = "aspect-1 w-10 rounded-[50px] text-action hover:scale-110 ease-in-out duration-200 hover:bg-action/50";

export function Footer() {
    return (
        <section className="px-4 py-10 bg-secondary sm:px-8 sm:py-12">
            <div className="max-w-[1150px] mx-auto flex flex-col sm:flex-row">
            <div className="flex-1">
                <p><strong>FRIDA ALBERTE BENDORFF</strong></p>
                <p>fridabendorff@gmail.com</p>
                <p>+45 2784 0455</p>
            </div>

            <div className='flex-1 flex flex-row justify-end items-center gap-2'>
                <a href="https://www.linkedin.com/in/frida-alberte-bendorff-3043b9230/" className={iconsStyling}>
                    {linkedinIcon}    
                </a>
                <a href="https://github.com/Fridakea" className={iconsStyling}>
                    {githubIcon}
                </a>
                <a href="https://www.instagram.com/fridaalberte/" className={iconsStyling}>
                    {instagramIcon}
                </a>
            </div>
            </div>
        </section>
    );
}