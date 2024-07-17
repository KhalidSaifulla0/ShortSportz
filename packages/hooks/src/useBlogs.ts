import { useEffect, useState } from "react";
import axios from "axios";
import { BACKEND_URL } from "@repo/common/config";

interface Blog {
  author: {
    name: string;
  };
  title: string;
  content: string;
  publishedOn: string;
  id: number;
}

export const useBlogs = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlogs = async () => {
      const res = await axios.get(`${BACKEND_URL}/api/v1/blog/bulk`, {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      });
      setBlogs(res.data.blogs);
      setLoading(false);
    };
    fetchBlogs();
  }, []);

  return {
    loading,
    blogs,
  };
};
