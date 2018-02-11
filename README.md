Benchmark [functor-iterable](https://github.com/xgbuils/functor-iterable) over...

- ramda
- imlazy
- inmutable.js
- native

## Usage

Clone and:

``` bash
npm install
npm run perf
```

## Benchmarks

### Node 6

```
benchmark
    map
        array
            - small
                - functor-arraylike-iterable@0.1.0 x 71,839 ops/sec ±1.97% (93 runs sampled)
                - functor-iterable@0.1.1 x 61,387 ops/sec ±1.38% (89 runs sampled)
                - imlazy@6.3.1 x 40,319 ops/sec ±2.19% (87 runs sampled)
                - ramda@0.24.1 x 347,476 ops/sec ±0.18% (86 runs sampled)
                - immutable@3.8.1 x 77,541 ops/sec ±1.98% (86 runs sampled)
                - native x 60,265 ops/sec ±0.88% (92 runs sampled)
                Fastest is ramda@0.24.1
            - medium
                - functor-arraylike-iterable@0.1.0 x 2,374 ops/sec ±0.82% (91 runs sampled)
                - functor-iterable@0.1.1 x 2,040 ops/sec ±1.10% (93 runs sampled)
                - imlazy@6.3.1 x 2,020 ops/sec ±1.61% (90 runs sampled)
                - ramda@0.24.1 x 12,230 ops/sec ±0.77% (93 runs sampled)
                - immutable@3.8.1 x 3,006 ops/sec ±2.00% (89 runs sampled)
                - native x 1,905 ops/sec ±0.72% (91 runs sampled)
                Fastest is ramda@0.24.1
            - big
                - functor-arraylike-iterable@0.1.0 x 74.08 ops/sec ±0.27% (74 runs sampled)
                - functor-iterable@0.1.1 x 63.72 ops/sec ±1.39% (65 runs sampled)
                - imlazy@6.3.1 x 65.13 ops/sec ±0.73% (66 runs sampled)
                - ramda@0.24.1 x 367 ops/sec ±1.12% (85 runs sampled)
                - immutable@3.8.1 x 81.58 ops/sec ±1.73% (69 runs sampled)
                - native x 49.30 ops/sec ±1.78% (62 runs sampled)
                Fastest is ramda@0.24.1
    multiple maps
        array
            iterable size
                - small
                    - functor-arraylike-iterable@0.1.0 x 49,471 ops/sec ±1.52% (90 runs sampled)
                    - functor-iterable@0.1.1 x 42,072 ops/sec ±2.62% (84 runs sampled)
                    - imlazy@6.3.1 x 10,390 ops/sec ±3.92% (65 runs sampled)
                    - ramda@0.24.1 x 51,122 ops/sec ±1.08% (87 runs sampled)
                    - immutable@3.8.1 x 12,704 ops/sec ±2.40% (82 runs sampled)
                    - native x 5,748 ops/sec ±2.95% (89 runs sampled)
                    Fastest is ramda@0.24.1
                - medium
                    - functor-arraylike-iterable@0.1.0 x 1,869 ops/sec ±0.62% (93 runs sampled)
                    - functor-iterable@0.1.1 x 1,590 ops/sec ±2.30% (88 runs sampled)
                    - imlazy@6.3.1 x 1,329 ops/sec ±2.14% (86 runs sampled)
                    - ramda@0.24.1 x 4,097 ops/sec ±0.37% (92 runs sampled)
                    - immutable@3.8.1 x 527 ops/sec ±1.92% (85 runs sampled)
                    - native x 193 ops/sec ±0.81% (86 runs sampled)
                    Fastest is ramda@0.24.1
                - big
                    - functor-arraylike-iterable@0.1.0 x 57.61 ops/sec ±0.85% (72 runs sampled)
                    - functor-iterable@0.1.1 x 50.13 ops/sec ±0.92% (63 runs sampled)
                    - imlazy@6.3.1 x 46.02 ops/sec ±1.25% (59 runs sampled)
                    - ramda@0.24.1 x 124 ops/sec ±1.18% (77 runs sampled)
                    - immutable@3.8.1 x 13.82 ops/sec ±2.47% (38 runs sampled)
                    - native x 4.74 ops/sec ±5.05% (16 runs sampled)
                    Fastest is ramda@0.24.1
            number of maps
                - few
                    - functor-arraylike-iterable@0.1.0 x 2,146 ops/sec ±1.53% (89 runs sampled)
                    - functor-iterable@0.1.1 x 1,930 ops/sec ±1.10% (92 runs sampled)
                    - imlazy@6.3.1 x 1,715 ops/sec ±1.71% (89 runs sampled)
                    - ramda@0.24.1 x 8,217 ops/sec ±1.03% (92 runs sampled)
                    - immutable@3.8.1 x 1,451 ops/sec ±1.73% (88 runs sampled)
                    - native x 653 ops/sec ±0.20% (90 runs sampled)
                    Fastest is ramda@0.24.1
                - enough
                    - functor-arraylike-iterable@0.1.0 x 1,835 ops/sec ±1.10% (90 runs sampled)
                    - functor-iterable@0.1.1 x 1,652 ops/sec ±1.31% (91 runs sampled)
                    - imlazy@6.3.1 x 1,371 ops/sec ±1.66% (88 runs sampled)
                    - ramda@0.24.1 x 4,089 ops/sec ±1.36% (89 runs sampled)
                    - immutable@3.8.1 x 537 ops/sec ±1.84% (80 runs sampled)
                    - native x 195 ops/sec ±0.60% (87 runs sampled)
                    Fastest is ramda@0.24.1
                - a lot of
                    - functor-arraylike-iterable@0.1.0 x 1,169 ops/sec ±0.28% (93 runs sampled)
                    - functor-iterable@0.1.1 x 1,066 ops/sec ±0.97% (91 runs sampled)
                    - imlazy@6.3.1 x 508 ops/sec ±1.34% (86 runs sampled)
                    - ramda@0.24.1 x 1,452 ops/sec ±1.12% (93 runs sampled)
                    - immutable@3.8.1 x 166 ops/sec ±2.03% (75 runs sampled)
                    - native x 52.51 ops/sec ±2.31% (66 runs sampled)
                    Fastest is ramda@0.24.1
```

### Node 8

```
benchmark
    map
        array
            - small size (32 items)
                - ramda@0.25.0 x 985,478 ops/sec ±1.02% (86 runs sampled)
                - immutable@3.8.2 x 52,751 ops/sec ±1.83% (82 runs sampled)
                - imlazy@6.3.1 x 80,952 ops/sec ±1.17% (84 runs sampled)
                - wu@2.1.0 x 94,335 ops/sec ±1.26% (81 runs sampled)
                - es-iter@1.1.1 x 68,650 ops/sec ±1.17% (82 runs sampled)
                - functor-iterable@0.1.1 x 119,323 ops/sec ±1.27% (82 runs sampled)
                - functor-iterable@0.1.2 x 121,959 ops/sec ±0.88% (84 runs sampled)
                - functor-arraylike-iterable@0.1.0 x 136,049 ops/sec ±1.10% (85 runs sampled)
                - functor-arraylike-iterable@0.1.1 x 166,285 ops/sec ±1.22% (85 runs sampled)
                - functor-arraylike-iterable@0.1.2 x 174,565 ops/sec ±1.22% (82 runs sampled)
                - functor-filter-arraylike-iterable@0.1.1 x 110,222 ops/sec ±1.05% (82 runs sampled)
                - transform-arraylike-iterable@0.1.3 x 89,612 ops/sec ±1.21% (85 runs sampled)
                - transform-arraylike-iterable@0.1.8 x 98,201 ops/sec ±0.74% (87 runs sampled)
                - transform-arraylike-iterable@0.1.9 x 97,091 ops/sec ±1.99% (86 runs sampled)
                - transform-arraylike-iterable@0.1.10 x 98,510 ops/sec ±0.90% (85 runs sampled)
                - transform-iterable@0.1.0 x 68,481 ops/sec ±0.97% (86 runs sampled)
                - native x 965,813 ops/sec ±0.89% (88 runs sampled)
                Fastest is ramda@0.25.0
            - medium size (1024 items)
                - ramda@0.25.0 x 56,024 ops/sec ±1.31% (82 runs sampled)
                - immutable@3.8.2 x 1,859 ops/sec ±1.23% (82 runs sampled)
                - imlazy@6.3.1 x 4,379 ops/sec ±1.07% (87 runs sampled)
                - wu@2.1.0 x 3,997 ops/sec ±0.86% (86 runs sampled)
                - es-iter@1.1.1 x 4,402 ops/sec ±0.91% (86 runs sampled)
                - functor-iterable@0.1.1 x 4,416 ops/sec ±1.12% (86 runs sampled)
                - functor-iterable@0.1.2 x 4,387 ops/sec ±1.05% (86 runs sampled)
                - functor-arraylike-iterable@0.1.0 x 5,179 ops/sec ±1.10% (85 runs sampled)
                - functor-arraylike-iterable@0.1.1 x 7,068 ops/sec ±1.26% (88 runs sampled)
                - functor-arraylike-iterable@0.1.2 x 7,199 ops/sec ±0.99% (84 runs sampled)
                - functor-filter-arraylike-iterable@0.1.1 x 4,751 ops/sec ±0.92% (86 runs sampled)
                - transform-arraylike-iterable@0.1.3 x 3,889 ops/sec ±0.77% (89 runs sampled)
                - transform-arraylike-iterable@0.1.8 x 3,893 ops/sec ±1.10% (84 runs sampled)
                - transform-arraylike-iterable@0.1.9 x 3,965 ops/sec ±1.44% (86 runs sampled)
                - transform-arraylike-iterable@0.1.10 x 3,841 ops/sec ±1.13% (86 runs sampled)
                - transform-iterable@0.1.0 x 2,494 ops/sec ±1.60% (82 runs sampled)
                - native x 36,409 ops/sec ±0.72% (87 runs sampled)
                Fastest is ramda@0.25.0
            - big size (32768 items)
                - ramda@0.25.0 x 1,831 ops/sec ±1.35% (88 runs sampled)
                - immutable@3.8.2 x 50.25 ops/sec ±0.44% (62 runs sampled)
                - imlazy@6.3.1 x 145 ops/sec ±1.17% (77 runs sampled)
                - wu@2.1.0 x 135 ops/sec ±0.38% (79 runs sampled)
                - es-iter@1.1.1 x 154 ops/sec ±0.74% (80 runs sampled)
                - functor-iterable@0.1.1 x 143 ops/sec ±0.88% (75 runs sampled)
                - functor-iterable@0.1.2 x 139 ops/sec ±1.82% (73 runs sampled)
                - functor-arraylike-iterable@0.1.0 x 169 ops/sec ±0.96% (79 runs sampled)
                - functor-arraylike-iterable@0.1.1 x 237 ops/sec ±0.65% (79 runs sampled)
                - functor-arraylike-iterable@0.1.2 x 235 ops/sec ±1.53% (79 runs sampled)
                - functor-filter-arraylike-iterable@0.1.1 x 157 ops/sec ±0.65% (75 runs sampled)
                - transform-arraylike-iterable@0.1.3 x 125 ops/sec ±0.72% (74 runs sampled)
                - transform-arraylike-iterable@0.1.8 x 126 ops/sec ±0.85% (74 runs sampled)
                - transform-arraylike-iterable@0.1.9 x 130 ops/sec ±0.78% (76 runs sampled)
                - transform-arraylike-iterable@0.1.10 x 128 ops/sec ±0.94% (75 runs sampled)
                - transform-iterable@0.1.0 x 81.97 ops/sec ±1.39% (66 runs sampled)
                - native x 1,147 ops/sec ±0.55% (88 runs sampled)
                Fastest is ramda@0.25.0
        computed iterable
            - small size (32 items)
                - ramda@0.25.0 x 185,605 ops/sec ±0.98% (83 runs sampled)
                - immutable@3.8.2 x 37,461 ops/sec ±2.19% (81 runs sampled)
                - imlazy@6.3.1 x 69,006 ops/sec ±1.30% (85 runs sampled)
                - wu@2.1.0 x 67,412 ops/sec ±0.73% (84 runs sampled)
                - es-iter@1.1.1 x 59,636 ops/sec ±2.83% (76 runs sampled)
                - functor-iterable@0.1.1 x 91,374 ops/sec ±0.83% (89 runs sampled)
                - functor-iterable@0.1.2 x 92,159 ops/sec ±0.83% (89 runs sampled)
                - transform-iterable@0.1.0 x 53,925 ops/sec ±0.86% (86 runs sampled)
                Fastest is ramda@0.25.0
            - medium size (1024 items)
                - ramda@0.25.0 x 17,238 ops/sec ±0.97% (80 runs sampled)
                - immutable@3.8.2 x 1,394 ops/sec ±1.55% (83 runs sampled)
                - imlazy@6.3.1 x 3,433 ops/sec ±2.14% (83 runs sampled)
                - wu@2.1.0 x 2,806 ops/sec ±0.71% (89 runs sampled)
                - es-iter@1.1.1 x 3,274 ops/sec ±1.03% (85 runs sampled)
                - functor-iterable@0.1.1 x 3,299 ops/sec ±0.69% (89 runs sampled)
                - functor-iterable@0.1.2 x 3,207 ops/sec ±0.71% (88 runs sampled)
                - transform-iterable@0.1.0 x 1,943 ops/sec ±0.83% (84 runs sampled)
                Fastest is ramda@0.25.0
            - big size (32768 items)
                - ramda@0.25.0 x 599 ops/sec ±0.97% (85 runs sampled)
                - immutable@3.8.2 x 42.27 ops/sec ±1.26% (53 runs sampled)
                - imlazy@6.3.1 x 117 ops/sec ±0.90% (79 runs sampled)
                - wu@2.1.0 x 92.07 ops/sec ±0.36% (72 runs sampled)
                - es-iter@1.1.1 x 113 ops/sec ±0.70% (75 runs sampled)
                - functor-iterable@0.1.1 x 107 ops/sec ±1.39% (73 runs sampled)
                - functor-iterable@0.1.2 x 108 ops/sec ±0.78% (73 runs sampled)
                - transform-iterable@0.1.0 x 63.31 ops/sec ±1.14% (62 runs sampled)
                Fastest is ramda@0.25.0
    multiple maps
        array
            iterable size
                - small (32 items)
                    - ramda@0.25.0 x 46,601 ops/sec ±1.17% (86 runs sampled)
                    - immutable@3.8.2 x 7,557 ops/sec ±2.20% (75 runs sampled)
                    - imlazy@6.3.1 x 15,768 ops/sec ±3.34% (66 runs sampled)
                    - wu@2.1.0 x 11,610 ops/sec ±0.90% (84 runs sampled)
                    - es-iter@1.1.1 x 8,611 ops/sec ±2.79% (74 runs sampled)
                    - functor-iterable@0.1.1 x 49,455 ops/sec ±0.96% (86 runs sampled)
                    - functor-iterable@0.1.2 x 57,526 ops/sec ±1.25% (88 runs sampled)
                    - functor-arraylike-iterable@0.1.0 x 57,417 ops/sec ±1.16% (86 runs sampled)
                    - functor-arraylike-iterable@0.1.1 x 61,931 ops/sec ±1.96% (83 runs sampled)
                    - functor-arraylike-iterable@0.1.2 x 64,130 ops/sec ±0.87% (84 runs sampled)
                    - functor-filter-arraylike-iterable@0.1.1 x 45,046 ops/sec ±0.74% (86 runs sampled)
                    - transform-arraylike-iterable@0.1.3 x 38,540 ops/sec ±0.86% (86 runs sampled)
                    - transform-arraylike-iterable@0.1.8 x 53,666 ops/sec ±0.72% (89 runs sampled)
                    - transform-arraylike-iterable@0.1.9 x 52,791 ops/sec ±0.91% (88 runs sampled)
                    - transform-arraylike-iterable@0.1.10 x 53,731 ops/sec ±1.12% (88 runs sampled)
                    - transform-iterable@0.1.0 x 41,901 ops/sec ±0.88% (85 runs sampled)
                    - native x 91,504 ops/sec ±1.72% (90 runs sampled)
                    Fastest is native
                - medium (1024 items)
                    - ramda@0.25.0 x 4,533 ops/sec ±0.59% (86 runs sampled)
                    - immutable@3.8.2 x 319 ops/sec ±0.98% (78 runs sampled)
                    - imlazy@6.3.1 x 2,440 ops/sec ±1.55% (81 runs sampled)
                    - wu@2.1.0 x 564 ops/sec ±1.48% (85 runs sampled)
                    - es-iter@1.1.1 x 569 ops/sec ±0.67% (85 runs sampled)
                    - functor-iterable@0.1.1 x 2,267 ops/sec ±1.18% (85 runs sampled)
                    - functor-iterable@0.1.2 x 2,265 ops/sec ±1.61% (85 runs sampled)
                    - functor-arraylike-iterable@0.1.0 x 2,760 ops/sec ±1.41% (84 runs sampled)
                    - functor-arraylike-iterable@0.1.1 x 3,257 ops/sec ±1.01% (85 runs sampled)
                    - functor-arraylike-iterable@0.1.2 x 3,227 ops/sec ±0.90% (85 runs sampled)
                    - functor-filter-arraylike-iterable@0.1.1 x 2,572 ops/sec ±1.01% (86 runs sampled)
                    - transform-arraylike-iterable@0.1.3 x 2,302 ops/sec ±1.22% (87 runs sampled)
                    - transform-arraylike-iterable@0.1.8 x 2,370 ops/sec ±0.81% (88 runs sampled)
                    - transform-arraylike-iterable@0.1.9 x 2,355 ops/sec ±1.00% (88 runs sampled)
                    - transform-arraylike-iterable@0.1.10 x 2,336 ops/sec ±1.00% (87 runs sampled)
                    - transform-iterable@0.1.0 x 1,707 ops/sec ±1.44% (85 runs sampled)
                    - native x 3,040 ops/sec ±0.83% (89 runs sampled)
                    Fastest is ramda@0.25.0
                - big (32768 items)
                    - ramda@0.25.0 x 154 ops/sec ±0.46% (81 runs sampled)
                    - immutable@3.8.2 x 8.34 ops/sec ±1.50% (24 runs sampled)
                    - imlazy@6.3.1 x 92.97 ops/sec ±1.33% (73 runs sampled)
                    - wu@2.1.0 x 17.72 ops/sec ±0.96% (45 runs sampled)
                    - es-iter@1.1.1 x 18.91 ops/sec ±1.12% (48 runs sampled)
                    - functor-iterable@0.1.1 x 74.21 ops/sec ±0.92% (70 runs sampled)
                    - functor-iterable@0.1.2 x 73.88 ops/sec ±0.68% (70 runs sampled)
                    - functor-arraylike-iterable@0.1.0 x 92.70 ops/sec ±0.60% (72 runs sampled)
                    - functor-arraylike-iterable@0.1.1 x 107 ops/sec ±0.49% (73 runs sampled)
                    - functor-arraylike-iterable@0.1.2 x 107 ops/sec ±0.79% (73 runs sampled)
                    - functor-filter-arraylike-iterable@0.1.1 x 85.11 ops/sec ±1.28% (68 runs sampled)
                    - transform-arraylike-iterable@0.1.3 x 75.34 ops/sec ±0.22% (71 runs sampled)
                    - transform-arraylike-iterable@0.1.8 x 77.78 ops/sec ±0.83% (73 runs sampled)
                    - transform-arraylike-iterable@0.1.9 x 77.44 ops/sec ±0.52% (73 runs sampled)
                    - transform-arraylike-iterable@0.1.10 x 76.70 ops/sec ±0.29% (73 runs sampled)
                    - transform-iterable@0.1.0 x 56.52 ops/sec ±0.49% (56 runs sampled)
                    - native x 90.40 ops/sec ±1.09% (72 runs sampled)
                    Fastest is ramda@0.25.0
            number of maps
                - few maps (x3)
                    - ramda@0.25.0 x 17,092 ops/sec ±1.12% (87 runs sampled)
                    - immutable@3.8.2 x 955 ops/sec ±1.25% (79 runs sampled)
                    - imlazy@6.3.1 x 3,586 ops/sec ±1.01% (85 runs sampled)
                    - wu@2.1.0 x 2,020 ops/sec ±0.92% (87 runs sampled)
                    - es-iter@1.1.1 x 1,771 ops/sec ±0.91% (85 runs sampled)
                    - functor-iterable@0.1.1 x 3,417 ops/sec ±1.32% (88 runs sampled)
                    - functor-iterable@0.1.2 x 3,352 ops/sec ±1.27% (88 runs sampled)
                    - functor-arraylike-iterable@0.1.0 x 4,200 ops/sec ±1.14% (86 runs sampled)
                    - functor-arraylike-iterable@0.1.1 x 5,342 ops/sec ±1.12% (88 runs sampled)
                    - functor-arraylike-iterable@0.1.2 x 5,281 ops/sec ±1.15% (86 runs sampled)
                    - functor-filter-arraylike-iterable@0.1.1 x 3,880 ops/sec ±1.11% (86 runs sampled)
                    - transform-arraylike-iterable@0.1.3 x 3,227 ops/sec ±1.46% (84 runs sampled)
                    - transform-arraylike-iterable@0.1.8 x 3,313 ops/sec ±0.74% (87 runs sampled)
                    - transform-arraylike-iterable@0.1.9 x 3,335 ops/sec ±1.53% (87 runs sampled)
                    - transform-arraylike-iterable@0.1.10 x 3,422 ops/sec ±0.73% (88 runs sampled)
                    - transform-iterable@0.1.0 x 2,167 ops/sec ±1.09% (85 runs sampled)
                    - native x 12,198 ops/sec ±1.00% (89 runs sampled)
                    Fastest is ramda@0.25.0
                - enough maps (x12)
                    - ramda@0.25.0 x 4,463 ops/sec ±0.77% (89 runs sampled)
                    - immutable@3.8.2 x 320 ops/sec ±1.38% (76 runs sampled)
                    - imlazy@6.3.1 x 2,345 ops/sec ±2.21% (77 runs sampled)
                    - wu@2.1.0 x 559 ops/sec ±1.24% (84 runs sampled)
                    - es-iter@1.1.1 x 558 ops/sec ±1.06% (84 runs sampled)
                    - functor-iterable@0.1.1 x 2,276 ops/sec ±0.78% (86 runs sampled)
                    - functor-iterable@0.1.2 x 2,375 ops/sec ±0.80% (88 runs sampled)
                    - functor-arraylike-iterable@0.1.0 x 2,731 ops/sec ±0.99% (87 runs sampled)
                    - functor-arraylike-iterable@0.1.1 x 3,300 ops/sec ±0.61% (88 runs sampled)
                    - functor-arraylike-iterable@0.1.2 x 3,250 ops/sec ±1.15% (85 runs sampled)
                    - functor-filter-arraylike-iterable@0.1.1 x 2,556 ops/sec ±0.86% (88 runs sampled)
                    - transform-arraylike-iterable@0.1.3 x 2,188 ops/sec ±1.00% (87 runs sampled)
                    - transform-arraylike-iterable@0.1.8 x 2,289 ops/sec ±0.89% (86 runs sampled)
                    - transform-arraylike-iterable@0.1.9 x 2,314 ops/sec ±1.22% (86 runs sampled)
                    - transform-arraylike-iterable@0.1.10 x 2,310 ops/sec ±1.07% (84 runs sampled)
                    - transform-iterable@0.1.0 x 1,733 ops/sec ±1.00% (84 runs sampled)
                    - native x 3,002 ops/sec ±1.27% (85 runs sampled)
                    Fastest is ramda@0.25.0
                - too much maps (x48)
                    - ramda@0.25.0 x 728 ops/sec ±1.19% (85 runs sampled)
                    - immutable@3.8.2 x 70.07 ops/sec ±1.28% (59 runs sampled)
                    - imlazy@6.3.1 x 802 ops/sec ±1.25% (81 runs sampled)
                    - wu@2.1.0 x 137 ops/sec ±0.44% (73 runs sampled)
                    - es-iter@1.1.1 x 142 ops/sec ±0.43% (75 runs sampled)
                    - functor-iterable@0.1.1 x 864 ops/sec ±0.55% (88 runs sampled)
                    - functor-iterable@0.1.2 x 864 ops/sec ±0.93% (86 runs sampled)
                    - functor-arraylike-iterable@0.1.0 x 908 ops/sec ±0.93% (87 runs sampled)
                    - functor-arraylike-iterable@0.1.1 x 971 ops/sec ±0.92% (85 runs sampled)
                    - functor-arraylike-iterable@0.1.2 x 982 ops/sec ±0.57% (85 runs sampled)
                    - functor-filter-arraylike-iterable@0.1.1 x 888 ops/sec ±1.03% (86 runs sampled)
                    - transform-arraylike-iterable@0.1.3 x 844 ops/sec ±1.48% (87 runs sampled)
                    - transform-arraylike-iterable@0.1.8 x 852 ops/sec ±0.97% (85 runs sampled)
                    - transform-arraylike-iterable@0.1.9 x 862 ops/sec ±0.88% (84 runs sampled)
                    - transform-arraylike-iterable@0.1.10 x 862 ops/sec ±0.92% (84 runs sampled)
                    - transform-iterable@0.1.0 x 763 ops/sec ±1.06% (85 runs sampled)
                    - native x 548 ops/sec ±1.14% (86 runs sampled)
                    Fastest is functor-arraylike-iterable@0.1.2,functor-arraylike-iterable@0.1.1
            - build without processing (32768 items & 48 maps)
                - ramda@0.25.0 x 129,509 ops/sec ±1.32% (86 runs sampled)
                - immutable@3.8.2 x 1.73 ops/sec ±1.94% (9 runs sampled)
                - imlazy@6.3.1 x 3,429 ops/sec ±5.44% (69 runs sampled)
                - wu@2.1.0 x 12,121 ops/sec ±0.93% (86 runs sampled)
                - es-iter@1.1.1 x 5,734 ops/sec ±7.04% (63 runs sampled)
                - functor-iterable@0.1.1 x 68,606 ops/sec ±14.06% (72 runs sampled)
                - functor-iterable@0.1.2 x 193,700 ops/sec ±13.64% (78 runs sampled)
                - functor-arraylike-iterable@0.1.0 x 67,391 ops/sec ±13.57% (76 runs sampled)
                - functor-arraylike-iterable@0.1.1 x 71,062 ops/sec ±14.24% (79 runs sampled)
                - functor-arraylike-iterable@0.1.2 x 92,356 ops/sec ±17.65% (78 runs sampled)
                - functor-filter-arraylike-iterable@0.1.1 x 29,957 ops/sec ±2.25% (86 runs sampled)
                - transform-arraylike-iterable@0.1.3 x 23,694 ops/sec ±0.88% (87 runs sampled)
                - transform-arraylike-iterable@0.1.8 x 65,969 ops/sec ±1.36% (85 runs sampled)
                - transform-arraylike-iterable@0.1.9 x 65,312 ops/sec ±0.91% (86 runs sampled)
                - transform-arraylike-iterable@0.1.10 x 65,981 ops/sec ±0.89% (87 runs sampled)
                - transform-iterable@0.1.0 x 66,310 ops/sec ±0.86% (85 runs sampled)
                - native x 17.19 ops/sec ±0.75% (45 runs sampled)
                Fastest is functor-iterable@0.1.2,functor-arraylike-iterable@0.1.2
        computed iterable
            iterable size
                - small (32 items)
                    - ramda@0.25.0 x 27,682 ops/sec ±1.33% (83 runs sampled)
                    - immutable@3.8.2 x 7,027 ops/sec ±1.66% (80 runs sampled)
                    - imlazy@6.3.1 x 13,696 ops/sec ±2.55% (64 runs sampled)
                    - wu@2.1.0 x 9,910 ops/sec ±1.13% (84 runs sampled)
                    - es-iter@1.1.1 x 8,277 ops/sec ±2.91% (73 runs sampled)
                    - functor-iterable@0.1.1 x 59,501 ops/sec ±0.84% (89 runs sampled)
                    - functor-iterable@0.1.2 x 58,636 ops/sec ±1.40% (86 runs sampled)
                    - transform-iterable@0.1.0 x 37,173 ops/sec ±0.84% (85 runs sampled)
                    Fastest is functor-iterable@0.1.1
                - medium (1024 items)
                    - ramda@0.25.0 x 2,492 ops/sec ±0.97% (82 runs sampled)
                    - immutable@3.8.2 x 300 ops/sec ±1.53% (77 runs sampled)
                    - imlazy@6.3.1 x 1,596 ops/sec ±1.32% (83 runs sampled)
                    - wu@2.1.0 x 455 ops/sec ±1.01% (85 runs sampled)
                    - es-iter@1.1.1 x 578 ops/sec ±0.79% (84 runs sampled)
                    - functor-iterable@0.1.1 x 2,056 ops/sec ±1.08% (87 runs sampled)
                    - functor-iterable@0.1.2 x 2,082 ops/sec ±1.06% (87 runs sampled)
                    - transform-iterable@0.1.0 x 1,472 ops/sec ±1.43% (86 runs sampled)
                    Fastest is ramda@0.25.0
                - big (32768 items)
                    - ramda@0.25.0 x 87.25 ops/sec ±0.50% (69 runs sampled)
                    - immutable@3.8.2 x 7.79 ops/sec ±0.79% (23 runs sampled)
                    - imlazy@6.3.1 x 57.36 ops/sec ±0.52% (69 runs sampled)
                    - wu@2.1.0 x 14.21 ops/sec ±1.51% (38 runs sampled)
                    - es-iter@1.1.1 x 19.25 ops/sec ±0.81% (49 runs sampled)
                    - functor-iterable@0.1.1 x 67.24 ops/sec ±0.66% (65 runs sampled)
                    - functor-iterable@0.1.2 x 65.70 ops/sec ±1.26% (64 runs sampled)
                    - transform-iterable@0.1.0 x 47.85 ops/sec ±1.05% (59 runs sampled)
                    Fastest is ramda@0.25.0
            number of maps
                - few maps (x3)
                    - ramda@0.25.0 x 7,257 ops/sec ±1.15% (89 runs sampled)
                    - immutable@3.8.2 x 812 ops/sec ±1.46% (81 runs sampled)
                    - imlazy@6.3.1 x 2,712 ops/sec ±1.22% (85 runs sampled)
                    - wu@2.1.0 x 1,444 ops/sec ±0.69% (89 runs sampled)
                    - es-iter@1.1.1 x 1,701 ops/sec ±0.91% (85 runs sampled)
                    - functor-iterable@0.1.1 x 3,117 ops/sec ±1.15% (86 runs sampled)
                    - functor-iterable@0.1.2 x 3,085 ops/sec ±1.06% (85 runs sampled)
                    - transform-iterable@0.1.0 x 1,864 ops/sec ±0.96% (83 runs sampled)
                    Fastest is ramda@0.25.0
                - enough maps (x12)
                    - ramda@0.25.0 x 1,929 ops/sec ±1.07% (86 runs sampled)
                    - immutable@3.8.2 x 296 ops/sec ±1.66% (76 runs sampled)
                    - imlazy@6.3.1 x 1,568 ops/sec ±1.52% (79 runs sampled)
                    - wu@2.1.0 x 459 ops/sec ±0.55% (85 runs sampled)
                    - es-iter@1.1.1 x 581 ops/sec ±0.72% (85 runs sampled)
                    - functor-iterable@0.1.1 x 2,053 ops/sec ±0.88% (86 runs sampled)
                    - functor-iterable@0.1.2 x 2,052 ops/sec ±0.87% (85 runs sampled)
                    - transform-iterable@0.1.0 x 1,463 ops/sec ±0.83% (86 runs sampled)
                    Fastest is functor-iterable@0.1.1,functor-iterable@0.1.2
                - too much maps (x48)
                    - ramda@0.25.0 x 588 ops/sec ±1.38% (86 runs sampled)
                    - immutable@3.8.2 x 69.75 ops/sec ±0.84% (58 runs sampled)
                    - imlazy@6.3.1 x 564 ops/sec ±1.29% (83 runs sampled)
                    - wu@2.1.0 x 117 ops/sec ±0.93% (71 runs sampled)
                    - es-iter@1.1.1 x 143 ops/sec ±0.72% (75 runs sampled)
                    - functor-iterable@0.1.1 x 680 ops/sec ±0.72% (85 runs sampled)
                    - functor-iterable@0.1.2 x 685 ops/sec ±0.72% (87 runs sampled)
                    - transform-iterable@0.1.0 x 722 ops/sec ±0.93% (85 runs sampled)
                    Fastest is transform-iterable@0.1.0
            - build without processing (32768 items & 48 maps)
                - ramda@0.25.0 x 131,919 ops/sec ±1.02% (86 runs sampled)
                - immutable@3.8.2 x 1.73 ops/sec ±3.01% (9 runs sampled)
                - imlazy@6.3.1 x 3,528 ops/sec ±1.08% (68 runs sampled)
                - wu@2.1.0 x 12,294 ops/sec ±1.24% (88 runs sampled)
                - es-iter@1.1.1 x 5,680 ops/sec ±6.17% (61 runs sampled)
                - functor-iterable@0.1.1 x 248,190 ops/sec ±1.11% (86 runs sampled)
                - functor-iterable@0.1.2 x 273,743 ops/sec ±0.84% (84 runs sampled)
                - transform-iterable@0.1.0 x 67,936 ops/sec ±0.76% (88 runs sampled)
                Fastest is functor-iterable@0.1.2

```
