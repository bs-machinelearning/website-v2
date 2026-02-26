import { SearchIcon, ArrowRightIcon, CalendarDaysIcon } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export type BlogPost = {
  title: string;
  description: string;
  imageUrl: string;
  imageAlt: string;
  date: string;
  category: string;
  author: string;
  authorLink: string;
  blogLink: string;
  categoryLink: string;
};

type BlogProps = {
  blogPosts: BlogPost[];
};

const BlogGrid = ({ posts }: { posts: BlogPost[] }) => {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {posts.map((post, index) => (
        <Card
          key={index}
          className="group hover:border-primary/60 hover:bg-primary/10 dark:hover:border-primary/60 dark:hover:bg-primary/10 h-full overflow-hidden border border-gray-200 bg-transparent shadow-none transition-all duration-300 hover:shadow-[0_0_30px_rgba(102,0,204,0.15)] dark:border-gray-800 dark:hover:shadow-[0_0_30px_rgba(102,0,204,0.2)]"
        >
          <CardContent className="space-y-3.5 p-6">
            <div className="mb-6 overflow-hidden rounded-lg sm:mb-12">
              <a href={post.blogLink}>
                <img
                  src={post.imageUrl}
                  alt={post.imageAlt}
                  className="h-59.5 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </a>
            </div>
            <div className="flex items-center justify-between gap-1.5">
              <div className="text-muted-foreground flex items-center gap-1.5">
                <CalendarDaysIcon className="size-6" />
                <span>{post.date}</span>
              </div>
              <a href={post.categoryLink}>
                <Badge className="bg-primary/10 text-primary rounded-full border-0 text-sm">
                  {post.category}
                </Badge>
              </a>
            </div>
            <h3 className="line-clamp-2 text-lg font-medium md:text-xl">
              <a href={post.blogLink}>{post.title}</a>
            </h3>
            <p className="text-muted-foreground line-clamp-2">
              {post.description}
            </p>
            <div className="flex items-center justify-between">
              <a href={post.authorLink} className="text-sm font-medium">
                {post.author}
              </a>
              <Button
                size="icon"
                variant="outline"
                className="group-hover:border-primary group-hover:bg-primary group-hover:text-primary-foreground hover:border-primary hover:bg-primary hover:text-primary-foreground dark:group-hover:border-white dark:group-hover:bg-white dark:group-hover:text-black dark:hover:border-white dark:hover:bg-white dark:hover:text-black"
                asChild
              >
                <a href={post.blogLink}>
                  <ArrowRightIcon className="size-4 -rotate-45" />
                  <span className="sr-only">Read more: {post.title}</span>
                </a>
              </Button>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

const Blog = ({ blogPosts }: BlogProps) => {
  const categories = ["All", "Product", "Design", "Startup Growth"];

  return (
    <section className="py-8 sm:py-16 lg:py-24">
      <div className="mx-auto max-w-7xl space-y-8 px-4 sm:px-6 lg:space-y-16 lg:px-8">
        <div className="space-y-4">
          <p className="text-sm">Case Studies</p>

          <h2 className="text-2xl font-semibold md:text-3xl lg:text-4xl">
            Real-World Impact: How We Solve Complex Problems.
          </h2>

          <p className="text-muted-foreground text-lg md:text-xl">
            Explore our case studies to see how we apply machine learning to
            drive measurable results.
          </p>
        </div>
        <Tabs defaultValue="All" className="gap-8 lg:gap-16">
          <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
            <ScrollArea className="bg-muted w-full rounded-lg sm:w-auto">
              <TabsList className="h-auto gap-1">
                {categories.map((category) => (
                  <TabsTrigger
                    key={category}
                    value={category}
                    className="hover:bg-primary/10 cursor-pointer rounded-lg px-4 text-base"
                  >
                    {category}
                  </TabsTrigger>
                ))}
              </TabsList>
              <ScrollBar orientation="horizontal" />
            </ScrollArea>

            <div className="relative max-md:w-full">
              <div className="text-muted-foreground pointer-events-none absolute inset-y-0 left-0 flex items-center justify-center pl-3 peer-disabled:opacity-50">
                <SearchIcon className="size-4" />
                <span className="sr-only">Search</span>
              </div>
              <Input
                type="search"
                placeholder="Search"
                className="peer h-10 px-9 [&::-webkit-search-cancel-button]:appearance-none [&::-webkit-search-decoration]:appearance-none [&::-webkit-search-results-button]:appearance-none [&::-webkit-search-results-decoration]:appearance-none"
              />
            </div>
          </div>

          <TabsContent value="All" className="pt-12">
            <BlogGrid posts={blogPosts} />
          </TabsContent>
          {categories.slice(1).map((category, index) => (
            <TabsContent key={index} value={category} className="pt-12">
              <BlogGrid
                posts={blogPosts.filter((post) => post.category === category)}
              />
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export default Blog;
