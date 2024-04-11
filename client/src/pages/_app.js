import Link from "next/link";
import "@/styles/globals.css";
import "@/styles/fonts/fonts.css"
import "@/styles/style.scss"
import { AnimatePresence } from "framer-motion";

export default function App({ Component, pageProps, router }) {

  return (

    <div className='main'>
      <AnimatePresence mode='wait'>
        <Component key={router.route} {...pageProps} />
      </AnimatePresence>
    </div>

  )

}