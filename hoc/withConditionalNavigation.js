import Link from "next/link";

const withConditionalNavigation = (WrappedComponent) => {
  const HOCComponent = (props) => {
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
