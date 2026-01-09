import Bannersection from '@/components/contact/Banner-section';
import Conatctinfo from '@/components/contact/Conatct-info';
import GymLocation from '@/components/contact/gym-location';
import ContactForm from '@/components/contact/Contact-form';
const Contact = () => {
  return (
        <div className="">
           <Bannersection />
           <Conatctinfo/>
           <GymLocation/>
           <ContactForm/>
        </div>
  )
}

export default Contact