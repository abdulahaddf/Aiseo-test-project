import React from 'react'

export default function BillingHistory() {
    const data = [
        { date: 'January 3, 2023', amount: '19$', description: '1 Month Subscription, Basic Plan', action: 'Download' },
        { date: 'January 3, 2023', amount: '19$', description: '1 Month Subscription, Basic Plan', action: 'Download' },
        { date: 'January 3, 2023', amount: '19$', description: '1 Month Subscription, Basic Plan', action: 'Download' },
      ];
  return (
    <div>
      <h2>Your billing history</h2>
      <p>Download your previous plan receipts and usage details.</p>
      <div className="container mx-auto py-4">
      <div className="overflow-x-auto">
        <table className="min-w-full  border border-[#394051]">
          <thead>
            <tr className="w-full bg-[#1E293B] uppercase text-sm leading-normal">
              <th className="py-3 px-6 text-left">Date</th>
              <th className="py-3 px-6 text-left">Amount</th>
              <th className="py-3 px-6 text-left">Description</th>
              <th className="py-3 px-6 text-left"></th>
            </tr>
          </thead>
          <tbody className=" text-sm font-light">
            {data.map((item, index) => (
              <tr key={index} className="border-b border-gray-200 hover:bg-primary hover:text-white">
                <td className="py-3 px-6 text-left">{item.date}</td>
                <td className="py-3 px-6 text-left">{item.amount}</td>
                <td className="py-3 px-6 text-left">{item.description}</td>
                <td className="py-3 px-6 text-left">
                  <a href="#" className="text-secondary hover:underline">{item.action}</a>
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
