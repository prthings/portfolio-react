import React from 'react'

const Contact = () => {
  return (
    <div name="contact" className='w-full h-screen bg-gradient-to-bl from-[#cfd9df] to-[#e2ebf0] flex justify-center items-center p-4'>
        <form action="https://api.web3forms.com/submit" method="POST" className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-[#a18cd1] text-gray-500'>Contact</p>
                <p className='text-gray-300 py-4'>Submit the form below or Directly contact to this mail id prthings@skiff.com</p>
            </div>
            <input type="hidden" name="access_key" value="ced9b4da-3178-404c-bbc5-45dfaa73c5ec" />
            <input className='p-2 bg-[#ebedee]' type="text" placeholder='Enter your name' name='name' />
            <input className='my-4 p-2 bg-[#ebedee]' type="email" placeholder='Enter your Email' name='email' />
            <textarea className='bg-[#ebedee] p-2' name="message" rows="10" placeholder='Enter Your Message'></textarea>
            <button className='text-white rounded-md bg-black border-2 hover:bg-emerald-500 px-4 py-3 my-8 mx-auto flex items-center'>Submit</button>
        </form>
    </div>
  )
}

export default Contact