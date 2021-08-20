import { FC } from 'react';
import Text from 'components/atoms/text/text';
import { Navdata, Url, NavIcons } from 'helpers/helpers';
import { ListWrapper, StyledText, StyledIcon } from './navList.styles';
import { StyledLink } from './navList.styles';
import { NavListProps } from './navList.types';
import SvgIcon from 'components/atoms/svgIcon/svgIcon';

const NavList: FC<NavListProps> = ({ refNav }) => {
  return (
    <ListWrapper ref={refNav}>
      {Navdata.map((item, i: number) => (
        <StyledLink to={Url[i]} key={i}>
          <StyledIcon>
            <SvgIcon
              Icon={NavIcons[i]}
              width={window.innerWidth < 1440 ? 35 : 40}
              height={window.innerWidth < 1440 ? 35 : 40}
            />
          </StyledIcon>
          <StyledText>
            <Text
              content={item}
              key={item}
              fontSize={window.innerHeight < 600 ? 'XS' : 'S'}
              fontWeight={'S'}
              margin={0}
              pointer={true}
            />
          </StyledText>
        </StyledLink>
      ))}
    </ListWrapper>
  );
};

export default NavList;
