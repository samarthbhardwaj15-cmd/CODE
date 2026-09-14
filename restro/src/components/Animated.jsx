import { TablePropertiesIcon } from 'lucide-react'
import{ motion } from 'motion/react'
import { div } from 'motion/react-client'

const Animated = ({
    children,
    delay = 0,
    y = 50,
    x = 0,
    scale = 1,
    classname,
    ...props
}) => {
  return (
    <motion.div 
    initial={{opacity: 0, y, x, scale}}
    whileInView={{opacity: 1, y:0, x:0, scale:1}}
    viewport={{ once: true }}
    transition={{
        delay, type: "spring", stiffness:320, damping: 70, mass:1,
    }}
    className={classname}
    {...props}
    >
        {children}
    </motion.div>
  )
}

export default Animated
