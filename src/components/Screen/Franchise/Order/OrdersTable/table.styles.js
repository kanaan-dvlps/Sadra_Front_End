import styled from "styled-components";

export const CustomTh = styled.th`
    text-align: left;
    padding: 8px;
    border: 1px solid #fafafa;
    background-color: var(--light-blue);
`;

export const CustomTd = styled.th`
    text-align: left;
    padding: 8px;
    border: 1px solid #fafafa;
`;

export const CustomTable = styled.table`
    width: 100%;
    margin-top: 24px;
`;

export const CustomTr = styled.tr`
    &:nth-child(even) {
        background-color: #f3f5f5;
    }
`;