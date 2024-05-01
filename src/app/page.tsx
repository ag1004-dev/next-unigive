import Header from './component/header';
import Footer from './component/footer';
export default function Home() {
  return (
    <main className="min-h-screen w-full flex flex-row justify-center items-center bg-white">
      <div className="w-screen sm:w-[500px] bg-[#071619] h-screen overflow-y-scroll text-white">
        <Header />
        <div className="relative flex flex-col w-full p-8">
          <p className="text-[20px] font-semibold mb-4">Join Player Global Pool and Get Up To <span className='text-[#E70F16]'>1.5%</span> Daily Max Return is <span className='text-[#E70F16]'>150%</span></p>
          <p className="text-sm mb-4">The pool is auto credited to your wallet daily,<br /> and you earn daily cash for your cash flow.</p>
          <button className="bg-[#830383] px-4 py-2 rounded-md w-36 flex items-center">
            <img src="/polygon12.png" alt="Logo" className="h-9 mr-2" />
            <span className="text-white">Polygon</span>
          </button>
        </div>
        <div className="grid grid-cols-2 grid-rows-2 gap-y-16 gap-x-10 p-8">
          <div className="flex flex-col items-start">
            <div className="flex items-center">
              <img src="/T.png" alt="Logo" className="h-8" />
              <p className="text-[#AFABAB] ml-2 te">Total Global Pool</p>
            </div>
            <p className='ml-12'>$9,129,348</p>
          </div>

          <div className="flex flex-col items-start">
            <div className="flex items-center">
              <img src="/T.png" alt="Logo" className="h-8" />
              <p className="text-[#AFABAB] ml-2">Today ROI</p>
            </div>
            <p className='ml-12'>1.5%</p>
          </div>
          <div className="flex flex-col items-start">
            <div className="flex items-center">
              <img src="/telegram-logo.png" alt="Logo" className="h-10" />
              <p className="text-[#AFABAB] ml-2">Total Players</p>
            </div>
            <p className='ml-12'>998,221</p>
          </div>
          <div className="flex flex-col items-start">
            <div className="flex items-center">
              <img src="/telegram-logo.png" alt="Logo" className="h-10" />
              <p className="text-[#AFABAB] ml-2">My Child</p>
            </div>
            <p className='ml-12'>102</p>
          </div>

        </div>
        <div className="flex justify-end items-center relative text-black">
          <input
            placeholder="volt.com/seed/af-2352"
            className="border-none bg-gray-400 p-4 w-[288px] h-[40px] rounded-[13px] border-opacity-20 "
          />
          <img src="/T.png" className="absolute mr-2  justify-end items-end  " alt="Search Icon" />
        </div>
        <div className="flex mt-[20px] items-center justify-center">
          <button className="bg-[#FFC000] py-2 rounded-md w-[300px]  text-white">
            Invest
          </button>
        </div>
        <Footer />
      </div>
    </main >
  );
}
