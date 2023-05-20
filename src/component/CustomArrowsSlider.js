

export function NextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "#367785" , borderRadius:'18%'}}
        onClick={onClick}
      />
    );
  }
  
export function PrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "#367785" , borderRadius:'18%'}}
        onClick={onClick}
      />
    );
  }
  