import { FC } from 'react';
import { SvgContainer } from './svgIcon.styles';
import { SvgIconProps } from './svgIcon.types';

const SvgIcon: FC<SvgIconProps> = (props) => {
  const { Icon } = props;
  return (
    <SvgContainer {...props}>
      <Icon style={{ maxHeight: '100%', maxWidth: '100%' }} />
    </SvgContainer>
  );
};

export default SvgIcon;
