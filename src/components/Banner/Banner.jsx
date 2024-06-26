import bannerimg from '../../assets/images/user.png'

export default function Banner() {
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img className='max-w-2xl' src={bannerimg} />
          <div>
            <h1 className="text-5xl font-bold">Box Office News!</h1>
            <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
            <button className="btn btn-primary text-white">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  )
}
