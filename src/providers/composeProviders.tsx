type ChildrenProp = { children: React.ReactNode };
type ProviderEntry = ({ children }: ChildrenProp) => React.ReactElement;

export const composeProviders = (...providers: ProviderEntry[]) => (
    ({ children }: ChildrenProp) => (
        providers.reduceRight(
            (acc, Provider) => <Provider>{acc}</Provider>,
            children
        )
    )
);