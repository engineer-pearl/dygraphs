export interface DygraphOpts {

}

export class Dygraph {
  static NAME: string
  static VERSION: string
  static DEFAULT_ROLL_PERIOD: number
  static DEFAULT_WIDTH: number
  static DEFAULT_HEIGHT: number
  static ANIMATION_STEPS: number
  static ANIMATION_DURATION: number
  static Plotters: any
  static addedAnnotationCss: boolean

  constructor(div: Element, data: string | Function, opts: DygraphOpts )
  is_initial_draw: boolean
  readyFns_: Array<any>


}
