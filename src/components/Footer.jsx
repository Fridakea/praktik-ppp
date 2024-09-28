import linkedinIcon from '../assets/icons/linkedin.svg';
import githubIcon from '../assets/icons/github.svg';

export function Footer() {
    return (
        <section className="px-8 py-12 bg-secondary">
            <div className="max-w-[1150px] mx-auto flex flex-col sm:flex-row">
            <div className='flex-1'>
                <p>FRIDA ALBERTE BENDORFF</p>
                <p>fridabendorff@gmail.com</p>
                <p>+45 2784 0455</p>
            </div>

            <div className='flex-1 flex flex-row justify-end gap-2'>
                <a href="https://www.linkedin.com/in/frida-alberte-bendorff-3043b9230/">
                    <img className='aspect-1 w-10' src={linkedinIcon} alt="LinkdIn Icon" />
                </a>
                <a href="https://github.com/Fridakea">
                    <img className='aspect-1 w-10' src={githubIcon} alt="Github Icon" />
                </a>
            </div>
            </div>
        </section>
    );
}