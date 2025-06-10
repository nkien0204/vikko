export interface IMenuItem {
  text: string;
  url: string;
}

export interface IIntroInfo {
  title: string;
  description: string;
  imageSrc: string;
  bullets: IIntroInfoBullet[];
}

export interface IIntroInfoBullet {
  title: string;
  description: string;
  icon: JSX.Element;
}

export interface IProduct {
  name: string;
  imageSrc: string;
  width: number;
  highlight: boolean;
  features?: SubFeature[];
  briefInfo?: string;
  conclusionInfo?: SubFeature;
  description?: string;
}

export interface SubFeature {
  title: string;
  contents: SubFeatureContent[];
}

export interface SubFeatureContent {
  content: string;
  imgSrc?: string;
}

export interface IFAQ {
  question: string;
  answer: string;
}

export interface IProject {
  name: string;
  imageSrc: string;
  // role: string;
  // message: string;
  // avatar: string;
}

export interface IStats {
  title: string;
  icon: JSX.Element;
  description: string;
}

export interface ISocials {
  facebook?: string;
  github?: string;
  instagram?: string;
  linkedin?: string;
  threads?: string;
  twitter?: string;
  youtube?: string;
  x?: string;
  [key: string]: string | undefined;
}
