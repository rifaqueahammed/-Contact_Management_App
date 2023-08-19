import React from 'react'
// import axios from 'axios';
// import { useQuery } from '@tanstack/react-query';
// import LineGraph from '../components/charts/lineGraph'


function ChartsANDmaps() {

  // const postQuery = useQuery({
  //   queryKey: ['posts'],
  //   queryFn: async () => {
  //     const response = await axios.get('https://disease.sh/v3/covid-19/historical/all?lastdays=all');
  //     const data = await response.data;
  //     console.log(data)
  //     return data;
  //   }
  // })

  // if( postQuery.isLoading ) return ( <h1>Loading....</h1>)
  // if( postQuery.isError ) return (<h1>Error loading data!!!</h1>)

  return (
    <div className='w-full'>
    <div className='w-full h-14 bg-black text-white flex justify-center items-center font-semibold text-xl'>
       <h1>Charts and Maps</h1>
    </div>
    <div className='p-10 m-2 h-min-screen flex flex-col justify-center items-center'>
        {/* <LineGraph data={postQuery.data}/> */}
        <h1>hello</h1>
    </div>
  </div>
  )
}

export default ChartsANDmaps
