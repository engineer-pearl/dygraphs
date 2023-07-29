//Actual code
/*
All these imports will be added in time. For now though...

import DygraphLayout from './dygraph-layout';
import DygraphCanvasRenderer from './dygraph-canvas';
import DygraphOptions from './dygraph-options';
import DygraphInteraction from './dygraph-interaction-model';
import * as DygraphTickers from './dygraph-tickers';
import * as utils from './dygraph-utils';
import DEFAULT_ATTRS from './dygraph-default-attrs';
import OPTIONS_REFERENCE from './dygraph-options-reference';
import IFrameTarp from './iframe-tarp';

import DefaultHandler from './datahandler/default';
import ErrorBarsHandler from './datahandler/bars-error';
import CustomBarsHandler from './datahandler/bars-custom';
import DefaultFractionHandler from './datahandler/default-fractions';
import FractionsBarsHandler from './datahandler/bars-fractions';
import BarsHandler from './datahandler/bars';

import AnnotationsPlugin from './plugins/annotations';
import AxesPlugin from './plugins/axes';
import ChartLabelsPlugin from './plugins/chart-labels';
import GridPlugin from './plugins/grid';
import LegendPlugin from './plugins/legend';
import RangeSelectorPlugin from './plugins/range-selector';

import GVizChart from './dygraph-gviz';
*/
//Type only
import {DataFile} from "./typescriptModels/File"
import {DygraphOpts} from "./typescriptModels/DygraphOpts"
/**
 * @class Creates an interactive, zoomable chart.
 * @name Dygraph
 *
 * @constructor
 * @param {div | String} div A div or the id of a div into which to construct
 * the chart. Must not have any padding.
 * @param {String | Function} file A file containing CSV data or a function
 * that returns this data. The most basic expected format for each line is
 * "YYYY/MM/DD,val1,val2,...". For more information, see
 * http://dygraphs.com/data.html.
 * @param {Object} attrs Various other attributes, e.g. errorBars determines
 * whether the input data contains error ranges. For a complete list of
 * options, see http://dygraphs.com/options.html.
 */
export declare class Dygraph {
  /**
   * Initializes the Dygraph. This creates a new DIV and constructs the PlotKit
   * and context &lt;canvas&gt; inside of it. See the constructor for details.
   * on the parameters.
   * @param {Element} div the Element to render the graph into.
   * @param {string | Function} file Source data
   * @param {Object} attrs Miscellaneous other options
   * @private
   */
  constructor(div: Element, file: DataFile, attrs?: DygraphOpts )
  static NAME: string
  static VERSION: string
  static DEFAULT_ROLL_PERIOD: number
  static DEFAULT_WIDTH: number
  static DEFAULT_HEIGHT: number
  static ANIMATION_STEPS: number
  static ANIMATION_DURATION: number
  static Plotters: any //Plotters - not yet defined
  static addedAnnotationCss: boolean
  is_initial_draw: boolean
  readyFns_: Array<any>
  maindiv_: Element
  file_: DataFile
  rollPeriod_: number
  previousVerticalX_: number
  fractions_: boolean
  dateWindow_: any
  annotations_: Array<any>
  
}
