/**
 * @fileoverview 颜色类型定义
 * @module color/define
 */

import { type LogFeat, type LogLevel } from '../types';

/**
 * RGB 颜色值类型
 * @typedef {[number, number, number]} ColorHex
 * @description 表示 RGB 颜色值的三元组，每个值范围 0-255
 * @example [255, 0, 0] // 红色
 * @example [0, 255, 0] // 绿色
 * @example [0, 0, 255] // 蓝色
 */
export type ColorHex = [number, number, number];

/**
 * 默认日志级别颜色（RGB）。
 *
 * 说明：
 * - `info` 未显式配置时，会走“无颜色/默认样式”路径（由具体渲染逻辑决定）。
 * - 该对象仅提供建议色值；最终显示效果可能会被 `betterLogColor(...)` 等逻辑进一步调整。
 */
export const ColorHexDefault: { [key in LogLevel]?: ColorHex } = {
  warn: [255, 185, 0],
  error: [255, 39, 64],
  debug: [184, 211, 237]
};

/**
 * 内置功能标签（`label` / `step`）的 ANSI 颜色索引默认值。
 *
 * 说明：该值用于 `wrapAnsiIndex(...)`，仅在 ANSI 终端环境下生效。
 */
export const ColorIdxDefault: { [key in LogFeat]: number } = {
  label: 32,
  step: 35
};

/**
 * 日志颜色样式接口
 * @interface LogColorStyle
 * @description 定义日志输出的颜色样式，包括背景色和内容颜色
 */
export interface LogColorStyle {
  /** 背景颜色，RGB 三元组 */
  backgroundColor?: ColorHex;
  /** 内容颜色，RGB 三元组 */
  contentColor?: ColorHex;
}
