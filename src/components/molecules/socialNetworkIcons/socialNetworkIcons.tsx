import { FC, useContext, useState, useEffect, useRef } from 'react';
import { SocialNetworkIcon, SocialNetworkUrl } from 'helpers/helpers';
import SvgIcon from 'components/atoms/svgIcon/svgIcon';
import { Wrapper, IconWrapper, StyledIcon } from './socialNetworkIcons.styles';
import BurgerMenu from 'components/atoms/burgerMenu/burgerMenu';
import AppContext from 'context';

const SocialNetworkIcons: FC = () => {
  const [scrollBackground, setScrollBackround] = useState(false);
  const RefElement = useRef(null);
  const { setStore } = useContext(AppContext);
  useEffect(() => {
    document.addEventListener(
      'scroll',
      (e) => {
        setScrollBackround(true);
      },
      true
    );
    return () => document.removeEventListener('scroll', () => {});
  }, []);

  return (
    <Wrapper scrollBackground={scrollBackground} ref={RefElement}>
      <IconWrapper>
        <BurgerMenu onClick={() => setStore({ mobileNav: true })} />
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
