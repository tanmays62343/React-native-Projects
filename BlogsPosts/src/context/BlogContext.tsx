import React, { createContext, ReactNode } from "react";

interface BlogContextProviderProps {
  children: ReactNode;
}

export interface BlogPost {
  title: string;
}

const defaultValue: BlogPost[] = [{ title: "Hello #1" }];

const BlogContext = createContext<BlogPost[]>(defaultValue);

export const BlogProvider: React.FC<BlogContextProviderProps> = ( { children } ) => {

  const test = [
    { title: "Hello #1" },
    { title: "Hello #2" },
    { title: "Hello #3" },
  ]

  return (
    <BlogContext.Provider value={test /* replace with your actual state */}>
      {children}
    </BlogContext.Provider>
  )

}

export default BlogContext;
