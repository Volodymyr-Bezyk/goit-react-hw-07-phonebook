import styled from 'styled-components';
import bg from 'img/abstract-grunge-decorative-relief-navy-blue-stucco-wall-texture-wide-angle-rough-colored-background_1258-28311.jpg';

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  background-image: linear-gradient(${p => p.theme.colors.homeBg}, ${p => p.theme.colors.homeBg}),
    url('${bg}');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: ${p => p.theme.sizes.h.full};

  svg {
    display: none;
  }

  @media screen and (min-width: 768px) {
    svg {
      display: block;
      margin-left: auto;
    }
  }
`;
