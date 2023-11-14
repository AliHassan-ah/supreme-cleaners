import { useParams } from "react-router-dom";
import BG from "../../assets/images/blog-header-bg.png";
import ReactMarkdown from "react-markdown";
import {
  FacebookShareButton,
  TwitterShareButton,
  EmailShareButton,
  LinkedinShareButton,
} from "react-share";
import { useQuery, gql } from "@apollo/client";
import Blogs from "../../components/home/Blogs";

const GetBLOG = gql`
  query Blogs($Slug: String!) {
    blogs(filters: { Slug: { eq: $Slug } }) {
      data {
        id
        attributes {
          Title
          Slug
          Excerpt
          Content
        }
      }
    }
  }
`;

export default function SingleBlog() {
  const { slug } = useParams();
  const { data, loading, error } = useQuery(GetBLOG, {
    variables: { Slug: slug },
  });

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error...</div>;
  // console.log(data);

  const shareUrl = `${process.env.REACT_APP_SITE_BASE_URL}/blog/${slug}`;
  // console.log(shareUrl);

  const styles = {
    backgroundImage: `url(${BG})`,
    backgroundSize: "cover",
    backgroundPosition: "center center",
    backgroundRepeat: "no-repeat",
  };
  return (
    <>
      <section style={styles}>
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row px-10">
            <div className=" flex items-center justify-end mx-auto flex-col h-[200px]  ">
              <div className="mx-auto py-8 px-12  bg-secondary w-full md:w-[1200px] md:max-w-[86%]">
                <h1 className="p mb-3 text-primary text-sm">Our Blog</h1>
                <h1 className=" text-white text-xl  md:text-4xl">
                  {data.blogs.data[0].attributes.Title}
                </h1>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container mx-auto">
          <div className="md:w-1/2 px-5 md:px-0 md:left-[16%] relative py-12 text-[#101010] ">
            <div className="mark-down">
              <ReactMarkdown>
                {data.blogs.data[0].attributes.Content}
              </ReactMarkdown>
            </div>
            <div className="py-12">
              <ul className="flex justify-end flex-row">
                <li className="text-secondary my-auto">SHARE:</li>
                <li className="text-content my-auto px-4">
                  <FacebookShareButton
                    url={shareUrl}
                    quote={data.blogs.data[0].attributes.Title}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={30}
                      height={30}
                      fill="currentColor"
                      className="text-content bi bi-facebook"
                      viewBox="0 0 16 16"
                    >
                      <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                    </svg>
                  </FacebookShareButton>
                </li>
                <li className="text-content my-auto px-4">
                  <TwitterShareButton
                    url={shareUrl}
                    quote={data.blogs.data[0].attributes.Title}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={30}
                      height={30}
                      fill="currentColor"
                      className="bi bi-twitter text-content"
                      viewBox="0 0 16 16"
                    >
                      <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                    </svg>
                  </TwitterShareButton>
                </li>
                <li className="text-content my-auto px-4">
                  <EmailShareButton
                    url={shareUrl}
                    quote={data.blogs.data[0].attributes.Title}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={30}
                      height={30}
                      fill="currentColor"
                      className="bi bi-envelope-at-fill text-content"
                      viewBox="0 0 16 16"
                    >
                      <path d="M2 2A2 2 0 0 0 .05 3.555L8 8.414l7.95-4.859A2 2 0 0 0 14 2H2Zm-2 9.8V4.698l5.803 3.546L0 11.801Zm6.761-2.97-6.57 4.026A2 2 0 0 0 2 14h6.256A4.493 4.493 0 0 1 8 12.5a4.49 4.49 0 0 1 1.606-3.446l-.367-.225L8 9.586l-1.239-.757ZM16 9.671V4.697l-5.803 3.546.338.208A4.482 4.482 0 0 1 12.5 8c1.414 0 2.675.652 3.5 1.671Z" />
                      <path d="M15.834 12.244c0 1.168-.577 2.025-1.587 2.025-.503 0-1.002-.228-1.12-.648h-.043c-.118.416-.543.643-1.015.643-.77 0-1.259-.542-1.259-1.434v-.529c0-.844.481-1.4 1.26-1.4.585 0 .87.333.953.63h.03v-.568h.905v2.19c0 .272.18.42.411.42.315 0 .639-.415.639-1.39v-.118c0-1.277-.95-2.326-2.484-2.326h-.04c-1.582 0-2.64 1.067-2.64 2.724v.157c0 1.867 1.237 2.654 2.57 2.654h.045c.507 0 .935-.07 1.18-.18v.731c-.219.1-.643.175-1.237.175h-.044C10.438 16 9 14.82 9 12.646v-.214C9 10.36 10.421 9 12.485 9h.035c2.12 0 3.314 1.43 3.314 3.034v.21Zm-4.04.21v.227c0 .586.227.8.581.8.31 0 .564-.17.564-.743v-.367c0-.516-.275-.708-.572-.708-.346 0-.573.245-.573.791Z" />
                    </svg>
                  </EmailShareButton>
                </li>
                <li className="text-content my-auto px-4">
                  <LinkedinShareButton
                    url={shareUrl}
                    quote={data.blogs.data[0].attributes.Title}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={30}
                      height={30}
                      fill="currentColor"
                      className="bi bi-linkedin text-content"
                      viewBox="0 0 16 16"
                    >
                      <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                    </svg>
                  </LinkedinShareButton>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="my-12">
        <div className="container  mx-auto">
          <h2 className="pb-8 px-5 text-2xl text-primary">
            Recent our blog articles
          </h2>
          <div className="flex flex-wrap ">
            <Blogs />
          </div>
        </div>
      </section>
    </>
  );
}
