export type Rule = {
  required(): Rule;
  min(length: number): Rule;
  max(length: number): Rule;
  length(length: number): Rule;
  regex(pattern: RegExp, errorMessage?: string): Rule;
  uri(options?: { allowRelative?: boolean; scheme?: string[] }): Rule;
  custom(fn: (value: any) => boolean | string | void): Rule;
};
