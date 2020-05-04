import Link from 'next/link';

function HomePage() {
    return <div>
                <h1>Hello Welcome to Next.js</h1>
                <Link href="/about"><a>Click here to go to About Page</a></Link>
            </div>
  }
  
  export default HomePage