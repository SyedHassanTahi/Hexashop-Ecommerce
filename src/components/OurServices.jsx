import service01 from '../assets/images/service-01.jpg';
import service02 from '../assets/images/service-02.jpg';
import service03 from '../assets/images/service-03.jpg';

const OurServices = () => {
    return (
        <div className="my-20 border-t-2 border-dashed border-gray-300">
            <div className="mb-10 px-4 sm:px-8 lg:px-35 pt-16 text-center flex flex-col">
                <h2 className="text-3xl sm:text-4xl font-bold">
                    Our Services
                </h2>
                <span className="text-[#a1a1a1] text-base sm:text-lg italic mt-2">
                    Details to details is what makes Hexashop different from the other themes.
                </span>
                <div className='flex justify-center flex-wrap gap-8 my-5 pt-8'>
                    <div className='flex flex-1 justify-center items-center'>
                        <div className='px-5 py-4 space-y-3 shadow-[0_0_10px_rgba(0,0,0,0.2)]'>
                            <h4 className='text-2xl font-bold'>Synther Vaporware</h4>
                            <p>Lorem ipsum dolor sit amet, consecteturti adipiscing elit, sed do eiusmod temp incididunt ut labore, et dolore quis ipsum suspend.</p>
                            <img className='w-full object-cover' src={service01} alt="service01" />
                        </div>
                    </div>
                    <div className='flex flex-1 justify-center items-center'>
                        <div className='px-5 py-4 space-y-3 shadow-[0_0_10px_rgba(0,0,0,0.2)]'>
                            <h4 className='text-2xl font-bold'>Locavore Squidward</h4>
                            <p>Lorem ipsum dolor sit amet, consecteturti adipiscing elit, sed do eiusmod temp incididunt ut labore, et dolore quis ipsum suspend.</p>
                            <img className='w-full object-cover' src={service02} alt="service02" />
                        </div>
                    </div>
                    <div className='flex flex-1  justify-center items-center'>
                        <div className='px-5 py-4 space-y-3 shadow-[0_0_10px_rgba(0,0,0,0.2)]'>
                            <h4 className='text-2xl font-bold'>Health Gothfam</h4>
                            <p>Lorem ipsum dolor sit amet, consecteturti adipiscing elit, sed do eiusmod temp incididunt ut labore, et dolore quis ipsum suspend.</p>
                            <img className='w-full object-cover' src={service03} alt="service03" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OurServices
