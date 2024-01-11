//💥props: using "props" we can reuse the component value. 
//          if you check "props" prototype it's an object.
//          so we can do to object destructure. 


import React from "react";
function CardComponent({username, role="Suppot Engineer"}) {   //💥if "role" value not passed in component then role value "support engineer will be render as a default value"
    // function CardComponent({username, role})  //💥Here we destructured props object.
    // console.log(username);               //And used username value here.
    // console.log(role);
    console.log(username);
    console.log(role);
  return (
    <>
      <figure className="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">
        <img
          className="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto"
          src="https://images.pexels.com/photos/927437/pexels-photo-927437.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
          width="384"
          height="512"
        />
        <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
          <blockquote>
            <p className="text-lg font-medium">
              “Tailwind CSS is the only framework that I've seen scale on large
              teams. It’s easy to customize, adapts to any design, and the build
              size is tiny.”
            </p>
          </blockquote>
          <figcaption className="font-medium">
            <div className="text-sky-500 dark:text-sky-400">{username}</div>
            <div className="text-slate-700 dark:text-slate-500">
              {role}, Algolia
            </div>
          </figcaption>
        </div>
      </figure>
    </>
  );
}
export default CardComponent;
