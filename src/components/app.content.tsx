const Content = () => {
    return (
        <div className="p-4">
            <div className="grid grid-cols-2 gap-4" style={{ marginTop: 30 }}>
                <div className="flex justify-center items-center h-100">
                    <img src="https://res.cloudinary.com/dwiptdm5g/image/upload/v1716363814/learn_nodejs/prev.6jflSLOUFn773eB-u99UMswrmDpPC4Hawmsyqw5ra7A_r9jtw3.jpg" className="w-60 h-80 "  alt="avatar" />
                </div>

                <div id="information" className="p-4 border rounded-lg shadow-md">
                    <ul    >
                        <li className="font-semibold">Information</li>
                        <li className="mb-2">Full name: Huỳnh Phước Tân</li>
                        <li className="mb-2">Student code: CE171112</li>
                        <li className="mb-2">Campus: FPT University Ho Chi Minh</li>
                        <li className="mb-2">Phone number: 0918414764</li>
                    </ul>
                </div>
            </div>
            <div className="grid grid-cols-2 gap-4" style={{ marginTop: 30 }}>
                <div className="p-4 border rounded-lg shadow-md" id="experience">
                    <p className="font-semibold">Experience</p>
                    <p>Experience using ReactJs and NodeJs for 6 months</p>
                    <p>Internship at FPT Software Academy</p>
                </div>
                <div className="p-4 border rounded-lg shadow-md" id="skills">
                    <p className="font-semibold">Skills</p>
                    <p>Html, css, js</p>
                    <p>ReactJS, NodeJs</p>
                    <p>MySQl</p>
                    <p>Java</p>
                    <p>Bootstrap, Tailwind, MUI</p>
                </div>
            </div>
            
        </div>
    )
}

export default Content;