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
        <p className='my-2'>Account Details</p>
        <div className='card '>

        </div>
      </div>
    </section>
  )
}
