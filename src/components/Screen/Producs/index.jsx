import { useProducts } from "@/api/api.products";
import { useRouter } from "next/router";
import Loading from "@/components/Common/Loading";
import ProductsList from "./ProductsList";
import ComingSoon from "@/components/Common/ComingSoon";
const Products = () => {
	const router = useRouter();
	const { productVariant } = router.query;
	const { data, isLoading } = useProducts(productVariant);
	if (productVariant === "vertebral-body-replacements") return <ComingSoon />;
	if (isLoading) return <Loading />;
	if (!data || !data.length) return <ComingSoon />;
	return <ProductsList data={data} />;
};

export default Products;
