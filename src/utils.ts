import { ComponentWithProps } from "./types";

export const packProviderWithProps = <P extends object = object>(
    provider: React.ComponentType<P>,
    props?: P
): ComponentWithProps<P> => [provider, props];