/* eslint-disable @next/next/no-img-element */
import React from 'react'; 
import fb from "@/assests/fb.png"
import insta from "@/assests/insta.png"
import linked from "@/assests/linked.png"
import twitter from "@/assests/twiter.png"
import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="mt-auto">
      <div className="container mx-auto  py-[49px]">  

      <div className="flex items-center gap-2 mb-4">
              <img src="/logo.svg" alt="Dokter For You" className="h-[69px]" />
            
            </div>
        <div className=" flex lg:flex-row flex-col  items-center  w-full ">
        
          <div className="w-1/4">
          
            <p className="text-[#999999] w-[295px]">
              When your health is concerned, we believe you have the right to decide what to do with your body. That is why we offer you the opportunity to consult a licensed and registered tu
            </p>
          
          </div>

      
          <div className="w-1/4 ms-48 flex flex-col gap-[30px]">
  <Link href="#" className="text-[#6B6B6B] text-[16px] hover:underline">
    About
  </Link>
  <Link href="#" className="text-[#6B6B6B] text-[16px] hover:underline">
    Blogs
  </Link>
  <Link href="#" className="text-[#6B6B6B] text-[16px] hover:underline">
    Support
  </Link>
</div>

         
         
<div className="w-1/4 flex flex-col gap-[30px]">
  <Link href="/terms" className="text-[#6B6B6B] text-[16px] hover:underline">
    Terms & Conditions
  </Link>
  <Link href="/user-agreement" className="text-[#6B6B6B] text-[16px] hover:underline">
    User Agreement
  </Link>
  <Link href="/faq" className="text-[#6B6B6B] text-[16px] hover:underline">
    FAQ
  </Link>
</div>

          
          <div className="w-1/4">
            <p className="mb-4 text-[#6B6B6B] text-[16px] font-semibold">Follow Us</p>
            <div className="flex gap-4">
  <a href="#" className="text-blue-600 hover:text-blue-700">
    <Image src={fb} alt="Facebook" width={32} height={32} />
  </a>
  <a href="#" className="text-pink-600 hover:text-pink-700">
    <Image src={insta} alt="Instagram" width={32} height={32} />
  </a>
  <a href="#" className="text-blue-600 hover:text-blue-700">
    <Image src={linked} alt="LinkedIn" width={32} height={32} />
  </a>
  <a href="#" className="text-gray-800">
    <Image src={twitter} alt="Twitter" width={32} height={32} />
  </a>
</div>
          </div>
        </div>
      </div>
      
      {/* Copyright Section */}
      <div className="bg-gray-900 text-white py-4 text-center text-sm">
        <p>© Copyright UAAI 2024 Team Me. Asadujjaman Mahfuz</p>
      </div>
    </footer>
  );
};

export default Footer;