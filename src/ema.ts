// Exponential moving average with 86% total weight

import dma from "./dma";

export default (data: number[], size: number) => dma(data, 2 / (size + 1));
