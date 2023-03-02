import Layout from 'components/layout/Layout'
import React from 'react'
import Image from 'next/image'
import librarylogo from "../../../assests/images/library.jpg"


function Homepage() {
  return (
    <Layout>
    {/* <Image style={{objectFit:"fit"}} src={librarylogo} width={1000} height={1000} /> */}
    {/* <AddButton name={"Add Book"}/> */}
    <div>homepage</div>
    </Layout>
  )
}

export default Homepage
