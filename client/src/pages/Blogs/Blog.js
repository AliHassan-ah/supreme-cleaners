import BlogCard from "../../components/BlogCard";
import PagesHeader from "../../components/PagesHeader";
import BG from "../../assets/images/blog_1800x.png";
import { useQuery, gql } from "@apollo/client";

const BLOGS = gql`
  query GetBlogs {
    blogs {
      data {
        id
        attributes {
          FeatureImage {
            data {
              attributes {
                url
              }
            }
          }
          Title
          Slug
          Excerpt
        }
      }
    }
  }
`;

export default function Blog() {
  const { data, loading, error } = useQuery(BLOGS);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error...</div>;
  // console.log(data);
  return (
    <>
      <PagesHeader
        imageUrl={BG}
        Heading={`Cleaning, Styling and \n News from Supreme Cleaners`}
        SubHeading="Our Blog"
      />

      <section className="my-12">
        <div className="container  mx-auto">
          <div className="flex flex-wrap -m-4">
            {data.blogs.data.map((item) => (
              <BlogCard
                key={item.id}
                img={item.attributes.FeatureImage.data.attributes.url}
                title={item.attributes.Title}
                excerpt={item.attributes.Excerpt}
                link={item.attributes.Slug}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
