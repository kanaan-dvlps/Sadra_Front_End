import React from 'react'
import {
    StyledCustomBtn,
    StyledCol,
    StyledCustomDivider,
    StyledDiv,
    StyledRow,
    StyledText,
    StyledTitle,
} from "@/components/Common";
import { SET_SINGLE_PRODUCT } from "@/store/products/products.constants";
import Link from "next/link";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { useMaxillioFacialProducts } from '@/api/api.maxilliofacial';
import { StyledProductImageDiv } from "../Producs/ProductsList/style";
import { StyledImage } from '@/components/Common/image.styles';

const MaxillioFacialProducts = () => {
    const { data, isSuccess } = useMaxillioFacialProducts();
    const router = useRouter();
    const dispatch = useDispatch();
    const productItems = products =>
        products?.map(
            ({
                _id,
                productName,
                productInfo,
                productImages,
                productCategory,
                productVariant,
                productAdvantages,
                productCombination,
                productInstrumentation,
                productSystem,
                screws,
                screwdriver
            }) => (
                <StyledCol md={12} xs={24} key={_id}>
                    <StyledRow>
                        <StyledCol span={10} p="10px">
                            <StyledProductImageDiv>
                                <StyledImage fill alt='maxillio-facial-product' src={productImages?.[0]} borderRadius="50%" />
                            </StyledProductImageDiv>
                        </StyledCol>
                        <StyledCol span={14} textAlign="center" p="10px">
                            <StyledTitle fontSize={{ md: "25px", xs: "18px" }} mt="15px">
                                {productName}
                            </StyledTitle>
                            <StyledText>{productInfo}</StyledText>
                            <StyledDiv>
                                <Link href={`${router.asPath}/${_id}`} passHref>
                                    <StyledCustomBtn
                                        mt="35px"
                                        // href={`${router.asPath}/${productName}`}
                                        onClick={() => {
                                            dispatch({
                                                type: SET_SINGLE_PRODUCT,
                                                payload: {
                                                    _id,
                                                    productName,
                                                    productInfo,
                                                    productImages,
                                                    productVariant,
                                                    productCategory,
                                                    productAdvantages,
                                                    productCombination,
                                                    productInstrumentation,
                                                    productSystem,
                                                    screws,
                                                    screwdriver
                                                },
                                            })
                                        }

                                        }
                                    >
                                        show more
                                    </StyledCustomBtn>
                                </Link>

                            </StyledDiv>
                        </StyledCol>
                    </StyledRow>
                </StyledCol>
            )
        );


    return (
        <>
            {(isSuccess && data) && data?.map(({ _id, productCategory, products }) => {
                if (products.length)
                    return (
                        <StyledDiv key={_id}>
                            <StyledCustomDivider>
                                <StyledTitle fontSize={{ md: "30px", xs: "20px" }}>{productCategory}</StyledTitle>
                            </StyledCustomDivider>
                            <StyledRow>{productItems(products)}</StyledRow>
                        </StyledDiv>
                    );
            })}
        </>
    );
}

export default MaxillioFacialProducts;