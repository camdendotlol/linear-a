export interface Character {
  name: string,
  path: string,
  unicode: number,
  inLinearB: boolean
}

export enum ResourceType {
  Website = 'website',
  Book = 'book',
  Video = 'video'
}

export interface Resource {
  author: string,
  title: string,
  url: string,
  type: ResourceType,
  description: string,
  tags: Array<string>
}