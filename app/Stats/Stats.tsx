import React from 'react'
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogleScholar } from '@fortawesome/free-brands-svg-icons';
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons';

export default function Stats() {
    return (
        <div className='w-full'>
            <p className='pb-1 text-4xl font-bold inline border-b-4 border-white text-orange-500 '>
                Stats <FontAwesomeIcon icon={faGraduationCap} className='text-4xl inline text-green-500 h-8 ms-3' />
                &nbsp;
            </p>
            <div className='flex justify-center mt-20 gap-11 flex-wrap'>
                <div className='w-1/4'>

                    <Image height={400} width={300} src={"https://github-readme-stats.vercel.app/api/top-langs/?username=Huzaif-Ahmed&theme=tokyonight&show_icons=true&hide_border=false&layout=compact"} alt="saikrishna7004" ></Image>
                </div>
                <div className='w-1/4'>

                    <Image height={400} width={500} src={"https://github-readme-stats.vercel.app/api?username=Huzaif-Ahmed&theme=tokyonight&show_icons=true&hide_border=false&count_private=true)"} alt="saikrishna7004" ></Image>
                </div >
                <div className='w-1/4'>
                    <Image height={400} width={500} src={"https://github-readme-streak-stats.herokuapp.com/?user=Huzaif-Ahmed&theme=tokyonight&hide_border=false"} alt="saikrishna7004" ></Image>

                </div>
                <div className='w-1/5'>
                    <Image height={400} width={500} src={"https://github-profile-summary-cards.vercel.app/api/cards/productive-time?username=Huzaif-Ahmed&theme=github_dark&utcOffset=10"} alt="saikrishna7004" ></Image>

                </div>
                <div className='w-1/3'>
                    <Image height={600} width={500} src={"https://github-profile-summary-cards.vercel.app/api/cards/profile-details?username=Huzaif-Ahmed&theme=github_dark"} alt="saikrishna7004" className='bg-cover'></Image>

                </div>
                <div className='w-1/5'>
                    <Image height={400} width={500} src={"https://github-profile-summary-cards.vercel.app/api/cards/repos-per-language?username=Huzaif-Ahmed&theme=github_dark"} alt="saikrishna7004" ></Image>

                </div>
                <div className='w-1/3'>
                    <Image height={400} width={500} src={"https://leetcard.jacoblin.cool/rexhuzaifahmed?theme=dark&ext=heatmap"} alt="saikrishna7004" ></Image>

                </div>
                {/* <div className='w-1/4'>
                    <Image height={200} width={200} src={"https://github-stats-alpha.vercel.app/api?username=Huzaif-Ahmed&cc=000&tc=fff&ic=fff&bc=000 "} alt="saikrishna7004" ></Image>

                </div> */}

            </div>


        </div>

    )
}
