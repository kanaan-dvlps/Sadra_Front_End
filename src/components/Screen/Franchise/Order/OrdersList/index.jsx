import { useGetOrders } from "@/api/api.order";
import {
	StyledCol,
	StyledDiv,
	StyledH1,
	StyledImage,
	StyledRow,
	StyledText,
} from "@/components/Common";
import ComingSoon from "@/components/Common/ComingSoon";
import Loading from "@/components/Common/Loading";

const OrdersList = () => {
	const { isLoading, data } = useGetOrders();
	if (isLoading) return <Loading />;
	if (!data) return <ComingSoon />;
	return data.map(({ id, image, name, date, comment }) => (
		<StyledDiv
			background=" #FFFFFF"
			border=" 0.3px solid #6FCBDF"
			boxShadow=" 4px 6px 8px rgba(228, 247, 252, 0.54)"
			borderRadius="57px"
			mt="20px"
			p="25px"
			key={id}
		>
			<StyledRow>
				<StyledCol lg={5} xs={24}>
					<StyledDiv
						width="120px"
						height="120px"
						border="3px solid #6FCBDF"
						borderRadius="50%"
						p="5px"
					>
						<StyledImage src={image} width="100%" height="100%" />
					</StyledDiv>
				</StyledCol>
				<StyledCol lg={5} sm={12} xs={24}>
					<StyledDiv>
						<StyledH1 fontSize="20px">Product name</StyledH1>
						<StyledText color="#6D6D6D">{name}</StyledText>
					</StyledDiv>
				</StyledCol>
				<StyledCol lg={5} sm={12} xs={24}>
					<StyledDiv>
						<StyledH1 fontSize="20px">Date & Time</StyledH1>
						<StyledText color="#6D6D6D">{date}</StyledText>
					</StyledDiv>
				</StyledCol>
				<StyledCol lg={7} xs={24}>
					<StyledDiv>
						<StyledH1 fontSize="20px">Comment</StyledH1>
						<StyledText color="#6D6D6D">{comment}</StyledText>
					</StyledDiv>
				</StyledCol>
			</StyledRow>
		</StyledDiv>
	));
};

export default OrdersList;
