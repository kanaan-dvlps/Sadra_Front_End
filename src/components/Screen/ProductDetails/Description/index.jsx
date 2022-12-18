import { StyledDiv, StyledH3, StyledLi, StyledUl } from "@/components/Common";

const Description = ({ data, title }) => {
	const items = data?.map(item => (
		<StyledLi key={item} fontSize="15px" color="#5D5D5D" p="5px">
			{item}
		</StyledLi>
	));
	return (
		<StyledDiv py="25px">
			<StyledH3 fontSize="22px" color="#002434">
				{title}
			</StyledH3>
			<StyledUl>{items}</StyledUl>
		</StyledDiv>
	);
};

export default Description;
