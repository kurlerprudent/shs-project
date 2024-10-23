import { DateTimeMixin, IDMixin } from "./core";

export interface ICreateSettings {
  key: string;
  value: string;
}

export interface ISettings extends ICreateSettings, DateTimeMixin, IDMixin {}

export interface IUpdateSettings {
  value?: string;
}
