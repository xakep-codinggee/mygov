import Image from 'next/image';
import Link from 'next/link';
import FooterLogo from '@/public/myGov-cobranded-logo-white.svg';

export default function Footer() {
  return (
    <footer className="bg-black py-10 border-t border-gray-200">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-left gap-4 mb-6">
          <Link href="#" className="text-sm text-white hover:underline hover:text-[#66d3ee]">Terms of use</Link>
          <Link href="#" className="text-sm text-white hover:underline hover:text-[#66d3ee]">Privacy and security</Link>
          <Link href="#" className="text-sm text-white hover:underline hover:text-[#66d3ee]">Copyright</Link>
          <Link href="#" className="text-sm text-white hover:underline hover:text-[#66d3ee]">Accessibility</Link>
        </div>

        <hr className='py-6' />
          
        <div className="md:flex space-y-6 items-center justify-between">
          <Image src={FooterLogo}
            width={300}
            alt='Footer logo'
           />
          <div className='md:w-[800px]'>
            <p className="text-md text-white">
            We acknowledge the Traditional Custodians of the lands we live on. We pay our respects to all Elders, past and present, of all Aboriginal and Torres Strait Islander nations.
          </p>
          </div>
        </div>
      </div>
    </footer>
  );
}