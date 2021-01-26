var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":177,"id":27032,"methods":[{"el":95,"sc":2,"sl":47},{"el":157,"sc":2,"sl":107},{"el":170,"sc":2,"sl":168},{"el":175,"sc":2,"sl":172}],"name":"SwapLeg","sl":32}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_125":{"methods":[{"sl":47},{"sl":168},{"sl":172}],"name":"testStochasticCurves","pass":true,"statements":[{"sl":48},{"sl":50},{"sl":59},{"sl":60},{"sl":61},{"sl":62},{"sl":63},{"sl":70},{"sl":74},{"sl":75},{"sl":76},{"sl":79},{"sl":83},{"sl":86},{"sl":87},{"sl":89},{"sl":94},{"sl":169},{"sl":174}]},"test_273":{"methods":[{"sl":47},{"sl":168},{"sl":172}],"name":"testFloatLeg","pass":true,"statements":[{"sl":48},{"sl":50},{"sl":59},{"sl":60},{"sl":61},{"sl":62},{"sl":63},{"sl":70},{"sl":74},{"sl":75},{"sl":76},{"sl":79},{"sl":86},{"sl":87},{"sl":89},{"sl":94},{"sl":169},{"sl":174}]},"test_274":{"methods":[{"sl":47},{"sl":168},{"sl":172}],"name":"testCMSSpreadLeg","pass":true,"statements":[{"sl":48},{"sl":50},{"sl":59},{"sl":60},{"sl":61},{"sl":62},{"sl":63},{"sl":70},{"sl":74},{"sl":75},{"sl":76},{"sl":77},{"sl":86},{"sl":87},{"sl":89},{"sl":94},{"sl":169},{"sl":174}]},"test_34":{"methods":[{"sl":47},{"sl":168},{"sl":172}],"name":"testFixLeg","pass":true,"statements":[{"sl":48},{"sl":50},{"sl":59},{"sl":60},{"sl":61},{"sl":62},{"sl":63},{"sl":70},{"sl":74},{"sl":75},{"sl":83},{"sl":86},{"sl":87},{"sl":89},{"sl":94},{"sl":169},{"sl":174}]},"test_386":{"methods":[{"sl":47},{"sl":168},{"sl":172}],"name":"testModelHierarchy","pass":true,"statements":[{"sl":48},{"sl":50},{"sl":59},{"sl":60},{"sl":61},{"sl":62},{"sl":63},{"sl":70},{"sl":74},{"sl":75},{"sl":76},{"sl":79},{"sl":86},{"sl":87},{"sl":89},{"sl":94},{"sl":169},{"sl":174}]},"test_402":{"methods":[{"sl":47},{"sl":168},{"sl":172}],"name":"testAgainstSwaption","pass":true,"statements":[{"sl":48},{"sl":50},{"sl":59},{"sl":60},{"sl":61},{"sl":62},{"sl":63},{"sl":70},{"sl":74},{"sl":75},{"sl":76},{"sl":79},{"sl":83},{"sl":86},{"sl":87},{"sl":89},{"sl":94},{"sl":169},{"sl":174}]},"test_413":{"methods":[{"sl":107},{"sl":172}],"name":"testFloatLeg","pass":true,"statements":[{"sl":108},{"sl":109},{"sl":120},{"sl":121},{"sl":122},{"sl":124},{"sl":125},{"sl":126},{"sl":127},{"sl":128},{"sl":135},{"sl":139},{"sl":140},{"sl":141},{"sl":144},{"sl":151},{"sl":153},{"sl":156},{"sl":174}]},"test_429":{"methods":[{"sl":47},{"sl":168},{"sl":172}],"name":"testCMSFloatLeg","pass":true,"statements":[{"sl":48},{"sl":50},{"sl":59},{"sl":60},{"sl":61},{"sl":62},{"sl":63},{"sl":70},{"sl":74},{"sl":75},{"sl":76},{"sl":79},{"sl":86},{"sl":87},{"sl":89},{"sl":94},{"sl":169},{"sl":174}]},"test_453":{"methods":[{"sl":47},{"sl":168},{"sl":172}],"name":"testLIBORInArrearsFloatLeg","pass":true,"statements":[{"sl":48},{"sl":50},{"sl":59},{"sl":60},{"sl":61},{"sl":62},{"sl":63},{"sl":70},{"sl":74},{"sl":75},{"sl":76},{"sl":79},{"sl":86},{"sl":87},{"sl":89},{"sl":94},{"sl":169},{"sl":174}]},"test_476":{"methods":[{"sl":47},{"sl":168},{"sl":172}],"name":"testLIBORInArrearsFloatLeg","pass":true,"statements":[{"sl":48},{"sl":50},{"sl":59},{"sl":60},{"sl":61},{"sl":62},{"sl":63},{"sl":70},{"sl":74},{"sl":75},{"sl":76},{"sl":79},{"sl":86},{"sl":87},{"sl":89},{"sl":94},{"sl":169},{"sl":174}]},"test_494":{"methods":[{"sl":47},{"sl":168},{"sl":172}],"name":"testSwap","pass":true,"statements":[{"sl":48},{"sl":50},{"sl":59},{"sl":60},{"sl":61},{"sl":62},{"sl":63},{"sl":70},{"sl":74},{"sl":75},{"sl":76},{"sl":79},{"sl":83},{"sl":86},{"sl":87},{"sl":89},{"sl":94},{"sl":169},{"sl":174}]},"test_530":{"methods":[{"sl":47},{"sl":168},{"sl":172}],"name":"testExpectedPositiveExposure","pass":true,"statements":[{"sl":48},{"sl":50},{"sl":59},{"sl":60},{"sl":61},{"sl":62},{"sl":63},{"sl":70},{"sl":74},{"sl":75},{"sl":76},{"sl":79},{"sl":83},{"sl":86},{"sl":87},{"sl":89},{"sl":94},{"sl":169},{"sl":174}]},"test_86":{"methods":[{"sl":107},{"sl":172}],"name":"testFixLeg","pass":true,"statements":[{"sl":108},{"sl":109},{"sl":120},{"sl":121},{"sl":122},{"sl":124},{"sl":125},{"sl":126},{"sl":127},{"sl":128},{"sl":135},{"sl":139},{"sl":140},{"sl":148},{"sl":151},{"sl":153},{"sl":156},{"sl":174}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [125, 530, 273, 476, 402, 494, 429, 453, 274, 34, 386], [125, 530, 273, 476, 402, 494, 429, 453, 274, 34, 386], [], [125, 530, 273, 476, 402, 494, 429, 453, 274, 34, 386], [], [], [], [], [], [], [], [], [125, 530, 273, 476, 402, 494, 429, 453, 274, 34, 386], [125, 530, 273, 476, 402, 494, 429, 453, 274, 34, 386], [125, 530, 273, 476, 402, 494, 429, 453, 274, 34, 386], [125, 530, 273, 476, 402, 494, 429, 453, 274, 34, 386], [125, 530, 273, 476, 402, 494, 429, 453, 274, 34, 386], [], [], [], [], [], [], [125, 530, 273, 476, 402, 494, 429, 453, 274, 34, 386], [], [], [], [125, 530, 273, 476, 402, 494, 429, 453, 274, 34, 386], [125, 530, 273, 476, 402, 494, 429, 453, 274, 34, 386], [125, 530, 273, 476, 402, 494, 429, 453, 274, 386], [274], [], [125, 530, 273, 476, 402, 494, 429, 453, 386], [], [], [], [125, 530, 402, 494, 34], [], [], [125, 530, 273, 476, 402, 494, 429, 453, 274, 34, 386], [125, 530, 273, 476, 402, 494, 429, 453, 274, 34, 386], [], [125, 530, 273, 476, 402, 494, 429, 453, 274, 34, 386], [], [], [], [], [125, 530, 273, 476, 402, 494, 429, 453, 274, 34, 386], [], [], [], [], [], [], [], [], [], [], [], [], [86, 413], [86, 413], [86, 413], [], [], [], [], [], [], [], [], [], [], [86, 413], [86, 413], [86, 413], [], [86, 413], [86, 413], [86, 413], [86, 413], [86, 413], [], [], [], [], [], [], [86, 413], [], [], [], [86, 413], [86, 413], [413], [], [], [413], [], [], [], [86], [], [], [86, 413], [], [86, 413], [], [], [86, 413], [], [], [], [], [], [], [], [], [], [], [], [125, 530, 273, 476, 402, 494, 429, 453, 274, 34, 386], [125, 530, 273, 476, 402, 494, 429, 453, 274, 34, 386], [], [], [86, 125, 530, 273, 476, 402, 494, 429, 453, 274, 34, 413, 386], [], [86, 125, 530, 273, 476, 402, 494, 429, 453, 274, 34, 413, 386], [], [], []]