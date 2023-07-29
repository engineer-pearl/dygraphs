export type Plugin = PluginClass | pluginConstructor

export class PluginClass {
  active: any
}
export interface pluginConstructor {
  new (): PluginClass
}
