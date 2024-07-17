import ToggleBtn from './shared/ToggleBtn';
export default function PlanCard() {
    const data = [
        {
          price: '$9.99 /mo',
          plan: 'Basic',
          popular: false,
          features: [
            '20,000 words/month',
            'Basic Humanization Features',
            'Language Support: 2 languages',
            'Email Support',
            'Access to Standard Engine',
            'Basic AI Detector Evasion',
          ],
        },
        {
          price: '$29.99 /mo',
          plan: 'Standard',
          popular: true,
          features: [
            '100,000 words/month',
            'Advanced Humanization Features',
            'Language Support: 5 languages',
            'Priority Email Support',
            'Access to Advanced Engine',
            'Improved AI Detector Evasion',
            'Content Style Diversity Options',
          ],
        },
        {
          price: '$59.99 /mo',
          plan: 'Premium',
          popular: false,
          features: [
            '300,000 words/month',
            'All Advanced Features',
            'Unlimited Language Support',
            'Priority Phone and Email Support',
            'Access to Premium Engine',
            'Advanced AI Detector',
            'Real-Time Human Score Analysis',
            'Dedicated Account Manager',
          ],
        },
      ];
  return (
    <div className='my-10'>
      <h1>Upgrade your account</h1>
      <p className='text-2xl flex gap-5'>Save 20% with annual <ToggleBtn/></p>

<div className='flex justify-around mt-5 gap-3'>
    {
        data?.map((item, i) =>  <div key={i} className='w-[355px] h-[651px] rounded-2xl border border-[rgb(100,116,139)] bg-gradient-to-bl from-[#2F3241] from-1% to-[#0F172A] to-50%'>
<h3>{item.plan}</h3>
<p>{item.price}</p>

    <ul className="list-disc pl-5">
    {item.features.map((feature, idx) => (
      <li key={idx}>{feature}</li>
    ))}
  </ul>
  <div className='flex justify-center'>

  <button className='btn w-[307px] h-[48px] py-3 px-6 flex justify-center'>Start a {item.plan} plan</button>
  </div>
        </div>)
   
    }

</div>
       

    </div>
  )
}
