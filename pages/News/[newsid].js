import { useRouter } from "next/router";

const DetailPage = () => {
  const router = useRouter();
  console.log(router.query.newsid);

  return "details";
};
export default DetailPage;
