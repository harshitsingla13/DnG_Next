import Link from "next/link";

const withConditionalNavigation = (WrappedComponent, prop) => {
  const HOCComponent = (props) => {
    console.log(prop);
    return props.item.navigateTo ? (
      <Link href={props.item.navigateTo}>
        <WrappedComponent {...props} />
      </Link>
    ) : (
      <WrappedComponent {...props} />
    );
  };

  return HOCComponent;
};

export default withConditionalNavigation;
