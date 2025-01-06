import Home from './Home'
import TrustedBrand from '../components/TrustedBrand'
import Courses from '../components/Courses'
import Certified from '../components/Certified'
import Instructors from '../components/Instructors'
import OnlineExam from '../components/OnlineExam'
import EmployabilityTools from '../components/EmployabilityTools'
import CorporateTraining from '../components/CorporateTraining'

const Banner = () => {
  return (
    <div>
      <Home />
      <TrustedBrand />
      <Courses />
      <Certified />
      <Instructors />
      <OnlineExam />
      <EmployabilityTools />
      <CorporateTraining />
    </div>
  )
}

export default Banner
