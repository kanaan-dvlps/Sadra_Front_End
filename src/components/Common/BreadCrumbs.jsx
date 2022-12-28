import React, { useMemo } from 'react'
import { Breadcrumb } from "antd";
const { Item } = Breadcrumb;
import { StyledDiv } from "@/components/Common";

const BreadCrumbs = ({ path, pb }) => {
    const BreadcrumbItems = path.map((item) => <Item key={item}>{item}</Item>);
    return (
        <StyledDiv pb="40px">
            <Breadcrumb pb={pb}>{BreadcrumbItems}</Breadcrumb>
        </StyledDiv>
    )
}

export default BreadCrumbs