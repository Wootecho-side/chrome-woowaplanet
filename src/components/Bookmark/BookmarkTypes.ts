export interface Bookmark {
  id: number;
  title: string;
  name:
    | "dice"
    | "inventory"
    | "github"
    | "bookmark"
    | "woowacourse"
    | "crewWiki";
  url: string;
}
