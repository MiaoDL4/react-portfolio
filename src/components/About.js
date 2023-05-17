import React from "react";
import { motion as m } from "framer-motion";
export function About(){
    return(

        <m.div initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2, ease: "easeOut" }}>
        
        <h1>About me.</h1>
        <p>My name's Dong, currently im work in as service desk analyst, but that is just a fancy title of a tech support and if you call i will ask you to restart your computer not just turn it off and on. Anyway this this is the start of my story in to web development though though Adelaide uni bootcamp.</p>

      </m.div>
    );
}
export default About;