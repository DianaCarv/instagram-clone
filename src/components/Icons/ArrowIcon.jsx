
export default function ArrowIcon({ type, height=25, width=25, className, ...props }) {
  
  const getStylesArrow = () => {
    switch (type) {
      case 'left':
        return { transform: "scaleX(-1)", cursor: 'pointer' }
      case 'right':
        return { transform: "" , cursor: 'pointer' }
      default:
        break;
    }
  }

  return (
    <svg
      style={getStylesArrow()}
      className={className}
      fill="rgb(220, 223, 223)"
      height={`${height}px`}
      width={`${width}px`}
      version="1.1"
      id="Layer_1"
      viewBox="0 0 330 330"
      {...props}
    >
      <path
        id="XMLID_2_"
        d="M165,0C74.019,0,0,74.019,0,165s74.019,165,165,165s165-74.019,165-165S255.981,0,165,0z M225.606,175.605  l-80,80.002C142.678,258.535,138.839,260,135,260s-7.678-1.464-10.606-4.394c-5.858-5.857-5.858-15.355,0-21.213l69.393-69.396  l-69.393-69.392c-5.858-5.857-5.858-15.355,0-21.213c5.857-5.858,15.355-5.858,21.213,0l80,79.998  c2.814,2.813,4.394,6.628,4.394,10.606C230,168.976,228.42,172.792,225.606,175.605z"
      />
    </svg>
  );
}
