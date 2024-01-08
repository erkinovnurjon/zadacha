"use client"

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
            <div>Home</div>
      );
};

export default Home;
