import Image from "next/image";

export default function Card({ item }) {
  return (
    <div className=" md:w-[355px] h-[651px] rounded-2xl border border-[#64748B] bg-gradient-to-bl from-[#2F3241] from-1% to-[#0F172A] to-50% px-2 md:px-6 pt-14 pb-12 flex flex-col justify-between mt-5 xl:mt-0 relative hover:-translate-y-4 duration-500">
      <div>
        <span className=" absolute right-7 top-6">
          {item.popular ? (
            <p className="bg-[#14734C] px-3 py-[2px] rounded-full text-sm text-white-500 border border-[#5AE8AF]">
              Popular
            </p>
          ) : (
            ""
          )}
        </span>
        <h3 className="text-white-500">{item.plan}</h3>
        <p className="mb-9 mt-4">
          <span className="text-4xl">{item.price}</span>/mo
        </p>
        <ul className=" text-white-500 space-y-4">
          {item.features.map((feature, id) => (
            <div key={id} className="flex items-center gap-2">
              <Image
                className="size-4"
                src="Check.svg"
                alt="check icon"
                width={36}
                height={36}
              />
              <li>{feature}</li>
            </div>
          ))}
        </ul>
      </div>
      <div className="flex justify-center items-end align-baseline">
        <button className="btn w-[307px] h-[48px] py-3 px-2 md:px-6 flex justify-center">
          Start a {item.plan} plan
        </button>
      </div>
    </div>
  );
}
