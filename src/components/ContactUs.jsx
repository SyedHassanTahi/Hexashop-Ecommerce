import { Send } from 'lucide-react';

const ContactUs = () => {
    return (
        <div className="pt-20 px-4 sm:px-8 lg:px-20">
            <div className="flex flex-col lg:flex-row items-center justify-center">
                {/* Left content */}
                <div className="w-full lg:w-1/2 flex justify-center">
                    <div className="w-full lg:w-3/4">
                        <iframe
                            title="Location Map"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d90186.37207676383!2d-80.13495239500924!3d25.9317678710111!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9ad1877e4a82d%3A0xa891714787d1fb5e!2sPier%20Park!5e1!3m2!1sen!2sth!4v1637512439384!5m2!1sen!2sth"
                            className="w-full h-[400px]"
                        />
                    </div>
                </div>

                {/* Right content */}
                <div className="w-full lg:w-1/2 flex flex-col text-center lg:text-left">
                    <h2 className="text-3xl font-bold mb-4">
                        Say Hello. Don't Be Shy!
                    </h2>

                    <p className="text-gray-600 mb-6 italic">
                        Details to details is what makes Hexashop different from the other themes.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 mb-4">
                        <input
                            type="text"
                            placeholder="Your Name"
                            className="p-3 border w-full italic"
                        />
                        <input
                            type="email"
                            placeholder="Your Email Address"
                            className="p-3 border w-full italic"
                        />
                    </div>

                    <textarea
                        className="p-3 border w-full mb-4 italic"
                        rows="6"
                        placeholder="Your message"
                        required
                    />
                    <div>
                        <button className=" bg-black text-white border px-4 py-3  hover:bg-transparent hover:text-black transition duration-300">
                            <Send size={18} />
                        </button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default ContactUs;
