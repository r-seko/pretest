import styled from "styled-components";
import type { Liver } from "../type/type"
import { AnimatedScore } from "./AnimatedScore";

const Container = styled.div<{ index: number }>`
    position: absolute;   
    top: 0;
    left: 0; 
    display: flex;
    width: 100%;
    height: 40px;
    justify-content: space-between;
    align-items: center;
    transform: translateY(${props => props.index * 40}px);
    transition: transform 0.3s ease-in-out;
    background-color: #fff;
`;

const Profile = styled.div`
    display: flex;
    align-items: center;
    width:200px;
    height: 40px;
`;

const RankNumber = styled.span`
    text-align:center;
    width: 30px;
`;

const Avatar = styled.img`
    border-radius: 50%;
    width: 30px;
    height: 30px;
    margin-right: 10px;
`;

type Props = {
    liver: Liver;
    index: number;
};

export const RankingItem = ({ liver, index }: Props) => {
    return (
        <Container index={index}>
            <Profile>
                <RankNumber>{index + 1}</RankNumber>
                <Avatar src={liver.picture} alt={liver.displayName} />
                <span>{liver.displayName}</span>
            </Profile>
            <AnimatedScore score={liver.score} />
        </Container>
    )

};