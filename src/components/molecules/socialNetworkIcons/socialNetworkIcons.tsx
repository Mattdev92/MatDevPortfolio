import { FC } from 'react';
import { SocialNetworkIcon, SocialNetworkUrl } from 'helpers/helpers';
import SvgIcon from 'components/atoms/svgIcon/svgIcon';
import { Wrapper, IconWrapper, StyledIcon } from './socialNetworkIcons.styles';
import BurgerMenu from 'components/atoms/burgerMenu/burgerMenu';

const SocialNetworkIcons: FC = () => {
  return (
    <Wrapper>
      <IconWrapper>
        <BurgerMenu />
        {SocialNetworkIcon.map((item, i) => (
          <StyledIcon href={SocialNetworkUrl[i]} key={i}>
            <SvgIcon Icon={item} height={25} width={25} />
          </StyledIcon>
        ))}
      </IconWrapper>
    </Wrapper>
  );
};

export default SocialNetworkIcons;
