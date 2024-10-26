import React, { useState, useEffect } from 'react';
import './assets/css/loadingA.css'; // Fichier CSS contenant l'animation


function Loader() {

    return (
        <div className="loading-container">
            <div className="loading-letter">AB</div>
        </div>
    );
}

export default Loader;































// import React, {useState, useEffect} from "react";
// import { motion } from "framer-motion";

// const Loader = ()=>{
//     const [loading, setLoading] = useState(true);

//     useEffect(() =>{
//         const timer = setTimeout(() => {
//             setLoading(false);
//         }, 300); //le loader s'affiche pendant 3secondes

//         return () => clearTimeout(timer);
    
//     },[]);

//     return (
//         loading && (
//             <motion.div
//             className="loader"
//             initial = {{ opacity: 1 }}
//             animate={{ opacity:0 }}
//             exit={{ opacity: 0}}
//             transition={{ duration: 0.5}}
//             >
//                 <motion.h1
//                 initial={{ scale: 0}}
//                 animate={{ scale:1 }}
//                 transition={{ duration:1 }}
//                 >

//                     A

//                 </motion.h1>

//             </motion.div>
//         )
//     );
// };

// export default Loader;