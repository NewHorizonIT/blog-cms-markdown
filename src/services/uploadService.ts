import axiosInstance from "@/lib/axios";

const uploadService = {
  upload: (fd: FormData) =>
    axiosInstance.post("/upload", fd, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }),
};

export default uploadService;
