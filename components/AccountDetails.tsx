import Image from 'next/image'

export default function AccountDetails() {
  return (
    <section className='flex justify-center gap-5 '>
      <div>
        <p className='my-2'>Account Details</p>
        <div className=' card '>
        <section className='flex justify-around mt-6'>
        <div className='flex gap-5'>
        <Image 
        src="/profile.png"
        alt='Profile Photo'
        height={64}
        width={64}
        className='h-16'
        />
        <div>
            <p>Full Name</p>
            <p>Robert Fox</p>
            <p>Email Address</p>
            <p>robertfox@gmail.com</p>
            <p>Password</p>
            <p>••••••••••</p>
        </div>
        </div>
        <button className='btn w-[79px] h-[40px]'>Edit</button>
        </section>
        </div>
      </div>
      <div>
        <p className='my-2'>Current Plan</p>
        <div className='card '>
<section className='flex justify-evenly items-center'>
    <div>
        <p>Plan</p>
        <p>Basic (500 Words Left)</p>
        <p>Started</p>
        <p>Feb 13, 2024</p>
        <p>Next Billing</p>
        <p>$95.00 on Mar 13, 2024</p>
    </div>
    <div>
        
    </div>
    <button className='btn flex w-[111px] h-[40px] items-center justify-center gap-2'>Action  <Image
    src="/arrow-down.png"
    alt='Arrow'
    height={4}
    width={8}
    className='h-1'
    /> </button>

</section>
<div>
    <div className='flex gap-2 p-4 border border-[#334155] w-[439px] h-[69px] rounded-[4px] text-sm'>
    <Image 
        src="/alert-circle.png"
        alt='alert'
        height={20}
        width={20}
        className='h-5'
        />
   <p className='text-wrap'> Looks like there's a past due!   <span className='text-secondary underline text-nowrap h-1'>Click here</span>  to fix it up and continue your journey with us.</p>
    </div>
</div>

        </div>
      </div>
    </section>
  )
}
