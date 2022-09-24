import {FaHome} from 'react-icons/fa';
import {Link} from 'react-router-dom';
function NotFound() {
  return (
    <div className='hero'>
        <div className='text-center hero-content'>
            <div className='max-w-lg'>
                <div className='text-8xl font-bold mb-8'>
                    <h1>Ooops !!</h1>
                    <p className='text-5xl mt-4 mb-8'>404- Page Not Found</p>
                    <Link to='/' className='btn btn-primary btn-lg'>
                        <FaHome className='mr-2' />
                        Back to Home
                        </Link>
                </div>

            </div>

        </div>
    </div>
  )
}

export default NotFound