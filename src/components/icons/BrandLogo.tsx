import { Box } from '@granosafe/design-system'

import { DEFAULT_ICON_SIZE } from 'constants/layout'

import { IconsCommonProps } from 'types/icons'

const BrandLogo = ({ width }: IconsCommonProps) => {
  return (
    <Box w={width}>
      <svg
        width='100%'
        viewBox='0 0 19 22'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M18.482 20.4148C18.162 20.1588 16.669 19.1775 15.943 18.5376C15.666 18.2816 15.858 18.0042 15.559 17.6843C15.154 17.3003 14.727 16.8736 14.279 16.4256C13.831 15.9563 13.405 15.4444 12.978 14.911C12.594 14.3777 11.421 12.7565 10.461 11.6898C9.437 10.5379 7.496 9.12995 6.962 7.82867C6.941 7.74334 6.898 7.65801 6.877 7.57268C6.749 7.16736 6.70599 6.69805 6.72799 6.1434C6.74899 5.61009 6.898 5.09811 7.474 4.20215C8.114 3.24219 7.98599 2.81554 7.77299 2.77288C7.55999 2.73021 7.32499 2.75154 7.55999 1.74892C7.77299 0.874288 7.624 0.511636 7.496 0.298311C7.368 0.0849869 7.21799 -0.0216753 7.08999 0.0209896C6.81299 0.084987 6.59999 0.724961 6.34399 0.89562C6.27999 0.938285 5.917 1.13028 6.002 0.319644C6.024 0.127652 5.89599 0.0636545 5.70399 0.170317C5.42599 0.340976 5.04199 0.788958 4.82899 1.62092C4.80799 1.66359 4.765 1.68492 4.744 1.62092C4.701 1.51426 4.701 1.32227 4.765 1.00228C4.829 0.703628 4.95699 0.447639 4.82899 0.426306C4.65799 0.383641 4.402 0.746293 4.21 1.17294C4.189 1.23694 4.16799 1.25827 4.14599 1.30094C4.12499 1.3436 4.061 1.38627 4.061 1.2796C4.061 1.21561 4.082 1.08761 4.125 0.938285C4.146 0.874288 4.104 0.852955 4.082 0.852955C4.018 0.831623 3.954 0.874288 3.869 0.938285C3.677 1.08761 3.485 1.3436 3.336 1.70625C3.314 1.74892 3.314 1.79158 3.293 1.83425V1.85558C3.293 1.87691 3.293 1.87691 3.272 1.89825C3.272 1.91958 3.25 1.94091 3.25 1.96224C3.25 1.98358 3.229 2.02624 3.229 2.04757V2.0689C3.208 2.11157 3.208 2.17557 3.186 2.23956C3.165 2.30356 3.16499 2.36756 3.16499 2.43156C3.16499 2.43156 3.16499 2.43156 3.16499 2.45289C3.14399 2.62355 3.14399 2.77288 3.14399 2.94354C3.14399 2.96487 3.14399 2.9862 3.14399 3.02887C3.14399 3.1142 2.93 3.13553 2.994 3.32752C3.101 3.81817 3.293 4.30881 3.378 4.5648C3.421 4.65013 3.357 4.75679 3.272 4.79946C2.824 4.92745 1.586 5.31144 0.732999 5.84475C0.690999 5.86608 0.647992 5.95141 0.690992 6.01541C0.732992 6.07941 0.839993 6.07941 0.882993 6.05807C1.86399 5.73809 3.27199 5.26877 3.95399 5.75942C4.44499 6.12207 4.50899 6.97537 4.18899 7.89266C4.08199 8.23398 3.976 8.53264 3.869 8.85263C2.418 12.6498 5.085 14.4204 7.517 16.6816C7.688 16.8523 8.072 17.2576 8.392 17.7483C8.626 18.0896 8.88199 18.4949 8.83999 18.8789C8.81799 19.1989 8.77599 19.5828 8.64799 20.0948C8.51999 20.7135 8.37 20.4148 7.389 20.1588C7.09 20.0735 7.069 20.1162 6.877 20.5215C6.685 20.9481 6.66399 20.9908 6.70599 21.0335C6.74899 21.0548 8.562 21.0548 8.776 21.0761C8.797 21.0761 8.83999 21.0975 8.86099 21.0975C9.07399 21.2041 10.077 21.6734 10.375 21.8868C10.439 21.9294 10.546 21.9081 10.589 21.8654C10.631 21.8014 10.61 21.7161 10.546 21.6734C10.098 21.3961 9.181 20.7135 9.16 20.5001C9.16 20.4148 9.224 20.1162 9.266 19.8815C9.437 18.8149 9.45799 18.4309 9.88499 18.2176C10.29 18.0256 11.229 18.5162 11.954 18.6869C11.997 18.6869 12.018 18.7296 11.997 18.7509C11.975 18.8575 11.911 19.1135 11.783 19.5189C11.762 19.5828 11.719 19.7108 11.591 19.7535C11.442 19.7962 10.823 19.5615 10.397 19.4762C10.226 19.4335 10.162 19.3269 9.778 20.1588C9.757 20.2228 9.757 20.2442 9.778 20.2442C9.799 20.2655 11.527 20.3508 11.783 20.3935C11.826 20.3935 11.869 20.4148 11.911 20.4361C12.551 20.7561 13.085 21.0335 13.426 21.2254C13.618 21.3321 13.682 21.3748 13.746 21.3108C13.831 21.2254 13.746 21.1401 13.682 21.0761C13.639 21.0335 13.255 20.7561 12.871 20.5001C12.509 20.2442 12.167 20.0735 12.167 19.9455C12.167 19.8815 12.21 19.6682 12.231 19.6042C12.253 19.5615 12.381 19.0709 12.423 18.9002C12.423 18.8575 12.466 18.8362 12.509 18.8575C14.365 19.4762 14.941 20.6708 16.349 21.4174C18.055 22.2921 19.932 21.5454 18.482 20.4148Z'
          fill='#E4002B'
        />
      </svg>
    </Box>
  )
}

BrandLogo.defaultProps = {
  width: DEFAULT_ICON_SIZE,
}

export default BrandLogo
