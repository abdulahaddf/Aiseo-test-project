import React from 'react'

export default function BillingHistory() {
    const data = [
        { date: 'January 3, 2023', amount: '19$', description: '1 Month Subscription, Basic Plan' },
        { date: 'January 3, 2023', amount: '19$', description: '1 Month Subscription, Basic Plan' },
        { date: 'January 3, 2023', amount: '19$', description: '1 Month Subscription, Basic Plan' },
      ];
  return (
    <div className='mt-14 md:mx-10 '>
      <h2 className='text-xl md:ml-4'>Your billing history</h2>
      <p className='text-white-500 md:ml-4'>Download your previous plan receipts and usage details.</p>
      <div className="container mx-auto py-4 px-0 md:px-2">
      <div className="overflow-x-auto">
        <table className="min-w-full  border border-[#394051]">
          <thead>
            <tr className="w-full bg-[#1E293B] uppercase text-sm leading-normal text-left">
              <th className="py-3 px-6">Date</th>
              <th className="py-3 px-6">Amount</th>
              <th className="py-3 px-6">Description</th>
              <th className="py-3 px-6"></th>
            </tr>
          </thead>
          <tbody className=" text-sm font-light">
            {data.map((item, index) => (
              <tr key={index} className="border-b border-gray-200 hover:bg-primary hover:text-white text-left">
                <td className="py-3 px-6 ">{item.date}</td>
                <td className="py-3 px-6">{item.amount}</td>
                <td className="py-3 px-6 ">{item.description}</td>
                <td className="py-3 px-6 ">
                  <a href="#" className="text-secondary hover:underline font-normal">Download</a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    </div>
  )
}
