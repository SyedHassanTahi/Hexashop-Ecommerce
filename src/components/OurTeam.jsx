import member01 from '../assets/images/team-member-01.jpg';
import member02 from '../assets/images/team-member-02.jpg';
import member03 from '../assets/images/team-member-03.jpg';
import ProfileLink from './ProfileLink';
const OurTeam = () => {
    return (
        <div className="my-20 border-t-2 border-dashed border-gray-300">
            <div className="mb-10 px-4 sm:px-8 lg:px-10 pt-16 text-center flex flex-col gap-4">
                <h2 className="text-3xl sm:text-4xl font-bold">
                    Our Amazing Team
                </h2>
                <span className="text-[#a1a1a1] text-base sm:text-lg italic">
                    Details to details is what makes Hexashop different from the other themes.
                </span>
                <div className='flex justify-center flex-wrap gap-8 my-5'>
                    <div>
                        <div className='relative'>
                            <div className='absolute inset-0 bg-zinc-900 bg-opacity-50 opacity-0 hover:opacity-100 flex items-center justify-center  transition duration-300 text-center sm:text-left  text-white'>
                                <ProfileLink/>
                            </div>
                            <img className='w-full object-cover' src={member01} alt="member01" />
                        </div>
                        <div className='space-y-2 p-4'>
                            <h4 className="text-2xl font-bold">Ragnar Lodbrok</h4>
                            <span className="text-[#a1a1a1] text-base sm:text-lg italic">Product Caretaker</span>
                        </div>
                    </div>
                    <div>
                        <div className='relative'>
                           <div className='absolute inset-0 bg-zinc-900 bg-opacity-50 opacity-0 hover:opacity-100 flex items-center justify-center  transition duration-300 text-center sm:text-left  text-white'>
                               <ProfileLink/>
                            </div>
                            <img className='w-full object-cover' src={member02} alt="member02" />
                        </div>
                        <div className='space-y-2 p-4'>
                            <h4 className="text-2xl font-bold">Ragnar Lodbrok</h4>
                            <span className="text-[#a1a1a1] italic text-base sm:text-lg">Product Caretaker</span>
                        </div>
                    </div>
                    <div>
                        <div className='relative'>
                            <div className='absolute inset-0 bg-zinc-900 bg-opacity-50 opacity-0 hover:opacity-100 flex items-center justify-center  transition duration-300 text-center sm:text-left  text-white'>
                                <ProfileLink/>
                            </div>
                            <img className='w-full object-cover' src={member03} alt="member03" />
                        </div>
                        <div className='space-y-2 p-4'>
                            <h4 className="text-2xl font-bold">Ragnar Lodbrok</h4>
                            <span className="text-[#a1a1a1] italic text-base sm:text-lg">Product Caretaker</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OurTeam