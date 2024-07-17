import { useEffect, useState } from "react";
import axios from "axios";
import { BACKEND_URL } from "@repo/common/config";

export interface Blog {
  author: {
    name: string;
  };
  title: string;
  content: string;
  id: number;
}

export const useBlog = ({ id }: { id: number }) => {
  const [blog, setBlog] = useState<Blog>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlog = async () => {
      const res = await axios.get(`${BACKEND_URL}/api/v1/blog/${id}`, {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      });
      setBlog(res.data.blog);
      setLoading(false);
    };
    fetchBlog();
  }, [id]);

  return {
    loading,
    blog,
  };
};
