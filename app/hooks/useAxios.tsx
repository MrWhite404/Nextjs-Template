"use client";
import React from "react";
import axios from "axios";
import { useState } from "react";
import { BACKEND_URL } from "@/constants/config";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

interface fetchProps {
  method: "get" | "post" | "patch" | "delete";
  body?: object;
  url: string;
  path?: string | null;
  message?: string | null;
}

const useAxios = () => {
  const router = useRouter();

  const [loading, setLoading] = useState<boolean>(false);
  const [data, setData] = useState<any | null>(null);

  const fetch = async ({
    method,
    body,
    url,
    path,
    message,
  }: fetchProps): Promise<any> => {
    setLoading(true);
    try {
      const data = await axios({
        method: method,
        url: BACKEND_URL + url,
        data: body,
      });

      if (path) router.push(path);
      if (message) toast.success(message);
      return data;
    } catch (error) {
      toast.error("Something Went Wrong !");
      return error;
    } finally {
      setLoading(false);
    }
  };

  return { data, fetch, loading };
};

export default useAxios;
