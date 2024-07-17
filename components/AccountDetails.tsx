import Image from 'next/image'

export default function AccountDetails() {
  return (
    <section className='lg:flex justify-center gap-5 '>
      <div>
        <p className='mt-4 md:mt-16 text-xl mb-6'>Account Details</p>
        <div className=' card'>
        <section className='  md:flex md:justify-between ml-8 mr-12  mt-6 text-center md:text-left' >
        <div className='md:flex gap-5 mt-7'>
        <Image 
        src="/profile.png"
        alt='Profile Photo'
        height={64}
        width={64}
        className='h-16'
        />
        <div className='space-y-2 md:space-y-4'>
           <div>
           <p className='text-white-500'>Full Name</p>
           <p>Robert Fox</p>
           </div>
           <div>
           <p className='text-white-500'>Email Address</p>
           <p>robertfox@gmail.com</p>
           </div>
            <div>
            <p className='text-white-500'>Password</p> 
            <p>••••••••••</p>
            </div>
        </div>
        </div>
        <button className='btn w-[79px] h-[40px] '>Edit</button>
        </section>
        </div>
      </div>
      <div className='mt-10 md:mt-0'>
        <p className='mt-4 md:mt-16 text-xl mb-6'>Current Plan</p>
        <div className='card '>
<section className='md:flex justify-between m-11 mt-6 mb-6 text-center md:text-left'>
    <div className='space-y-3 md:space-y-8'>
        <div>
        <p className='text-white-500'>Plan</p>
        <p>Basic (500 Words Left)</p>
        </div>
       <div>
       <p className='text-white-500'>Started</p>
       <p>Feb 13, 2024</p>
       </div>
        <div>
        <p className='text-white-500'>Next Billing</p>
        <p>$95.00 on Mar 13, 2024</p>
        </div>
    </div>
    <div>
        
    </div>
    
   <div className='flex justify-center'>
   <button className='btn flex w-[111px] h-[40px] items-center justify-center gap-2'>Action  <Image
    src="/arrow-down.png"
    alt='Arrow'
    height={4}
    width={8}
    className='h-1'
    /> </button>
   </div>

</section>
<div>
    <div className='flex gap-2 p-2 md:p-4 border border-[#334155] md:w-[439px] md:h-[69px] rounded-[4px] md:text-sm text-xs md:ml-8 mx-1'>
    <Image 
        src="/alert-circle.png"
        alt='alert'
        height={20}
        width={20}
        className='h-5'
        />
   <p className='text-wrap cursor-pointer'> Looks like there's a past due!   <span className='text-secondary border-b border-secondary h-1 '>Click here</span>  to fix it up and continue your journey with us.</p>
    </div>
</div>

        </div>
      </div>
    </section>
  )
}
