"use client"

import Feature from "@/components/shared/feature";
import Footer from "@/components/shared/footer";
import Hero from "@/components/shared/hero";
import Navbar from "@/components/shared/navbar";
import Statistic from "@/components/shared/statistic";
import Testumonial from "@/components/shared/testumonial";
import { Loader } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const Home = () => {
      const [loading, setLoading] = useState(true)

      const router = useRouter()
      useEffect(() => {
      setLoading(false)
       const username = localStorage.getItem('username')
       if(!username){
            router.push('/login')
       }
     } , [])

      return loading ? <Loader /> : (
            <>
                  <Navbar />
                  <Hero />
                  <Feature/>
                  <Statistic />
                  <Testumonial />
                  <Footer />
            </>
      );
};

export default Home;
