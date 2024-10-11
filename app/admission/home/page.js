import RedButton from '@/Components/RedButton'
import Styles from './page.module.css'
import YellowButtons from '@/Components/YellowButtons'
import Coat from '@/Components/Coat'

const page = () => {
  return (
    <div>
        <div className={Styles.container}>
            <div className={Styles.congratsTextAndButtons}>
                <div className={Styles.congratsText}>
                    <h2>  Congratulations name</h2>
                    <p> The Senior High School Administration Web Application is
                    developed to streamline administrative processes in schools,
                    simplify admission procedures, and integrate ICT skills into
                    students' daily lives. This web-based platform reduces physical
                    presence requirements, allowing students and parents to access
                    critical services remotely. Designed with the aim of preventing
                    long queues, minimizing travel, and promoting ease of access, this
                    system serves as a digital hub for students, parents, and school
                    administrators.
                    </p>
                </div>
                <div className={Styles.redButtons}>
                    <RedButton link='/admission' title='Back'/>
                    <RedButton link='/admission/home/registration' title='Continue'/>
                </div>
            </div>
            <div className={Styles.rightSideButtons}>
                <YellowButtons link='/' title='Tour School'/>
                <YellowButtons link='/' title='Contact School'/>
            </div>
            <div className={Styles.coatContainer}>
                <Coat/>
            </div>
        </div>
    </div>
  )
}

export default page