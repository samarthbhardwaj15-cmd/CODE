import { section } from 'motion/react-client'
import Animated from '../components/Animated'

const Bookingprocess = () => {
  return (
    <section id='booking-process' className='px-auto mt-44'>
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 md:gap-25">
            {/* Left Side */}
            <div className='flex flex-col text-center md:text-left'>
                <Animated delay={0.2}> 
                    <p className='text-orange-500 font-medium uppercase mb-4'>
                        Table Resveration Process
                    </p>
                </Animated>
                <Animated delay={0.2}>
                    <h2 className='text-4xl md:text-5xl mb-16'>
                        Reserve your table in three simple steps
                    </h2>
                </Animated>
            </div>
            {/* Right Side */}
        </div>

    </section>
  )
}

export default Bookingprocess
