import Image from 'next/image'
import classes from './hero.module.css'

function Hero(){
    return (
    <section className={classes.hero}>
        <div className={classes.image}>
        <Image src="/images/site/myimage.jpg" alt="an image showing devrath" width={300} height={300} />
        </div>
        <h1>Hi, I'm Devrath</h1>
        <p>Diving deep into NextJs, React, and the future of web development.
        Real experiences, real code, real learning.</p>
    </section>
    )
}
export default Hero;