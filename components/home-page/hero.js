import Image from 'next/image'
import classes from './hero.module.css'

function Hero(){
    return (
    <section className={classes.hero}>
        <div className={classes.image}>
        <Image src="/images/site/myimage.jpg" alt="an image showing devrath" width={300} height={300} />
        </div>
        <h1>hi, i'm dev</h1>
        <p>i blog about web development - especially
         frontend frameworks like angular
          or react.</p>
    </section>
    )
}
export default Hero;