const bgImg = new URL("../../../media/BG.webp", import.meta.url);
const chefImg = new URL("../../../media/MaskChef.webp", import.meta.url);
const forkImg = new URL("../../../media/fork.webp", import.meta.url);
const kevinLuoImg = new URL("../../../media/KevinLuo.webp", import.meta.url);
const facebookImg = new URL("../../../media/facebook-logo.webp", import.meta.url);
const instagramImg = new URL("../../../media/instagram.webp", import.meta.url);
const telegramImg = new URL("../../../media/telegram.webp", import.meta.url);

function ChefInfo() {
  return (
    <section className="relative">
      <img
        src={bgImg}
        alt="bg"
        className="absolute h-full w-full z-[-1] top-0 right-0 object-cover"
      />
      <div className="z-[1] max-w-6-xl mx-4 lg:mx-auto grid md:grid-cols-2 gap-10">
        <div className="relative z-50 max-w-[550px] mx-auto py-20">
          <img
            src={chefImg}
            className="p-5 object-cover z-50 w-[550px]"
            alt="BG.webp"
          />
          <div className="w-[240px] h-[240px] absolute -z-10 bg-amber-200 top-20 right-1"></div>
          <div className="w-[240px] h-[240px] absolute -z-10 bg-amber-200 bottom-20 left-1"></div>
        </div>
        <div className="md:mt-16 max-w-screen">
          <p className="text-amber-100 font-semibold text-lg my-10 flex items-center">
            <img src={forkImg} alt="fork" className="w-12 mx-4" />
            Chef's Word
            <img src={forkImg} alt="fork" className="w-12 mx-4" />
          </p>
          <h1 className="text-amber-200 font-bold tracking-wider text-5xl my-8 mx-6">
            What We Believe In
          </h1>
          <p className="max-w-xl mx-6 text-orange-100 my-4 text-justify text-xl italic">
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo
            totam nam placeat delectus qui consequatur doloremque voluptates
            reiciendis nostrum ad, autem libero fugit voluptatem eaque veniam
            quis quibusdam eos assumenda."
          </p>
          <div className="flex space-x-[60px] mt-14">
            <div>
              <p className="mx-6 text-3xl font-bold tracking-wide text-amber-300 ">
                Kevin Luo
              </p>
              <p className="mx-6 mt-3 text-xl text-amber-100">Chef & Founder</p>
              <img src={kevinLuoImg} alt="kevinLuo" className="mx-6 my-10" />
            </div>
            <div className="mt-2">
              <p className=" text-amber-200 text-2xl font-bold">Contact With</p>
              <div>
                <a className="flex items-center" href="https://www.facebook.com/videos?campaign_id=1635645080&extra_1=s%7Cc%7C313664978099%7Ce%7Cfacebook%27%7C&placement=&creative=313664978099&keyword=facebook%27&partner_id=googlesem&extra_2=campaignid%3D1635645080%26adgroupid%3D61402566414%26matchtype%3De%26network%3Dg%26source%3Dnotmobile%26search_or_content%3Ds%26device%3Dc%26devicemodel%3D%26adposition%3D%26target%3D%26targetid%3Dkwd-362360550869%26loc_physical_ms%3D1028523%26loc_interest_ms%3D%26feeditemid%3D%26param1%3D%26param2%3D&gclid=CjwKCAjw77WVBhBuEiwAJ-YoJOd2MiOp3_OvvFm5YmjNo8-NfSiG6rDfALIbjU19ieuWgRCQdgUydxoCHt8QAvD_BwE">
                  <img
                    className="w-8 rounded-full mt-4 shadow-md hover:scale-125 transition duration-300 ease-in-out"
                    src={facebookImg}
                    alt="facebook-logo"
                  /><span className="mx-4 mt-4 text-zinc-100">Facebook</span>
                </a>

                <a className="flex items-center" href="https://apps.microsoft.com/store/detail/instagram/9NBLGGH5L9XT">
                  <img
                    className="w-8 rounded-full mt-4 shadow-md hover:scale-125 transition duration-300 ease-in-out"
                    src={instagramImg}
                    alt="instagram.webp"
                  /><span className="mx-4 mt-4 text-zinc-100">Instagram</span>
                </a>

                <a className="flex items-center" href="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCXedcceZ0uZ_TMjIs_RZpWfS9XDq5ZuFNjHWWRA0KQ-fOMk50tRwS-g-jnSMk-WK_N7I&usqp=CAU">
                  <img
                    className="w-8 rounded-full mt-4 shadow-md hover:scale-125 transition duration-300 ease-in-out"
                    src={telegramImg}
                    alt="LinkedIn_logo_initials"
                  /><span className="mx-4 mt-4 text-zinc-100">Telegram</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ChefInfo;
