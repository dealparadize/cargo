import styled from "styled-components";
import { Text } from "components/atoms";

const StyledUserMenu = styled.div`
  display: flex;
  flex-flow: row;
  justify-content: space-between;
`;

const UserImageWrapper = styled.div`
  width: 20px;
  height: 20px;
  border: 2px solid rgb(185, 185, 185);
  border-radius: 50%;
  margin-left: 10px;
`;

const UserImage = styled.i`
  width: 20px;
  height: 20px;
  display: flex;
  flex-flow: row;
  align-items: center;
  justify-content: center;
  color: rgb(185, 185, 185);
`;

export const UserMenu = () => {
  return (
    <StyledUserMenu>
      <Text>Regina Zepeda</Text>
      <UserImageWrapper>
        <UserImage className="fa fa-user" />
      </UserImageWrapper>
    </StyledUserMenu>
  );
};
