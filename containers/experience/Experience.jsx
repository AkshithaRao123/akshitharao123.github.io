import './experience.css';
import { experience_list } from './experience_list';

const Experience = () => {
    return (
        <div className='App'>
            <div className='gradient__bg section__padding exp__header-content'>
                <h1 className='gradient__text'>My experience</h1>
                {
                    experience_list.map((company, index) => (
                        <div className='exp__item' key={index}>
                            <div className='exp__company'>
                                <div className='exp__logo'>
                                    <img src={company['logo-src']} alt='Company logo' width={'100%'} />
                                </div>
                                <div>{company.company}</div>
                            </div>
                            <hr />
                            <div className='exp__roles'>
                                {
                                    company.exp.map((role, roleIndex) => (
                                        <div className='exp__single-role' key={roleIndex}>
                                            <div className='exp__role-description'>
                                                <div>{role.role}</div>
                                                <div className='role_responsive'>{role.role_type}</div>
                                            </div>
                                            <div>{role.role_type}</div>
                                            <div>{role.location}</div>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Experience;