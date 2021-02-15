import styled from 'styled-components';
import { RiHeart3Line } from 'react-icons/ri';

export interface LikeShareProps {}

const LikeShare: React.SFC<LikeShareProps> = () => {
    return (
        <LikeShareWrapper>
            <button>
                <RiHeart3Line />
            </button>
        </LikeShareWrapper>
    );
};

const LikeShareWrapper = styled.div`
    /* margin-left: auto;
    position: absolute;
    width: 80px;
    height: 276px;
    left: 174px;
    top: 691px; */
    position: 'absolute';
    width: 100%;
    height: 50;
    right: 30;
    bottom: 30;
    & > button {
        position: 'absolute';
        float: right;
    }
`;

export default LikeShare;
