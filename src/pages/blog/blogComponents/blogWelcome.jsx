const forkImg = new URL("../../../../public/media/fork.webp", import.meta.url);

function BlogWelcome() {
  return (
    <section className="relative backgroundOpacity h-[85vh]">
      <div className="z-20">
        <div className="max-w-[100%] mx-4 lg:mx-auto z-20">
          <div className="text-5xl sm:text-6xl md:text-7xl text-amber-300 font-bold flex justify-center pt-36">
            <h1 className="tracking-wider">Our Blogs</h1>
          </div>
          <div className="text-amber-100 font-semibold text-2xl my-16 flex items-center justify-center">
            <img src={forkImg} alt="fork" className="w-12 mx-4" />
            <p className="text-center">
              We Are Very Happy With Everyone Who Contacts Us
            </p>
            <img src={forkImg} alt="fork" className="w-12 mx-4" />
          </div>
        </div>
      </div>
      <img
        src="https://cns7dpna72-flywheel.netdna-ssl.com/wp-content/uploads/2018/05/DD_Hero4_grad.jpg"
        alt="photo"
        className="backgroundOpacityImage"
      />
    </section>
  );
}

export default BlogWelcome;
