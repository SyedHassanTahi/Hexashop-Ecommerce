import React from 'react'

const Header = (props) => {
    return (
        <div>
            <div className="mb-10 mt-5 px-4 sm:px-8 lg:px-36 pt-16 text-center lg:text-left flex flex-col gap-2">
                <h2 className="text-3xl sm:text-4xl font-bold">
                    {props.title}
                </h2>
                <span className="text-[#a1a1a1] text-base sm:text-lg italic">
                    Details to details is what makes Hexashop different from the other themes.
                </span>
            </div>
        </div>
    )
}

export default Header
