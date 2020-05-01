import Link from 'next/link';

function HomePage() {
    return <div>
                <h1>Hello Welcome to Next.js</h1>
                <Link href="/about"> Click here to go to About Page</Link>
            </div>
  }
  
  export default HomePage