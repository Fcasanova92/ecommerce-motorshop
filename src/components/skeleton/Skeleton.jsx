import React from "react";
import styled, { keyframes } from "styled-components";

const skeletonLoading = keyframes`
  0% {
    background-position: 200% 0;
  }
  100% {
    background-position: -200% 0;
  }
`;

const SkeletonCard = styled.article`
  background-color: #fff;
  border-radius: 4px;
  overflow: hidden;
  padding: 1rem;
  box-shadow: 0px 2px 8px -1px #4a4a4a;
  transition: box-shadow ease-in-out 300ms, transform ease-in-out 300ms;

  &:hover {
    box-shadow: 0px 8px 16px -2px #6a6a6a;
    transform: translateY(-2px);
  }
`;

const SkeletonBox = styled.div`
  background: linear-gradient(90deg, #e0e0e0 25%, #f3f3f3 50%, #e0e0e0 75%);
  background-size: 200% 100%;
  animation: ${skeletonLoading} 1.5s infinite;
  border-radius: 8px;
`;

const SkeletonMedia = styled(SkeletonBox)`
  width: 100%;
  height: 160px;
  margin-bottom: 1rem;
`;

const SupportingText = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0;
  gap: 0.2rem;
`;

const SkeletonText = styled(SkeletonBox)`
  height: 16px;
  margin-bottom: 8px;

  &.short {
    width: 40%;
  }

  &.medium {
    width: 60%;
  }

  &.long {
    width: 90%;
  }
`;

const Footer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  column-gap: 0.4rem;
`;

const Price = styled.div`
  display: flex;
  gap: 0.2rem;
  align-items: flex-end;
`;

const Actions = styled.ul`
  display: flex;
  gap: 0.2rem;
  justify-content: space-between;
  list-style: none;
`;

const SkeletonIcon = styled(SkeletonBox)`
  width: 24px;
  height: 24px;
`;

const SkeletonButton = styled(SkeletonBox)`
  width: 120px;
  height: 32px;
`;

export const Skeleton = () => {
  return (
    <SkeletonCard>
      <SkeletonMedia />

      <SupportingText>
        <SkeletonText className="short" />
        <SkeletonText as="h3" className="medium" />
        <SkeletonText className="long" />
        <SkeletonText className="long" />

        <Footer>
          <Price>
            <SkeletonText as="h4" className="short" />
            <SkeletonText as="span" className="short" />
          </Price>

          <Actions>
            <SkeletonIcon as="span" />
            <SkeletonButton as="button" />
          </Actions>
        </Footer>
      </SupportingText>
    </SkeletonCard>
  );
};