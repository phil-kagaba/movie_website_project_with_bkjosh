import girl from '/image/girl.jpg'
import iphone from '/image/iphone.jpg'
import indian from '/image/indian.jpg'
const Landing  = () =>{
    return(
        <>
          <section className="py-20 px- justify-center flex" id='first'>
            <ul className="flex space-x-7">
                <li><img src={girl} alt="No image" className='w-64 h-96' /></li>
                <li className='space-y-4 mt-28'>
                    <ul className='flex space-x-5'>
                        <li><img src={iphone} alt="No image" className='w-28 h-32' /></li>
                        <li><h1 className='text-center text-6xl font-bold text-green-600'>Best place <br />for</h1></li>
                        <li><img src={indian} alt="No image" className='w-28 h-32' /></li>
                    </ul>
                    <li className='text-center bg-green-600 py-2 text-white font-semibold rounded'><div>Online Shopping</div></li>
                    <br /><br />
                    
                    </li>
                <li><img src={girl} alt="No image" className='w-64 h-96' /></li>
            </ul>
          </section>
          <center> <div className='py-[0.5px] w-[50rem] bg-green-600 mb-10'></div> </center>
        </>
    )
}
export default Landing