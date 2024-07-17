import ToggleBtn from './shared/ToggleBtn';
import Card from './shared/Card';
export default function PlanCard() {
    const data = [
        {
          price: '$9.99',
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
          price: '$29.99',
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
          price: '$59.99',
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
    <div className='my-12 md:px-11'>
      <h1>Upgrade your account</h1>
      <p className='text-xl md:text-2xl flex gap-5'>Save 20% with annual <ToggleBtn/></p>

<div className=' xl:flex justify-around mt-5 gap-3 '>
    {
        data?.map((item, i) =>  
        <Card key={i} item={item}/>
        )
   
    }

</div>
       

    </div>
  )
}
