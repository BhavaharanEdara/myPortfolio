
import school from './sricschool.png'
import clg from './sriclg.png'

export default function About(){
    return(
        <div className="about">

            <div className="intro">
                <img src="https://fjwp.s3.amazonaws.com/blog/wp-content/uploads/2022/08/02083509/Companies-Hiring-for-Remote-Work-From-Home-Jobs-Right-Now-2-1024x512.jpeg" alt="img"/>
                <div className="aboutText">
                    <h3>About Me</h3>
                    <p>Hi i'm Bhavaharan.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                    </div>
                </div>
            <h1 className="eTitle">Education</h1>
            <div className="education blocks">
                <div className="school block">
                    <img className="block__item" src={school} alt="schoolImg"/>

                    <span class="name">
                        <p>Sri Chaitanya school</p>
                        <p>10th standard</p>
                        <p>CGPA : 9.8</p>
                        <p>2017-2018</p>
                    </span>
     
                    <div>
                    </div>
                </div>
                <div className="highSchool block">
                    <img className="block__item" src={clg} alt="collegeImg" />
                    <span class="name">
                        <p>Sri Chaitanya college</p>
                        <p>Intermediate</p>
                        <p>Group : MPC</p>
                        <p>CGPA : 9.00</p>
                        <p>2018-2020</p>
                    </span>
                    <div></div>
                </div>
                <div className="college block">
                    <img className="block__item" src="https://w7.pngwing.com/pngs/821/546/png-transparent-manipal-academy-of-higher-education-sikkim-manipal-university-sikkim-manipal-institute-of-technology-manipal-university-jaipur-student-text-people-logo-thumbnail.png" alt="collegImg"/>
                    <span class="name">
                        <p>Manipal university Jaipur</p>
                        <p>Group : BCA</p>
                        <p>CGPA : 8.00</p>
                        <p>2021-2024</p>
                    </span>
                </div>

            </div>

        </div>
    )
}