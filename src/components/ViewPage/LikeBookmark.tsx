import styled from 'styled-components';
import { RiHeart3Line } from 'react-icons/ri';
import { FiBookmark } from 'react-icons/fi';

export interface LikeShareProps {}

const LikeBookmark: React.SFC<LikeShareProps> = () => {
    const handleLike = () => {
        console.log('like');
    };

    return (
        <LikeBookmarkWrapper>
            <div>
                <RiHeart3Line style={{ width: '23px', height: '23px' }} onClick={handleLike} />
            </div>
            <div>
                <FiBookmark style={{ width: '23px', height: '23px' }} />
            </div>
        </LikeBookmarkWrapper>
    );
};

const LikeBookmarkWrapper = styled.div`
    padding-top: 30px;
    padding-left: 8px;
    color: ${({ theme }) => theme.mode.textColor};
    background-color: ${({ theme }) => theme.mode.buttonTextColor};
    & > div {
        cursor: pointer;
        height: 7vh;
        width: 100%;
    }
`;

export default LikeBookmark;
