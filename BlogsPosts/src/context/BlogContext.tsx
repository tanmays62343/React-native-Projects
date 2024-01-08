import React, { createContext, ReactNode } from "react";

//Ask sir why only the default value appears in the value prop

interface BlogContextProviderProps {
  children: ReactNode
}

interface BlogPost {
  title: string
}

const defaultValue : BlogPost[] = [
    {title : 'Hello #1'},
]

const BlogContext = createContext<BlogPost[]>(defaultValue);

export const BlogProvider: React.FC<BlogContextProviderProps> = ({ children }) => {

  const blogPosts: BlogPost[] = [
    { title: 'New BlogPost #1' },
    { title: 'New BlogPost #2' }
  ]

  return <BlogContext.Provider value={blogPosts}> {children} </BlogContext.Provider>
}

export default BlogContext
