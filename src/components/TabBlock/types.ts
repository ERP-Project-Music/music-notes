export enum TabType {
  Guitar,
}

export interface TabBlockProps {
  tab: string | null[][];
  type?: TabType;
  tuning?: string;
  width?: string | number;
}
