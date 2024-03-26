function HighlightHOC<T extends object>(WrappedComponent: React.ComponentType<T>) {
  return (props: T) => {
    return (
      <div style={{ background: 'red' }}>
        <WrappedComponent {...props} />
      </div>
    );
  };
}

export default HighlightHOC;
