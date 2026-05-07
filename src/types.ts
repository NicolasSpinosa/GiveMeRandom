export type ComponentWithProps<P extends object = object> = [React.ComponentType<P>, P?];
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type AnyComponentWithProps = ComponentWithProps<any>;