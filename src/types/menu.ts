/**
 * Interface usada para composição do menu.
 */
export interface MenuLinksModel<P = unknown> {
  id: string;
  name: string;
  to?: string | Record<string, unknown> | undefined;
  featureName?: string | undefined;
  testeId?: string | undefined;
  /** ícone para exibir no menu. */
  Icon?:
    | React.ReactElement<P, string | React.JSXElementConstructor<P>>
    | React.ElementType<P>
    | React.ComponentType<P>
    | undefined;
}
