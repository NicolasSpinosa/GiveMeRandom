import { AnyComponentWithProps } from "../../types";

type ComposeProviderProps = {
    packedProviders: AnyComponentWithProps[],
    children: React.ReactNode
}

export const ComposeProviders = ({
    packedProviders,
    children
}: ComposeProviderProps) => (
    packedProviders.reduceRight(
        (acc, [Provider, props]) => <Provider {...props}>{acc}</Provider>,
        children
    )
);