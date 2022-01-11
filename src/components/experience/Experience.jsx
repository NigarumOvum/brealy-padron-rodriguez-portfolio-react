import './Experience.scss';
export default function Experience() {        
        
        return (
            <section className='card'>
                <ul className='timeline'>
                    <li>
                        <span className='timeline__date'>2019-2022</span>
                        <span className='timeline__description'>Django Full Stack Developer</span>
                        <span className="timeline__company"> Tecnoelectro Comercio Online</span>
                    </li>

                    <li>
                    <span className='timeline__date'>2020-2022</span>
                        <span className='timeline__description'>Full Stack Developer</span>
                        <span className="timeline__company"> NeighborDev CR</span>
                    </li>

                    <li>
                        <span className='timeline__date'>2015-2022</span>
                        <span className='timeline__description'>Technical Support </span>
                        <span className="timeline__company"> NeighborDev CR</span>
                    </li>

                    <li>
                    <span className='timeline__date'>2020-2021</span>
                        <span className='timeline__description'>Technical Support </span>
                        <span className="timeline__company"> Concentrix</span>
                    </li>
                    <li>
                    <span className='timeline__date'>2017-2020</span>
                        <span className='timeline__description'>Call Center Agent </span>
                        <span className="timeline__company"> Ipsos S.A</span>
                    </li>
                    <li>
                    <span className='timeline__date'>2015-2017</span>
                        <span className='timeline__description'>Technical Support </span>
                        <span className="timeline__company"> CDC International S.A</span>
                    </li>
                </ul>
            </section>
        )
}