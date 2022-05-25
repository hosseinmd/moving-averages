// Smoothed moving average

import dma from "./dma";

export default (data: number[], size: number, times = 1) =>
  dma(data, times / size, 1);
