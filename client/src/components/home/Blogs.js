import BlogCard from "../BlogCard";
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

export default function Blogs() {
  const { data, loading, error } = useQuery(BLOGS);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error...</div>;
  // console.log(data);
  return (
    <>
      <section className="my-12">
        <div className="container  mx-auto">
          <div className="flex flex-wrap ">
            {data.blogs.data.slice(0, 3).map((item) => (
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
