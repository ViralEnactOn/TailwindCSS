import './index.css'
function App () {
  return (
    <>
      {/* Typography */}
      {/* <div className='border-4 border-green-800'>
        <h1 className='text-green-600'>Hello world!</h1>
      </div>
      <h1 className='text-reactjs-100'>Hello world!</h1>

      <p className='text-sm lg:text-lg'>EnactOn</p>

      <h1 className='bg-[#4e32a8]'>Hello world!</h1>

      <p className='text-4xl'>Note</p>

      <p className='font-[Poppins] text-4xl'>Note</p>

      <p className='text-4xl underline decoration-red-500 decoration-wavy decoration-4 underline-offset-8'>
        Note
      </p>

      <p className='text-4xl leading-10'>Line Height</p>

      <p className='text-4xl uppercase'>uppercase</p> */}

      {/*Space & Sizes*/}
      {/* <div>
        <div className='font-[Poppins] m-4 font-bold text-white bg-blue-500'>
          Box with margin
        </div>
        <div className='font-[Poppins] font-bold text-white bg-red-600 p-4 '>
          Box with padding
        </div>
      </div> */}

      {/* <div className='flex min-h-screen'>
        <div className='w-1/5 bg-red-500 '>Sidebar</div>
        <div className='w-4/5 bg-blue-500'>Main Content</div>
      </div> */}

      {/* Flex */}
      {/* <div className='Parent'>
        <div>Header</div>
        <div className='flex flex-row '>
          <div className='basis-3/4'>Main Content</div>
          <div className='flex flex-col basis-1/4'>
            <div>Side Bar</div>
            <div>Menu</div>
          </div>
        </div>
      </div> */}
      {/* 
      <div className='Parent'>
        <div>Header</div>
        <div className='flex justify-evenly ml-5 mr-5 items-center'>
          <div>Side Bar</div>
          <div>
            <div>Main Content</div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
              fugiat velit consequuntur voluptatibus aliquid quo, molestiae
              doloremque. Maiores molestiae, ducimus perspiciatis asperiores
              earum porro, doloremque fugit, enim sed quis ea?
            </p>
          </div>
          <div>Another Sidebar</div>
        </div>
      </div> */}

      {/* <div class='flex items-baseline'>
        <div class='bg-red-500 py-4'>01</div>
        <div class='bg-blue-500 py-12'>02</div>
        <div class='bg-green-500 py-8'>03</div>
      </div> */}

      {/* Grids */}
      {/* <div className='h-screen text-white Parent bg-slate-900'> */}
      {/* <div className='container mx-auto'> */}
      {/* <div class='grid md:grid-cols-2 lg:grid-cols-4 gap-4'> */}
      {/* <div className='bg-blue-500 p-6 rounded-lg'>01</div>
            <div className='bg-blue-500 p-6 rounded-lg'>02</div>
            <div className='bg-blue-500 p-6 rounded-lg'>03</div>
            <div className='bg-blue-500 p-6 rounded-lg'>04</div>
            <div className='bg-red-500 p-6 rounded-lg col-span-2'>05</div>
            <div className='bg-blue-500 p-6 rounded-lg'>06</div>
            <div className='bg-blue-500 p-6 rounded-lg'>07</div>
            <div className='bg-blue-500 p-6 rounded-lg'>08</div>
            <div className='bg-blue-500 p-6 rounded-lg'>09</div> */}

      {/* <div class='col-start-3 col-span-4 bg-sky-500 rounded-lg'>01</div>
            <div class='col-start-1 col-end-3 bg-sky-500 rounded-lg'>02</div>
            <div class='col-end-7 col-span-2 bg-sky-500 rounded-lg'>03</div>
            <div class='col-start-1 col-end-7 bg-sky-500 rounded-lg'>04</div> */}
      {/* </div> */}

      {/* <div class='grid grid-rows-4 grid-flow-col gap-4'>
            <div className='bg-blue-500 p-6 rounded-lg'>01</div>
            <div className='bg-green-500 p-6 rounded-lg row-span-3'>02</div>
            <div className='bg-blue-500 p-6 rounded-lg'>03</div>
            <div className='bg-blue-500 p-6 rounded-lg'>04</div>
            <div className='bg-red-500 p-6 rounded-lg row-span-2'>05</div>
            <div className='bg-blue-500 p-6 rounded-lg'>06</div>
            <div className='bg-blue-500 p-6 rounded-lg'>07</div>
            <div className='bg-blue-500 p-6 rounded-lg col-span-3'>08</div>
            <div className='bg-blue-500 p-6 rounded-lg row-span-4'>09</div>
          </div> */}

      {/* <div class='grid grid-flow-row-dense grid-cols-3 grid-rows-4 gap-4'>
            <div className='bg-blue-500 p-6 rounded-lg col-span-2'>01</div>
            <div className='bg-green-500 p-6 rounded-lg '>02</div>
            <div className='bg-blue-500 p-6 rounded-lg'>03</div>
            <div className='bg-blue-500 p-6 rounded-lg'>04</div>
            <div className='bg-red-500 p-6 rounded-lg '>05</div>
            <div className='bg-blue-500 p-6 rounded-lg'>06</div>
            <div className='bg-blue-500 p-6 rounded-lg'>07</div>
            <div className='bg-blue-500 p-6 rounded-lg'>08</div>
            <div className='bg-blue-500 p-6 rounded-lg '>09</div>
            <div className='bg-blue-500 p-6 rounded-lg '>10</div>
            <div className='bg-blue-500 p-6 rounded-lg '>11</div>
            <div className='bg-blue-500 p-6 rounded-lg col-span-3'>12</div>
          </div> */}

      {/* </div> */}
      {/* Layouts */}
      {/* <div className='container bg-red-500 mx-auto px-2 columns-3'> */}
      {/* <div className='w-64 float-right ml-10'>
          <img
            className='float-right'
            src='https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
          />
        </div>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut labore
          eum quo dignissimos aspernatur nemo, tenetur itaque! Fuga delectus
          ratione tempora accusantium, accusamus ad! Quis assumenda ut
          temporibus et nobis.
        </p>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut labore
          eum quo dignissimos aspernatur nemo, tenetur itaque! Fuga delectus
          ratione tempora accusantium, accusamus ad! Quis assumenda ut
          temporibus et nobis.
        </p>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut labore
          eum quo dignissimos aspernatur nemo, tenetur itaque! Fuga delectus
          ratione tempora accusantium, accusamus ad! Quis assumenda ut
          temporibus et nobis.
        </p> */}

      {/* </div> */}

      {/* <div className='container px-2'>
          <div className='relative w-32 h-32 bg-red-500 rounded-lg'>
            <div className='absolute w-24 h-24 top-8 left-0 bg-green-500 rounded-lg '></div>
          </div>
        </div> */}
      {/* <div className='container'>
          <div className='grid grid-cols-3 gap-4'>
            <div className='bg-teal-500'>01</div>
            <div className='invisible bg-teal-500'>02</div>
            <div className='bg-teal-500'>03</div>
          </div>
        </div> */}

      {/* <div className='container flex'>
          <div className='bg-red-500 z-40 border border-white rounded-full '>
            05
          </div>
          <div className='bg-red-500 z-30 border border-white rounded-full '>
            04
          </div>
          <div className='bg-red-500 z-20 border border-white rounded-full '>
            03
          </div>
          <div className='bg-red-500 z-10 border border-white rounded-full '>
            02
          </div>
          <div className='bg-red-500 z-0  border border-white rounded-full'>
            01
          </div>
        </div> */}

      {/* <header className='w-full border-t-2 border-b-2'>Header</header>
        <input type='text' className='border-2 outline border-red-500' /> */}
      {/* <div className='grid grid-cols-3 divide-x divide-red-500 '>
          <div>1</div>
          <div>2</div>
          <div>3</div>
        </div> */}
      <div className='h-screen p-4 Parent'>
        <div
          className='inline-block p-4 text-black bg-white rounded-lg 
        shadow-md blur hover:blur-none brightness-50 hover:brightness-100
        '
        >
          <h1 className='text-2xl'>Hello</h1>
          <p className='mb-4'>This is my div</p>
          {/* <button className='px-3 py-2 rounded-lg cursor-pointer bg-cyan-500'>
            Say Hello
          </button> */}
          {/* <button className='transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 ...'>
            Save Changes
          </button> */}
          {/* <button type='button' className='bg-indigo-500 ' disabled>
            <svg
              className='animate-spin h-5 w-5 mr-3 '
              viewBox='0 0 24 24'
            ></svg>
            Processing...
          </button> */}

          <span className='relative flex h-3 w-3'>
            
            <span className='animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75'></span>
            <span className='relative inline-flex rounded-full h-3 w-3 bg-sky-500'></span>
          </span>
        </div>
      </div>
    </>
  )
}

export default App
