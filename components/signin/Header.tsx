import Link from 'next/link';
import Image from 'next/image';
import Logo from '@/public/myGov-cobranded-logo-black.svg';

export default function Header() {
  return (
    <header className="bg-[#66d3ee] shadow-sm xl:h-[12rem]">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between mt-8">
          <Link href="#" className="mr-4">
            <Image src={Logo} alt={'company logo'}  width={350}            
             />
          </Link>
          <h1 className="text-1xl text-black underline">Help</h1>
        </div>
      </div>
    </header>
  );
}