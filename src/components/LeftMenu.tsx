import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';

const LeftMenu = () => {
    return (
        <LeftMenuWrapper>
            <MenuTitleWrapper>
                <Link href="/snapIndex">
                    <MenuIndexTitle>
                        SNAP
                        <TitleBorder></TitleBorder>
                    </MenuIndexTitle>
                </Link>
                <Link href="/lookbookIndex">
                    <MenuIndexTitle>
                        LOOKBOOK
                        <TitleBorderLookBook></TitleBorderLookBook>
                    </MenuIndexTitle>
                </Link>
                <Link href="/jobIndex">
                    <MenuIndexTitle>
                        JOB
                        <TitleBorderJob></TitleBorderJob>
                    </MenuIndexTitle>
                </Link>
            </MenuTitleWrapper>
            <svg width="535" height="842" viewBox="0 0 535 948" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M407.744 437.496C441.851 484.591 442.13 549.77 414.428 617.391C386.74 684.979 331.196 754.686 254.289 810.383C177.382 866.079 93.8266 897.107 20.9741 902.331C-51.9139 907.557 -113.753 886.96 -147.86 839.864C-181.967 792.769 -182.246 727.59 -154.545 659.969C-126.856 592.381 -71.3126 522.674 5.59483 466.977C82.5023 411.281 166.057 380.253 238.91 375.029C311.798 369.803 373.637 390.4 407.744 437.496Z"
                    stroke="#FF7E21"
                    stroke-width="4"
                />
                <path
                    d="M419.013 397C396.341 428.822 354.836 443.064 305.578 439.915C256.355 436.768 199.725 416.245 147.436 378.99C95.1468 341.736 57.2547 294.913 38.2047 249.417C19.141 203.888 19.0475 160.008 41.7198 128.186C64.3921 96.3647 105.897 82.1224 155.155 85.2717C204.378 88.4188 261.008 108.942 313.297 146.196C365.586 183.451 403.478 230.274 422.528 275.77C441.592 321.298 441.685 365.179 419.013 397Z"
                    stroke="#2521FF"
                    stroke-width="4"
                />
                <path
                    d="M439.526 35.9502C453.123 44.8963 459.841 62.0558 459.279 83.0654C458.718 104.04 450.879 128.518 435.79 151.45C420.701 174.383 401.324 191.269 382.284 200.085C363.212 208.916 344.795 209.537 331.198 200.59C317.601 191.644 310.883 174.485 311.445 153.475C312.006 132.501 319.845 108.023 334.934 85.0903C350.023 62.1576 369.4 45.2715 388.44 36.4555C407.512 27.6247 425.93 27.0041 439.526 35.9502Z"
                    stroke="#FF7E21"
                    stroke-width="4"
                />
            </svg>
        </LeftMenuWrapper>
    );
};

const LeftMenuWrapper = styled.div`
    margin: 20px 0 0 0;
    position: absolute;
    width: 30%;
`;

const MenuTitleWrapper = styled.div`
    margin: 98px 0 0 100px;
    font-family: 'Poppins', sans-serif;
    font-size: 64px;
    font-weight: 800;
    position: absolute;
`;

const MenuIndexTitle = styled.h2`
    position: relative;
    margin: 0 0 80px 0;
    color: ${({ theme }) => theme.mode.textColor};
    cursor: pointer;
`;

const TitleBorder = styled.span`
    border-bottom: 8px solid ${({ theme }) => theme.mode.borderColor};
    margin: 2px 0 0 0;
    display: block;
    width: 178px;
    position: absolute;
    right: 130px;
`;

const TitleBorderLookBook = styled(TitleBorder)`
    width: 272px;
    right: -50px;
`;

const TitleBorderJob = styled(TitleBorder)`
    width: 99px;
    right: 200px;
`;

export default LeftMenu;
