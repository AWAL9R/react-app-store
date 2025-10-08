import React, { Suspense, use } from 'react';
import { useParams } from 'react-router';
import Error404 from '../Error404';
import { FaDownload, FaStar } from 'react-icons/fa';
import { MdReviews } from 'react-icons/md';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, CartesianGrid, ResponsiveContainer } from 'recharts';
import { install, installApp } from '../installs/install_utils';

const dataPromise = fetch("/data.json").then(res => res.json());


const AppDetails = () => {
    const { appId } = useParams();

    return (
        <div>
            <Suspense fallback={<p>Loading.....</p>}>
                <AppDetailsView appId={appId} dataPromise={dataPromise}></AppDetailsView>
            </Suspense>
        </div>
    );
};

const AppDetailsView = ({ appId, dataPromise }) => {
    let appsData = use(dataPromise);

    const appIdInt = parseInt(appId) || -1;

    let app = appsData.find((item) => item.id === appIdInt)

    if (app == null) {
        return (
            <Error404 img='/assets/App-Error.png' title='OPPS!! APP NOT FOUND' subtitle='The App you are requesting is not found on our system.  please try another apps' />
        )
    }

   

    const { image, id, title, description, downloads, ratingAvg, companyName, reviews, size } = app;
    const isInstalled=installApp(id, false, true)
    // console.log(isInstalled)

    let ratings = app.ratings.toReversed();
    // ratings.reverse();
    // console.log(ratings)


    return (
        <div className='bg-[#D2D2D2]'>
            <div className='container py-15'>
                <div className='flex gap-5 max-[700px]:flex-wrap'>
                    <div><img className='w-[300px] aspect-square' src={image?image:"https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/2048px-No_image_available.svg.png"} /></div>
                    <div className='w-full flex flex-col justify-between'>
                        <div className='text-4xl font-bold max-[800px]:text-3xl max-[600px]:text-2xl'>{title}</div>
                        <div className='border-b-1 border-b-gray-400'>Developed by <a href='#developed' className='text-black font-semibold'>{companyName}</a></div>
                        <div className='flex gap-15  max-[800px]:gap-10 max-[600px]:gap-5'>
                            <div>
                                <div className='text-4xl text-green-500  max-[800px]:text-3xl max-[600px]:text-2xl'><FaDownload /></div>
                                <div>Downloads</div>
                                <div className='text-4xl font-extrabold  max-[800px]:text-3xl max-[600px]:text-2xl'>{downloads}M</div>
                            </div>
                            <div>
                                <div className='text-4xl text-yellow-500  max-[800px]:text-3xl max-[600px]:text-2xl'><FaStar /></div>
                                <div>Average Ratings</div>
                                <div className='text-4xl font-extrabold  max-[800px]:text-3xl max-[600px]:text-2xl'>{ratingAvg}</div>
                            </div>
                            <div>
                                <div className='text-4xl text-blue-500  max-[800px]:text-3xl max-[600px]:text-2xl'><MdReviews /></div>
                                <div>Total Reviews</div>
                                <div className='text-4xl font-extrabold  max-[800px]:text-3xl max-[600px]:text-2xl'>{reviews}</div>
                            </div>
                        </div>
                        <div><button onClick={(e) => { install(e, id) }} className={"bg-[#00D390] text-white py-3 px-6 hover:bg-[#01553a] transition ease-in-out rounded-md "+(isInstalled?"bg-gray-400 hover:bg-gray-400":"")}>{isInstalled?"Installed" : `Install Now (${size}MB)`}</button></div>
                    </div>
                </div>
                <div>
                    <div className='text-2xl font-bold'>Ratings</div>
                    <div  className='h-[300px] max-[800px]:h-[250px]'>
                        <ResponsiveContainer width="100%" height='100%'>
                            <BarChart layout="vertical" data={ratings} barCategoryGap="15%">
                                <XAxis type='number' />
                                <YAxis type='category' dataKey="name" stroke="#8884d8" />

                                <Bar dataKey="count" fill="#FF8811" barSize={25} />
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                </div>
                <div>
                    <div className='text-2xl font-bold'>Description</div>
                    <div>
                        {description}
                        <br></br>
                        <br></br>
                        {description}
                        <br></br>
                        <br></br>
                        {description}
                        <br></br>
                        <br></br>
                        {description}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AppDetails;