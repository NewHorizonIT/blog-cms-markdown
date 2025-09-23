import uploadService from "@/services/uploadService";
import useSWRMutation from "swr/mutation";

export const useUploadImage = () => {
  const { trigger, data, error, isMutating } = useSWRMutation(
    "/upload",
    async (_url, { arg }: { arg: FormData }) => {
      uploadService.upload(arg);
      const res = await uploadService.upload(arg);
      return res.data;
    }
  );
  return { uploadImage: trigger, data, error, isUploading: isMutating };
};
