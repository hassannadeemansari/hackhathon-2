import Image from "next/image";
import { Great_Vibes } from "next/font/google";
import {  Star } from "lucide-react";

const dancingScript = Great_Vibes({ subsets: ["latin"], weight: "400" }); // You can adjust weight if needed


export default function Home() {


   const menuItems = [
      { name: "Lettuce Leaf", price: "12.55", image: "/m2.png" },
      { name: "Fresh Breakfast", price: "14.55", image: "/m3.png" },
      { name: "Mild Butter", price: "12.55", image: "/m4.png" },
      { name: "Fresh Bread", price: "12.55", image: "/m5.png" },
      { name: "Glow Cheese", price: "12.55", image: "/food1.png" },
      { name: "Italian Pizza", price: "12.55", image: "/food2.png" },
      { name: "Silice Beef", price: "12.55", image: "/food3.png" },
      { name: "Mushroom Pizza", price: "12.55", image: "/m2.png" },
    ];


  return (
    
  <div>
    <div className="relative mx-auto">
    <main className="2xl:w-[1600px] 2xl:h-[100vh] xl:h-[100vh] sm:h-[75vh] h-[75vh] mx-auto relative">

{/* Background */}
<div className="absolute w-full h-full inset-0 bg-[url('/backgroundhero.png')] bg-center bg-cover brightness-[0.2]"></div>

{/* Navbar */}
<div className="2xl:w-[1600px] h-20 text-white text-center relative flex justify-center flex-col items-center mx-auto"> 
    <div className="w-full h-[50%] flex justify-center mt-6">
        <h1 className="text-[1.2rem] text-orange-400 font-extrabold">food</h1>
        <h1 className="text-[1.2rem] font-extrabold">Tuck</h1>
    </div>  

    <div className="2xl:w-[68%] grid lg:grid-cols-2 lg:grid-rows-1 grid-cols-1 grid-rows-2 h-[50%] flex items-center gap-10 justify-between mx-auto">
        <div>
            <ol className="flex 2xl:gap-6 xl:gap-5 lg:gap-4 gap-2 mx-auto mt-5">
                <a href="#home">Home</a>
                <a href="#menu">Menu</a>
                <a href="#blog">Blog</a>
                <a href="#pages">Pages</a> 
                <a href="#about">About</a> 
                <a href="#shop">Shop</a>
                <a href="#contact">Contact</a> 
            </ol> 
        </div>

        <div>
            <input 
                className="h-8 border-orange-400 border rounded-2xl bg-transparent px-4 mt-5 " 
                type="text" 
                placeholder="Search" 
            />
        </div>
    </div>  
</div>

{/* Main Content */}
<div id="home" className="relative z-10 h-[90%] flex sm:flex-row flex-col items-center justify-center sm:mt-0 mt-12 px-6">
    
    {/* Left Content */}
    <div className="2xl:w-[40%] xl:w-[45%] w-full h-auto mx-auto flex flex-col justify-center gap-5 text-white">
        <div className="text-orange-400 text-3xl">
            <p className={dancingScript.className}>The quick & amusing!</p>
        </div>
        <div className="text-white 2xl:text-5xl xl:text-5xl lg:text-5xl text-3xl flex">
            <p className="text-orange-400 font-semibold">Th</p>
            <p className="font-semibold">e Art of Speed Food Quality</p>
        </div>
        <div className="w-[85%]">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius sed pharetra dictum neque massa congue.</p>
        </div>
        <div>
            <button className="bg-yellow-500 w-[40%] sm:w-[32%] h-12 rounded-3xl">See Menu</button>
        </div>
    </div>

    {/* Right Food Images - Hidden on Mobile */}
    <div className="2xl:w-[40%] xl:w-[45%] lg:w-[45%] h-auto mx-auto flex items-center hidden lg:flex">
        <div className="w-[55%] h-[73%] border-[2px] rounded-full relative flex justify-center items-center">
            
            <Image
                src="/image1.png" 
                alt="Main Food"
                className="absolute"
                width={500}
                height={500}
            />
            <Image
                src="/image2.png"
                alt="Small Food 1"
                className="absolute sm:w-[100px] w-[80px] top-[-60px] left-[50%] transform -translate-x-1/2"
                width={80}
                height={80}
            />
            <Image
                src="/image3.png"
                alt="Small Food 2"
                className="absolute sm:w-[80px] w-[60px] bottom-[-40px] left-[20%]"
                width={70}
                height={70}
            />
            <Image
                src="/image4.png"
                alt="Small Food 3"
                className="absolute sm:w-[80px] w-[60px] bottom-[30%] right-0"
                width={60}
                height={60}
            />
            <Image
                src="/image5.png"
                alt="Small Food 4"
                className="absolute sm:w-[30px] w-[25px] top-[50%] left-[80%]"
                width={25}
                height={25}
            />
        </div>
    </div>
</div>
</main>
  
    </div>


            <div id="about" className="2xl:max-w-[1600px] 2xl:h-[70vh] h-[110vh]  bg-black text-white mx-auto flex justify-center items-center mx-auto">
                <div className="w-[77%] 2xl:h-[75%] xl:h-[75%] lg:h-[75%] flex flex flex-wrap">
                    <div className="2xl:w-[50%] h-full ">
                         <div className="flex h-full flex-col justify-center gap-5">
                            <p className="text-orange-400 text-3xl"><span className={dancingScript.className}>About Us</span></p>
                              <p className="flex 2xl:w-[500px] w-[300px] 2xl:text-5xl text-3xl font-semibold ">
                                <p className="text-orange-400"> We </p>
                                <p>Create the best foody product </p>
                              </p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat fringilla bibendum. Urna, elit augue urna, vitae feugiat pretium donec id elementum. Ultrices mattis sed vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in consequat.</p>

                            <ul className="flex flex-col gap-3">
                               <li className="flex gap-3" >
                               <Image src="/icon.png" alt="pic" width={15} height={15}/>
                               <p> Lacus nisi, et ac dapibus sit eu velit in consequat.</p>
                               </li>
                               <li className="flex gap-3">
                               <Image src="/icon.png" alt="pic" width={15} height={15}/>
                               <p> Quisque diam pellentesque bibendum non dui volutpat fringilla </p>
                               </li>
                               <li className="flex gap-3">
                                 <Image src="/icon.png" alt="pic" width={15} height={15}/>
                               <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                               </li>
                            </ul>

                         </div>
                    </div>

     {/* image section*/ }

                    <div className="2xl:w-[50%]  flex flex-col items-center gap-4 2xl:mt-0 xl:mt-0 lg:mt-0 mt-10 mx-auto">
                         <div className="w-[80%] h-[60%] rounded-md">
                             <Image src="/image21.png" alt="" width={500} height={500} className="bg-cover bg-center"/>
                         </div>
                            <div className="w-[80%] h-[40%] flex items-center grid grid-rows-1 grid-cols-2 gap-3" >
                                <div className=" rounded-md"><Image src="/image22.png" alt="" width={500} height={500} className="bg-center bg-cover"/></div>
                                <div className=" rounded-md"><Image src="/image23.png" alt="" width={500} height={500} className="bg-center bg-cover"/></div>
                            </div>
                    </div>

                </div>
            </div>


      {/* chosee food items */}


          <div className="2xl:w-[1600px] 2xl:h-[450px]  text-white bg-black flex flex-col items-center justify-center gap-3 mx-auto">
               <div className="text-orange-400 mt-10 text-3xl "><p className={dancingScript.className}>Food Category</p></div>
               <div className="2xl:text-5xl xl:text-5xl text-3xl flex"> <p className="text-orange-400">Ch</p><p>oose Food Iteam</p> </div>
               <div className="w-[74%] h-[65%]  grid 2xl:grid-rows-1 xl:grid-rows-1 grid-rows-2 2xl:grid-cols-4 xl:grid-cols-4 grid-cols-2 gap-3 ">
                  <Image
                    src="/image41.png"
                    alt="pic"
                    width={270}
                    height={270}
                  />
                 <Image
                    src="/image42.png"
                    alt="pic"
                    width={270}
                    height={270}
                  />
                 <Image
                    src="/image43.png"
                    alt="pic"
                    width={270}
                    height={270}
                  />
                 <Image
                    src="/image44.png"
                    alt="pic"
                    width={270}
                    height={270}
                  />
                  
               </div>
          </div>


          {/*extra ordinary*/}





          
    <section className="bg-black text-white py-16 px-6 md:px-12 lg:px-20">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        {/* Image Grid */}
        <div className="grid grid-cols-2 gap-4">
          <div className="col-span-1">
            <Image
              src="/food3.png"
              alt="Pizza"
              width={300}
              height={300}
              className="rounded-xl"
            />
          </div>
          <div className="col-span-1">
            <Image
              src="/m3.png"
              alt="Meatballs"
              width={300}
              height={300}
              className="rounded-xl"
            />
          </div>
          <div className="col-span-1">
            <Image
              src="/m2.png"
              alt="Burger"
              width={300}
              height={300}
              className="rounded-xl"
            />
          </div>
          <div className="col-span-1">
            <Image
              src="/m5.png"
              alt="Breakfast Bowl"
              width={300}
              height={300}
              className="rounded-xl"
            />
          </div>
        </div>

        {/* Text Content */}
        <div className="space-y-6">
          <h3 className="text-lg text-orange-400 font-semibold">Why Choose Us</h3>
          <h2 className="text-4xl font-bold leading-tight">
            <span className="text-orange-500">Extra</span>ordinary Taste <br />
            And Experienced
          </h2>
          <p className="text-gray-300">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            diam pellentesque bibendum nunc, dui volutpat fringilla bibendum.
            Ultrices mattis sed vitae mus risus.
          </p>

          {/* Buttons */}
          <div className="flex gap-3">
            <button className="bg-orange-500 text-white px-4 py-2 rounded-lg flex items-center gap-2">
              🍔 Fast Food
            </button>
            <button className="bg-orange-500 text-white px-4 py-2 rounded-lg flex items-center gap-2">
              🍽️ Lunch
            </button>
            <button className="bg-orange-500 text-white px-4 py-2 rounded-lg flex items-center gap-2">
              🍷 Dinner
            </button>
          </div>

          {/* Experience Box */}
          <div className="bg-white text-black px-6 py-4 rounded-lg inline-block mt-4">
            <span className="text-3xl font-bold text-orange-500">30+</span>
            <span className="text-lg font-semibold"> Years of Experience</span>
          </div>
        </div>
      </div>
    </section>












      <div id="pages" className="2xl:w-[1600px] h-[60vh] relative mx-auto">
              <div className="absolute inset-0 bg-[url('/image51.png')] bg-cover bg-center brightness-[0.2] z-0"></div>


         <div className="relative z-10 text-white grid 2xl:grid-rows-1 xl:grid-rows-1 grid-rows-2 2xl:grid-cols-4 xl:grid-cols-4 grid-cols-2 gap-3 h-full ">
{/*agar mujhe in icon ka acha design krna h tw isme se [items-center] ko remove krna hoga */}

              <div className=" flex flex-col justify-center items-center text-center gap-3 flex-wrap">
                    <Image
                       src="/image52.png"
                       alt="pic"
                       width={100}
                       height={100}
                    />
                    <p className="font-bold">Professional Chefs</p>
                    <p className="font-extrabold">420</p>
              </div>
              <div className="flex flex-col justify-center items-center text-center gap-3">
                    <Image
                       src="/image53.png"
                       alt="pic"
                       width={100}
                       height={100}
                    />
                    <p className="font-bold">Items Of Food</p>
                    <p className="font-extrabold">320</p>
              </div>
              <div className="flex flex-col justify-center items-center text-center gap-3">
                    <Image
                       src="/image54.png"
                       alt="pic"
                       width={100}
                       height={100}
                    />
                    <p className="font-bold">Years Of Experienced</p>
                    <p className="font-extrabold">30+</p>
              </div>
              <div className="flex flex-col justify-center items-center text-center gap-3">
                    <Image
                       src="/image55.png"
                       alt="pic"
                       width={100}
                       height={100}
                    />
                    <p className="font-bold">Happy Customers</p>
                    <p className="font-extrabold">220</p>
              </div>

          </div>    

      </div>


      {/*Menu*/}



      <section id="menu" className="bg-black text-white py-16 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <p className="text-orange-400 text-lg font-medium">Choose & Pick</p>
        <h2 className="text-4xl font-bold mt-2">
          <span className="text-orange-400">F</span>rom Our Menu
        </h2>

        {/* Menu Categories */}
        <div className="flex flex-wrap justify-center gap-6 text-gray-400 mt-6">
          {["Breakfast", "Lunch", "Dinner", "Dessert", "Drink", "Snack", "Soups"].map(
            (category, index) => (
              <button
                key={index}
                className={`text-lg ${
                  category === "Breakfast" ? "text-orange-400 font-bold" : "hover:text-orange-400"
                }`}
              >
                {category}
              </button>
            )
          )}
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-center">
          {/* Left Image */}
          <div className="flex justify-center">
            <Image src="/m1.png" alt="Salad" width={500} height={500} className="w-[80%] md:w-[60%] rounded-lg" />
          </div>

          {/* Menu List */}
          <div className="col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
            {menuItems.map((item, index) => (
              <div key={index} className="flex items-center gap-4">
                <Image src={item.image} alt={item.name} width={500} height={500} className="w-16 h-16 rounded-md" />
                <div>
                  <p className="text-lg font-medium">{item.name}</p>
                  <p className="text-gray-400 text-sm">Lacus nisi, et ac dapibus velit in consequat.</p>
                </div>
                <p className="text-orange-400 font-bold ml-auto">{item.price}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>




      {/* <div className="2xl:w-[1600px] md:h-[75vh] h-[90vh] 2xl:h-[600px] text-white bg-black flex flex-col items-center gap-5 mx-auto">
    
          <div className="text-orange-400 text-3xl"><p className={dancingScript.className}>Choose & pick</p></div>

          <div className="2xl:text-5xl xl:text-5xl text-3xl flex"> <p className="text-orange-400">Fr</p><p>om Our Menu</p></div>
    
          <div className="2xl:w-[68%] xl:w-[68%] lg:w-[68%] mx-auto">
                <div>
                    <ol className=" flex justify-evenly gap-3 mx-auto">
                       <a>Home</a>
                       <a>Menu</a>
                       <a>Blog</a>
                       <a>Pages</a> 
                       <a>About</a> 
                       <a>Shop</a>
                       <a>Contact</a> 
                    </ol> 
                </div>
            </div>

            <div className="w-full h-[140vh] flex justify-center">
               <div className="w-[75%] h-[80%] bg-orange-300 md:flex justify-center">
                    <div className="md:w-[49%] w-full md:h-full h-[45%] bg-yellow-300"></div>
                    <div className="md:w-[49%] w-full md:h-full h-[72%] bg-pink-400"></div>
               </div>
            </div>
  
      </div> */}





      {/*chefs */}

      <div id="shop" className="2xl:w-[1600px] md:h-[580px] h-[550px] bg-black text-white flex items-center flex-col gap-5 mx-auto">

            <div className="text-orange-400 text-3xl"><p className={dancingScript.className}>Chefs</p></div>
            <div className="2xl:text-5xl xl:text-5xl text-3xl flex justify-center"> <p className="text-orange-400">Fr</p><p>om Our Menu</p></div>

            <div className="w-full h-[65%]  flex justify-center items-center relative ">

{/* bg image */}
                     <div className="absolute w-[20%] md:w-[320px] inset-0 bg-[url('/image75.png')] bg-center bg-cover ml-10"></div>


                 <div className="w-[70%] h-full  flex justify-center gap-6 grid 2xl:grid-rows-1 xl:grid-rows-1 grid-rows-2 2xl:grid-cols-4 xl:grid-cols-4 grid 2xl:grid-rows-1 xl:grid-rows-1 grid-rows-2 2xl:grid-cols-4 xl:grid-cols-4 md:grid-cols-4 grid-cols-2">

                     <Image
                        src="/image71.png"
                        alt=""
                        width={248}
                        height={248}
                        className="rounded-xl"
                     />
                     <Image
                        src="/image72.png"
                        alt=""
                        width={248}
                        height={248}
                        className="rounded-xl"
                     />
                     <Image
                        src="/image73.png"
                        alt=""
                        width={248}
                        height={248}
                        className="rounded-xl"
                     />
                     <Image
                        src="/image74.png"
                        alt=""
                        width={248}
                        height={248}
                        className="rounded-xl"
                     />

                 </div>
            </div>

            <div>
                <button className="w-[140px] h-10 border border-yellow-500 rounded-full">See More</button>
            </div>
     
      </div>

      {/* Clients */}


      
    <div  className="w-full min-h-screen bg-black flex justify-center items-center px-4 sm:px-8 ">
      <div className="bg-black w-full max-w-7xl h-auto flex flex-col items-center py-12">
        {/* Heading */}
        <div className="text-center">
          <p className={`${dancingScript.className} text-orange-400 text-xl sm:text-2xl md:text-3xl`}>
            Testimonials
          </p>
          <h2 className="text-white text-2xl sm:text-4xl md:text-5xl font-bold mt-2">
            What our clients are saying
          </h2>
        </div>

        {/* Testimonial Card */}
        <div className="w-full flex justify-center items-center mt-10">
          <div className="w-full max-w-3xl bg-white relative shadow-lg shadow-gray-300 rounded-lg p-6 flex flex-col items-center gap-3">
            
            {/* Profile Image */}
            <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-white -mt-16 bg-gray-100">
              <Image
                src="/image71.png" 
                alt="Profile"
                width={96}
                height={96}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Background Overlay */}
            <div className="absolute inset-0 bg-[url('/bg2.png')] bg-cover bg-center opacity-20 rounded-lg z-0"></div>

            {/* Quote */}
            <p className="text-6xl text-gray-300 z-10">`</p>
            <p className="max-w-xl text-center text-gray-700 z-10">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non 
              dui volutpat fringilla bibendum. Urna, elit augue urna, vitae feugiat pretium donec id elementum. 
              Ultrices mattis sed vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in consequat.
            </p>

            {/* Star Ratings */}
            <div className="flex gap-1 text-yellow-500 z-10">
              <Star /><Star /><Star /><Star /><Star className="text-gray-300" />
            </div>

            {/* User Info */}
            <p className="font-bold text-black z-10">Alamin Hasan</p>
            <p className="text-sm text-gray-500 z-10">Food Specialist</p>
          </div>
        </div>
      </div>
    </div>


      {/*we docs*/}



      <section className="relative bg-black text-white py-20">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-70"
        style={{
          backgroundImage: "url('/bg3.png')", // Change to your actual image path
        }}
      ></div>

      {/* Content Container */}
      <div className="relative z-10 flex flex-col items-center text-center px-6 md:px-12 lg:px-24">
        {/* Subtitle */}
        <p className={`${dancingScript.className} text-orange-300 text-lg mb-2`}>
          Restaurant Active Process
        </p>

        {/* Title */}
        <h2 className="text-3xl md:text-5xl font-bold">
          <span className="text-yellow-400">We</span> Document Every Food Bean Process until it is saved
        </h2>

        {/* Description */}
        <p className="mt-4 max-w-2xl text-gray-300">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum.
        </p>

        {/* Buttons */}
        <div className="mt-6 flex gap-4">
          <button className="border border-white px-6 py-2 rounded-full hover:bg-white hover:text-black transition">
            Read More
          </button>
          <button className="flex items-center gap-2 px-6 py-2 rounded-full bg-yellow-500 hover:bg-yellow-600 transition">
            <span>Play Video</span>
            <span className="w-4 h-4 bg-white rounded-full flex items-center justify-center">▶</span>
          </button>
        </div>
      </div>
    </section>



    {/*foods*/}




    <section id="blog" className="w-full bg-black py-12 px-4 sm:px-8">
      <div className="max-w-7xl mx-auto text-center">
        {/* Heading */}
        <h4 className="text-orange-300 text-lg font-semibold">Blog Post</h4>
        <h2 className="text-white text-3xl sm:text-4xl md:text-5xl font-bold">
          <span className="text-yellow-500">Latest</span> News & Blog
        </h2>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-10">
          {[
            {
              image: "/food1.png",
              date: "10 February 2022",
              title: "Pellentesque Non Efficitur Mi Aliquam Convallis Mi Quis",
              link: "#",
            },
            {
              image: "/food2.png",
              date: "10 February 2022",
              title: "Morbi Sodales Tellus Elit, In Blandit Risus Suscipit A",
              link: "#",
            },
            {
              image: "/food3.png",
              date: "10 February 2022",
              title: "Curabitur rutrum velit ac congue malesuada",
              link: "#",
            },
          ].map((post, index) => (
            <div key={index} className="bg-black shadow-md rounded-lg overflow-hidden group">
              <div className="relative">
                <Image
                  src={post.image}
                  alt={post.title}
                  width={500}
                  height={300}
                  className="w-full h-64 object-cover group-hover:brightness-75 transition duration-300"
                />
                <div className="absolute bottom-0 bg-black bg-opacity-75 text-white p-4 w-full">
                  <p className="text-orange-400 text-sm">{post.date}</p>
                  <h3 className="text-lg font-semibold">{post.title}</h3>
                  <a href={post.link} className="text-orange-400 text-sm mt-2 inline-block">
                    Learn More →
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Subscription Section */}
        <div id="contact" className="mt-12 text-white text-center">
          <h3 className="text-xl sm:text-2xl font-semibold">
            <span className="text-orange-400">Still</span> You Need Our Support?
          </h3>
          <p className="text-gray-400 mt-2">Dont wait, make a smart & logical quote here. Its pretty easy.</p>
          <div className="mt-4 flex flex-col sm:flex-row justify-center gap-3">
            <input
              type="email"
              placeholder="Enter Your Email"
              className="p-3 rounded-lg w-full sm:w-96 text-black bg-yellow-500"
            />
            <button className=" bg-white text-yellow-500 px-6 py-3 rounded-lg font-semibold hover:bg-orange-600 transition">
              Subscribe Now
            </button>
          </div>
        </div>
      </div>
    </section>



    {/*footer*/}



    <footer className="w-full bg-black text-white py-12 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {/* About Us */}
        <div>
          <h3 className="text-xl font-semibold mb-4">About Us.</h3>
          <p className="text-gray-400 text-sm">
            Corporate clients and leisure travelers have been relying on Groundlink for dependable, 
            safe, and professional chauffeured car service in major cities across the world.
          </p>
          <div className="mt-4 bg-orange-500 p-3 rounded-md text-black w-fit">
            <p className="font-bold">Opening Hours</p>
            <p className="text-sm">Mon - Sat (8:00 - 6:00)</p>
            <p className="text-sm">Sunday - Closed</p>
          </div>
        </div>

        {/* Useful Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Useful Links</h3>
          <ul className="text-gray-400 space-y-2 text-sm">
            <li><a href="#" className="hover:text-orange-400">About</a></li>
            <li><a href="#" className="hover:text-orange-400">News</a></li>
            <li><a href="#" className="hover:text-orange-400">Partners</a></li>
            <li><a href="#" className="hover:text-orange-400">Team</a></li>
            <li><a href="#" className="hover:text-orange-400">Menu</a></li>
            <li><a href="#" className="hover:text-orange-400">Contacts</a></li>
          </ul>
        </div>

        {/* Help */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Help?</h3>
          <ul className="text-gray-400 space-y-2 text-sm">
            <li><a href="#" className="hover:text-orange-400">FAQ</a></li>
            <li><a href="#" className="hover:text-orange-400">Terms & Conditions</a></li>
            <li><a href="#" className="hover:text-orange-400">Reporting</a></li>
            <li><a href="#" className="hover:text-orange-400">Documentation</a></li>
            <li><a href="#" className="hover:text-orange-400">Support Policy</a></li>
            <li><a href="#" className="hover:text-orange-400">Privacy</a></li>
          </ul>
        </div>

        {/* Recent Posts */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Recent Posts</h3>
          {[
            { date: "20 Feb 2022", title: "Keep Your Business", link: "#" },
            { date: "20 Feb 2022", title: "Keep Your Business", link: "#" },
            { date: "20 Feb 2022", title: "Keep Your Business", link: "#" },
          ].map((post, index) => (
            <div key={index} className="flex items-center gap-3 mb-3">
              <div className="w-16 h-16 bg-gray-700"></div>
              <div>
                <p className="text-sm text-gray-400">{post.date}</p>
                <a href={post.link} className="text-white font-medium hover:text-orange-400">{post.title}</a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-700 mt-8 pt-6 flex flex-col md:flex-row justify-between items-center">
        <p className="text-gray-400 text-sm">© 2022 by Hassan Nadeem. All Rights Reserved.</p>
        <div className="flex gap-4 mt-4 md:mt-0">
          <a href="#" className="w-8 h-8 bg-gray-800 flex items-center justify-center rounded-full hover:bg-orange-500">Fa</a>
          <a href="#" className="w-8 h-8 bg-gray-800 flex items-center justify-center rounded-full hover:bg-orange-500">T</a>
          <a href="#" className="w-8 h-8 bg-gray-800 flex items-center justify-center rounded-full hover:bg-orange-500">I</a>
          <a href="#" className="w-8 h-8 bg-gray-800 flex items-center justify-center rounded-full hover:bg-orange-500">P</a>
        </div>
      </div>
    </footer>









</div>
  );
}
