import { Layout, Menu } from 'antd';
import styled from 'styled-components';

const SnapCard = () => {
    return (
        <SnapCardGrid>
            <SnapCardRendered>
                <Centered src="http://via.placeholder.com/816x481" />
            </SnapCardRendered>
        </SnapCardGrid>
    );
};

export default SnapCard;

const SnapCardGrid = styled.div`
    display: flex;
    /* justify-content: space-between; */
    flex-wrap: wrap;
`;

const SnapCardWrapper = styled.div`
    display: inline-block;
    /* width: calc(100% / 3); */
    /* margin: 100px; */
    border: 1px solid red;
`;

// const SnapCardPadded = styled(SnapCardWrapper)`
//     height: 0;
//     position: relative;
//     overflow: hidden;
//     padding-bottom: 56.25% / 4;
// `;

const SnapCardRendered = styled.div`
    display: inline-block;
    margin: 50px;
    margin-left: auto;
    width: calc(200% / 3) !important;
    height: auto;
    position: relative;
    overflow: hidden;
    padding-bottom: 56.25% / 4;
    border: 1px solid blue !important;
`;

const SnapCardImage = styled.img`
    width: 100%;
    height: auto;
`;

const Centered = styled(SnapCardImage)`
    position: absolute;
    top: -50%;
    left: -50%;
    right: -50%;
    bottom: -50%;
    margin: auto;
`;
