var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":152,"id":24191,"methods":[{"el":46,"sc":2,"sl":40},{"el":50,"sc":2,"sl":48},{"el":54,"sc":2,"sl":52},{"el":62,"sc":2,"sl":55},{"el":77,"sc":2,"sl":64},{"el":82,"sc":2,"sl":79},{"el":87,"sc":2,"sl":84},{"el":97,"sc":2,"sl":89},{"el":109,"sc":2,"sl":99},{"el":114,"sc":2,"sl":111},{"el":132,"sc":6,"sl":129},{"el":151,"sc":2,"sl":116}],"name":"LIBORCovarianceModelExponentialForm5Param","sl":28}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_100":{"methods":[{"sl":40},{"sl":48},{"sl":52},{"sl":55},{"sl":64},{"sl":79},{"sl":84},{"sl":89},{"sl":99}],"name":"testSwaptionCalibration[RandomVariableDifferentiableAADFactory [diracDeltaApproximationMethod=DISCRETE_DELTA, diracDeltaApproximationWidthPerStdDev=0.05, diracDeltaApproximationDensityRegressionWidthPerStdDev=0.5, isGradientRetainsLeafNodesOnly=true, toString()=AbstractRandomVariableDifferentiableFactory [randomVariableFactoryForNonDifferentiable=RandomVariableFromArrayFactory [isUseDoublePrecisionFloatingPointImplementation=true]]]]","pass":true,"statements":[{"sl":41},{"sl":43},{"sl":44},{"sl":45},{"sl":49},{"sl":53},{"sl":57},{"sl":58},{"sl":59},{"sl":60},{"sl":61},{"sl":66},{"sl":68},{"sl":69},{"sl":70},{"sl":72},{"sl":73},{"sl":76},{"sl":81},{"sl":86},{"sl":91},{"sl":92},{"sl":93},{"sl":94},{"sl":96},{"sl":101},{"sl":102},{"sl":103},{"sl":104},{"sl":108}]},"test_126":{"methods":[{"sl":40},{"sl":48},{"sl":55},{"sl":64},{"sl":79},{"sl":99}],"name":"testSwaptionSmileCalibration","pass":true,"statements":[{"sl":41},{"sl":43},{"sl":44},{"sl":45},{"sl":49},{"sl":57},{"sl":58},{"sl":59},{"sl":60},{"sl":61},{"sl":66},{"sl":68},{"sl":69},{"sl":70},{"sl":72},{"sl":73},{"sl":76},{"sl":81},{"sl":101},{"sl":102},{"sl":103},{"sl":104},{"sl":108}]},"test_378":{"methods":[{"sl":40},{"sl":48},{"sl":52},{"sl":55},{"sl":64},{"sl":79},{"sl":84},{"sl":89},{"sl":99}],"name":"testSwaptionCalibration[RandomVariableFromArrayFactory [isUseDoublePrecisionFloatingPointImplementation=false]]","pass":true,"statements":[{"sl":41},{"sl":43},{"sl":44},{"sl":45},{"sl":49},{"sl":53},{"sl":57},{"sl":58},{"sl":59},{"sl":60},{"sl":61},{"sl":66},{"sl":68},{"sl":69},{"sl":70},{"sl":72},{"sl":73},{"sl":76},{"sl":81},{"sl":86},{"sl":91},{"sl":92},{"sl":93},{"sl":94},{"sl":96},{"sl":101},{"sl":102},{"sl":103},{"sl":104},{"sl":108}]},"test_528":{"methods":[{"sl":40},{"sl":48},{"sl":52},{"sl":55},{"sl":64},{"sl":79},{"sl":84},{"sl":89},{"sl":99}],"name":"testSwaptionCalibration[RandomVariableFromArrayFactory [isUseDoublePrecisionFloatingPointImplementation=true]]","pass":true,"statements":[{"sl":41},{"sl":43},{"sl":44},{"sl":45},{"sl":49},{"sl":53},{"sl":57},{"sl":58},{"sl":59},{"sl":60},{"sl":61},{"sl":66},{"sl":68},{"sl":69},{"sl":70},{"sl":72},{"sl":73},{"sl":76},{"sl":81},{"sl":86},{"sl":91},{"sl":92},{"sl":93},{"sl":94},{"sl":96},{"sl":101},{"sl":102},{"sl":103},{"sl":104},{"sl":108}]},"test_565":{"methods":[{"sl":40},{"sl":48},{"sl":52},{"sl":55},{"sl":64},{"sl":79},{"sl":84},{"sl":89},{"sl":99}],"name":"testSwaptionCalibration[RandomVariableDifferentiableADFactory [toString()=AbstractRandomVariableDifferentiableFactory [randomVariableFactoryForNonDifferentiable=RandomVariableFromArrayFactory [isUseDoublePrecisionFloatingPointImplementation=true]]]]","pass":true,"statements":[{"sl":41},{"sl":43},{"sl":44},{"sl":45},{"sl":49},{"sl":53},{"sl":57},{"sl":58},{"sl":59},{"sl":60},{"sl":61},{"sl":66},{"sl":68},{"sl":69},{"sl":70},{"sl":72},{"sl":73},{"sl":76},{"sl":81},{"sl":86},{"sl":91},{"sl":92},{"sl":93},{"sl":94},{"sl":96},{"sl":101},{"sl":102},{"sl":103},{"sl":104},{"sl":108}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [378, 528, 100, 126, 565], [378, 528, 100, 126, 565], [], [378, 528, 100, 126, 565], [378, 528, 100, 126, 565], [378, 528, 100, 126, 565], [], [], [378, 528, 100, 126, 565], [378, 528, 100, 126, 565], [], [], [378, 528, 100, 565], [378, 528, 100, 565], [], [378, 528, 100, 126, 565], [], [378, 528, 100, 126, 565], [378, 528, 100, 126, 565], [378, 528, 100, 126, 565], [378, 528, 100, 126, 565], [378, 528, 100, 126, 565], [], [], [378, 528, 100, 126, 565], [], [378, 528, 100, 126, 565], [], [378, 528, 100, 126, 565], [378, 528, 100, 126, 565], [378, 528, 100, 126, 565], [], [378, 528, 100, 126, 565], [378, 528, 100, 126, 565], [], [], [378, 528, 100, 126, 565], [], [], [378, 528, 100, 126, 565], [], [378, 528, 100, 126, 565], [], [], [378, 528, 100, 565], [], [378, 528, 100, 565], [], [], [378, 528, 100, 565], [], [378, 528, 100, 565], [378, 528, 100, 565], [378, 528, 100, 565], [378, 528, 100, 565], [], [378, 528, 100, 565], [], [], [378, 528, 100, 126, 565], [], [378, 528, 100, 126, 565], [378, 528, 100, 126, 565], [378, 528, 100, 126, 565], [378, 528, 100, 126, 565], [], [], [], [378, 528, 100, 126, 565], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], []]