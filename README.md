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
            - small
                - functor-arraylike-iterable@0.1.0 x 428,704 ops/sec ±0.69% (93 runs sampled)
                - functor-iterable@0.1.1 x 384,662 ops/sec ±0.55% (92 runs sampled)
                - imlazy@6.3.1 x 138,544 ops/sec ±4.50% (77 runs sampled)
                - ramda@0.24.1 x 626,246 ops/sec ±0.30% (92 runs sampled)
                - immutable@3.8.1 x 100,624 ops/sec ±3.02% (84 runs sampled)
                - native x 568,507 ops/sec ±0.32% (90 runs sampled)
                Fastest is ramda@0.24.1
            - medium
                - functor-arraylike-iterable@0.1.0 x 12,195 ops/sec ±0.26% (95 runs sampled)
                - functor-iterable@0.1.1 x 10,525 ops/sec ±0.26% (93 runs sampled)
                - imlazy@6.3.1 x 9,276 ops/sec ±4.50% (84 runs sampled)
                - ramda@0.24.1 x 26,302 ops/sec ±0.92% (87 runs sampled)
                - immutable@3.8.1 x 3,487 ops/sec ±2.08% (86 runs sampled)
                - native x 20,469 ops/sec ±0.92% (94 runs sampled)
                Fastest is ramda@0.24.1
            - big
                - functor-arraylike-iterable@0.1.0 x 380 ops/sec ±0.33% (89 runs sampled)
                - functor-iterable@0.1.1 x 340 ops/sec ±0.32% (88 runs sampled)
                - imlazy@6.3.1 x 301 ops/sec ±2.68% (82 runs sampled)
                - ramda@0.24.1 x 819 ops/sec ±0.98% (92 runs sampled)
                - immutable@3.8.1 x 90.48 ops/sec ±2.50% (76 runs sampled)
                - native x 635 ops/sec ±0.33% (92 runs sampled)
                Fastest is ramda@0.24.1
    multiple maps
        array
            iterable size
                - small
                    - functor-arraylike-iterable@0.1.0 x 130,343 ops/sec ±0.60% (91 runs sampled)
                    - functor-iterable@0.1.1 x 123,706 ops/sec ±0.56% (93 runs sampled)
                    - imlazy@6.3.1 x 24,679 ops/sec ±3.72% (78 runs sampled)
                    - ramda@0.24.1 x 80,946 ops/sec ±0.32% (94 runs sampled)
                    - immutable@3.8.1 x 15,228 ops/sec ±3.05% (83 runs sampled)
                    - native x 60,840 ops/sec ±0.74% (95 runs sampled)
                    Fastest is functor-arraylike-iterable@0.1.0
                - medium
                    - functor-arraylike-iterable@0.1.0 x 6,142 ops/sec ±1.94% (93 runs sampled)
                    - functor-iterable@0.1.1 x 5,706 ops/sec ±1.47% (91 runs sampled)
                    - imlazy@6.3.1 x 3,449 ops/sec ±3.48% (88 runs sampled)
                    - ramda@0.24.1 x 6,835 ops/sec ±0.31% (91 runs sampled)
                    - immutable@3.8.1 x 606 ops/sec ±2.69% (82 runs sampled)
                    - native x 2,031 ops/sec ±0.48% (93 runs sampled)
                    Fastest is ramda@0.24.1
                - big
                    - functor-arraylike-iterable@0.1.0 x 195 ops/sec ±0.48% (81 runs sampled)
                    - functor-iterable@0.1.1 x 185 ops/sec ±0.73% (84 runs sampled)
                    - imlazy@6.3.1 x 128 ops/sec ±2.24% (79 runs sampled)
                    - ramda@0.24.1 x 239 ops/sec ±0.71% (85 runs sampled)
                    - immutable@3.8.1 x 15.35 ops/sec ±1.74% (41 runs sampled)
                    - native x 64.51 ops/sec ±0.47% (66 runs sampled)
                    Fastest is ramda@0.24.1
            number of maps
                - few
                    - functor-arraylike-iterable@0.1.0 x 9,589 ops/sec ±1.38% (93 runs sampled)
                    - functor-iterable@0.1.1 x 8,756 ops/sec ±1.90% (89 runs sampled)
                    - imlazy@6.3.1 x 5,917 ops/sec ±5.15% (82 runs sampled)
                    - ramda@0.24.1 x 16,198 ops/sec ±0.77% (93 runs sampled)
                    - immutable@3.8.1 x 1,731 ops/sec ±2.39% (88 runs sampled)
                    - native x 6,955 ops/sec ±0.31% (95 runs sampled)
                    Fastest is ramda@0.24.1
                - enough
                    - functor-arraylike-iterable@0.1.0 x 6,140 ops/sec ±1.46% (94 runs sampled)
                    - functor-iterable@0.1.1 x 5,748 ops/sec ±1.55% (93 runs sampled)
                    - imlazy@6.3.1 x 3,400 ops/sec ±3.53% (88 runs sampled)
                    - ramda@0.24.1 x 7,117 ops/sec ±0.98% (94 runs sampled)
                    - immutable@3.8.1 x 624 ops/sec ±2.77% (80 runs sampled)
                    - native x 2,076 ops/sec ±0.44% (94 runs sampled)
                    Fastest is ramda@0.24.1
                - a lot of
                    - functor-arraylike-iterable@0.1.0 x 2,196 ops/sec ±1.13% (94 runs sampled)
                    - functor-iterable@0.1.1 x 2,133 ops/sec ±1.17% (94 runs sampled)
                    - imlazy@6.3.1 x 1,320 ops/sec ±2.30% (89 runs sampled)
                    - ramda@0.24.1 x 1,676 ops/sec ±0.85% (93 runs sampled)
                    - immutable@3.8.1 x 169 ops/sec ±2.69% (77 runs sampled)
                    - native x 567 ops/sec ±1.15% (90 runs sampled)
                    Fastest is functor-arraylike-iterable@0.1.0
```
