import Image from 'next/image'

export default function Nav() {
  return (
    <section className='text-base flex justify-between px-2 md:px-24'>
      <div>
        <div className='flex gap-2'>
        <Image
        src="/arrow-right.png"
        alt="Back"
        height={18}
        width={18} 
         />
         <p className=" text-center">Back</p>
        </div>
      </div>
      <div className='flex gap-5 items-center'>
        <p>500 Words</p>
        <Image 
        src="/profile.png"
        alt='Profile Photo'
        height={48}
        width={48}
        />
      </div>
    </section>
  )
}
