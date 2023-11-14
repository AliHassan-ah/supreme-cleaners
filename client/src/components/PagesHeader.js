import React from "react";

export default function PagesHeader(props) {
  const styles = {
    backgroundImage: `url("${props.imageUrl}")`,
    backgroundSize: "cover",
    backgroundPosition: "center center",
    backgroundRepeat: "no-repeat",
  };
  return (
    <>
      <section style={styles} className="hidden md:block">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row px-10">
            <div className="md:w-1/2"></div>
            <div className="md:w-1/2 flex items-start justify-center flex-col h-[400px]  ">
              <div className="bg-white py-8 px-12 rounded-lg">
                <h1 className="p mb-3 text-primary text-xl">
                  {props.SubHeading}
                </h1>
                <h1
                  dangerouslySetInnerHTML={{
                    __html: props.Heading.replace("\n", "<br />"),
                  }}
                  className=" text-secondary  text-4xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="block md:hidden bg-[#f9f9f9]">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row px-10">
            <div className="md:w-1/2"></div>
            <div className="md:w-1/2 flex items-start justify-center flex-col h-[200px]  ">
              <h1 className="p mb-3 text-primary text-xl">
                {props.SubHeading}
              </h1>
              <h1
                dangerouslySetInnerHTML={{
                  __html: props.Heading.replace("\n", ""),
                }}
                className=" text-secondary  text-2xl"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
