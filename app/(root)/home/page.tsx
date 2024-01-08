"use client"

import Hero from "@/components/shared/hero";
import Navbar from "@/components/shared/navbar";
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
            </>
      );
};

export default Home;
